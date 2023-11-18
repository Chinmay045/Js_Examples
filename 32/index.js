let myBtn = document.getElementById("myBtn");
let content = document.getElementById("content");

function getData() {
    console.log("Started Getdata")
    url = "https://api.github.com/users";
    fetch(url).then((response) => {
        console.log("Inside First then")
        return response.json();
    }).then((data) => {
        console.log("Inside Second then")
        console.log(data);
    })
}

console.log("Before running getdata");
getData();
console.log("After running getdata");