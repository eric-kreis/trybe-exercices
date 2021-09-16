SET @free = 'G';
SET @more_than_10 = 'PG';
SET @more_than_13 = 'PG-13';
SET @more_than_17 = 'R';

SELECT
	title,
    rating,
    CASE
		WHEN rating = @free THEN 'Livre para todos'
        WHEN rating = @more_than_10 THEN 'Não recomendado para menores de 10 anos'
        WHEN rating = @more_than_13 THEN 'Não recomendado para menores de 13 anos'
        WHEN rating = @more_than_17 THEN 'Não recomendado para menores de 17 anos'
		ELSE 'Proibido para menores de idade'
	END AS 'público-alvo'
FROM sakila.film;