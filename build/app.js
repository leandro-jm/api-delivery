"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var express_1 = __importDefault(require("express"));
var router_1 = require("./router");
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var App = /** @class */ (function () {
    function App() {
        this.server = (0, express_1.default)();
        this.server;
        this.middleware();
        this.router();
        this.swagger();
        this.public();
    }
    App.prototype.middleware = function () {
        this.server.use(express_1.default.json());
    };
    App.prototype.router = function () {
        this.server.use(router_1.router);
    };
    App.prototype.swagger = function () {
        this.server.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(undefined, {
            swaggerOptions: {
                url: "/swagger.json",
            },
        }));
    };
    App.prototype.public = function () {
        this.server.use(express_1.default.static("public"));
    };
    return App;
}());
exports.App = App;
