let myLibrary = [];
let cardsContainer = document.querySelector('.cardsContainer')


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
    const emptyInputs = (title === "" && author === "" && pages === "" && readStatus === "")

    if (emptyInputs) {
        alert('fill in all the info!')
        return
    } else {
    const objectHolder = new Book(title, author, pages, readStatus);
    addBookToLibrary(objectHolder);
    loopBooks();
    }
}

//pushes the book to myLibrary[]
function addBookToLibrary(objectHolder) {
    myLibrary.push(objectHolder)
}

//clears books before adding them again
function clearBooks() {
    while (cardsContainer.firstChild) {
        cardsContainer.removeChild(cardsContainer.firstChild);
    }
}

//adds book to pages
function loopBooks() {
    clearBooks();
    for (i = 0; i < myLibrary.length; i++) {
        let card = document.createElement('div')
        let removeBtn = document.createElement('button')

        card.dataset.book = 'book'+i;
        cardsContainer.appendChild(card)
        card.classList.add('card')

        let titleInfo = document.createElement('div')
        titleInfo.textContent = myLibrary[i].title
        titleInfo.classList.add('title')

        let authorInfo = document.createElement('div')
        authorInfo.textContent = myLibrary[i].author
        authorInfo.classList.add('author')

        let pageInfo = document.createElement('div')
        pageInfo.textContent = myLibrary[i].pages
        pageInfo.classList.add('pages')

        let readInfo = document.createElement('div')
        readInfo.textContent = myLibrary[i].read
        readInfo.classList.add('readInfo')

        card.appendChild(titleInfo);
        card.appendChild(authorInfo);
        card.appendChild(pageInfo);
        card.appendChild(readInfo);
        card.appendChild(removeBtn);
    }
}

const testBook = new Book('Harry Potter', 'JK Rowling', '500', 'read')
myLibrary.push(testBook)
const testbook3 = new Book('Harry Potter33', 'JK Rowling', '500', 'read')
myLibrary.push(testbook3)
const testBook2 = new Book('BensBook', 'Ben Aguirre', '30', 'not read')
myLibrary.push(testBook2)