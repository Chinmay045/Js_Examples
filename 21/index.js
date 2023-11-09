let divElem = document.createElement('div');
let text = document.createTextNode("This is My element. Click to edit it");
divElem.setAttribute('id', 'elem');
divElem.setAttribute('class', 'elem');
divElem.setAttribute('style', 'border:2px solid black;width:154px;  margin:34px; padding:23px');

let container = document.querySelector(".container");
let first = document.getElementById('myFirst');
container.insertBefore(divElem, first)
divElem.appendChild(text);
console.log(divElem, container, first);
divElem.addEventListener('click', function () {
    let length = document.getElementsByClassName('textarea').length;
    if (length == 0) {
        let html = elem.innerHTML;
        divElem.innerHTML = `  <textarea class="form-control" class = "textarea" id="textarea">${html}</textarea>
    `;
    }
})
