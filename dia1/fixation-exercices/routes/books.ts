import { Router } from 'express';
import Books from '../controllers/Books';

const books = Router();

books.get('/books', Books.all);
books.get('/books/search', Books.byAuthorId);
books.get('/books/:id', Books.byBookId);

export default books;
