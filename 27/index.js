

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {
    console.log("you have clicked the FetchButton");
    const xhr = new XMLHttpRequest();

    xhr.open("POST", "https://dummy.restapiexample.com/api/v1/create", true);

    xhr.onprogress = function () {
        console.log('On progress');
    }

    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);
        }
        else {
            console.error("Some error ooccured");
        }
    }

    xhr.onreadystatechange = function () {
        console.log("Ready state is ", xhr.readyState);
    }
    xhr.send();

    console.log("We are done");
}