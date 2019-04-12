module.exports=(arg)=>{
    console.log(arg,arg.slice(1))
   if( validator(arg.slice(1))){
    
    const reducer = (accumulator, currentValue) => accumulator / currentValue;
    return arg.reduce(reducer);
   }
   else{
       console.log('cannot div on zero')
   }
};


validator=(arg)=>{
    if (arg.includes(0)) return false;
    return true
}