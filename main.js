let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
    console.log(`${this.title} written by ${this.author} is ${this.pages} pages long and you have ${this.read} it`)
}

function newBook() {
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const readStatus = document.getElementById('readStatus').value
    const objectHolder = new Book(title, author, pages, readStatus);
    addBookToLibrary(objectHolder);
}

function addBookToLibrary(objectHolder) {
    myLibrary.push(objectHolder)
    console.log(myLibrary);
}

function loopBooks() {
    for (var i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i])
    }
}

const testBook = new Book('Harry Potter', 'JK Rowling', '500', 'read')
myLibrary.push(testBook)
console.log(myLibrary[4])
const testBook2 = new Book('Harry d', 'JK', '30', 'read')
myLibrary.push(testBook2)
console.log(myLibrary);



//newBook doesn't return anything, nor does 
//it pass the newly-created book to the addBookToLibrary 
//method. You aren't saying what you want to create from.

// Also, just for the record, why would the Book need to know about the Library? It might make sense to create a Library object, that contains a collection property, perhaps. And that Library might have an add method... that would take the thing to add to its own collection.

// Most of dealing with objects is:

// *  "what does this object need to know to perform properly?" 
// * "how can I communicate or pass this object to others?"