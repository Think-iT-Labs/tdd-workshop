export const passwordValidator = (password:string )=> { 

  const numberRegex = /\d/g;
  if(password.length <8) 
  return {
    isValid: false,
    errors : ["Password must be at least 8 characters"]
  }
  else 
  { 
   const numbers=  password.match(numberRegex)
   if(numbers && numbers?.length <  2 ) { 
    return {
      isValid: false,
      errors : ["The password must contain at least 2 numbers"]
    }
   }
  }
return {
  isValid: true,
  errors:[]
} 
}
