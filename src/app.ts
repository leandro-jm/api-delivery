import express from "express";
import { router } from "./router";
import swaggerUi from "swagger-ui-express";

export class App{
    
  public server: express.Application = express();

  constructor(){
    this.server;
    this.middleware();
    this.router();
    this.swagger();
    this.public();
  }

  private middleware(){
    this.server.use(express.json());
  }

  private router(){
    this.server.use(router);
  }

  private swagger(){

    this.server.use("/docs",
                    swaggerUi.serve,
                    swaggerUi.setup(undefined, {
                      swaggerOptions: {
                        url: "/swagger.json",
                      },
    }));
  }

  private public(){
    this.server.use(express.static("public"));
  }
}