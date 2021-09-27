-- 1. Escreva uma query SQL para alterar na tabela localtions o nome da coluna street_address para address, mantendo o mesmo tipo e tamanho de dados.
ALTER TABLE locations CHANGE COLUMN STREET_ADDRESS ADDRESS VARCHAR(40);

-- 2. Escreva uma query SQL para alterar o nome da coluna region_name para region , mantendo o mesmo tipo e tamanho de dados.
ALTER TABLE regions CHANGE COLUMN REGION_NAME REGION VARCHAR(25);

-- 3. Escreva uma query SQL para alterar o nome da coluna country_name para country, mantendo o mesmo tipo e tamanho de dados.
ALTER TABLE countries CHANGE COLUMN COUNTRY_NAME COUNTRY VARCHAR(40);