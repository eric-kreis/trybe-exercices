import express from 'express';
import authors from './routes/authors';
import books from './routes/books';

const app = express();
app.use(express.json());

app.use(authors);
app.use(books);

app.listen(3001, () => {
  console.log('Server is running on PORT 3001!')
});
