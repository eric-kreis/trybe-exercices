-- Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( international_sales ) de cada filme.
SELECT
	m.title,
	box.domestic_sales,
    box.international_sales
FROM
	Pixar.Movies m
		JOIN
	Pixar.BoxOffice box ON box.movie_id = m.id;

-- Exercício 2: Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas para cada filme que 
-- possui um número maior de vendas internacionais ( international_sales ) do que vendas nacionais ( domestic_sales ).
SELECT
	m.title,
	box.domestic_sales,
    box.international_sales
FROM
	Pixar.Movies m
		JOIN
	Pixar.BoxOffice box ON box.movie_id = m.id
    HAVING box.domestic_sales < box.international_sales;

-- Exercício 3: Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente.
SELECT
	m.title,
	rating
FROM
	Pixar.Movies m
		JOIN
	Pixar.BoxOffice box ON box.movie_id = m.id
ORDER BY m.title, rating;

-- Exercício 4: Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes 
-- em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
SELECT
	t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM
	Pixar.Theater t
		LEFT JOIN
	Pixar.Movies m ON t.id = m.theater_id
ORDER BY t.name;

-- Exercício 5: Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em 
-- cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
SELECT
	t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM
	Pixar.Theater t
		RIGHT JOIN
	Pixar.Movies m ON t.id = m.theater_id
ORDER BY t.name;

-- Exercício 6: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem os títulos dos filmes que possuem avaliação maior que 7.5.
SELECT 
    title
FROM
    Pixar.Movies
WHERE
    id IN (SELECT 
            *
        FROM
            Pixar.BoxOffice
        WHERE
			id = movie_id
            AND rating > 7.5);

SELECT
	m.title
FROM
	Pixar.Movies m
		JOIN
	Pixar.BoxOffice b ON m.id = b.movie_id AND b.rating > 7.5;

-- Exercício 7: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem as avaliações dos filmes lançados depois de 2009.
SELECT 
    rating
FROM
    Pixar.BoxOffice
WHERE
	movie_id IN ( SELECT 
			id
        FROM
            Pixar.Movies
        WHERE
			id = movie_id
            AND  year > 2009);

SELECT
	rating
FROM
	Pixar.BoxOffice b
		JOIN
	Pixar.Movies m ON m.id = b.movie_id AND m.year > 2009;
    
-- Exercício 8: Utilizando o EXISTS , selecione o nome e localização dos cinemas que possuem filmes em cartaz.
SELECT 
    name,
    location
FROM
    Pixar.Theater AS t
WHERE
	EXISTS ( SELECT 
			*
        FROM
            Pixar.Movies
        WHERE
			theater_id = t.id);
            
-- Exercício 9: Utilizando o EXISTS , selecione o nome e localização dos cinemas que não possuem filmes em cartaz.
SELECT
	name,
    location
FROM
	Pixar.Theater AS t
WHERE
	NOT EXISTS ( SELECT
		*
		FROM
			Pixar.Movies
		WHERE
			t.id = theater_id);
