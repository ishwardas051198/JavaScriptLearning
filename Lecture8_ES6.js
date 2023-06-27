//destructring 
let array=[1,23,4,5];

let [x,y,z,w]=array;

console.log(x,y,z,w)

//if you want skip middle two

let[a,,,b]=array

console.log(a,b);

//swap using destructring 

// let d=1;
// let c=2;
//console.log(c,d)
let vars=[1,2]
let [d,c]=vars
console.log(c,d)


//destructring in objects

// let {prop1,prop2}=obj


//spread operator or unpacking 

let arr=[1,2,3,4,5];

let newArr=[...arr]
console.log(newArr)//this will create the new copy only as it does not reference the same array
//means changes made to to newArr will not reflect to arr

let newArr1=[9,10,...arr]
console.log(newArr1)

//we can parint the array as well without comma like we do using console

console.log(...arr)

//we can use the same in string as well

let s="ishwar das";
console.log(...s)




//Rest Paramter or pattern and it is reverse of spread 

//syntex of rest Get elements and packed them into array
//use in LHS

let [k,j,...rest]=arr;//here k and j will get the first two values and rest will get the array

console.log(rest);

let a1=null
console.log(typeof a1);
let a2=undefined;
console.log(typeof a2);

if(a1==a2)console.log("abc")


//shortcircuit in operator 

//nullish coalesing for null and undefined 
let ac=undefined;

let ab=ac??10;

console.log(ab);//if ac is undefined or null only 10 will be printed

//we have an entries format which can convert the array into key value pair;

//for of loop

for(let item of arr)console.log(item);

for(let item of arr.entries())console.log(item);


//optional chaining 

//if inside the object fields are undefined than it gives error but if we use ? then it will not

let details={
    name:"ishwar",
    age:"26"
}

console.log(details?.place)

let keys=Object.keys(details);
let values=Object.values(details);
console.log(keys);
console.log(values);
let all=Object.entries(details);
console.log(all)

//set data structure

let itemSet=new Set();

itemSet.add(1);
itemSet.add(2);
itemSet.add(2);
itemSet.add(3);
console.log(itemSet);
