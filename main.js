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
    for (i = 0; i < myLibrary.length; i++) {
        let cardsContainer = document.querySelector('.cardsContainer')
        let card = document.createElement('div')

        let titleInfo = document.createElement('div')
        titleInfo.textContent = myLibrary[i].title
        titleInfo.classList.add('title')

        let authorInfo = document.createElement('div')
        authorInfo.textContent = myLibrary[i].author
        authorInfo.classList.add('author')

        let pageInfo = document.createElement('div')
        pageInfo.textContent = myLibrary[i].pages
        pageInfo.classList.add('author')

        let readInfo = document.createElement('div')
        readInfo.textContent = myLibrary[i].read
        readInfo.classList.add('readInfo')

        cardsContainer.appendChild(card)
        card.classList.add('card')
        card.appendChild(titleInfo);
        card.appendChild(authorInfo)
        card.appendChild(pageInfo)
        card.appendChild(readInfo)
    }
}

const testBook = new Book('Harry Potter', 'JK Rowling', '500', 'read')
myLibrary.push(testBook)
const testBook2 = new Book('Harry d', 'JK', '30', 'read')
myLibrary.push(testBook2)
console.log(myLibrary);
