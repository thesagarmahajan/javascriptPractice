// DOM Manipulation

// Creating HTML elements
const simpleDiv = document.createElement('div');

// You can set attributes and their values before appending in HTML DOM
simpleDiv.setAttribute("id", "myDiv");

document.body.appendChild(simpleDiv);

// The object must get initialize after appending otherwise it won't work
let mydiv = document.getElementById("myDiv");

mydiv.innerHTML = "<h1>Sagar</h1>";
// mydiv.innerText = "<h1>Sagar</h1>";
// mydiv.append("<h1>Sagar</h1>");