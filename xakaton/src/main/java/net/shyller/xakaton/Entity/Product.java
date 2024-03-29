package net.shyller.xakaton.Entity;

public class Product {
    private int id;
    private String name;
    private float value;
    private String unit;

    public Product(int id, String name, float value, String unit) {
        this.id = id;
        this.name = name;
        this.value = value;
        this.unit = unit;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public float getValue() {
        return value;
    }

    public void setValue(float value) {
        this.value = value;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", value=" + value +
                ", unit='" + unit + '\'' +
                '}';
    }
}