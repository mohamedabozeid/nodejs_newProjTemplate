import { AppSetting } from "models";

var config = require("config");

export class ConfigurationManager {
  constructor() {
    this.init();
  }

  public AppSetting: AppSetting;

  private init() {
    this.AppSetting = config.App;
  }
}



