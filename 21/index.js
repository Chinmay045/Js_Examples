let divElem = document.createElement('div');

let val = localStorage.getItem('text');
let text;
if(val == null){
    text = document.createTextNode("This is My element. Click to edit it");
}
else{
    text = document.createTextNode(val);
}
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

    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur', function(){
        elem.innerHTML = textarea.value;
        localStorage.setItem('text',elem.innerHTML)
    });
})
