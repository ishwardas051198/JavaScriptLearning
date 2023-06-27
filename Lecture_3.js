//for each method and methods are available on objects 

let dishes=["biryani","chicken"];

dishes.forEach(function(ele){//use callback function
  console.log(ele);
})

//Math Object it is having multiple methods inside it 

let number=2.33;

console.log(Math.round(number));
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.trunc(number));
console.log(Math.random()*100); //give 1-100 values



//Function 

// we can manually set the value of this keyword using call and apply.


let obj={
    name:"ishwar",
    print:function(){
        console.log(`your name is ${this.name}`);
    }
}
obj.print();

let fun=obj.print;

//fun();//here this is undefined 

//we use call functionality
fun.call(obj);//we need to pass the object as for which object you want to run
//the function to use this.


//we can use apply but we need to send the arguement as array..
//fun.apply(obj,[arg1,arg2]);


//Bind Method

function greet(){
    console.log(`hello ${this.name}`);
}

let user={
    name:"ishwar das"
}

greet();//here this is undefined

// now will bind the user to greet function

let greets=greet.bind(user);

greets();// now this is bind to user object


//pass by value and pass by reference

let arr=[1,2,3,4,5];
let getRef=arr;
//new copy is not created just refernce is there to arr

//if i add anything in getRef this will be added into arr as well

console.log("original",arr);
console.log("copy",getRef);

getRef.push(9);
console.log("***********");
console.log("original",arr);
console.log("copy",getRef);


//we need to pass it as value... using spread operator 

let getValue=[...arr];

//for object

//let newPerson={...person}

getValue.push(100000);

console.log("*********** After pass by value");
console.log("original",arr);
console.log("copy",getValue);


//For in loop this is used for loop and it resturs the each key of the loop

let car={
    name:"honda",
    model:"2022",
    color:"black"
}


for(let key in car){
    console.log(key,car[key]);
}

//for(let num in arr)console.log(num);