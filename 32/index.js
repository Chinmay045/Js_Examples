let myBtn = document.getElementById("myBtn");
let content = document.getElementById("content");

function getData() {
    url = "harry.txt";
    fetch(url).then((response) => {
        return response.text();
    }).then((data) => {
        console.log(data);
    })
}

getData();