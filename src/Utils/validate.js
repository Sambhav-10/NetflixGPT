export const CheckValidate = (email,password)=>{

    // please make sure use strict email cha
const Email = /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/.test(email);
const Password = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\S+$).{8,20}$/.test(password);

if(!Email) return "Email is not valid"
if(!Password) return "Password is not valid"

return null

}