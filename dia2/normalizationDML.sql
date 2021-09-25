INSERT INTO Funcionarios(Funcionario_id, Nome, Sobrenome, DataCadastro, Email, Telefone)
VALUES (12, 'Joseph', 'Rodrigues', '2020-05-05 08:50:25', 'jo@gmail.com', '(35)998552-1445'),
	(13, 'André', 'Freeman', '2020-05-05 9:00:00', 'andre1990@gmail.com', '(47)99522-4996'),
	(14, 'Cíntia', 'Duval', '2020-05-05 10:55:35', 'cindy@outlook.com', '(33)99855-4669'),
	(15, 'Fernanda', 'Mendes', '2020-05-05 11:45:40', 'fernandamendes@yahoo.com', '(33)99200-1556');


INSERT INTO Setores(Nome)
VALUES ('Administração'),
	('Vendas'),
    ('Operacional'),
    ('Estratégico'),
    ('Marketing');

INSERT INTO Setor_Funcionario(Setor_id, Funcionario_id)
VALUES (1, 12),
	(2, 12),
    (3, 13),
    (2, 14),
    (4, 14),
    (5, 15);
