const db=require('../models');
const Address=db.address;

exports.createAddress=(req,res)=>{

    if(!req.body.role|| !req.body.S_id || !req.body.city)
    {
        res.status(400).send({
            message:'Please Provide cityname role S_id'
        });
        return;
    }
    
    if(req.body.isLoggedIn!='true')
    {
        res.status(400).send({
            message:'please Login First...'
        });
        return;
    }

    const addrs=new Address({
        S_id:req.body.S_id,
        city:req.body.city,
        landmark:req.body.landmark,
        name:req.body.name,
        state:req.body.state,
        street:req.body.street,
        contactNo:req.body.contactNo,
        zipcode:req.body.zipcode,
        u_id:req.body.u_id
    })

    addrs.save()
   .then(data=>{
       res.status(200).send({
           course:data,
           message:"Address created success..."
       });
   })
   .catch(err=>{
       res.status(500).send({
           message:err.message || "Some Error Occured..."
       });
   })

}

exports.getAddress=(req,res)=>{

    if(!req.body.S_id)
    {
        res.status(400).send({
            message:'Please provid id...'
        });
    }

    Address.find({S_id:req.body.S_id})
    .then(data=>{
        res.status(200).send({
            AddData:data
        })
    })

    .catch(err=>{
        res.status(400).send({
            message:err.message || 'Some error ocurred..'
        })
    })
    
}