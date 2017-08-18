import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import LocalStrategy from 'passport-local';
import User from '../models/user';
import config from '../config';

//create a local strategy
const localoptions = { usernameField: 'email'};
const localLogin   = new LocalStrategy(localoptions, function(email, password, done){
   User.findOne({email}, function(err, user){
     if(err) { return done(err); }
     if(!user) { return done(null,false); }

     //compare password
     user.comparePassword(password, function(err, isMatch){
       if(err) {return done(err); }
       if(!isMatch) { return done(null, false); }
       if(isMatch) { return done(null, user); }
   });
});
});

//setup options for jwt strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};

//creating jwt strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){
  //see if user id in the payload exists in our database
  //if it does call done with user object
  //otherwise call done without user object
  console.log('require auth',payload);
  User.findById(payload.id, (err, user) => {
    if(err) { return done(err, false); }

    if(user){
      done(null,user);
    }else{
      done(null, false);
    }
  });
});

passport.use(jwtLogin);
passport.use(localLogin);
