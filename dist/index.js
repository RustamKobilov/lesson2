"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const products_router_1 = require("./routse/products-router");
const adresses_router_1 = require("./routse/adresses-router");
const app = (0, express_1.default)();
const port = 3001;
const parserMiddleware = (0, body_parser_1.default)({});
app.use(parserMiddleware);
app.use('/product', products_router_1.productsRouter);
app.use('/adress', adresses_router_1.adressesRouter);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
