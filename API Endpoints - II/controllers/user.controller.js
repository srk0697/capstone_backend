
const db=require('../models');
const User=db.user;
exports.signup=(req,res)=>{
  if(!req.body.username || !req.body.password || !req.body.firstName)
    {
        res.status(400).send({message:"Please provide Email/Password"});
        return;
    }

    const filter={email:req.body.email};
    User.findOne(filter,(err,user)=>{
        if(err || user!==null)
        {
            res.status(400).send({message:"User Already Exists... "})
        }
        else
        {
            const test =new User({
              user_id:req.body.user_id,
              firstName:req.body.firstName,
              lastName:req.body.lastName,
              username:req.body.username,
              password:req.body.password,
              email:req.body.email,
              phone_number:req.body.phone_number,
              role:req.body.role            
            });
            test.save()
            .then(data=>{
                res.status(200).send(data);
            })
            .catch(err=>{
                res.status(500).send({message:"Some Error Occured"});
            })
        }
    });
}

exports.login=(req,res)=>{
  if(!req.body.email || !req.body.password)
  {
      res.status(400).send({
          message:"Please Provide Email and Password"
      });
      return;
  }

  const filter={email:req.body.email};
  User.findOne(filter,(err,user)=>{
      if(err)
      {
          res.status(401).send({message:"Internal Error"});
      }
      else if(user===null)
      {
          res.status(401).send({message:"Email Incorrect"});
      }
      else if(req.body.password===user.password)
      {
          user.isloggedIn=true;
          User.findOneAndUpdate(filter,user)
          .then((user)=>{
              res.json({
                  user
              })
      })
      }
      else{
          res.status(401).send({
              message:"password Incorrect"
          });
      }
  })

}

exports.logout=(req,res)=>{

  if(!req.body.user_id)
    {
        res.status(400).send({
            message:"Please Provide ID"
        });
        return;
    }
    
    const update={isloggedIn:false};
    User.findOneAndUpdate(req.body.user_id,update)
    .then(data=>{
        res.json({
            userData:data,
            message:"LoggedOut SucessFully"
        });
    })

    .catch(err=>{
            res.status(500).send(
                {
                    message:error.message || 'Error Occured'
                }
            )
       });


}