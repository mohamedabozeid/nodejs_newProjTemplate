import { HomeController } from "../controllers/home.controller";
import { myContainer } from "../ioc/inversify.config"

export class Routes {
  constructor() {

  }
  public routes(app): void {
    const controller = myContainer.get<HomeController>(HomeController);
    app.route("/").get(controller.get);
  }
}
