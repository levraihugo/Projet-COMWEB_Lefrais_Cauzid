-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : mer. 07 mai 2025 à 14:34
-- Version du serveur :  10.3.39-MariaDB-0ubuntu0.20.04.2
-- Version de PHP : 7.4.3-4ubuntu2.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `hcauzid`
--

-- --------------------------------------------------------

--
-- Structure de la table `Notes`
--

CREATE TABLE `Notes` (
  `Id` int(11) NOT NULL,
  `Nom` text NOT NULL,
  `Prenom` text NOT NULL,
  `Matiere` text NOT NULL,
  `Note` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `Notes`
--

INSERT INTO `Notes` (`Id`, `Nom`, `Prenom`, `Matiere`, `Note`) VALUES
(1, 'O\'Twalett', 'Eva', 'Anglais', 11),
(2, 'Party', 'Paul', 'Anglais', 15),
(3, 'Comm', 'Paul', 'Anglais', 15),
(4, 'O\'Twalett', 'Eva', 'Maths', 17),
(5, 'Party', 'Paul', 'Maths', 13),
(6, 'Comm', 'Paul', 'Maths', 14),
(7, 'O\'Twalett', 'Eva', 'Cognitique', 11),
(8, 'Party', 'Paul', 'Cognitique', 12),
(9, 'Comm', 'Paul', 'Cognitique', 10),
(10, 'Party', 'Paul', 'Informatique', 16),
(11, 'Comm', 'Paul', 'Informatique', 17);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Notes`
--
ALTER TABLE `Notes`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Notes`
--
ALTER TABLE `Notes`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
