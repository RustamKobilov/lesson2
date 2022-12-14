import {Request, Response, Router} from "express";

const adress = [{id:3,title:'Nezalegnosti 64'},{id:2,title:'Selickaga 11'}]
export const adressesRouter=Router({});


adressesRouter.get('/',(req:Request,res:Response)=>{
    res.send(adress)
})
adressesRouter.get('/:id',(req:Request,res:Response)=> {
    let adressId = adress.find(p =>
        p.id === +req.params.id)
    if (adressId) {
        res.send(adress)
    }else {
        res.send("404 not found!")
    }
})