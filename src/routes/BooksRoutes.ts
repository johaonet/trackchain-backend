import { Router } from 'express';
import BooksCtrl from '../controllers/BooksCtrl';

class CourseRoutes {
  router = Router();
  booksCtrl = new BooksCtrl();

  constructor() {
    this.intializeRoutes();
  }
  intializeRoutes() {
    this.router.route('/').get(this.booksCtrl.getAllBooks);
    this.router.route('/:id').get(this.booksCtrl.getBookDetails);
    this.router.route('/:id').put(this.booksCtrl.updateBook);
    this.router.route('/').post(this.booksCtrl.createBook);
  }
}
export default new CourseRoutes().router;