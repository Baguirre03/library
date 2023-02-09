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
        let cards = document.querySelector('.cards')
        var newDiv = document.createElement('div')
        newDiv.id = 'card'+i;
        newDiv.classList = 'bookInfo'
        var newBook = `${myLibrary[i].title} ${myLibrary[i].author} ${myLibrary[i].pages} ${myLibrary[i].read}`
        newDiv.textContent = newBook
        console.log(myLibrary[i].title)
        cards.appendChild(newDiv)
    }
}


const testBook = new Book('Harry Potter', 'JK Rowling', '500', 'read')
myLibrary.push(testBook)
const testBook2 = new Book('Harry d', 'JK', '30', 'read')
myLibrary.push(testBook2)
console.log(myLibrary);
