const addBtn = document.querySelector('#addBtn')
const bookContainer = document.querySelector('#bookContainer')
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.close')
const bookForm = document.querySelector('#bookForm')
const title = document.querySelector('#title')
const author = document.querySelector('#author')
const pages = document.querySelector('#pages')
const read = document.querySelector('#read')

const myLibrary = []

class Book {
    constructor(title, author, page, read){
        this.title = title;
        this.author = author;
        this.page = page;
        this.read = read;
    }
}

const addBookToLibrary = () => {
    clearBookContainer()

    myLibrary.forEach((book) => {
        const row = createBookRow(book)
        bookContainer.append(row)
    })
}

const clearBookContainer = () => {
    bookContainer.textContent = ''
}

const createBookRow = (book) => {
    const row = document.createElement('tr')

    const cells = [
        createCell(book.title),
        createCell(book.author),
        createCell(book.page),
        createReadCell(book),
        createRemoveButtonCell(book)
    ]

    cells.forEach((cell) => row.appendChild(cell))

    return row
}

const createCell = (text) => {
    const cell = document.createElement('td')
    cell.textContent = text
    return cell
}

const createReadCell = (book) => {
    const cell = document.createElement('td')

    cell.classList.add('btn')
    cell.textContent = book.read ? 'Yes' : 'No'
    cell.addEventListener('click', () => {
        book.read = !book.read
        cell.textContent = book.read ? 'Yes' : 'No'
    })
    return cell
}

const createRemoveButtonCell = (book) => {
    const cell = document.createElement('td')
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'
    deleteButton.addEventListener('click', () => {
        removeBook(book)
    })
    cell.appendChild(deleteButton)
    return cell
}

const removeBook = (book) => {
    let index = myLibrary.indexOf(book)

    if(index !== -1){
        myLibrary.splice(index, 1)
        addBookToLibrary()
    }
}

addBtn.addEventListener('click', () => {
    modal.style.display = 'block'
})

closeModal.addEventListener('click', () => {
    modal.style.display = 'none'
})

bookForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let newBook = new Book(title.value, author.value, pages.value, read.checked)
    myLibrary.unshift(newBook)
    addBookToLibrary()

    bookForm.reset()
    modal.style.display = 'none'
})

addBookToLibrary()
