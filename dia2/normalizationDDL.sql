CREATE TABLE Funcionarios(
	Funcionario_id INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(50) NOT NULL,
    Sobrenome VARCHAR(50) NOT NULL,
    DataCadastro DATETIME NOT NULL,
	Email VARCHAR(64) NOT NULL,
    Telefone VARCHAR(50) NOT NULL
);

CREATE TABLE Setores(
	Setor_id INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(50) NOT NULL
);

CREATE TABLE Setor_Funcionario(
	Setor_id INT,
    Funcionario_id INT,
    CONSTRAINT PRIMARY KEY(Setor_id, Funcionario_id),
    FOREIGN KEY (Setor_id) REFERENCES Setores (Setor_id),
    FOREIGN KEY (Funcionario_id) REFERENCES Funcionarios (Funcionario_id)
);
