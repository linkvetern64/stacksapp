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
-- Table structure for table `LITS_Stack_Computers`
--

DROP TABLE IF EXISTS `LITS_Stack_Computers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `LITS_Stack_Computers` (
  `floor` tinyint(1) unsigned DEFAULT NULL,
  `tag` varchar(45) DEFAULT NULL,
  `UID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`UID`)
) ENGINE=InnoDB AUTO_INCREMENT=261 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `LITS_Stack_Computers`
--

LOCK TABLES `LITS_Stack_Computers` WRITE;
/*!40000 ALTER TABLE `LITS_Stack_Computers` DISABLE KEYS */;
INSERT INTO `LITS_Stack_Computers` VALUES (1,'LIB1PC01',1),(1,'LIB1PC02',2),(1,'LIB1PC03',3),(1,'LIB1PC04',4),(1,'LIB1PC05',5),(1,'LIB1PC06',6),(1,'LIB1PC07',7),(1,'LIB1PC08',8),(1,'LIB1PC09',9),(1,'LIB1PC10',10),(1,'LIB1PC11',11),(1,'LIB1PC12',12),(1,'LIB1PC13',13),(1,'LIB1PC14',14),(1,'LIB1PC15',15),(1,'LIB1PC16',16),(1,'LIB1PC17',17),(1,'LIB1PC18',18),(1,'LIB1PC19',19),(1,'LIB1PC20',20),(1,'LIB1PC21',21),(1,'LIB1PC22',22),(1,'LIB1PC23',23),(1,'LIB1PC24',24),(1,'LIB1PC25',25),(1,'LIB1PC26',26),(1,'LIB1PC27',27),(1,'LIB1PC28',28),(1,'LIB1PC29',29),(1,'LIB1PC30',30),(1,'LIB1PC31',31),(1,'LIB1PC32',32),(1,'LIB1PC33',33),(1,'LIB1PC34',34),(1,'LIB1PC35',35),(1,'LIB1PC36',36),(1,'LIB1PC37',37),(1,'LIB1PC38',38),(1,'LIB1PC39',39),(1,'LIB1PC40',40),(1,'LIB1PC41',41),(1,'LIB1PC42',42),(1,'LIB1PC43',43),(1,'LIB1PC44',44),(1,'LIB1PC45',45),(1,'LIB1PC46',46),(1,'RLC-01',47),(1,'RLC-02',48),(1,'RLC-03',49),(1,'RLC-04',50),(1,'RLC-05',51),(1,'RLC-06',52),(1,'RLC-07',53),(1,'RLC-08',54),(1,'RLC-09',55),(1,'RLC-10',56),(1,'RLC-11',57),(1,'RLC-12',58),(1,'RLC-13',59),(1,'RLC-14',60),(1,'RLC-15',61),(1,'RLC-16',62),(1,'RLC-17',63),(1,'Seminar',64),(1,'121 (AT lab)',65),(1,'122 (AT lab)',66),(1,'1-01-PR',67),(1,'1-02-PR',68),(1,'1-03-PR',69),(1,'1-K-1',70),(1,'1-K-2',71),(1,'1-K-3',72),(2,'LIB2PC01',73),(2,'LIB2PC02',74),(2,'LIB2PC03',75),(2,'LIB2PC04',76),(2,'LIB2PC05',77),(2,'LIB2PC06',78),(2,'LIB2PC07',79),(2,'LIB2PC08',80),(2,'LIB2PC09',81),(2,'LIB2PC10',82),(2,'LIB2PC11',83),(2,'LIB2PC12',84),(2,'LIB2PC13',85),(2,'LIB2PC14',86),(2,'LIB2MAC02',87),(2,'LIB2MAC03',88),(2,'LIB2MAC04',89),(2,'LIB2MAC05',90),(2,'LIB2MAC06',91),(2,'LIB2MAC07',92),(2,'LIB2MAC08',93),(2,'LIB2MAC09',94),(2,'LIB2MAC10',95),(2,'LIB2MAC11',96),(2,'LIB2MAC12',97),(2,'LIB2MAC13',98),(2,'LIB2MAC14',99),(2,'LIB2MAC15',100),(2,'LIB2MAC16',101),(2,'LIB2MAC17',102),(2,'LIB2MAC18',103),(2,'LIB2MAC19',104),(2,'LIB2MAC20',105),(2,'LIB2MAC21',106),(2,'LIB2MAC22',107),(2,'LIB2MAC23',108),(2,'LIB2MAC24',109),(2,'LIB2MAC25',110),(2,'LIB2MAC26',111),(2,'LIB2MAC27',112),(2,'LIB2MAC28',113),(2,'LIB2MAC29',114),(2,'LIB2MAC30',115),(2,'LIB2MAC31',116),(2,'LIB2MAC32',117),(2,'LIB2MAC33',118),(2,'LIB2MAC34',119),(2,'LIB2MAC35',120),(2,'LIB2MAC36',121),(2,'LIB2MAC37',122),(2,'LIB2MAC38',123),(2,'LIB2MAC39',124),(2,'2-01-K',125),(2,'2-02-K',126),(2,'2-011-S',127),(2,'2-01-PR',128),(2,'Room 257',129),(3,'LIB3PC01',130),(3,'LIB3PC02',131),(3,'LIB3PC03',132),(3,'LIB3PC04',133),(3,'LIB3PC05',134),(3,'3-K-1',135),(4,'LIB4PC01',136),(4,'LIB4PC02',137),(4,'LIB4PC03',138),(4,'LIB4PC04',139),(4,'LIB4PC05',140),(4,'LIB4PC06',141),(4,'LIB4PC07',142),(4,'LIB4PC08',143),(4,'LIB4PC09',144),(4,'LIB4PC10',145),(4,'LIB4PC11',146),(4,'LIB4PC12',147),(4,'LIB4PC13',148),(4,'LIB4PC14',149),(4,'LIB4PC15',150),(4,'LIB4PC16',151),(4,'LIB4PC17',152),(4,'LIB4PC18',153),(4,'4-01-K',154),(5,'LIB5PC01',155),(5,'LIB5PC02',156),(5,'LIB5PC03',157),(5,'LIB5PC04',158),(5,'LIB5PC05',159),(5,'LIB5PC06',160),(5,'LIB5PC07',161),(5,'LIB5PC08',162),(5,'LIB5PC09',163),(5,'LIB5PC10',164),(5,'LIB5PC11',165),(5,'LIB5PC12',166),(5,'LIB5PC13',167),(5,'LIB5PC14',168),(5,'LIB5PC15',169),(5,'LIB5PC16',170),(5,'5-01-K',171),(6,'LIB6PC01',172),(6,'LIB6PC02',173),(6,'LIB6PC03',174),(6,'LIB6PC04',175),(6,'LIB6PC05',176),(6,'LIB6PC06',177),(6,'LIB6PC07',178),(6,'LIB6PC08',179),(6,'LIB6PC09',180),(6,'LIB6PC10',181),(6,'LIB6PC11',182),(6,'LIB6PC12',183),(6,'LIB6PC13',184),(6,'LIB6PC14',185),(6,'LIB6PC15',186),(6,'LIB6PC16',187),(7,'LIB7PC01',188),(7,'LIB7PC02',189),(7,'LIB7PC03',190),(7,'LIB7PC04',191),(7,'LIB7PC05',192),(7,'LIB7PC06',193),(7,'LIB7PC07',194),(7,'LIB7PC08',195),(7,'LIB7PC09',196),(7,'LIB7PC10',197),(7,'LIB7PC11',198),(7,'LIB7PC12',199),(7,'LIB7PC13',200),(7,'LIB7PC14',201),(7,'LIB7PC15',202),(7,'LIB7PC16',203),(7,'LIB7PC17',204),(7,'LIB7PC18',205),(7,'LIB7PC19',206),(7,'LIB7PC20',207),(7,'LIB7PC21',208),(7,'LIB7PC22',209),(7,'LIB7PC23',210),(7,'LIB7PC24',211),(7,'LIB7PC25',212),(7,'LIB7PC26',213),(7,'LIB7PC27',214),(7,'LIB7PC28',215),(7,'LIB7PC29',216),(7,'LIB7PC30',217),(7,'LIB7PC31',218),(7,'LIB7PC32',219),(7,'LIB7PC33',220),(7,'LIB7PC34',221),(7,'LIB7PC35',222),(7,'LIB7MAC02',223),(7,'LIB7MAC03',224),(7,'LIB7MAC04',225),(7,'LIB7MAC05',226),(7,'LIB7MAC06',227),(7,'LIB7MAC07',228),(7,'LIB7MAC08',229),(7,'LIB7MAC09',230),(7,'LIB7MAC10',231),(7,'LIB7MAC11',232),(7,'LIB7MAC12',233),(7,'LIB7MAC13',234),(7,'LIB7MAC14',235),(7,'LIB7MAC15',236),(7,'LIB7MAC16',237),(7,'LIB7MAC17',238),(7,'LIB7MAC18',239),(7,'LIB7MAC19',240),(7,'LIB7MAC20',241),(7,'LIB7MAC21',242),(7,'LIB7MAC22',243),(7,'LIB7MAC23',244),(7,'LIB7MAC24',245),(7,'LIB7MAC25',246),(7,'LIB7MAC26',247),(7,'LIB7MAC27',248),(7,'LIB7MAC28',249),(7,'LIB7MAC29',250),(7,'LIB7MAC30',251),(7,'7-01-K',252),(7,'7-01-PR',253),(4,'Study Rm. 454',254),(4,'Study Rm. 455',255),(4,'Study Rm. 456',256),(4,'Study Rm. 457',257),(1,'LIB1PC78',260);
/*!40000 ALTER TABLE `LITS_Stack_Computers` ENABLE KEYS */;
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