//sorting array usig sort method
//by default it is used to sort the string 
//it firstly convert everything into string and then..

let letter=["a","b","e","c","d"];

console.log(letter.sort())

let numbers=[1,2,3,4,-1,-2,-3]//not give the correct output because it works as string

//console.log(numbers.sort())

//to made it possible we need to pass the function

// numbers.sort((a,b)=>{
//     if(a<b)return -1; //any value less than 0
//     if(a>b)return 1;
// })

numbers.sort((a,b)=>{
   return a-b;
})

console.log(numbers)

//slice rertuen the array 
//splice return the deleted element
//push return the length of the array


//date and time
//date object always carry date and time.
// let currentDate=new Date();

// console.log(currentDate) //Sat Jun 24 2023 09:15:20 GMT+0530 (India Standard Time)

// let currentDate=new Date(1924,11,30) // the vlues are yyyy MM dd and the months are 
// //in form of indexes because 0 is jan and 11 is dec
// //we can give date time and second
// console.log(currentDate)


//using the time stamp means integer number represents in "ms" from 1-1-1970

// let currentDate=new Date(0);

// console.log(currentDate) //Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)


// let currentDate=new Date(86400000); //here number is in ms like in a day 86400000 ms are there

// console.log(currentDate)//Fri Jan 02 1970 05:30:00 GMT+0530 (India Standard Time) it increases the one day



let currentDate=new Date().getTime();
console.log(currentDate);//1687578619366 that much milisecond we have shifted



//Advance date and time method

let completedate=new Date();

console.log(completedate.getFullYear())
console.log(completedate.getMonth())

console.log(completedate.getHours())
console.log(completedate.getDay())



//local storage
//in browser we lose our current state data
//store and retrieve data in local storage

console.log(window)
//console.log(localStorage)
//window object is having local storage property


//method of local storage
//set item
//get item
//update item


//set item in local storage

localStorage.setItem("name","ishwar das")
localStorage.setItem("age",24);
console.log(localStorage)


//local storage get items

console.log(localStorage.getItem("name"))

//there is no update just set the item again

//remove item

localStorage.removeItem("age");
console.log(localStorage)

// we can use clear method as well to clear everything

//How to store complex data structure

//ultimately local storage stores the data in string formats



let vehicles=[{"name":"Honda","model":"2009"},{"name":"maruti","model":"2020"}]

let stringFormat=JSON.stringify(vehicles);

localStorage.setItem("vehicles",stringFormat);

let objectFormat=JSON.parse(localStorage.getItem("vehicles"));
console.log(objectFormat)


//Object oriented Programming

//constructor function and the new operator

//with new keyword we can call the constructor

let car=function(color,name){
this.x=color
this.y=name
}

let instance1=new car("pink","ishwar");
console.log(instance1,instance1.x);

//if we want to define the function we do it in prototype because prototype function will
//be available at every method present inside the constructor

car.prototype.functionName=function(){
    console.log("function inside prototype");

}
instance1.functionName();

// we can get the prototype of every method

console.log(car.prototype)

//we can check if instance is prototype of car



//ES6 has classes

class Car{
    constructor(color,name){
        this.color=color
        this.name=name
    }

    engineStart(){
        console.log("engine satrt method");
    }
}

let honda=new Car("blue","honda");

console.log(honda)

//getter and setter method to hide the function 


class Car1{
    constructor(color,name){
        this.color=color
        this.name=name
    }

    engineStart(){
        console.log("engine satrt method");
    }
    get start(){
        console.log("i got started")
    }
    set colorChange(color1){
        this.color=color1

    }
}

let maruti=new Car1();

//now satrt is not a method its an property

maruti.start;

maruti.colorChange="yellow";
console.log(maruti)


//static method 
//need to understand more on this but this method is not on the obejct as this is 
//direclty on the class like below

class cars{
    constructor(){
        console.log("cars object is called");
    }
    static break(){
        console.log("this is used to break the car");

    }
}
let hundai=new cars();
console.log(hundai)
// hundai.break(); its not accessible from object

cars.break();

//inheritance

class hotel{
    constructor(name,city){
        this.name=name
        this.city=city

    }
}
class Rajvi extends hotel{
    constructor(name,city,review){
        super(name,city)//it will go to the parent constructor 

        this.review=review
    }
}

let grandIn=new Rajvi("rajvi","town","best in city");

console.log(grandIn);


//Async Javascript

console.log("1");
console.log("2");

setTimeout(()=>{
    console.log("this is an Async function");
}, 1000)

console.log("3");
console.log("4");


//XMLHTTPrequest object

// let request=new XMLHttpRequest();

// request.addEventListener('readystatechange',()=>{
//     console.log(request,request.readyState);
//     console.log("output data is",request.responseText)
// })

// request.open("get","https://jsonplaceholder.typicode.com/todos");

// request.send();

//callback hell


//there will be chain of callback function means if first callback is success than second 
//will be running and than third


//promise is used to avoid callbacks at certain level

//promise can be different data states


let getSomething=()=>{
    return new Promise((resolve,reject)=>{
        //resolve("success");
        reject("error");
    })
}

getSomething().then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})


//example of promise to handle if everthing is fine or not
//we are goona read data first and if it is success than we are gonns read data1;
let todos=(resource)=>{

    return new Promise((resolve,reject)=>{
    let request=new XMLHttpRequest();

    request.addEventListener("readystatechange",()=>{
        if(request.readyState==4 && request.status==200){
            //let finalOutput=js
            resolve(request.responseText)
        }
        else if(request.readyState==4){
            reject("can not fetech error");
        }

    })

request.open("GET",resource);

request.send();

        
    })
}


todos("data.json").then((data)=>{
    console.log("data file fatched",data);
    todos("data1.json").then((data)=>{
        console.log("data1 file fetched",data);
    }).catch((error)=>{
        console.log("data1 file fatched error",error);
    })
}).catch((error)=>{
    console.log("data file fatched error",error);
})

//an example from my side for async

// console.log("1");
// let res=fetch("data.json");

// console.log(res);
// if(res.status==200)console.log("balle balle")
// else console.log("not balle balle")
// console.log("2");

// fetch("data.json").then((res)=>{
//     if(res.status==200)console.log("balle balle")
// })

//the code is non blocking this is like when want somehing to complete and use and it is 
//non blocking then we can use promise

//Async and Await

//await can be used as a promise means if any function is having Async 
//then this funciton will return the promise
//this is the best way we can call multiple functions withiut then


//example......

let getData=async()=>{

    let data= await fetch("data.json");
    //let data1= data.json();
    console.log(data);
}

//await means it will wait to complete means kind of then


getData();

//we can use try catch as well








