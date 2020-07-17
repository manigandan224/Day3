console.log("Even or Odd using function");
let a=function (){
    let result=Number(prompt("Enter a number:"));
    if(result%2===0){
        console.log(`The number entered is ${result} and Number is Even`);
    }
    else{
        console.log(`The number entered is ${result} and Number is Odd`);
    }
}
a();