const Schema=require('mongoose').Schema
module.exports=(mongoose)=>{
    const Ship=mongoose.model("Shipping",mongoose.Schema({
        S_id:{type:Number},
        city:{type:String},
        landmark:{type:String},
        name:{type:String},
        state:{type:String},
        street:{type:String},
        contactNo:{type:Number,minLength:[10,'Invalid contact number']},
        zipcode:{type:Number,minLength:[6,'Invalid zip code']},
        u_id:{type:Schema.Types.ObjectId}
    }))
}