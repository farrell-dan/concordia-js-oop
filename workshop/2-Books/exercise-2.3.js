// From 2.1. and 2.2
// Copy over the classes you created in 2.1 and 2.2. Do not copy the declarations (book1, book2, etc..., homeLibrary)
// Paste them right here:

class Book {
  constructor (title, genre, author, isRead = false){
      this.title = title;
      this.genre = genre;
      this.author = author;
      this.isRead =isRead;
  }
}

class BookList {
  constructor(){
      this.books = [];
      this.lastRead = null;
      this.currentlyReading = null;
  }

  add = (book) => {
    this.books.push(book);
  }

  getNumRead = () => {
    return this.books.filter((book) => book.isRead).length;
  }

  getNumUnread = () => {
    return this.books.filter((book) => !book.isRead).length;
  }

}




// Exercise 2.3
//
// We want to be able to add books to our BookList, so that we can start a
// collection!
//
// Let's create an `add` method in our BookList class. It should take a Book class
// as a parameter. When we call `.add`, it should push that new Book into the
// `books` array on the `BookList` class. 
//
// Books have an `isRead` property, to indicate if we've read it or not.
// Let's also add two new methods to our BookList class:
// - getNumRead
// - getNumUnread
//
// These methods should return the number of books which are read and unread,
// respectively.
//
// The following code will fail by default. Your goal is to get it to run, and output the values specified at the end:

const homeLibrary = new BookList();

// Books are unread by default:
homeLibrary.add(new Book('The Shining', 'Horror', 'Stephen King'));
homeLibrary.add(new Book('American Gods', 'Fiction', 'Neil Gaiman'));

// But, we can specify that we've read it:
homeLibrary.add(
  new Book('Eloquent JavaScript', 'Programming', 'Marijn Haverbeke', true)
);

// At this point, we should have 2 unread books, and 1 read book:
console.log(homeLibrary.getNumUnread()); // should print 2
console.log(homeLibrary.getNumRead()); // should print 1
