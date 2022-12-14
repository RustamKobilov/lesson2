"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRouter = void 0;
const express_1 = require("express");
const product = [{ id: 3, title: 'tomat' }, { id: 2, title: 'orange' }];
exports.productsRouter = (0, express_1.Router)({});
exports.productsRouter.get('/', (req, res) => {
    if (req.query.title) {
        let searchString = req.query.title.toString();
        res.send(product.filter(p => p.title.indexOf(searchString) > -1));
    }
    else {
        res.send(product);
    }
});
exports.productsRouter.get('/:id', (req, res) => {
    let productId = product.find(p => p.id === +req.params.id);
    if (productId) {
        res.send(productId);
    }
    else {
        res.send("404 not found!");
    }
});
exports.productsRouter.delete('/:id', (req, res) => {
    for (let x = 0; x < product.length; x++) {
        if (product[x].id === +req.params.id) {
            product.splice(x, 1);
            res.send(204);
            return;
        }
    }
    res.send(404);
});
exports.productsRouter.post('/', (req, res) => {
    const newProduct = {
        id: +(new Date()),
        title: req.body.title
    };
    product.push(newProduct);
    res.status(201).send(newProduct);
});
exports.productsRouter.put('/:id', (req, res) => {
    let productId = product.find(p => p.id === +req.params.id);
    if (productId) {
        productId.title = req.body.title;
        res.send(productId);
    }
    else {
        res.send("404 not found!");
    }
});
// productsRouter.get('/:productTitle',(req:Request,res:Response)=> {
//     let productGet = product.find(p =>
//         p.title === req.params.productTitle)
//     if (productGet) {
//         res.send(productGet)
//     }else {
//         res.send("404 not found!")
//     }
// })
