

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {
    console.log("you have clicked the FetchButton");
    const xhr = new XMLHttpRequest();

    xhr.open("GET", 'harry.txt', true);

    xhr.onprogress = function(){
        console.log('On progress');
    }

    xhr.onload = function() {
        console.log(this.responseText);
    }
}