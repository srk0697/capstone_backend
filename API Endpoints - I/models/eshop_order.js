const Schema=require('mongoose').Schema;
module.exports=(mongoose)=>{
    const order=mongoose.model("Order",mongoose.Schema({
        O_id:{type:Number},
        amount:{type:Number},
        order_date:{type:Date,default:Date.now},
        shipping_address:{type:Schema.Types.ObjectId},
        product_id:{type:Schema.Types.ObjectId},
        user_id:{type:Schema.Types.ObjectId}
    },{timestamps:true}));
}