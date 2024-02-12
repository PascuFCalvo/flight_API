"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const diaries_1 = __importDefault(require("./routes/diaries"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); // middleware que transforma la req.body en JSON
const PORT = 3000;
app.get("/ping", (_req, res) => {
    //el guion bajo es para evitar el warning de unused variable
    console.log("funciona a fecha de " + new Date().toLocaleDateString());
    res.send("pong");
});
app.use("/api/diaries", diaries_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
