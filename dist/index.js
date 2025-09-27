"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const database_1 = require("./config/database");
const process_1 = __importDefault(require("process"));
const port = 8001;
const startServer = async () => {
    try {
        await (0, database_1.connectDB)();
        app_1.default.listen(port, () => {
            console.log(`🚀 Server is running on http://localhost:${port}`);
        });
    }
    catch (error) {
        console.error('❌ Error al iniciar el servidor:', error);
        process_1.default.exit(1);
    }
};
startServer();
//# sourceMappingURL=index.js.map