-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 24, 2026 at 08:54 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cipobolt`
--
CREATE DATABASE IF NOT EXISTS `cipobolt` DEFAULT CHARACTER SET utf8 COLLATE utf8_hungarian_ci;
USE `cipobolt`;

-- --------------------------------------------------------

--
-- Table structure for table `cipok`
--

CREATE TABLE `cipok` (
  `cipo_id` int(11) NOT NULL,
  `nev` varchar(100) DEFAULT NULL,
  `meret` int(11) DEFAULT NULL,
  `ar` int(11) DEFAULT NULL,
  `marka_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- Dumping data for table `cipok`
--

INSERT INTO `cipok` (`cipo_id`, `nev`, `meret`, `ar`, `marka_id`) VALUES
(1, 'Air Max 270', 42, 45990, 1),
(2, 'Ultraboost 22', 43, 55990, 2),
(3, 'RS-X Efekt', 41, 32990, 3),
(4, 'Classic Leather', 42, 28990, 4),
(5, 'Go Walk 6', 40, 24990, 5),
(6, 'Air Force 1', 44, 39990, 1),
(7, 'Superstar', 42, 29990, 2),
(8, 'Smash v2', 43, 21990, 3),
(9, 'Air Zoom Pegasus 40', 41, 42990, 1),
(10, 'NMD_R1', 42, 37990, 2),
(11, 'Future Rider', 40, 26990, 3),
(12, 'Nano X3', 43, 34990, 4),
(13, 'Arch Fit', 41, 27990, 5),
(14, 'Blazer Mid 77', 42, 35990, 1),
(15, 'Gazelle', 43, 31990, 2),
(16, 'Cali Dream', 39, 28990, 3),
(17, 'Club C 85', 42, 26990, 4),
(18, 'Dynamight 2.0', 40, 22990, 5),
(19, 'React Infinity Run', 44, 49990, 1),
(20, 'Forum Low', 42, 33990, 2),
(21, 'Suede Classic', 41, 25990, 3),
(22, 'Zig Kinetica', 43, 37990, 4),
(23, 'Flex Appeal 4.0', 39, 21990, 5),
(24, 'Air Max SC', 42, 30990, 1),
(25, 'Duramo SL', 44, 19990, 2),
(26, 'X-Ray 2 Square', 41, 23990, 3),
(27, 'Royal Glide', 42, 24990, 4),
(28, 'Summits', 40, 18990, 5),
(29, 'Air Max 90', 43, 44990, 1),
(30, 'Terrex AX3', 44, 38990, 2),
(31, 'Enzo 2', 42, 20990, 3),
(32, 'Floatride Energy 4', 41, 35990, 4),
(33, 'Bobs Squad', 39, 19990, 5),
(34, 'Air Huarache', 42, 42990, 1),
(35, 'ZX 750', 43, 29990, 2),
(36, 'Ignite Flash', 44, 31990, 3),
(37, 'Workout Plus', 42, 27990, 4),
(38, 'Equalizer 4.0', 41, 23990, 5),
(39, 'Downshifter 12', 40, 18990, 1),
(40, 'Runfalcon 3.0', 42, 17990, 2);

-- --------------------------------------------------------

--
-- Table structure for table `markak`
--

CREATE TABLE `markak` (
  `marka_id` int(11) NOT NULL,
  `nev` varchar(50) DEFAULT NULL,
  `szarmazasi_orszag` varchar(50) DEFAULT NULL,
  `img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- Dumping data for table `markak`
--

INSERT INTO `markak` (`marka_id`, `nev`, `szarmazasi_orszag`, `img`) VALUES
(1, 'Nike', 'USA', 'https://pngimg.com/uploads/nike/nike_PNG12.png'),
(2, 'Adidas', 'Németország', 'https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png'),
(3, 'Puma', 'Németország', 'https://logodownload.org/wp-content/uploads/2014/07/puma-logo-1-1.png'),
(4, 'Reebok', 'USA', 'https://logodownload.org/wp-content/uploads/2017/06/reebok-logo-1.png'),
(5, 'Skechers', 'USA', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/SKECHERS_logo.png/960px-SKECHERS_logo.png?_=20191205095926');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cipok`
--
ALTER TABLE `cipok`
  ADD PRIMARY KEY (`cipo_id`),
  ADD KEY `marka_id` (`marka_id`);

--
-- Indexes for table `markak`
--
ALTER TABLE `markak`
  ADD PRIMARY KEY (`marka_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cipok`
--
ALTER TABLE `cipok`
  MODIFY `cipo_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `markak`
--
ALTER TABLE `markak`
  MODIFY `marka_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cipok`
--
ALTER TABLE `cipok`
  ADD CONSTRAINT `cipok_ibfk_1` FOREIGN KEY (`marka_id`) REFERENCES `markak` (`marka_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
