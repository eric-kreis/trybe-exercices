import { Router } from 'express';
import Books from '../controllers/Books';

const books = Router();

books.get('/books', Books.all);
books.get('/books/search', Books.byAuthorId);

export default books;
