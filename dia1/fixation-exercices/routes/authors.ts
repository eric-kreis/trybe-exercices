import { Router } from 'express';
import Author from '../controllers/Author';

const authors = Router();

authors.get('/authors', Author.all);
authors.get('/authors/:id', Author.getById)
authors.post('/authors', Author.createAuthor);

export default authors;
