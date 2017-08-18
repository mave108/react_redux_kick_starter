import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

const saltRounds = 10;

const Schema = mongoose.Schema;

//define schema of our model
const userSchema = new Schema({
  email: { type:String, unique:true, lowercase: true },
  password: String
});

//on save hook hash password
userSchema.pre('save', function(next){
  const user = this;
  bcrypt.genSalt(saltRounds, (err, salt) =>{
     if(err) {return next(err);}
     bcrypt.hash(user.password, salt, null, (err, hash) => {
         if(err) {next(err);}
         user.password = hash;
         next();
     })
  });
});

userSchema.methods.comparePassword = function(password, callback){
   bcrypt.compare(password, this.password, function(err, isMatch){
     if(err) { return callback(err);}
     callback(null, isMatch);
   })

}

const userModel = mongoose.model('user', userSchema);
export default userModel;
