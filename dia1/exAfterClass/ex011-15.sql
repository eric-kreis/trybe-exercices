-- 11. Escreva uma query que atualize a coluna PHONE_NUMBER,
-- de modo que todos os telefones iniciados por 515 agora devem iniciar com 777.
UPDATE hr.employees
	SET PHONE_NUMBER = REPLACE(PHONE_NUMBER, 515, 777)
WHERE PHONE_NUMBER LIKE '515%';

-- 12. Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.
SELECT * FROM hr.employees
WHERE LENGTH(FIRST_NAME) >= 8;

-- 13. Escreva uma query que exiba as seguintes informações de cada funcionário:
-- id, primeiro nome e ano no qual foi contratado (exiba somente o ano).
SELECT
	EMPLOYEE_ID,
    FIRST_NAME,
    YEAR(HIRE_DATE) AS HIRE_YEAR
FROM hr.employees;

-- 14. Escreva uma query que exiba as seguintes informações de cada funcionário:
-- id , primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).
SELECT
	EMPLOYEE_ID,
    FIRST_NAME,
    DAY(HIRE_DATE) AS HIRE_DAY
FROM hr.employees;

-- 15. Escreva uma query que exiba as seguintes informações de cada funcionário:
-- id , primeiro nome e mês no qual foi contratado (exiba somente o mês).
SELECT
	EMPLOYEE_ID,
    FIRST_NAME,
    SUBSTRING(HIRE_DATE, 6, 2) AS HIRE_MONTH -- Another way; 
FROM hr.employees;
