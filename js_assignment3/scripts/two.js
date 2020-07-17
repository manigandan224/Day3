console.log("Os name and version from the user");
let a=prompt("Enter a Os name and Version:");
let uppercase=a.slice(0,1).toUpperCase();
let osname=a.slice(1,7);
let version=a.slice(8,10);
console.log(`The Os name is ${uppercase+osname} and version is ${version}`);