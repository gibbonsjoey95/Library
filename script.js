const addBtn = document.querySelector('#addBtn')
const bookContainer = document.querySelector('#bookContainer')
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.close')
const bookForm = document.querySelector('#bookForm')
const title = document.querySelector('#title')
const author = document.querySelector('#author')
const pages = document.querySelector('#pages')
const read = document.querySelector('#read')

// const tableBody = document.querySelector('#table_of_items tr')

const myLibrary = [
    {
        title: "Fahrenheit 451",
        author: "Ray Bradbury",
        page: 249,
        read: false
    },
    {
        title: "Running Out Of Time",
        author: "Margaret Peterson Haddix",
        page: 184,
        read: true
    }
]

function Book(title, author, page, read) {
    this.title = title
    this.author = author
    this.page = page
    this.read = read
}
 

const addBookToLibrary = () => {
    bookContainer.textContent = ''

    myLibrary.forEach((book) => {
        let row = bookContainer.insertRow(0)
        
        let cellTitle = row.insertCell(0)
        let cellAuthor = row.insertCell(1)
        let cellPage = row.insertCell(2)
        let cellRead = row.insertCell(3)
        let removeBtn = row.insertCell(4)
        
        cellRead.classList.add('btn')
        
        cellTitle.textContent = book.title
        cellAuthor.textContent = book.author
        cellPage.textContent = book.page
        
        cellRead.addEventListener('click', () => {
            // book.read === false ? book.read = true : book.read = false
           book.read = !book.read 


            book.read === false ? cellRead.textContent = 'No' : cellRead.textContent = 'Yes'
        })

        const deleteButton = document.createElement('button')
        deleteButton.textContent = 'Delete Book'
        deleteButton.addEventListener('click', () => {
            console.log(book)
        })
        removeBtn.appendChild(deleteButton)

        book.read === false ? cellRead.textContent = "No" : cellRead.textContent = "Yes"
    })
}


Book.prototype.introduce = function() {
    console.log(`${this.title} by ${this.author}, ${this.page} pages. ${this.read}`)
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
    myLibrary.push(newBook)
    addBookToLibrary()

    bookForm.reset()
    modal.style.display = 'none'
})

addBookToLibrary()
