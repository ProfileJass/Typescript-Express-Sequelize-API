"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = exports.userService = exports.UserController = exports.User = void 0;
// Users Microservice Entry Point
var user_model_1 = require("./domain/user.model");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return user_model_1.User; } });
var user_controller_1 = require("./infrastructure/user.controller");
Object.defineProperty(exports, "UserController", { enumerable: true, get: function () { return user_controller_1.UserController; } });
var user_service_1 = require("./application/user.service");
Object.defineProperty(exports, "userService", { enumerable: true, get: function () { return user_service_1.userService; } });
var user_router_1 = require("./infrastructure/user.router");
Object.defineProperty(exports, "userRouter", { enumerable: true, get: function () { return __importDefault(user_router_1).default; } });
//# sourceMappingURL=index.js.map