import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routing/routes";

class App {
  public app: express.Application;
  public routing: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    // support application/json type post data
    this.app.use(bodyParser.json());
    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
    // routing
    this.routing.routes(this.app);
  }
}

export default new App().app;
