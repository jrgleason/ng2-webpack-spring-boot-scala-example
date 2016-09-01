package jgleason.stock;

import jgleason.stock.price.Price;
import org.apache.commons.math3.stat.descriptive.DescriptiveStatistics;
import org.springframework.validation.annotation.Validated;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;

/**
 * Created by jgleason on 8/31/16.
 */
@Validated
public class Stock {

    public String getSymbol() {
        return symbol;
    }
    public void setSymbol(String symbol) {
        this.symbol = symbol;
    }

    public List<Price> getPrices() {
        return prices;
    }

    public void setPrices(List<Price> prices) {
        this.prices = prices;
    }
    public long getNumberOfPrices(){
        if(prices != null){
            return prices.size();
        }
        return 0L;
    }

    public DescriptiveStatistics getDescriptiveStatistics(){
        if(prices != null) {
            DescriptiveStatistics stats = new DescriptiveStatistics();
            for (int i = 0 ; i < prices.size() ; i++) {
                stats.addValue(prices.get(i).getClose());
            }
            return stats;
        }
        else{
            // TODO
            return null;
        }
    }

    @NotNull
    private String symbol;

    @Valid
    private List<Price> prices;
}
