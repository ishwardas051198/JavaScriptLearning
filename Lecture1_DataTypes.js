console.log("123");

var a=10;
var a=15
console.log(a);

let b=2;
//let b=3;
console.log(b);

let c;
console.log(c);
var d;
console.log(d);

//const e;(not poddible)

//var can be redeclared and reassigned
//let can not be redeclared but can be reassgined 
//const can not be redecleared and reassigned 



//Data types of values....(7 data types)


//numbers,string,boolean,null,undefined,object ,symbol(advance)

//console log creates space between to variable using comma

var x=2;
var y=3;
console.log(x,y);//(space added)


//concat two string

let i="ishwar"
let j="das";
console.log(i+j);  //one way..

//second way.....(called template litteral)

console.log(`my name is ${i} ${j}`);


//string methods..

let me ="ishwar";

//me=me.toUpperCase();
console.log(me);

console.log(me.indexOf('w'));  //to get the first index of any letter 


let z="     ishwar dasss";
console.log(z.indexOf("ishwar"));

//trim (remove unnecessary white space);
z=z.trim();
console.log(z.indexOf("ishwar"));


//last index of 

console.log(z.lastIndexOf("s"));


console.log(z.includes("Das")); // tell about the string if it exist or not

let k=z.slice(0,3);  //excluding the last element; 0----2
console.log(k);


// split method

let initial="a b c d";

let afterSplit=initial.split(' ');//here we give the split operator 
console.log(afterSplit);



//javescript string is immutable means we can not change the string

let str="ishwar";

str[0]='b';
console.log(str);  //it will not change the string 

// typeof is used to get the type of variable

console .log(typeof str); ///retur string;


//== loose equality(it checks only the value) ===strict equality(it checks type and value)

let m=22;
let n="22";
// console.log(m==n);
// console.log(m===n);

m=null;
n="null";

// console.log(m==n);
// console.log(m===n);

let l=null;
let p;

console.log(l==p);
console.log(l===p);
console.log(typeof null);

//conversion from number to string or string to number

let ab=54;

console.log(ab,typeof ab);

ab=String(ab)

console.log(ab,typeof ab);

ab=Number(ab);

console.log(ab,typeof ab);


let abc="hello";

console.log(Number(abc));  //it gives NaN means not a number

abc=true;
console.log(abc,typeof abc);


//Arrays.....

let dish=["korma","roti","Biryani"];

console.log(dish[0]);

let output=dish.join(','); ///jon every element of array using seprator and default id comma
console.log(output)




//array has indexof to find the element if element is not there it returns -1;


//concat method--

let ele = ["10","11"];

let dish1=dish.concat(ele);

console.log(dish1);

//these method will not modify the existing array the will return the copy of new array
//immutator method
//lentgh property..(different than method);

console.log(dish.length);



//muttater method..

//push method..

dish.push("chicken");

console.log(dish);

//pop method..

dish.pop();
console.log(dish);

//var has no block space until it is not used in the function 
//let has block space menas every new block can initialize new let 

let s1="12";
let s2="13";
console.log(s1.concat(s2));
let s3=14;
console.log(s2+s3);