const dbconfig=require("../config/db.config");
const mongoose=require("mongoose");
const db={}
db.mongoose=mongoose;
db.url=dbconfig.url;

db.user=require("./eshop_user")(mongoose);
db.order=require("./eshop_order")(mongoose);
db.address=require("./eshop_shipping_address")(mongoose);
db.product=require("./eshop_product")(mongoose);

module.exports=db;