const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Exercício 01 //
const expected01 = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
];

function formatedBookNames() {
  let result;
  result = books.map((book => `${book.name} - ${book.genre} - ${book.author.name}`));

  return result;
}

assert.deepStrictEqual(formatedBookNames(), expected01);

// Exercício 02 //
const expected02 = [
  {
    age: 31,
    author: 'Isaac Asimov',
  },
  {
    age: 38,
    author: 'H. P. Lovecraft',
  },
  {
    age: 39,
    author: 'Stephen King',
  },
  {
    age: 43,
    author: 'George R. R. Martin',
  },
  {
    age: 45,
    author: 'Frank Herbert',
  },
  {
    age: 62,
    author: 'J. R. R. Tolkien',
  },
];

function nameAndAge() {
  let namesOrderedByAge;
  namesOrderedByAge = books.map((book) => (
    { 
      age: book.releaseYear - book.author.birthYear,
      author: book.author.name,
    }
  ));
  namesOrderedByAge.sort((a, b) => a.age - b.age);

  return namesOrderedByAge;
}

assert.deepStrictEqual(nameAndAge(), expected02);

// Exercício 03 //
const expected03 = [
  { 
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965
  }
];

function fantasyOrScienceFiction() {
  let fantasyOrScienceBooks;
  fantasyOrScienceBooks = books.filter(((book) => 
  book.genre === 'Ficção Científica' || book.genre === 'Fantasia'
  ));
  return fantasyOrScienceBooks;
}

assert.deepStrictEqual(fantasyOrScienceFiction(), expected03);

// Exercício 04 //
const expected04 = [
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
];

function oldBooksOrdered() {
  const today = new Date();
  const oldBooks = books.filter((book) => today.getFullYear() - book.releaseYear >= 60);
  oldBooks.sort((a, b) => a.releaseYear - b.releaseYear);

  return oldBooks;
}

assert.deepStrictEqual(oldBooksOrdered(), expected04);

// Exercício 05 //
const expected05 = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors() {
  const scienceOrFantasyBooks = books.filter((book) => 
  book.genre === 'Ficção Científica' || book.genre === 'Fantasia'
  );
  const onlyNames = scienceOrFantasyBooks.map((book) => book.author.name);
  onlyNames.sort();
  return onlyNames;
}

assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expected05);

// Exercício 06 //
const expected06 = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks() {
  const today = new Date();
  const olderThan60 = books.filter((book) => today.getFullYear() - book.releaseYear >= 60);
  const onlyNames = olderThan60.map((book) => book.name);
  return onlyNames;
}

assert.deepStrictEqual(oldBooks(), expected06);

// Exercício 07 //
const expected07 = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  const authorBook = books.find((book) => {
    const name = book.author.name;
    const nameArr = name.split(' ');

    if(nameArr[0].endsWith('.') 
    && nameArr[1].endsWith('.') 
    && nameArr[2].endsWith('.')) {
      return true
    }
    return false;
  });

  return authorBook.name;
}

assert.deepStrictEqual(authorWith3DotsOnName(), expected07);