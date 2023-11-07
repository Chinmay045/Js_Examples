console.log("Hello");

let element = document.createElement('li');
element.className = "childUll";
element.id = 'createdLi';
element.setAttribute('title', 'mytitle')
element.innerHTML = '<p><b>hello</b></p>'
console.log(element);
console.log(element);

// let text = document.createTextNode("I am a text node");
// element.appendChild(text);

let ul = document.querySelector('ul.this');
ul.appendChild(element);
console.log(ul);

let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
let tnode = document.createTextNode("this is Node2");
elem2.appendChild(tnode);
console.log(elem2);
// console.log(tnode);
element.replaceWith(elem2);

let myul = document.getElementById('myul');
myul.replaceChild(element, document.getElementById('fui'));
console.log(myul);

myul.removeChild(document.getElementById('lui'));

let elemenT = document.createElement('h1');
elemenT.innerHTML = "Go to code with harry"
// Create an a element (link)
let link = document.createElement('a');
link.href = 'https://www.codewithharry.com'; // Replace 'https://example.com' with the URL you want

// Create an h1 element
let Element = document.createElement('h3');
Element.innerHTML = "Go to code with harry";

// Append the h1 element to the a element
link.appendChild(Element);

// Append the a element to the document's body
document.body.appendChild(link);
 
console.log(elemenT);