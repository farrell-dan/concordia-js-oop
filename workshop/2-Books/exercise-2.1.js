// Exercise 2.1
// ------------

// Create a Book class and then declare it 5 times
// include the following properties in the constructor
//    - title (string)
//    - genre (string)
//    - author (string)
//    - isRead (boolean - whether or not you've read the book)
//
// Declare the books as book1, book2, book3, book4, book5
//
// If the book doesn't provide a value for `isRead`, it should default to
// `false`.
//
// Console.log them to verify that all is working.

class Book {
    constructor (title, genre, author, isRead = false){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.isRead =isRead;
    }
}

const book1 = new Book("Book 1", "Fiction", "Author 1");
const book2 = new Book("Book 2", "Mystery", "Author 2", true);
const book3 = new Book("Book 3", "teen", "Author 3", false);
const book4 = new Book("Book 4", "Fantasy", "Author 4");
const book5 = new Book("Book 5", "Non-fiction", "Author 5", true);


console.log(book1, book2, book3, book4, book5);
