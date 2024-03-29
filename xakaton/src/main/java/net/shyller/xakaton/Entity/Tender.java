package net.shyller.xakaton.Entity;

import java.util.List;

public class Tender {
    private String title;
    private String description;
    private String endDate;
    private String link;
    private List<Product> products;
    private String price;

    // Конструктор класса
    public Tender(String title, String description, String endDate, String link, List<Product> products, String price) {
        this.title = title;
        this.description = description;
        this.endDate = endDate;
        this.link = link;
        this.price = price;
        this.products = products;
    }

    // Конструктор класса с дефолтным значением для price
    public Tender(String title, String description, String endDate, String link, List<Product> products) {
        this.title = title;
        this.description = description;
        this.endDate = endDate;
        this.link = link;
        this.price = "Null";
        this.products = products;
    }


    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "Tender{" +
                "title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", endDate='" + endDate + '\'' +
                ", link='" + link + '\'' +
                ", price='" + price + '\'' +
                ", products=" + products +
                '}';
    }
}
