SELECT 
	title AS Título,
	release_year AS 'Ano de Lançamento',
    length AS Duração,
    rating AS 'Classificação Indicativa',
    replacement_cost AS 'Custo de Substituição'
FROM sakila.film ORDER BY length DESC, replacement_cost LIMIT 20;