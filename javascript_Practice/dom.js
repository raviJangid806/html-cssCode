// DOM (document object model)
// when a page is loaded, the browser create a (DOM) of the page.
// here we can access every things of html in javascript ,

//the very important thing to know is DOM manupulation

// their are three ways of DOM manupulation

//1. select with id:
document.getElementById();

//2. select with class
document.getElementsByClassName();

//3. select with tags
document.getElementsByTagName();


//we can get the element by querySelector() just pass the name of class , id or tag
let element = document.querySelector('.myClass'); //name of your id,class,tags anything you want

// for create a element;
let element2 = document.createElement('div'); // here you can pass the name of tags.

