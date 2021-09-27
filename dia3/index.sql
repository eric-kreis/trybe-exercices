-- 1. Verifique o impacto de um FULLTEXT INDEX na tabela category (banco de dados sakila ), adicionando-o na coluna name.
-- Após ter adicionado o índice, mensure o custo da query utilizando o execution plan , como já foi feito em lições anteriores.
-- Após ter criado e mensurado o custo da query, exclua o índice e mensure novamente esse custo.
CREATE FULLTEXT INDEX name_text_idex ON sakila.category(name);
SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action');

DROP INDEX name_text_idex ON sakila.category;
SELECT *
FROM sakila.category
WHERE name LIKE '%action%';

-- 1.85 of cost without FULLTEXT INDEX;
-- 0.35 of cost with FULLTEXT INDEX;

-- 2. Verifique o impacto de um INDEX na tabela address (banco de dados sakila ) adicionando-o na coluna postal_code.
-- Após ter adicionado o índice, mensure o custo da query utilizando o execution plan, como já foi feito em lições anteriores.
-- Após ter criado e mensurado o custo da query, exclua o índice e mensure novamente esse custo.
CREATE INDEX postal_code_index ON sakila.address(postal_code);
SELECT *
FROM sakila.address
WHERE postal_code = '36693';

DROP INDEX postal_code_index ON sakila.address;
SELECT *
FROM sakila.address
WHERE postal_code = '36693';
