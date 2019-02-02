"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_manager_1 = require("../config-manager");
class HomeController {
    constructor() { }
    get() {
        let configManager = new config_manager_1.ConfigurationManager();
        return {
            name: configManager.AppSetting.Name,
            version: configManager.AppSetting.Version
        };
    }
}
exports.HomeController = HomeController;
//# sourceMappingURL=home.controller.js.map