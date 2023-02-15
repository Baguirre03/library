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
    let changedFirstLetter = this.read
    changedFirstLetter.toLowerCase();
    return (`${this.title} is written by ${this.author} is ${this.pages} pages long and you have ${changedFirstLetter} it!`)
}

function newBook() {
    const title = document.getElementById('title-form').value
    const author = document.getElementById('author-form').value
    const pages = document.getElementById('pages-form').value
    const readStatus = document.getElementById('readStatus-form').value
    const emptyInputs = (title === "" || author === "" || pages === "")

    if (emptyInputs) {
        alert('Please fill in all the inputs')
        showForm();
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

//For clicking on Read/NotRead Div
function changeReadStatus(div, position) {
    if (div.textContent === "Not read") {
        div.classList.toggle('notRead')
        div.textContent = "Read"
        myLibrary[position].read = "Read"
    } else {
        div.classList.toggle('notRead')
        div.textContent = "Not read"
        myLibrary[position].read = "Not read"
    }
}


//information popup
function getInfo(object) {
    let bookInformation = document.querySelector('.information-popup')
    bookInformation.classList.toggle('active')
    bookInformation.textContent = myLibrary[object].info();

    blurThis.classList.toggle('active')

    let deleteButton = document.createElement('button')
    deleteButton.textContent = 'x'
    deleteButton.classList.add('delete')
    bookInformation.appendChild(deleteButton)

    deleteButton.addEventListener('click', () => {
        bookInformation.classList.toggle('active')
        blurThis.classList.toggle('active')
    })
}

//adds book to pages
function loopBooks() {
    clearBooks();
    for (i = 0; i < myLibrary.length; i++) {
        let card = document.createElement('div')
        let removeBtn = document.createElement('button')

        removeBtn.classList.add('removeBtn')
        removeBtn.textContent = 'Delete'

        card.dataset.book = i;
        cardsContainer.appendChild(card)
        card.classList.add('card')

        let titleInfo = document.createElement('div')
        titleInfo.textContent = myLibrary[i].title
        titleInfo.classList.add('title')

        let authorInfo = document.createElement('div')
        authorInfo.textContent = `Author: ${myLibrary[i].author}`
        authorInfo.classList.add('author')

        let pageInfo = document.createElement('div')
        pageInfo.textContent = `Pages: ${myLibrary[i].pages}`
        pageInfo.classList.add('pages')

        let readInfo = document.createElement('div')
        readInfo.textContent = myLibrary[i].read
        if (myLibrary[i].read === 'Read') {
            readInfo.classList.add('readInfo')
        } else {
            readInfo.classList.add('readInfo', 'notRead')
        }

        let getAllInfo = document.createElement('button')
        getAllInfo.textContent = 'Get info'
        getAllInfo.classList.add('getAllInfo')

        let buttonHolder = document.createElement('div')
        buttonHolder.classList.add('button-holder')
        let authorReadHolder = document.createElement('div')
        authorReadHolder.classList.add('author-read-holder')

        card.appendChild(titleInfo);
        card.appendChild(authorReadHolder);

        authorReadHolder.appendChild(authorInfo);
        authorReadHolder.appendChild(pageInfo);
        authorReadHolder.appendChild(readInfo);

        card.appendChild(buttonHolder)

        buttonHolder.appendChild(getAllInfo);
        buttonHolder.appendChild(removeBtn);
        
        removeBtn.addEventListener('click', () => {
            removeBookFromLibrary(card.dataset.book);
        })

        getAllInfo.addEventListener('click', () => {
           getInfo(card.dataset.book)
        })

        readInfo.addEventListener('click', () => {
            changeReadStatus(readInfo, card.dataset.book);
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
    blurThis.classList.toggle('active');
}
