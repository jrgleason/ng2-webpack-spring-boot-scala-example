package hello;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class HelloController {

    @RequestMapping(value="/hello")
    public String index() {
        Test test = new Test();
        return "Greetings from Spring Boot!";
    }

}