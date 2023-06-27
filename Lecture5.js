//get the attribute and set the attribute


let anchor=document.querySelector('a');

console.log(anchor.getAttribute('href'));//to get an attribute of an element


//set the attribute
anchor.setAttribute('href','1234567')
console.log(anchor.getAttribute('href'));


//add,remove and replace class

let heading=document.querySelector('h3');
console.log(heading);
heading.classList.add('myClass2');
console.log(heading);

heading.classList.remove('myClass');
console.log(heading);

heading.classList.replace("myClass2","newClass");
console.log(heading);

//parent,children and sibling element

let parentElement=document.querySelector('.content');//parent;
console.log(parentElement)

console.log(parentElement.children)//this will return the html collection and we can not apply
//for each loop on this.


//first convert the html collection to array

console.log(Array.from(parentElement.children));

let arr=Array.from(parentElement.children);

arr.forEach((ele)=>{
    ele.classList.add("generatedClass");
})

console.log(parentElement);






// if we know that child tha how to select parent element

let child=document.querySelector('p');

console.log(child.parentElement);

console.log(child.nextElementSibling);
console.log(child.previousElementSibling);



//event listener

let ul=document.querySelector('ul');
let clickEvent=document.querySelector('.click');
console.log(clickEvent)
clickEvent.addEventListener('click',function(){
console.log("i got clicked")
let li=document.createElement('li');
li.textContent="item 9";
ul.append(li);
})

let items=document.querySelectorAll('li');

items.forEach((ele)=>{
    ele.addEventListener('click',function(e){
        console.log("item got clicked");
        console.log(e);// e is an event object that is by default passed 
        console.log(e.target)
        e.target.remove();
    }) // which has more proprty like target which tell where it was clicked we get during eventlistener
})

//Bubbling and delegation

//here if event is there at li than it will becalled at ul level and than body level

// if we make listener on Li and ul and will click on Li then li prints and listener will go to li

ul.addEventListener('click',function(){
    console.log("ul called");
})

//copy event

//if we try to copy anything it will call this event
//'copy'

//mouse move..
//'mousemove'

//Forms Events (submit Form)

let form=document.querySelector('.signUp');
let email=document.querySelector('#email');
let password=document.querySelector('#password');

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log("form submitted")//not stopping to cosole.
    console.log(email.value,password.value);
})


//there is a browser object model called window.
