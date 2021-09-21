-- 1. Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes.
-- Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id do ator ou 
-- atriz e a quantidade de filmes em que atuaram.
DELIMITER $$

CREATE PROCEDURE FindTop10Actors()
BEGIN
	SELECT
		actor_id,
		COUNT(*) films
	FROM
		film_actor
	GROUP BY actor_id
	ORDER BY films DESC;
END $$


DELIMITER ;

-- 2. Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string e que 
-- exiba o id do filme , seu titulo , o id de sua categoria e o nome da categoria selecionada.
-- Use as tabelas film , film_category e category para montar essa procedure.
DELIMITER $$

CREATE PROCEDURE ShowCategoryInfo(IN category_name VARCHAR(100))
BEGIN
	SELECT
		fc.film_id,
        f.title,
        fc.category_id,
        c.name
	FROM
		film_category AS fc
			JOIN
		film AS f ON f.film_id = fc.film_id
			JOIN
		category AS c ON c.category_id = fc.category_id
	WHERE c.name = category_name;
END $$
		
DELIMITER ;

-- 3. Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente está ou 
-- não ativo, através de um parâmetro de saída.
DROP PROCEDURE IF EXISTS ShowCustomerInfoAndStatus;

DELIMITER $$

CREATE PROCEDURE ShowCustomerInfoAndStatus(
	IN customer_email VARCHAR(100),
    OUT customer_status BOOL
)

BEGIN
	SET customer_status = (SELECT
		active
	FROM
		customer
	WHERE
		email = customer_email);
END $$

DELIMITER ;

SET @costumer_status = 0;
-- CALL ShowCustomerInfoAndStatus('SHEILA.WELLS@sakilacustomer.org', @costumer_status);
SELECT @costumer_status;
