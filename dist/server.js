"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const job_routes_1 = __importDefault(require("./src/routes/job.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
const PORT = 3000;
const MONGO_URL = process.env.MONGO_URL;
app.get('/', (request, response) => {
    response.send("Hello There");
});
app.use('/api/jobs', job_routes_1.default);
mongoose_1.default.connect(MONGO_URL).then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch((err) => console.log("Failed to connect to database", err));
