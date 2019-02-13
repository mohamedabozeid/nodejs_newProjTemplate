import { Request, Response } from "express";
import { ConfigurationManager } from "../config-manager";
import { injectable, inject } from "inversify";
import 'reflect-metadata'

@injectable()
export class HomeController {
  constructor() { }

  get(req: Request, res: Response) {
    let configManager = new ConfigurationManager();

    let result = {
      name: configManager.AppSetting.Name,
      version: configManager.AppSetting.Version
    };

    return res.status(200).send(result);
  }
}
