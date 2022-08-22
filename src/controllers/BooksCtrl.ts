import { Request, Response, NextFunction } from 'express';
import BookRepo from './../repositories/BooksRepo';
import { apiErrorHandler } from './../handlers/errorHandler';

export default class BooksCtrl {
  constructor() { }

  async getAllBooks(req: Request, res: Response, next: NextFunction) {
    try {
      const list = await BookRepo.getAllBooks();
      console.log(list);
      res.json(list);
    } catch (error) {
      apiErrorHandler(error, req, res, 'Fetch All Books failed.');
    }
  }

  async getBookDetails(req: Request, res: Response, next: NextFunction) {
    try {
      if (Number(req.params.id)) {
      const detail = await BookRepo.getById(Number(req.params.id));
      if (detail) {
        return res.json(detail);
      } else {
        res.status(404).send(`Book ${req.params.id} not found.`);
      }
      }
      else{
        res.status(500).send(`Parameter invalid .`);
      }
      
    } catch (error) {
      apiErrorHandler(error, req, res, `Book ${req.params.id} is failed.`);
    }
  }

  async updateBook(req: Request, res: Response, next: NextFunction) {
    try {
      console.log(req.body);
      if (Number(req.params.id)) {
      const detail = await BookRepo.getById(Number(req.params.id));
      if (detail) {

        const update = await BookRepo.update({ title : req.body.title, yearPublication : req.body.yearPublication , id : Number(req.params.id) });
 
        return res.json(detail);
      } else {
        res.status(404).send(`Book ${req.params.id} not found.`);
      }
      }
      else{
        res.status(500).send(`Parameter invalid .`);
      }
      
    } catch (error) {
      apiErrorHandler(error, req, res, `Book ${req.params.id} is failed.`);
    }
  }

  async createBook(req: Request, res: Response, next: NextFunction) {
    try {
      if
      ((req.body.title && req.body.title != "") && 
      (req.body.yearPublication ) && 
      (req.body.author))
      {
      
        const create = await BookRepo.create({ title : req.body.title, yearPublication : req.body.yearPublication , author : req.body.author , id : 0 });

        return res.json(create);
      }
      else{
        res.status(500).send(`Parameters invalid .`);
      }
      
    } catch (error) {
      apiErrorHandler(error, req, res, `Book ${req.params.id} is failed.`);
    }
  }
}