//Learning JS!

//alert("Hello World!");
//alert("Welcome to my little website!");
//alert("Continue to see me yap abt my fav games!");

//document.body.style.background = "red";
console.log("Hello, World!");
console.log("My name is Rosan!");

//let game = "BOTW";
//console.log(game);

//game = "TOTK";
//console.log(game);

//console.dir(document.body);
//document.body.innerHTML = "<h1>Hello World!</h1>";
//document.body.style.color = "blue";
//document.body.style.backgroundColor = "yellow"

//page = document.getElementById("sub-title");
//page.append(" I hope you enjoy your time here!");

//getting an element via id
//title = document.getElementById("notFound");
//title.append(" Work in progress!!");

//append vs appendChild
//append: can append elements and strings
//appendChild: can only append elements

//let body = document.body;

//Creating elements
//let div = document.createElement("div"); //only creates a reference to an element, does not add to page
//body.append(div); //adds the element to the html

//adding text to elements
//div.innerText = "Hello World";
//div.innerHTML = "<strong>Hello World!</strong>"; //allows us to add html formatting to a string
//div.textContent = "Hello World 2";

//let strong = document.createElement("strong");
//strong.innerText = "Hello World 2!"; //more secure way to do this
//div.append(strong);

//innerText -> only outputs and displays text as html file would 
//textContent -> outputs all text content includin spacing, indentation, etc, according to how it looks in the html itself

//let body = document.body;
//let div = document.querySelector("div");
//spanHi = document.querySelector("#hi");
//spanBye = document.querySelector("#bye");

//Removing Elements
//spanBye.remove();
//div.append(spanBye);

//console.log(spanHi.title);

//event listeners
//let grandparent = document.querySelector(".grandparent");
//let parent = document.querySelector(".parent");
//let child = document.querySelector(".child");

//first parameter is event type
//second parameter is what to do when event is triggered
//third parameter is options object ->  

//grandparent.addEventListener("click", e => {
    //console.log("Grandparent");
//})

//parent.addEventListener("click", e => {
    //console.log("Parent");
//})

//child.addEventListener("click", e => {
    //console.log("Child");
//})

//document.addEventListener("click", e => {
    //console.log("Document");
    //e.stopPropagation();
//})
