"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
const product = [{ title: 'tomat' }, { title: 'orange' }];
const adress = [{ title: 'Nezalegnosti 11' }, { title: 'Selickaga 11' }];
app.get('/adress', (req, res) => {
    res.send(adress);
});
app.get('/product', (req, res) => {
    res.send(product);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
