package hello

import org.springframework.messaging.handler.annotation.{MessageMapping, SendTo}
import org.springframework.stereotype.Controller

/**
  * Created by jgleason on 8/6/16.
  */
@Controller
class WSController {
  @MessageMapping(Array("/hello"))
  @SendTo(Array("/topic/greetings"))
  def index () = {

  }
}
