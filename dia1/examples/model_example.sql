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

INSERT INTO authors(first_name, middle_name, last_name, birthdate, nationality)
VALUES ('George','R. R.','Martin','1948-09-20','norte-americano'),
	('J.','R. R.','Tolkien','1892-01-03','britânico'),
	('Isaac',NULL,'Asimov','1920-01-20','russo-americano'),
	('Frank',NULL,'Herbert','1920-02-11','norte-americano'),
	('Júlio',NULL,'Verne','1905-03-24','francês'),
    ('Machado', NULL, 'de Assis', '1839-06-21', 'brasileiro');
