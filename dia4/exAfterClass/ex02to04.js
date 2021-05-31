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

// Exercício 02 (FAKE) //
const expected02fake = 101.5;

function averageAge() {
  const ages = books.map(book => 2021 - book.author.birthYear);
  const agesSum = ages.reduce((acc, curr) => acc + curr);
  const average = agesSum / books.length;
  return average;
}

assert.strictEqual(averageAge(), expected02fake);

// Exercício 02 REAL //
const expected02real = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  const names = books.reduce((acc, book, index) => {
    if (index === books.length - 1) {
      return `${acc} ${book.author.name}.`;
    }
    return `${acc} ${book.author.name},`;
  }, '');

  return names.trim();
}

assert.strictEqual(reduceNames(), expected02real);

// Exercício 03 //
const expected03 = 43;

function averageAgeWhenBook() {
  const agesSum = books.reduce((acc, curr) => {
    return acc + (curr.releaseYear - curr.author.birthYear)
  }, 0);
  const average = agesSum / books.length;
  return average;
}

assert.strictEqual(averageAgeWhenBook(), expected03);

// Exercício 04 //
const expected04 = 'As Crônicas de Gelo e Fogo';

function longestNamedBook() {
  const theBook = books.reduce((acc, book) => (
    acc.name.length >= book.name.length ? acc : book)
  );
  return theBook.name;
}

assert.deepStrictEqual(longestNamedBook(), expected04);