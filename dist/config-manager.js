"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config = require("config");
class ConfigurationManager {
    constructor() {
        this.init();
    }
    init() {
        this.AppSetting = config.App;
    }
}
exports.ConfigurationManager = ConfigurationManager;
//# sourceMappingURL=config-manager.js.map