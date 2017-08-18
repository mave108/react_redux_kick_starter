import config from '../config';
import jwt from 'jwt-simple';
import User from '../models/user';

function createToken(sub){
  const timestamp = new Date().getTime();
  return jwt.encode({sub,iat: timestamp},config.secret);
}

export function signin(req, res, next){
  // user already had their email and password auth'd
  // we just need to give then a token
  res.send({token: createToken(req.user.id)});
}

export function signup(req, res, next) {
  //console.log(req.body);
  const email    = req.body.email;
  const password = req.body.password;

   if(!email || !password){
     return res.status(200).send({error: 'You must provide email and password'});
   }

   // see if user with given email exists
   User.findOne({email},(err, existingUser) =>{
     if(err) {return next(err);}
     //if exists return error
     if(existingUser){
       return res.status(200).send({error: 'Email is in use already'});
     }

     //if user does not exists create new recor
     const user = new User({
       email,
       password
     });
     user.save( (err) => {
        if(err) {next(err);}
        //responde to request indicating success
        res.json({success: true, token: createToken(user.id)});
     });
   });

}
