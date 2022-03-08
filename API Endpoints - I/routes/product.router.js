module.exports=(app)=>{
    const product=require("../controllers/product.controller");
    var router=require('express').Router();

    router.get('/',(req,res)=>{prod.getAllProduct(req,res)});
    router.get('/categories',(req,res)=>{prod.getCategories(req,res)});
    router.get('/:id',(req,res)=>{prod.getProductById(req,res)});
    router.post('/addProduct',(req,res)=>{prod.addProduct(req,res)});
    router.put('/updateProduct',(req,res)=>{prod.updateProduct(req,res)});
    router.delete('/delProduct/:id',(req,res)=>{prod.deleteProduct(req,res)});

    app.use('/api/product',router);
}

const prod=require('../controllers/product.controller');