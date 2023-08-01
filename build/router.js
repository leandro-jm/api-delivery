"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var HelloController_1 = __importDefault(require("./useCase/hello/HelloController"));
var router = (0, express_1.Router)();
exports.router = router;
//Routes
router.get("/", function (request, response) {
    var controller = new HelloController_1.default();
    return response.send(controller.home());
});
