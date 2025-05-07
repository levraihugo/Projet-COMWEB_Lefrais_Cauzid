-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 07 mai 2025 à 15:46
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `profs`
--

-- --------------------------------------------------------

--
-- Structure de la table `profs`
--

CREATE TABLE `profs` (
  `Id_prof` int(11) NOT NULL,
  `Nom` text NOT NULL,
  `Prenom` text NOT NULL,
  `identifiant` text DEFAULT NULL,
  `mdp` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `profs`
--

INSERT INTO `profs` (`Id_prof`, `Nom`, `Prenom`, `identifiant`, `mdp`) VALUES
(1, 'Placin', 'Frederic', 'fplacin', NULL),
(2, 'Ricain', 'Amy', 'aricain', NULL),
(3, 'Pluzin', 'Justin', 'jpluzin', NULL),
(4, 'Tique', 'Coline', 'ctique', NULL);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `profs`
--
ALTER TABLE `profs`
  ADD PRIMARY KEY (`Id_prof`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `profs`
--
ALTER TABLE `profs`
  MODIFY `Id_prof` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
