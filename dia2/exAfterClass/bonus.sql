-- Exercício 1:
-- SELECT
-- 	Piece,
--     Price
-- FROM
-- 	PiecesProviders.Provides
-- WHERE
-- 	Provider = 'RBT';

-- Exercício 2:
-- SELECT * FROM PiecesProviders.Provides
-- ORDER BY Price DESC
-- LIMIT 5;

-- Exercício 3:
-- SELECT Provider, Price FROM PiecesProviders.Provides
-- ORDER BY Price DESC
-- LIMIT 4
-- OFFSET 2;

-- Exercício 4:
-- SELECT * FROM PiecesProviders.Provides
-- WHERE Provider = 'HAL'
-- ORDER BY Price DESC;

-- Exercício 5:
-- SELECT COUNT(Provider) AS 'Número de empresas' FROM PiecesProviders.Provides
-- WHERE Piece = 1;