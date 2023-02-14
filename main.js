let myLibrary = [];
let cardsContainer = document.querySelector('.cardsContainer')
let createBook = document.getElementById('createBook')
let form = document.getElementById('formElement')


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

function removeBookFromLibrary(number) {
    myLibrary.splice(number, 1)
    loopBooks();
}

//adds book to pages
function loopBooks() {
    clearBooks();
    for (i = 0; i < myLibrary.length; i++) {
        let card = document.createElement('div')
        let removeBtn = document.createElement('button')

        removeBtn.classList.add('removeBtn', 'bookInfo')
        removeBtn.textContent = 'remove'

        card.dataset.book = i;
        cardsContainer.appendChild(card)
        card.classList.add('card')

        let titleInfo = document.createElement('div')
        titleInfo.textContent = myLibrary[i].title
        titleInfo.classList.add('title', 'bookInfo')

        let authorInfo = document.createElement('div')
        authorInfo.textContent = myLibrary[i].author
        authorInfo.classList.add('author', 'bookInfo')

        let pageInfo = document.createElement('div')
        pageInfo.textContent = myLibrary[i].pages
        pageInfo.classList.add('pages', 'bookInfo')

        let readInfo = document.createElement('div')
        readInfo.textContent = myLibrary[i].read
        readInfo.classList.add('readInfo', 'bookInfo')

        let getAllInfo = document.createElement('button')
        getAllInfo.textContent = 'info'
        getAllInfo.classList.add('getAllInfo')

        card.appendChild(titleInfo);
        card.appendChild(authorInfo);
        card.appendChild(pageInfo);
        card.appendChild(readInfo);
        card.appendChild(removeBtn);
        card.appendChild(getAllInfo);
        
        removeBtn.addEventListener('click', () => {
            removeBookFromLibrary(card.dataset.book);
        })
    }
}

const blurThis = document.querySelector('.container')

//Show form on click
function showForm() {
    form.classList.toggle('visible')
    blurThis.classList.toggle('active')
}

//Remove form
function removeForm() {
    form.classList.toggle('visible')
    blurThis.classList.toggle('active')
}

const harryPotter = new Book('Harry Potter', 'JK Rowling', '300', 'read');
addBookToLibrary(harryPotter)
const newPOT = new Book('Harry Potterjjjjjj', 'JK Rowling', '300', 'read');
addBookToLibrary(newPOT)
const newpap = new Book('Harry Potter', 'JK Rowling', '300', 'read');
addBookToLibrary(newpap)
const pap = new Book('Harry Potter', 'JK Rowling', '300', 'read');
addBookToLibrary(pap)