let booksData = require('../data/books.json')
import { Book } from '../dto/Books';
;
class BooksModel {

    books: Book[];

    constructor() {
      this.books = booksData as Book[];
    }

    findAll = async () => {  
        return this.books ;
    }

    findById = async (bookId : number) => { 
        return this.books.find( (x: Book) => x.id === bookId );
    }

    update = async (book : Book) => {  
            const elementIndex = this.books.findIndex((obj => obj.id == book.id));
            this.books[elementIndex].title = book.title ;
            this.books[elementIndex].yearPublication = book.yearPublication ;
            return this.books[elementIndex];
    }

    insert = async (book : Book) => {  
        book.id = this.books.length + 1;
       this.books.push(book);
       return book;
    }
}

export default new BooksModel()