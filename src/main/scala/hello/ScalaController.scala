package hello

import org.springframework.web.bind.annotation.{RequestMapping, RestController}

/**
  * Created by jgleason on 8/6/16.
  */
@RestController
class ScalaController {

  @RequestMapping(Array("/scala"))
  def index () = {
     "Scala controller"
  }
}
