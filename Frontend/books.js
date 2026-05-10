class Book {
    #isbn
    #title = 'Unknown'
    #author
    #price

    constructor(isbn, title, author, price) {
        this.#isbn = isbn
        this.setTitle(title)
        this.#author = author
        this.setPrice(price)
    }

    setTitle(title) {
        if (typeof title === 'string') {
            this.#title = title
        }
    }

    setPrice(price) {
        if (typeof price === 'number' && price > 0) {
            this.#price = price
        }
    }

    getIsbn() {
        return this.#isbn
    }

    getTitle() {
        return this.#title
    }

    getAuthor() {
        return this.#author
    }

    getPrice() {
        return this.#price
    }

    toString() {
        return `Title: ${this.#title}, Author: ${this.#author}, Price: $${this.#price}`
    }
}

class Library {
    #books = []

    addBook(book) {
        this.#books.push(book)
    }

    removeBook(isbn) {
        let deletedBook = this.#books.find(function(book) {
            return book.getIsbn() === isbn
        })
        let index = this.#books.indexOf(deletedBook)
        this.#books.splice(index, 1)
    }

    getAllBooks() {
        this.#books.forEach(function(book) {
            console.log(book.toString())
        })
    }

    getTotalValue() {
        return this.#books.reduce(function (acc, book) {
            return acc + book.getPrice()
        }, 0)
    }

    getMostExpensive() {
        const mostExpensive = this.#books.reduce(function(acc, book) {
            if (book.getPrice() > acc.getPrice()) {
                return book
            } else {
                return acc
            }
        }, this.#books[0])
        return mostExpensive
    }
 }

const book1 = new Book(3273565, "The Great Gatsby", "F. Scott Fitzgerald", 12.99)
const book2 = new Book(1120084, "To Kill a Mockingbird", "Harper Lee", 10.99)
const book3 = new Book(1524935, "1984", "George Orwell", 9.99)
const book4 = new Book(1850524, "Brave New World", "Aldous Huxley", 11.49)
const book5 = new Book(6769174, "The Catcher in the Rye", "J.D. Salinger", 8.99)
const book6 = new Book(673319, "Fahrenheit 451", "Ray Bradbury", 10.49)
const book7 = new Book(1439518, "Pride and Prejudice", "Jane Austen", 7.99)
const book8 = new Book(7928227, "The Hobbit", "J.R.R. Tolkien", 14.99)
const book9 = new Book(9526342, "Animal Farm", "George Orwell", 6.99)
const book10 = new Book(2315007, "The Alchemist", "Paulo Coelho", 13.49)
console.log(book1.toString())
console.log(book2.getIsbn())

const library = new Library()
library.addBook(book1)
library.addBook(book2)
library.addBook(book3)
library.addBook(book4)
library.addBook(book5)
library.addBook(book6)
library.addBook(book7)
library.addBook(book8)
library.addBook(book9)
library.addBook(book10)

library.getAllBooks()
console.log("-------------------------------------------")

library.removeBook(1850524)
library.getAllBooks()
console.log("-------------------------------------------")

console.log(library.getTotalValue())
console.log(library.getMostExpensive().toString())