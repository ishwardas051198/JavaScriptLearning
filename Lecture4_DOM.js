//javascript DOM(document object model)
//created by the browser as the html load into the browser
//browser create of object of html called "document object"
//tree like structure 

console.log(document.URL);
console.log(document.querySelector('p'));
console.log(document.querySelectorAll('p'));
console.log(document.querySelector('.myClass'));
console.log(document.querySelector('#coders'));

//first we do selection and than we do modification



//query selector get first element
//queryselectorAll get all element  

//to select an element we have other option too for 
//selecting the element


//get element by tag name which will return the collection and we can
//not apply the for each loop
//modern is querySelector
console.log(document.getElementsByTagName('p'));
console.log(document.getElementById('coders'));
console.log(document.getElementsByClassName('myClass'));


//now will learn about the updating the DOM

//innerText..
//this is used to modify the text and it is only a plain text

let element=document.querySelector('.myClass');

element.innerText="124";
console.log(document)


