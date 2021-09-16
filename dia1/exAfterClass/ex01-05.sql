-- 1. Escreva uma query que exiba o maior salário da tabela.
SELECT MAX(SALARY) AS MAXIMUN_SALARY FROM hr.employees;

-- 2. Escreva uma query que exiba a diferença entre o maior e o menor salário.
SELECT MAX(SALARY) - MIN(SALARY) AS SALARY_DIFF FROM hr.employees;

-- 3. Escreva uma query que exiba a média salarial de cada JOB_ID , ordenando pela média salarial em ordem decrescente.
SELECT JOB_ID, AVG(SALARY) AS AVERAGE_SALARY FROM hr.employees
GROUP BY JOB_ID
ORDER BY AVERAGE_SALARY DESC;

-- 4. Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.
SELECT SUM(SALARY) AS SALARY_SUM FROM hr.employees;

-- 5. Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários.
-- Todos os valores devem ser formatados para ter apenas duas casas decimais.
SELECT
	ROUND(MAX(SALARY), 2) AS MAXIMUN_SALARY,
    ROUND(MIN(SALARY), 2) AS MINIMUN_SALARY,
    ROUND(SUM(SALARY), 2) AS SALARY_SUM,
    ROUND(AVG(SALARY), 2) AS SALARY_AVAREGE
FROM hr.employees;
