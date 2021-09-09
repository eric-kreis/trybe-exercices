-- Exercício 11:
-- SELECT DISTINCT Project FROM Scientists.AssignedTo;

-- Exercício 12:
-- SELECT * FROM Scientists.Projects ORDER BY Hours DESC LIMIT 1;

-- Exercício 13:
-- SELECT * FROM Scientists.Projects ORDER BY Hours DESC LIMIT 1 OFFSET 1;

-- Exercício 14:
-- SELECT * FROM Scientists.Projects ORDER BY Hours LIMIT 5;

-- Exercício 15:
-- SELECT
-- 	CONCAT('Existem ', COUNT(*), ' cientistas na tabela Scientists.') AS String
-- FROM Scientists.Scientists;