// BookShop.mjs
import { welcomeMessage } from './helpers.mjs';

class BookShop {
    constructor() {
        this.inventory = [];
        welcomeMessage(); // Display the welcome message when a new BookShop is created
    }

    addBook(title, author, price, quantity) {
        const book = { title, author, price, quantity };
        this.inventory.push(book);
        console.log(`Book added: ${title} by ${author}`);
    }

    removeBook(title) {
        this.inventory = this.inventory.filter(book => book.title !== title);
        console.log(`Book removed: ${title}`);
    }

    updateBookPrice(title, newPrice) {
        this.inventory = this.inventory.map(book => 
            book.title === title ? { ...book, price: newPrice } : book
        );
        console.log(`Price updated for book: ${title}`);
    }

    searchBooks(searchTerm) {
        const results = this.inventory.filter(book => 
            book.title.includes(searchTerm) || book.author.includes(searchTerm)
        );
        console.log(`Search results for "${searchTerm}":`, results);
        return results;
    }

    calculateTotalSales() {
        const totalSales = this.inventory.reduce((total, book) => 
            total + (book.price * book.quantity), 0
        );
        console.log(`Total sales: $${totalSales.toFixed(2)}`);
        return totalSales;
    }

    listAllBooks() {
        console.log("Listing all books in inventory:");
        this.inventory.forEach(book => 
            console.log(`${book.title} by ${book.author} - $${book.price}, Quantity: ${book.quantity}`)
        );
    }
}

export default BookShop;


