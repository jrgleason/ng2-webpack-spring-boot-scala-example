package hello;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * Created by jgleason on 8/16/16.
 */
@Configuration
public class WebConfig extends WebMvcConfigurerAdapter {
    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/").setViewName("forward:/public/webpack/index.html");
        registry.addViewController("/polyfills.js").setViewName("forward:/public/webpack/polyfills.js");
        registry.addViewController("/vendor.js").setViewName("forward:/public/webpack/vendor.js");
        registry.addViewController("/app.js").setViewName("forward:/public/webpack/app.js");
        registry.addViewController("/imgs/statesmall.png").setViewName("forward:/public/imgs/statesmall.png");
    }
}
