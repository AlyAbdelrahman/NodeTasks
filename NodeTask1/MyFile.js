const yargs = require('yargs');

let args = yargs.array('mul').argv
let Numbers = args.mul;
//  debugger;

// console.log(argv)

// const params =process.argv.slice(2);
// // console.log(params)
const operations = require('./Operations')

 
// const CurrentOperationIndex = params.findIndex(item=> item.startsWith("--"));
// const [CurrentOperation]= params.splice(CurrentOperationIndex,1).map(f=>f.substring(2));
// const Numbers = params.map(e=>Number(e));
let Mathfunc = operations['mul']
// //  params.splice(CurrentOperationIndex,1);
console.log(Mathfunc(Numbers))
// console.log(args.add);
