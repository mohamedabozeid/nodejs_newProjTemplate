import { AppSetting } from "models";
import * as config from 'config';


export class ConfigurationManager {
  constructor() {
    this.init();
  }

  public AppSetting: AppSetting;

  private init() {
    this.AppSetting = config.App;
  }
}



