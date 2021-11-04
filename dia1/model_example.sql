DROP DATABASE IF EXISTS model_example;

CREATE DATABASE model_example;

USE model_example;

CREATE TABLE authors (
	id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(25) NOT NULL,
    middle_name VARCHAR(25),
    last_name VARCHAR(25) NOT NULL,
    birthdate DATE,
    nationality VARCHAR(70)
);

CREATE TABLE books (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(90) NOT NULL,
    author_id INT(11) NOT NULL,
    FOREIGN KEY (author_id) REFERENCES authors (id)
);

INSERT INTO authors(first_name, middle_name, last_name, birthdate, nationality)
VALUES ('George','R. R.','Martin','1948-09-20','norte-americano'),
	('J.','R. R.','Tolkien','1892-01-03','britânico'),
	('Isaac',NULL,'Asimov','1920-01-20','russo-americano'),
	('Frank',NULL,'Herbert','1920-02-11','norte-americano'),
	('Júlio',NULL,'Verne','1905-03-24','francês'),
    ('Machado', NULL, 'de Assis', '1839-06-21', 'brasileiro');

INSERT INTO books(title, author_id)
VALUES ('A Game of Thrones', 1),
    ('A Clash of Kings', 1),
    ('A Storm of Swords', 1),
    ('The Lord of The Rings - The Fellowship of the Ring', 2),
    ('The Lord of The Rings - The Two Towers', 2),
    ('The Lord of The Rings - The Return of The King', 2),
    ('Foundation', 3);
