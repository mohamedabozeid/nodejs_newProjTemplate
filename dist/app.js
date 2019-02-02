"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const routes_1 = require("./routing/routes");
class App {
    constructor() {
        this.routing = new routes_1.Routes();
        this.app = express();
        this.config();
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // routing
        this.routing.routes(this.app);
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map