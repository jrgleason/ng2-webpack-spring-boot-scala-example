package jgleason.stock.price;

import javax.validation.constraints.NotNull;

/**
 * Created by jgleason on 8/31/16.
 */
public class Price {



    public double getOpen() {
        return open;
    }

    public void setOpen(double open) {
        this.open = open;
    }

    public double getHigh() {
        return high;
    }

    public void setHigh(double high) {
        this.high = high;
    }

    public double getLow() {
        return low;
    }

    public void setLow(double low) {
        this.low = low;
    }

    public double getClose() {
        return close;
    }

    public void setClose(double close) {
        this.close = close;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    private double open;
    private double high;
    private double low;
    private double close;
    @NotNull
    private String date;
}
