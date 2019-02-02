import { ConfigurationManager } from "../config-manager";

export class HomeController {
  constructor() {}

  get() {
    let configManager = new ConfigurationManager();

    return {
      name: configManager.AppSetting.Name,
      version: configManager.AppSetting.Version
    };
  }
}
