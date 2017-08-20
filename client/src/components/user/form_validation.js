export function adUserValidation(values){
  const  error = {};
  if(!values.name){
    error.name = "Please enter name";
  }
   if(!values.email){
     error.email = "Please enter email";
   }
   if(values.email){
     if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
       error.email = "Please enter valid email";
     }
   }
   if(!values.password){
     error.password = "Please enter password";
   }
   if(!values.confirm_password){
     error.confirm_password = "Please confirm password";
   }
   if(values.confirm_password && values.password){
      if(values.password != values.confirm_password){
        error.confirm_password = "password not matched";
      }
   }
    return error;
}
