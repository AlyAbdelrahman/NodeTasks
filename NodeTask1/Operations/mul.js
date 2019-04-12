module.exports=(arg)=>{

    const reducer = (accumulator, currentValue) => accumulator * currentValue;
    return arg.reduce(reducer);
};

