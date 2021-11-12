DROP DATABASE IF EXISTS cep_lookup;
CREATE DATABASE IF NOT EXISTS cep_lookup;

USE cep_lookup;

CREATE TABLE IF NOT EXISTS ceps (
	cep VARCHAR(8) PRIMARY KEY,
    logradouro VARCHAR(50) NOT NULL,
    bairro VARCHAR(20) NOT NULL,
    localidade VARCHAR(20) NOT NULL,
    uf VARCHAR(2) NOT NULL
);

INSERT INTO ceps(cep, logradouro, bairro, localidade, uf)
VALUES ('70254071', 'SQS 313', 'Asa Sul', 'Bloco H', 'DF');
