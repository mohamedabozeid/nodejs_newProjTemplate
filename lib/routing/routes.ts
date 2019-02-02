import { Request, Response } from "express";

import { HomeController } from "../controllers/home.controller";

export class Routes {
  public routes(app): void {
    app.route("/").get((req: Request, res: Response) => {
      res.status(200).send(new HomeController().get());
    });
  }
}
