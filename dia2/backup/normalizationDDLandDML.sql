-- MySQL dump 10.13  Distrib 8.0.26, for Linux (x86_64)
--
-- Host: localhost    Database: normalization
-- ------------------------------------------------------
-- Server version	8.0.26-0ubuntu0.20.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Funcionarios`
--

DROP TABLE IF EXISTS `Funcionarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Funcionarios` (
  `Funcionario_id` int NOT NULL AUTO_INCREMENT,
  `Nome` varchar(50) NOT NULL,
  `Sobrenome` varchar(50) NOT NULL,
  `DataCadastro` datetime NOT NULL,
  `Email` varchar(64) NOT NULL,
  `Telefone` varchar(50) NOT NULL,
  PRIMARY KEY (`Funcionario_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Funcionarios`
--

LOCK TABLES `Funcionarios` WRITE;
/*!40000 ALTER TABLE `Funcionarios` DISABLE KEYS */;
INSERT INTO `Funcionarios` VALUES (12,'Joseph','Rodrigues','2020-05-05 08:50:25','jo@gmail.com','(35)998552-1445'),(13,'André','Freeman','2020-05-05 09:00:00','andre1990@gmail.com','(47)99522-4996'),(14,'Cíntia','Duval','2020-05-05 10:55:35','cindy@outlook.com','(33)99855-4669'),(15,'Fernanda','Mendes','2020-05-05 11:45:40','fernandamendes@yahoo.com','(33)99200-1556');
/*!40000 ALTER TABLE `Funcionarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Setor_Funcionario`
--

DROP TABLE IF EXISTS `Setor_Funcionario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Setor_Funcionario` (
  `Setor_id` int NOT NULL,
  `Funcionario_id` int NOT NULL,
  PRIMARY KEY (`Setor_id`,`Funcionario_id`),
  KEY `Funcionario_id` (`Funcionario_id`),
  CONSTRAINT `Setor_Funcionario_ibfk_1` FOREIGN KEY (`Setor_id`) REFERENCES `Setores` (`Setor_id`),
  CONSTRAINT `Setor_Funcionario_ibfk_2` FOREIGN KEY (`Funcionario_id`) REFERENCES `Funcionarios` (`Funcionario_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Setor_Funcionario`
--

LOCK TABLES `Setor_Funcionario` WRITE;
/*!40000 ALTER TABLE `Setor_Funcionario` DISABLE KEYS */;
INSERT INTO `Setor_Funcionario` VALUES (1,12),(2,12),(3,13),(2,14),(4,14),(5,15);
/*!40000 ALTER TABLE `Setor_Funcionario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Setores`
--

DROP TABLE IF EXISTS `Setores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Setores` (
  `Setor_id` int NOT NULL AUTO_INCREMENT,
  `Nome` varchar(50) NOT NULL,
  PRIMARY KEY (`Setor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Setores`
--

LOCK TABLES `Setores` WRITE;
/*!40000 ALTER TABLE `Setores` DISABLE KEYS */;
INSERT INTO `Setores` VALUES (1,'Administração'),(2,'Vendas'),(3,'Operacional'),(4,'Estratégico'),(5,'Marketing');
/*!40000 ALTER TABLE `Setores` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-24 22:08:53
