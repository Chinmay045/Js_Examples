console.log("Welcome to tutorial 13");

let element = document.getElementById("first");
// element.parentNode;
// element.style.color = 'red';
// element.innerText = "Chinmay is a good boy";
element.innerHTML = '<b>Harry is a good Boy </b>'
// console.log(element);

let sel = document.querySelector('#first');
// sel = document.querySelector(.chile);
 sel = document.querySelector('div');

console.log(sel);

let ele = document.getElementsByClassName('chile');
console.log(ele[3]);
