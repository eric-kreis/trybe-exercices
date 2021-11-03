import { Router } from 'express';
import Author from '../controllers/Author';

const authors = Router();

authors.get('/authors', Author.all);

export default authors;
