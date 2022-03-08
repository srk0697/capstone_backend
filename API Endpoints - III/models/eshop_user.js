const {isEmail}=require('validator');
module.exports=(mongoose)=>{
    const User=mongoose.model("EUser",mongoose.Schema(
        {
            user_id:{type:Number},
            firstName:{type:String,require:true},
            lastName:{type:String,require:true},
            username:{type:String,require:true},
            password:{type:String,require:true},
            email:{type:String,unique:true,lowercase:true,trim:true,validate:[isEmail,'Please Enter the valid Email....']},
            phone_number:{type:Number,min:10},
            role:{type:String,default:'user'},
            isloggedIn:{type:Boolean}
        },{timestamps:true}
    ));
    
}