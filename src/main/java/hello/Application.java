package hello;

import java.io.IOException;
import java.nio.ByteOrder;
import java.util.Arrays;
import java.util.Locale;
import java.util.Properties;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.support.ResourceBundleMessageSource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;

@SpringBootApplication
public class Application {

    @Autowired
    private ResourceLoader resourceLoader;

    private static Logger logger = LoggerFactory.getLogger(Application.class);

    public static void main(String[] args) {
        if (!ByteOrder.nativeOrder().equals(ByteOrder.LITTLE_ENDIAN)) {
            throw new IllegalArgumentException("We require little endian byte order");
        }
        ApplicationContext ctx = SpringApplication.run(Application.class, args);

        System.out.println("Let's inspect the beans provided by Spring Boot:");

        String[] beanNames = ctx.getBeanDefinitionNames();
        Arrays.sort(beanNames);
        for (String beanName : beanNames) {
            System.out.println(beanName);
        }
    }
    protected static void copyToSystemProperties(String propertyFile) {
        Properties props = new Properties();
        try {
            props.load(Application.class.getClassLoader().getResourceAsStream(propertyFile));
            System.getProperties().putAll(props);
        } catch (IOException e) {
            logger.error("Failed to read property file " + propertyFile, e);
        }
    }
//    @Bean
//    public LocaleResolver localeResolver() {
//        SessionLocaleResolver slr = new SessionLocaleResolver();
//        slr.setDefaultLocale(Locale.US); // Set default Locale as US
//        return slr;
//    }
//
//    @Bean
//    public ResourceBundleMessageSource messageSource() {
//        ResourceBundleMessageSource source = new ResourceBundleMessageSource();
//        source.setBasenames("i18n/messages");  // name of the resource bundle
//        source.setUseCodeAsDefaultMessage(true);
//        return source;
//    }

}