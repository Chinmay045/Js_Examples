console.log("Helloo");

function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

//Add submit event listener to libraryForm

let libraryForm = document.getElementById('libraryForm')
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit() {
    console.log("You have submited Library Form!!");
}