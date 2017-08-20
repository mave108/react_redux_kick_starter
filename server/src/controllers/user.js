import config from '../config';
import User from '../models/user';

export function getUser(req, res, next) {
  console.log("from get user",req.user);
  return res.status(200).json({ name: req.user.name, email:req.user.email, uid: req.user._id });
}

export function createUser(req, res, next) {
  //console.log(req.body);
  const email    = req.body.email;
  const password = req.body.password;
  const name     = req.body.name;
   if(!email){
     return res.status(200).send({success: false,msg: 'You must provide email'});
   }
   if(!password){
     return res.status(200).send({success: false,msg: 'You must provide password'});
   }
   if(!name){
     return res.status(200).send({success: false,msg: 'You must provide name'});
   }

   // see if user with given email exists
   User.findOne({email},(err, existingUser) =>{
     if(err) {return next(err);}
     //if exists return error
     if(existingUser){
       return res.status(200).send({success: false,msg: 'Email already in use'});
     }

     //if user does not exists create new recor
     const user = new User({
       email,
       password,
       name,
       status:1,
       created: new Date()
     });
     user.save( (err) => {
        if(err) {next(err);}
        //responde to request indicating success
        res.json({success: true, msg:'User has been created successfully'});
     });
   });

}
