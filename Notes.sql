SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


CREATE TABLE `notes` (
  `Id` int(11) NOT NULL,
  `Matiere` text NOT NULL,
  `Note` int(11) NOT NULL,
  `Id_eleve` int(11) DEFAULT NULL,
  `Id_prof` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `notes` (`Id`, `Matiere`, `Note`, `Id_eleve`, `Id_prof`) VALUES
(1, 'Anglais', 11, 1, 2),
(2, 'Anglais', 15, 2, 2),
(3, 'Anglais', 15, 3, 2),
(4, 'Maths', 17, 1, 3),
(5, 'Maths', 13, 2, 3),
(6, 'Maths', 14, 3, 3),
(7, 'Cognitique', 11, 1, 4),
(8, 'Cognitique', 12, 2, 4),
(9, 'Cognitique', 10, 3, 4),
(10, 'Informatique', 16, 2, 1),
(11, 'Informatique', 17, 3, 1);


ALTER TABLE `notes`
  ADD PRIMARY KEY (`Id`);


ALTER TABLE `notes`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
