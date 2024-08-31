// test.mjs
import BookShop from './BookShop.mjs';

const myBookShop = new BookShop();

// Adding books
myBookShop.addBook("1984", "George Orwell", 9.99, 100);
myBookShop.addBook("To Kill a Mockingbird", "Harper Lee", 7.99, 50);
myBookShop.addBook("The Great Gatsby", "F. Scott Fitzgerald", 10.99, 75);

// Listing all books
myBookShop.listAllBooks();

// Removing a book
myBookShop.removeBook("1984");
myBookShop.listAllBooks();

// Updating book prices
myBookShop.updateBookPrice("To Kill a Mockingbird", 8.99);
myBookShop.listAllBooks();

// Searching for books
myBookShop.searchBooks("Gatsby");
myBookShop.searchBooks("Lee");

// Calculating total sales
myBookShop.calculateTotalSales();
