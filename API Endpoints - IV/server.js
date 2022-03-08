const express=require("express");
bodyparser=require('body-parser');
const app=express();
const port=8080;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.status(200).json({
        message:"Welcome to E-Shopping"
    });
});


const db=require("./models/index");
require("./routes/user.router")(app);
require("./routes/product.router")(app);
require("./routes/order.router")(app);
require("./routes/address.router")(app);



db.mongoose.connect(db.url,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{console.log("Database Connected")})
.catch((err)=>{console.log(err)});

app.listen(port,()=>{console.log(`Server running on ${port}`)});