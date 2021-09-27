-- 1. Crie uma view chamada film_with_categories utilizando as tabelas category , film_category e film do banco de 
-- dados sakila. Essa view deve exibir o título do filme, o id da categoria e o nome da categoria.
-- Os resultados devem ser ordenados pelo título do filme.
CREATE VIEW film_with_categories AS
    SELECT 
        f.title, c.category_id, c.name
    FROM
        sakila.film f
            JOIN
        sakila.film_category fa ON f.film_id = fa.film_id
            JOIN
        sakila.category c ON c.category_id = fa.category_id
    ORDER BY title;

-- 2. Crie uma view chamada film_info utilizando as tabelas actor , film_actor e film do banco de dados sakila.
-- Sua view deve exibir o actor_id , o nome completo do ator ou da atriz em uma coluna com o ALIAS actor e o título 
-- dos filmes. Os resultados devem ser ordenados pelos nomes de atores e atrizes.
CREATE VIEW film_info AS
    SELECT 
        a.actor_id,
        CONCAT(a.first_name, ' ', a.last_name) actor,
        f.title
    FROM
        sakila.actor a
            JOIN
        sakila.film_actor fa ON fa.actor_id = a.actor_id
            JOIN
        sakila.film f ON fa.film_id = f.film_id
    ORDER BY actor;

-- 3. Crie uma view chamada address_info que faça uso das tabelas address e city do banco de dados sakila.
-- Sua view deve exibir o address_id, o address, o district, o city_id e a city. Os resultados devem ser 
-- ordenados pelo nome das cidades.
CREATE VIEW address_info AS
    SELECT 
        address_id,
        address,
        district,
        city_id,
        (SELECT 
                city
            FROM
                sakila.city
            WHERE
                city_id = a.city_id) city
    FROM
        sakila.address a
    ORDER BY city;
    
-- 4. Crie uma view chamada movies_languages , usando as tabelas film e language do banco de dados sakila.
-- Sua view deve exibir o título do filme , o id do idioma e o idioma do filme.
CREATE VIEW movies_languages AS
    SELECT 
        f.title, f.language_id, l.name language
    FROM
        sakila.film f
            JOIN
        sakila.language l ON l.language_id = f.language_id;
