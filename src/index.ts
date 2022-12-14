import express,{Request,Response} from "express";
import bodyParser from 'body-parser';
import {productsRouter} from "./routse/products-router";
import {adressesRouter} from "./routse/adresses-router";

const app=express();
const port=3001;

const parserMiddleware=bodyParser({})
app.use(parserMiddleware);

app.use('/product',productsRouter)
app.use('/adress',adressesRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})