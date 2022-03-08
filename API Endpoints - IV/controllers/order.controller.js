const db=require('../models');
const Order=db.order;

exports.createorder=(req,res)=>{
    if(!req.body.O_id)
    {
        res.status(400).send({
            message:'Please provide order Id..'
        })
        return;
    }

    if(req.body.isLoggedIn!=='true')
    {
        res.status(400).send({
            message:'Please Login first'
        })
        return;
    }

    const ord= new Order({
        O_id:req.body.O_id,
        amount:req.body.amount,
        order_date:req.body.order_date,
        shipping_address:req.body.shipping_address,
        product_id:req.body.product_id,
        user_id:req.body.user_id
    })

    ord.save()
    .then(data=>{
        res.status(200).send({
            OrderData:data
        })
    })
    .catch(err=>{
        res.status(400).send({
            message:err.message || 'Error Ocurred'
        })
    })

}