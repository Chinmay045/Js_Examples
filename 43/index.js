console.log("Hello");
//hide paerameters box initially
let parametersBox = document.getElementById("parametersBox");
parametersBox.style.display = "none";

//if the user clicks on params, hide the json box
let paramsRadio = document.getElementById("paramsRadio");
paramsRadio.addEventListener("click", () => {
    document.getElementById("requestJsonBox").style.display = "none";
    document.getElementById("parametersBox").style.display = "block";

})
let jsonRadio = document.getElementById("jsonRadio");
jsonRadio.addEventListener("click", () => {
    document.getElementById("requestJsonBox").style.display = "block";
    document.getElementById("parametersBox").style.display = "none";
})

//if user clicks the json box , hide the params box
