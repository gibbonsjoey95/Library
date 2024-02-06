const addBtn = document.querySelector('#addBtn')
const bookContainer = document.querySelector('#bookContainer')


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

myLibrary.forEach((book) => {
    let row = bookContainer.insertRow(0)

    let cellTitle = row.insertCell(0)
    let cellAuthor = row.insertCell(1)
    let cellPage = row.insertCell(2)
    let cellRead = row.insertCell(3)

    cellTitle.textContent = book.title
    cellAuthor.textContent = book.author
    cellPage.textContent = book.page

    book.read === false ? cellRead.textContent = "No" : cellRead.textContent = "Yes"
})

Book.prototype.introduce = function() {
    console.log(`${this.title} by ${this.author}, ${this.page} pages. ${this.read}`)
}

book1 = new Book('Eragon', 'Yada', 300, 'I have not read this book.')

addBtn.addEventListener('click', () => {
    book1.introduce()
})

