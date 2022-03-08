const db=require('../models');
const Product=db.product;

exports.getAllProduct=(req,res)=>{
    Product.find({})
    .then(data=>{
        res.status(200).send({
            courses:data
        });
    })
    .catch(err=>{
        res.status(500).send({
            message:"Error Occurred..."
        });
    })
}

exports.getCategories=(req,res)=>{
const category=req.params.category;
var filter={category:{$regex:new RegExp(category),$options:i}}
Product.find(filter)
.then(data=>{
    res.status(200).send({
        Product_Category:data,
        message:"Categories"
    });
})
.catch(err=>{
    res.status(500).send({
        message:"Error Occured..."
    });
})

}

exports.getProductById=(req,res)=>{

    const id=req.params.id;
    Product.find(id)
    .then(data=>{
        res.status(200).send({
            Product:data,
            message:"Product By ID..."
        });
    })
    .catch(err=>{
        res.status(500).send({
            message:"error Occured.."
        });
    })
}

exports.addProduct=(req,res)=>{
    if(!req.body.role || !req.body.P_id)
   {
       res.status(400).send({
           message:"Title Cannot be empty"
       });
       return;
   }

   if(req.body!=='admin')
   {
       res.status(400).send({
           message:"You are not authorized to access this EndPoint"
       });
       return;
   }

   const prod=new Product({
    P_id:req.body.P_id,
    available:req.body.available,
    category:req.body.category,
    created:req.body.created,
    description:req.body.description,
    image_url:req.body.image_url,
    manufacturer:req.body.manufacturer,
    name:req.body.name,
    price:req.body.price,
    updated:req.body.updated  
   });

   prod.save()
   .then(data=>{
       res.status(200).send({
           Product:data,
           message:"Product added sucessfully..."
       });
   })
   .catch(err=>{
       res.status(500).send({
           message:err.message || "Some Error Occured..."
       });
   })

}

exports.updateProduct=(req,res)=>{
var id=req.params.id;
if(!id)
{
    res.status(400).send({
        message:"Courses Id Required..."
    });
    return;
}

if(!req.body.name)
{
    res.status(500).send({
        message:"Error Occured..."
    });
    return;
}

Product.findOneAndUpdate({_id:id},req.body)
.then(data=>{
    res.status(200).send({
        Product:data,
        message:"Updated sucess"
    });
})
.catch(err=>{
    res.status(500).send({
        message:"error Occured.."
    });
})

}


exports.deleteProduct=(req,res)=>{

    const id=req.params.id;
    Product.findByIdAndDelete(id)
    .then(data=>{
        res.status(200).send({
            Product:data,
            message:"Deleted By ID..."
        });
    })
    .catch(err=>{
        res.status(500).send({
            message:"error Occured.."
        });
    })
}