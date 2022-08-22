import { Application } from 'express';
import booksRoutes from './BooksRoutes'; 
export default class Routes {

  constructor(app: Application) {
    // books reoutes
    app.use('/api/book', booksRoutes); 
  }
}