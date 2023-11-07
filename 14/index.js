console.log("Hello");

let element = document.createElement('li');
element.className = "childUll";
element.id = 'createdLi';
element.setAttribute('title', 'mytitle')
element.textContent = 'hello'
console.log(element);

let ul = document.querySelector('ul.this');
ul.appendChild(element);
console.log(ul);