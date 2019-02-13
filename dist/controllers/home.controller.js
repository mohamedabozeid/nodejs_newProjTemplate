"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_manager_1 = require("../config-manager");
const inversify_1 = require("inversify");
require("reflect-metadata");
let HomeController = class HomeController {
    constructor() { }
    get(req, res) {
        let configManager = new config_manager_1.ConfigurationManager();
        let result = {
            name: configManager.AppSetting.Name,
            version: configManager.AppSetting.Version
        };
        return res.status(200).send(result);
    }
};
HomeController = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], HomeController);
exports.HomeController = HomeController;
//# sourceMappingURL=home.controller.js.map