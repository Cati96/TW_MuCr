CREATE DATABASE IF NOT EXISTS `AnCoWe_Database` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `AnCoWe_Database`;

CREATE TABLE IF NOT EXISTS `Rank` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `punctaj` text,
  `user_id` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `SaveData` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `save_data` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `Users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` text,
  `password` text,
  `nume` text,
  `adresa` text,
  `email` text,
  `telefon` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
