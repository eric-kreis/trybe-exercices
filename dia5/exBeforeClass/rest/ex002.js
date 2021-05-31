const sum = (...args) => 
args.reduce((accumulator, current) => 
accumulator + current);

console.log(sum(60, 30, 8, 1, 45));