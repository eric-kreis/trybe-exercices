-- 16. Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.
SELECT UCASE(FIRST_NAME) AS UPPER_CASE_NAME FROM hr.employees;

-- 17: Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.
SELECT LAST_NAME, HIRE_DATE FROM hr.employees
WHERE DATE(HIRE_DATE) BETWEEN '1987-07-01' AND '1987-07-30';

-- 18: Escreva uma query que exiba as seguintes informações de cada funcionário:
-- nome , sobrenome , tempo que trabalha na empresa (em dias) .
SELECT
	LAST_NAME,
    DATEDIFF(CURRENT_DATE(), HIRE_DATE) AS WORKED_DAYS
FROM hr.employees