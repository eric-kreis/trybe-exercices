-- Exercício 10: Utilizando o INNER JOIN , selecione todas as informações dos filmes com avaliação maior que 8 e que estejam em cartaz.
SELECT
	*
FROM
	Pixar.Movies AS m
		JOIN
	Pixar.BoxOffice AS b ON m.id = b.movie_id AND b.rating > 8
		JOIN
	Pixar.Theater AS t ON m.theater_id = t.id;

-- Exercício 11: Utilizando o SELF JOIN , selecione os títulos e duração dos filmes que possuem o mesmo diretor.
SELECT
	m1.title,
    m1.length_minutes,
    m2.title,
    m2.length_minutes
FROM
	Pixar.Movies as m1, Pixar.Movies as m2
WHERE
	m1.director = m2.director;

-- Exercício 12: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem o título 
-- dos filmes que arrecadaram 500 milhões ou mais, e que possuem duração maior que 110 minutos.
SELECT 
    title
FROM
    Pixar.Movies
WHERE
    id IN (SELECT 
            movie_id
        FROM
            Pixar.BoxOffice
        WHERE
            length_minutes > 110
                AND domestic_sales + international_sales > 500000000); -- More performatic;
-- OR
SELECT 
    title
FROM
    Pixar.Movies
WHERE
    id IN (SELECT 
            movie_id
        FROM
            Pixar.BoxOffice
        WHERE
            length_minutes > 110
        GROUP BY movie_id
        HAVING SUM(domestic_sales) + SUM(international_sales) > 500000000);
-- -- -- -- 
SELECT
	title
FROM
	Pixar.Movies AS m
		JOIN
	Pixar.BoxOffice AS b ON b.movie_id = m.id
WHERE
	b.international_sales + domestic_sales > 500000000
    AND m.length_minutes > 110;
-- OR
SELECT
	title
FROM
	Pixar.Movies AS m
		JOIN
	Pixar.BoxOffice AS b ON b.movie_id = m.id
GROUP BY title
HAVING SUM(b.international_sales) + SUM(domestic_sales) > 500000000
    AND SUM(m.length_minutes) > 110;  -- Less performatic;