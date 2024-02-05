const addBtn = document.querySelector('#addBtn')

const myLibrary = []

function Book(title, author, page, read) {
    this.title = title
    this.author = author
    this.page = page
    this.read = read
}

Book.prototype.introduce = function() {
    console.log(`${this.title} by ${this.author}, ${this.page} pages. ${this.read}`)
}

book1 = new Book('Eragon', 'Yada', 300, 'I have not read this book.')

addBtn.addEventListener('click', () => {
    book1.introduce()
})

