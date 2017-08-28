-- MySQL dump 10.13  Distrib 5.7.12, for Win64 (x86_64)
--
-- Host: web-db.umbc.edu    Database: web_library_prod
-- ------------------------------------------------------
-- Server version	5.5.52-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `LITS_Stack_Reports`
--

DROP TABLE IF EXISTS `LITS_Stack_Reports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `LITS_Stack_Reports` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `report` text,
  `user` varchar(40) NOT NULL,
  `tag` varchar(25) NOT NULL,
  `floor` int(3) unsigned DEFAULT NULL,
  `resolved` bit(1) DEFAULT b'0',
  `assigned` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `LITS_Stack_Reports`
--

LOCK TABLES `LITS_Stack_Reports` WRITE;
/*!40000 ALTER TABLE `LITS_Stack_Reports` DISABLE KEYS */;
INSERT INTO `LITS_Stack_Reports` VALUES (10,'2017-07-05','','beta_user','LIB1PC01',1,NULL,NULL),(11,'2017-07-05','Broken mouse','beta_user','LIB3PC05',3,NULL,NULL),(12,'2017-07-05','ASD','beta_user','LIB1PC01',1,'',NULL),(13,'2017-07-05','asd','beta_user','LIB1PC01',1,'\0',NULL),(14,'2017-07-05','The mouse is broken but I don\'t know what\'s happening now.','beta_user','LIB1PC01',1,'',NULL),(15,'2017-07-05','asd','beta_user','LIB1PC01',1,'',NULL),(16,'2017-07-05','asdasd','beta_user','LIB1PC01',1,'\0',NULL),(17,'2017-07-05','asd','beta_user','LIB1PC01',1,'\0',NULL),(23,'2017-08-16','Broken keyboard, needs to be replaced pls','beta_user','LIB6PC13',6,'',NULL),(24,'2017-08-16','','beta_user','LIB6PC11',6,'',NULL),(25,'2017-08-16','test','beta_user','LIB6PC11',6,'',NULL),(26,'2017-08-17','Computer sux','beta_user','7-01-PR',7,'\0',NULL),(27,'2017-08-17','New speakers needed','beta user','LIB1PC11',1,'',NULL),(28,'2017-08-20','I have been on the public saying this many of times baarry','beta_user','1-K-3',1,'',NULL),(29,'2017-08-20','Needs a new keyboard and mouse','beta_user','Seminar',1,'',NULL),(30,'2017-08-20','What were they going to do without him','beta_user','121 (AT lab)',1,'\0',NULL),(31,'2017-08-20','HDMI cable needs to be replaced','beta_user','Room 257',2,'',NULL),(32,'2017-08-23','Computer isn\'t turning on','beta_user','RLC-09',1,'\0',NULL),(33,'2017-08-23','Missing keyboard','beta_user','LIB7MAC08',7,'',NULL),(34,'2017-08-23','Kiosk station is down','beta_user','7-01-PR',7,'\0',NULL),(35,'2017-08-23','Needs an image','beta_user','LIB6PC14',6,'',NULL),(42,'2017-08-24','','beta_user','LIB1PC01',1,'',NULL),(43,'2017-08-24','asd','beta_user','LIB1PC01',1,'',NULL),(44,'2017-08-26','asd','beta_user','LIB1PC02',1,'\0',NULL),(45,'2017-08-26','Jeremy borquoise today','beta_user','1-K-3',1,'',NULL),(46,'2017-08-26','Stars in the sky','beta_user','RLC-03',1,'\0',NULL),(47,'2017-08-26','Cosmos that\'s where I got the information from','beta_user','LIB7PC23',7,'',NULL),(48,'2017-08-26','Blind faith','beta_user','LIB1PC02',1,'',NULL),(57,'2017-08-27','KEY BOARD IS BROK','beta_user','LIB1PC01',1,'',NULL),(58,'2017-08-27','Computer unplugged','beta_user','LIB1PC29',1,'',NULL),(59,'2017-08-27','Bb stepped on it, yet again','beta_user','LIB1PC02',1,'\0',NULL),(60,'2017-08-28','asdasd','beta_user','LIB1PC01',1,'\0',NULL),(61,'2017-08-28','Unplugged','beta_user','LIB7MAC29',7,'',NULL);
/*!40000 ALTER TABLE `LITS_Stack_Reports` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-08-28 15:40:42
