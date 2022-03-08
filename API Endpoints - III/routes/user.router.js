
module.exports=(app)=>{

    const user=require("../controllers/user.controller");
    var router=require('express').Router();

    router.post('/signup',(req,res)=>{usr.signup(req,res)});
    router.post('/login',(req,res)=>{usr.login(req,res)});
    router.post('/logout',(req,res)=>{usr.logout(req,res)});

    app.use('/api/user',router);
}

const usr=require('../controllers/user.controller');