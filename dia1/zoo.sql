-- animals DDL;
CREATE TABLE `animals` (
  `animal_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(48) NOT NULL,
  `specie` varchar(48) NOT NULL,
  `sex` varchar(48) NOT NULL,
  `age` int NOT NULL,
  `location` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`animal_id`)
);

-- managers DDL;
CREATE TABLE `managers` (
  `manager_id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(48) NOT NULL,
  `last_name` varchar(48) NOT NULL,
  PRIMARY KEY (`manager_id`)
);

-- caretakers DDL;
CREATE TABLE `caretakers` (
  `caretaker_id` int NOT NULL AUTO_INCREMENT,
  `manager_id` int DEFAULT NULL,
  PRIMARY KEY (`caretaker_id`),
  KEY `manager_id` (`manager_id`),
  CONSTRAINT `caretakers_ibfk_1` FOREIGN KEY (`manager_id`) REFERENCES `managers` (`manager_id`)
);

-- caretaker_animal DDL;
CREATE TABLE `caretaker_animal` (
  `caretaker_id` int NOT NULL,
  `animal_id` int NOT NULL,
  PRIMARY KEY (`caretaker_id`,`animal_id`),
  KEY `animal_id` (`animal_id`),
  CONSTRAINT `caretaker_animal_ibfk_1` FOREIGN KEY (`caretaker_id`) REFERENCES `caretakers` (`caretaker_id`),
  CONSTRAINT `caretaker_animal_ibfk_2` FOREIGN KEY (`animal_id`) REFERENCES `animals` (`animal_id`)
);
