"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const home_controller_1 = require("../controllers/home.controller");
const inversify_config_1 = require("../ioc/inversify.config");
class Routes {
    constructor() {
    }
    routes(app) {
        const controller = inversify_config_1.myContainer.get(home_controller_1.HomeController);
        app.route("/").get(controller.get);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map