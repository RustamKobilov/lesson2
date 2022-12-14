"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adressesRouter = void 0;
const express_1 = require("express");
const adress = [{ id: 3, title: 'Nezalegnosti 64' }, { id: 2, title: 'Selickaga 11' }];
exports.adressesRouter = (0, express_1.Router)({});
exports.adressesRouter.get('/', (req, res) => {
    res.send(adress);
});
exports.adressesRouter.get('/:id', (req, res) => {
    let adressId = adress.find(p => p.id === +req.params.id);
    if (adressId) {
        res.send(adress);
    }
    else {
        res.send("404 not found!");
    }
});
