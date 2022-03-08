module.exports=(app)=>{
    const address=require("../controllers/shippingaddress.controller");
    var router=require('express').Router();

    router.post('/createAddress',(req,res)=>{add.createAddress(req,res)});
    router.post('/getAddress',(req,res)=>{add.getAddress(req,res)});

    app.use('/api/address',router);
}

const add=require('../controllers/shippingaddress.controller');