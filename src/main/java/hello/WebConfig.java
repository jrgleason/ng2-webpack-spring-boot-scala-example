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
        registry.addViewController("/").setViewName("forward:/public/index.html");
        registry.addViewController("/polyfills.js").setViewName("forward:/public/polyfills.js");
        registry.addViewController("/vendor.js").setViewName("forward:/public/vendor.js");
        registry.addViewController("/app.js").setViewName("forward:/public/app.js");
        registry.addViewController("/img/statesmall.png").setViewName("forward:/public/imgs/statesmall.png");
    }
}
