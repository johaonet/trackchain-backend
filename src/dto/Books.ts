import { Author } from './Author';

export class Book {
    public id!: number;
    public title!: string;
    public yearPublication!: number; 
    public author?: Author;
  }