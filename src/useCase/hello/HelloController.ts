import { doesNotThrow } from "assert";
import { Get, Route } from "tsoa";

interface HelloResponse {
    message: string;
  }
  
@Route("hello")
export default class HelloController {

    @Get("/")
    public home(): HelloResponse {
        return {
            message: "App template Node, Express, TypeScript, DotEnv COnfig, API and Swagger",
        };
    }
}



