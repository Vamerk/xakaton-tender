package net.shyller.xakaton.Pars;

import java.util.ArrayList;
import java.util.List;
import lombok.SneakyThrows;
import net.shyller.xakaton.Entity.Product;
import net.shyller.xakaton.Entity.Tender;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.stereotype.Service;

@Service
public class TenderPro {

  @SneakyThrows
  public List<Tender> pars_by_word(String resp) {
    List<Tender> tenderList = new ArrayList<>();
    Document page = Jsoup
      .connect(
        "https://www.tender.pro/api/tenders/list?&order=3&good_name=" +
        resp +
        "&tender_type=90&tender_state=1"
      )
      .get();
    var elements = page.selectXpath(
      "/html/body/div[2]/div[6]/div/main/div[3]/div[3]/div/div[2]/div/table/tbody/tr"
    );
    var skippedC = 0;
    for (var element : elements) {
      if (skippedC < 1) {
        skippedC++;
        continue;
      }
      var title = element.selectXpath("td[2]/div[1]/a").text();
      var discription = " ";
      var link =
        "https://www.tender.pro" +
        element.selectXpath("td[2]/div[1]/a").attr("href");
      var endDate = element.selectXpath("td[4]").text();

      Document tenderPage = Jsoup.connect(link).get();
      var products = tenderPage.selectXpath(
        "/html/body/div[2]/main/div[3]/div/div/div/div[3]/div[2]/div"
      );
      if (products.isEmpty()) products = tenderPage.selectXpath("/html/body/div[2]/main/div[3]/div/div/div/div[4]/div[2]/div");


      List<Product> productList = new ArrayList<>();

      int skippedCount = 0;
      for (var prod : products) {
        if (skippedCount < 2) {
          skippedCount++;
          continue;
        }
        var id = prod.selectXpath("div[1]").text();
        var name = prod.selectXpath("div[2]/p[1]/a").text();
        var value = prod.selectXpath("div[3]").text();
        var unit = prod.selectXpath("div[4]").text();

        Product product = new Product(
          Integer.parseInt(id),
          name,
          Float.parseFloat(value),
          unit
        );
        productList.add(product);
      }
      tenderList.add(
        new Tender(title, discription, endDate, link, productList)
      );
    }
    
    return tenderList;
  }

}



