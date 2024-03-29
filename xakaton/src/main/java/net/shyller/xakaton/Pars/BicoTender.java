package net.shyller.xakaton.Pars;


import lombok.SneakyThrows;
import net.shyller.xakaton.Entity.Product;
import net.shyller.xakaton.Entity.Tender;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;

import java.util.ArrayList;
import java.util.List;

public class BicoTender {
    @SneakyThrows
    public static List<Tender> pars_by_word(String resp) {
        List<Tender> tenderList = new ArrayList<>();
        Document page = Jsoup.connect("https://www.bicotender.ru/tender/search/?keywordsStrict=0&smartSearch=0&regionPreference=0&keywords=" + resp + "&submit=1").get();
        var elements = page.selectXpath("/html/body/div[3]/div[2]/div[2]/div/div/table/tbody/tr");

        for (var element : elements) {

            var title = element.selectXpath("td[1]/div/div[1]/a").attr("title");
            var discription = " ";
            var link = "https://www.bicotender.ru"+ element.selectXpath("td[1]/div/div[1]/a").attr("href");
            var endDate = element.selectXpath("td[4]/div").select("br").get(1).nextSibling().toString();
            var price = element.selectXpath("td[3]/div/b").text();
            if(price == "") price = "Null";

            Document tenderPage = Jsoup.connect(link).get();
            var products = tenderPage.selectXpath("/html/body/div[3]/div[2]/div[2]/div/div[2]/div[3]/div[1]/div[1]/div[3]/table/tbody/tr"); //почемуто не везде ищет товары, не смог понять почемуу((((

            List<Product> productList = new ArrayList<>();

            int skippedCount = 0;
            for (var prod: products) {
                if (skippedCount < 1) {
                    skippedCount++;
                    continue;
                }

                var id = prod.selectXpath("td[1]").text();
                var name = prod.selectXpath("td[2]").text();
                var value = prod.selectXpath("td[5]").text();
                if(value.equals("-")) value = "0";
                var unit = prod.selectXpath("td[6]").text();

                productList.add(new Product(Integer.parseInt(id), name, Float.parseFloat(value), unit));
            }
            tenderList.add(new Tender(title, discription, endDate, link, productList));
        }
        return tenderList;
    }
}

