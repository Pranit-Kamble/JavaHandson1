const Check = (A, B) => 
{
  if(A%10===0 && B%10===0){
    return true;
  }
  else if (A%10!==0 && B%10!==0){
    return false;
  }
  else if (A%10===0 || B%10===0)
  return true;
  
  
};

console.log(Check(12,20))