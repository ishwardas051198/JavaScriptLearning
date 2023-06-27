//reverse the array

let letters=["a","b","c","d"];

let rev=letters.reverse()//it is mutating method and it changes the original array 

console.log(rev);
console.log(letters);//changes the original array.


//arrays concat method

let num=[1,2,3,4,5]

let res=num.concat(letters);//it will not affect the original array as it creates the new copy.


console.log(res);

//join method

// we can join the element of an array by a seprator and default seperator will be comma.

let joined=num.join();// default seprator  will be ,
let joined1=num.join('-'); //here we gave the seprator
console.log(joined);
console.log(joined1);//it will change tht data type to string and non mutating and creates the copy only 


//slice method
//it is used to extract some part of the array
//array.slice(satrtIndex,lastIndex(excluded))

let numbers=[1,2,3,4,5,6];

let output=numbers.slice(1,5);

console.log(output);

//we can give  one index also form which it will start and take up to end of the array.


//splice method

//used to delete or add value in the array and it is muttating array 
// array.splice(index,deletevalue,addValue)
//it changes the original array and returns the array with deleted elements

//1st value index and 2nd value is how many numbers needs to be deleted and 3rd number is 
//which number to add


let inp=[1,2,3,4,5,6];
let out=inp.splice(1,2,-2);
console.log(out);
console.log(inp);


//we can add multiple values

//at Method

let array=[1,2,3,4]

console.log(array[0]);
console.log(array.at(0));

// at is used to access the last element as well

console.log(array.at(-1));


//higher order function menas the function who calls another function

//map function returns the new array

let salaries=[1000,2000,3000,4000]

let newSalaries=salaries.map(salary=>{
    let increment=salary/2;
    return salary+increment;
})

console.log(newSalaries)


//filter function is used to filter out the values from the array interms of array only.

let nums=[1,2,3,4,5];
let out1=nums.filter(value=>{
    if(value ==1 || value==2)return true;
})

console.log(out1);


//reduce method.. used to do the sum of the array
//array.reduce((total,currentvalue),initialvalue);

let out2=nums.reduce((total,value)=>{
return total+value
},10)
console.log(out2);


//HigherOrder methods

let array1=[1,2,3,4,5];

let out4=array1.find((value)=>{
    return value==6;
})
console.log(out4);

//used for complex objects

//FindIndex Method

//it gives the index if condition matches and can return the first index if first condition matches
//if no condition matches then return -1

let ages=[21,23,24];

let res1=ages.findIndex(age=>{
    return age==24
})
console.log(res1);

//we can use indexof as well but it can not work for other condition


//some and every method

//some returns true if any element passes the test
//every return true if all element passes the test

let array5=[1,2,3,4]
let output1=array5.some(value=>{
    return value>=3
})
let output2=array5.every(value=>{
    return value>=1
})
console.log(output1,output2)

//Flat method 
// it is used to create a new array if any array is having subarray presents 

let answer=[1,2,3,[4,5]];

let answerRes=answer.flat();//by default it does the 1 level flatting 
console.log(answerRes)
//--------

let answer1=[1,2,3,[4,5,[6,7]]];

let answerRes1=answer1.flat();//by default it does the 1 level flatting 
console.log(answerRes1)

//for 2 level flatting

console.log(answer1.flat(2))

//FlatMap Method


let items=[{name:"TV",type:"electrical"},{name:"fridge",type:"electric"}];

let oneItem=items.map(item=>{
    if(item.name=="TV"){
        return [item,{ name:"bike",type:"electronics"}];
    }
    else return [item];
})
console.log(oneItem);
let oneItem1=items.flatMap(item=>{
    if(item.name=="TV"){
        return [item,{ name:"bike",type:"electronics"}];
    }
    else return [item];
})
console.log(oneItem1);