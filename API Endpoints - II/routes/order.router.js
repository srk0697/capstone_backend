module.exports=(app)=>{
    const order=require("../controllers/order.controller");
    var router=require('express').Router();

    router.get('/createorder',(req,res)=>{ord.createorder(req,res)});

    app.use("/api/order",router);
}


const ord=require('../controllers/order.controller');