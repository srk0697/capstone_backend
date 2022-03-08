module.exports=(mongoose)=>{
    const products=mongoose.model("Eproducts",mongoose.Schema({
        P_id:{type:Number},
        available:{type:Number},
        category:{type:String},
        created:{type:Date},
        description:{type:String},
        image_url:{type:String},
        manufacturer:{type:String},
        name:{type:String},
        price:{type:String},
        updated:{type:Date}
    }));
}