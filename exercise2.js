var args = process.argv;

var increment = 0;

for(var x = 2; x <args.length; x++){
    increment += Number(args[x]);
}

console.log(increment);