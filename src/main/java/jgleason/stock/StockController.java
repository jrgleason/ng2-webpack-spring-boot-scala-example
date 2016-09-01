package jgleason.stock;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import jgleason.stock.price.Price;
import org.apache.commons.math3.stat.descriptive.DescriptiveStatistics;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.ResponseHandler;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by jgleason on 8/31/16.
 */
@RestController
public class StockController {
    private static final String GOOGLE_URL = "https://www.google.com/finance/historical";
    private Gson gson = new Gson();
    @RequestMapping(value = "/stock",
            method = RequestMethod.POST, consumes="application/json")
    public String addStock(@Validated @RequestBody Stock command){
        return command.getSymbol()+ " "+ command.getNumberOfPrices();
    }

    private Stock getStock(String symbol, String exchange) throws IOException, URISyntaxException{
        Stock stock = new Stock();
        stock.setSymbol(symbol);
        CloseableHttpClient httpclient = HttpClients.createDefault();
        try {
            URIBuilder builder = new URIBuilder(GOOGLE_URL);

            builder.addParameter("q", symbol+":"+exchange);

            URI url = new URI(builder.toString());
            HttpGet httpget = new HttpGet(url);

            System.out.println("Executing request " + httpget.getRequestLine());

            // Create a custom response handler
            ResponseHandler<String> responseHandler = new ResponseHandler<String>() {
                @Override
                public String handleResponse(
                        final HttpResponse response) throws ClientProtocolException, IOException {
                    int status = response.getStatusLine().getStatusCode();
                    if (status >= 200 && status < 300) {
                        HttpEntity entity = response.getEntity();
                        return entity != null ? EntityUtils.toString(entity) : null;
                    } else {
                        throw new ClientProtocolException("Unexpected response status: " + status);
                    }
                }
            };
            String responseBody = httpclient.execute(httpget, responseHandler);
            Document doc = Jsoup.parse(responseBody);
            Elements tables = doc.select(".gf-table");
            List<Price> prices = new ArrayList<Price>();
            if(tables.size() == 1){
                Element table = tables.get(0);
                Elements rows = table.getElementsByTag("tr");
                int header = 0;
                for (Element row : rows) {
                    if(header++ != 0) {
                        Elements data = row.getElementsByTag("td");
                        Price price = new Price();
                        price.setDate(data.get(0).text());
                        price.setOpen(Double.parseDouble(data.get(1).text()));
                        price.setHigh(Double.parseDouble(data.get(2).text()));
                        price.setLow(Double.parseDouble(data.get(3).text()));
                        price.setClose(Double.parseDouble(data.get(4).text()));
                        prices.add(price);
                    }
                }
            }
            else{
                throw new IllegalStateException("There was an issue with google's response. We recieved too many tables.");
            }
            stock.setPrices(prices);
            return stock;

        }
        finally {
            httpclient.close();
        }
    }

    @RequestMapping("/stock/quote")
    public String getCurrentQuote(@RequestParam("symbol") String symbol,
                                  @RequestParam("exchange") String exchange) throws IOException, URISyntaxException{
        Stock stock = getStock(symbol, exchange);
        return gson.toJson(stock);
    }
    @RequestMapping("/stock/average/close")
    public double[] getAverageClose(@RequestParam("symbol") String symbol,
                                  @RequestParam("exchange") String exchange) throws IOException, URISyntaxException{
        Stock stock = getStock(symbol, exchange);
        DescriptiveStatistics stats =  stock.getDescriptiveStatistics();
        double[] array = {stats.getMean(), stats.getStandardDeviation(), stats.getVariance()};
        return array;
    }
}
