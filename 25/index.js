console.log("Helloo");

function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

//Display constructor
function Display() {

}

Display.prototype.add = function (book) {
    console.log("Adding to UI");
    let tableBody = document.getElementById('tableBody');
    let uiString = `   <tr>
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td> 
</tr>`
    tableBody.innerHTML = uiString;
}
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm')
    libraryForm.reset();
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
    let fiction = document.getElementById('author')
    let programming = document.getElementById('programming')
    let cooking = document.getElementById('Cooking')


    if (fiction && fiction.checked) {
        type = fiction.value;
    } else if (programming && programming.checked) {
        type = programming.value;
    } else if (cooking && cooking.checked) {
        type = cooking.value;
    }
    let book = new Book(name, author, type)
    console.log(book);

    let display = new Display();
    display.add(book);
    display.clear();
    e.preventDefault();

}