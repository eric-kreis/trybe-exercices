-- 1. Usando o EXISTS na tabela books_lent e books, exiba o id e título dos livros que ainda não foram emprestados.
SELECT 
    id, title
FROM
    hotel.Books
WHERE
    NOT EXISTS( SELECT 
            *
        FROM
            hotel.Books_Lent
        WHERE
            book_id = id);

-- 2. Usando o EXISTS na tabela books_lent e books, exiba o id e título dos livros estão atualmente emprestados e que contêm a palavra "lost" no título.
SELECT 
    id, title
FROM
    hotel.Books
WHERE
    EXISTS( SELECT 
            *
        FROM
            hotel.Books_Lent
        WHERE
            book_id = id)
        AND title LIKE '%lost%';

-- 3. Usando a tabela carsales e customers, exiba apenas o nome dos clientes que ainda não compraram um carro.
SELECT 
    name
FROM
    hotel.Customers AS c
WHERE
    NOT EXISTS( SELECT 
            *
        FROM
            hotel.CarSales
        WHERE
            c.customerId = customerID);

-- 4. Usando o comando EXISTS em conjunto com JOIN e as tabelas cars , customers e carsales, exiba o nome do 
-- cliente e o modelo do carro de todos os clientes que fizeram compras de carros.
SELECT 
    cus.name, car.name
FROM
    hotel.Customers AS cus
        INNER JOIN
    hotel.Cars AS car
WHERE
    EXISTS( SELECT 
            *
        FROM
            hotel.CarSales
        WHERE
            cus.CustomerId = CustomerId
                AND carID = car.ID);