import {Request, Response, Router} from "express";

const product=[{id:3,title:'tomat'},{id:2,title:'orange'}]
export const productsRouter=Router({});

productsRouter.get('/',(req:Request,res:Response)=>{
    if(req.query.title){
        let searchString=req.query.title.toString()
        res.send(product.filter(p=> p.title.indexOf(searchString)>-1))
    }else{
        res.send(product)
    }

})

productsRouter.get('/:id',(req:Request,res:Response)=>{
    let productId = product.find(p =>
        p.id === +req.params.id)
    if (productId) {
        res.send(productId)
    }else {
        res.send("404 not found!")
    }
})
productsRouter.delete('/:id',(req:Request,res:Response)=>{
    for (let x=0;x<product.length;x++){
        if(product[x].id=== +req.params.id){
            product.splice(x,1);
            res.send(204)
            return;
        }
    }
    res.send(404)
})
productsRouter.post('/',(req:Request,res:Response)=>{
    const newProduct={
        id:+(new Date()),
        title:req.body.title
    }
    product.push(newProduct)
    res.status(201).send(newProduct)
})
productsRouter.put('/:id',(req:Request,res:Response)=>{
    let productId = product.find(p =>
        p.id === +req.params.id)
    if (productId) {
        productId.title=req.body.title
        res.send(productId)
    }else {
        res.send("404 not found!")
    }
})
// productsRouter.get('/:productTitle',(req:Request,res:Response)=> {
//     let productGet = product.find(p =>
//         p.title === req.params.productTitle)
//     if (productGet) {
//         res.send(productGet)
//     }else {
//         res.send("404 not found!")
//     }
// })
