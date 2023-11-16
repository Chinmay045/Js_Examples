console.log("Helloo");

function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

//Add submit event listener to libraryForm

let libraryForm = document.getElementById('libraryForm')
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log("You have submited Library Form!!");
    let name = document.getElementById('bookname').value;
    let author = document.getElementById('authorname').value;
    // let type = document.getElementById('type').value;
    let type;
    let fiction = document.getElementById('fiction')
    let programming = document.getElementById('programming')
    let cooking = document.getElementById('cooking')


    if (fiction && fiction.checked) {
        type = fiction.value;
    } else if (programming && programming.checked) {
        type = programming.value;
    } else if (cooking && cooking.checked) {
        type = cooking.value;
    }
    let book = new Book(name, author, type)
    console.log(book);
    e.preventDefault();

}