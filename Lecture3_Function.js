//functions 

//declare

// function functionName(){
// body
// }


//pass a function to variable

// let fun=function(){

// }

// fun();  calling of that function which is anonyms

let invitation= function(name){
    console.log(`welcom ${name}`);
}

invitation("ishwar");


let age=function(birthyear,currentyear=2023){
    return currentyear-birthyear;
}

console.log(age(2020));
console.log(age(2020,2021));


//arrow function..

//write more fast and no need of function keyword and no need of
//paranthesis in case of single parameter and for one line 
//no curly brases  and no return for single line of code.

let invite=name=>`welcome ${name}`
console.log(invite("ishwar Das"));

//passing function as an argument(higher order function example)

let uppercase=function(s){
    return s.toUpperCase();
}
let lowercase=function(s){
    return s.toLowerCase();
}

let convert=function(str,abc){
  return abc(str);
}

console.log(convert("ISHWAR",lowercase));


//Type2 of higher order function where function will be returned

let compliment=function(msg){
    return function(name){
        console.log(`${msg} ${name}`);
    }
}

compliment("you are good guy")("ishwar");

//immidiately invoked function expression (IIFE)

// (function(){
//     console.log("you are ");
// })()//<--- this two bracket is for calling the funcion
(function(name){
    console.log("you are ",name);
})("ishwar")//<--- this two bracket is for calling the funcion
//IIFE<---



//SetTimeOut and setInterval provided by browser
//setTimeOut -- run once after "intervall" of time
//setInterval-- run repeatedly starting after the interval of time 
//then repeating

//setTimeOut Async function 

//setTimeout(fun|code, delay,arg1,arg2);//arg1 and arg2 is argument for 
//callback function

function greet(){
    console.log("hello dosto");

}
function greeting(name){
    console.log("hello",name);
}
setTimeout(greet,2000);
setTimeout(greeting,2000,"ishwar");

//setInterval(fun,delay,arg1,arg2);

//setInterval(greet,2000);


//hoisting means use a variable before declration 
// and this can happen only with var but only declration is hoisted not 
//initialization

console.log(a);
var a;

//objects..

let car={
    color:"black",
    model:"2022"
}
console.log(car);

//access the property one way using the array

console.log(car["model"])//passsing the key as string kind of array
// in this case we can pass the property as dynamc
console.log(car.color);


//delete property of the object

let obj={
    prop1:"val1",
    prop2:"val2"
}
console.log(obj);

delete obj.prop1;
console.log(obj);

//function vs method

//method is a object proprty holding function as value


let person={
    calculate:function(birthyear){

        return 2023-birthyear;

    }
}
console.log(person.calculate(2020));//in terms of object


//this keyword 
//in each method we have access to a special character called this
//this keyword represents the object. calling the method in 
//which this is present
let p={
    firstname:"ishwar",
    email:"ishwar@gamil.com",
    summary:function(){
        console.log(this.firstname,this.email);
    }
}


console.log(p.summary());


