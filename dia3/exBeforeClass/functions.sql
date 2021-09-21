-- 1. Utilizando a tabela sakila.payment , monte uma function que retorna a quantidade total de pagamentos feitos 
-- até o momento por um determinado customer_id .
DELIMITER $$

CREATE FUNCTION GetCustomerPayment(id INT)
RETURNS INT READS SQL DATA
BEGIN
	RETURN (
		SELECT 
			COUNT(amount)
		FROM
			sakila.payment
		WHERE customer_id = id
		GROUP BY customer_id
    );
END $$

DELIMITER ;

-- 2. Crie uma function que, dado o parâmetro de entrada inventory_id , retorna o nome do filme vinculado ao 
-- registro de inventário com esse id.
DELIMITER $$

CREATE FUNCTION GetMovieByInvId(id INT)
RETURNS VARCHAR(150) READS SQL DATA
BEGIN
	RETURN (
		SELECT
			f.title
		FROM
			film f
		WHERE
			f.film_id IN ( SELECT
					i.film_id
                FROM
					inventory i
				WHERE i.inventory_id = id)
    );
END $$
    
DELIMITER ;

-- 3. Crie uma function que receba uma determinada categoria de filme em formato de texto
-- (ex: 'Action' , 'Horror' ) e retorna a quantidade total de filmes registrados nessa categoria.
DELIMITER $$

CREATE FUNCTION GetQuantityPerCategory(category_name VARCHAR(50))
RETURNS INT READS SQL DATA
BEGIN
	RETURN (
		SELECT
			COUNT(*)
		FROM
			film_category
		WHERE
			category_id = ( SELECT
					category_id
				FROM
					category
				WHERE name LIKE CONCAT('%', category_name, '%'))
		GROUP BY category_id
    );
END $$

DELIMITER ;


