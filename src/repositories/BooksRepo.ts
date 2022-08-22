import { Book } from '../dto/Books';
import BooksModel from '../models/Books';

class BooksRepo {
  constructor() { }

  getAllBooks() {
    return BooksModel.findAll();
  }

  getById(bookId : number) {
    return BooksModel.findById(bookId);
  }

  update(book : Book) {
    return BooksModel.update(book);
  }

  create(book : Book) {
    return BooksModel.insert(book);
  }

}

export default new BooksRepo()