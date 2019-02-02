"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const home_controller_1 = require("../controllers/home.controller");
class Routes {
    routes(app) {
        app.route("/").get((req, res) => {
            res.status(200).send(new home_controller_1.HomeController().get());
        });
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map