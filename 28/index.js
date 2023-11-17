class library{
    constructor(booklist){
        this.booklist = booklist;
        this.issuedBook = {};
    }

    getBookList(){
        this.booklist.forEach(element => {
            console.log(element);
        });
    }

    issueBook(bookname, user){
        
        this.issuedBook[bookname] = user;
    }

    returnBook(bookname){
        delete this.issuedBook[bookname];
    }
}