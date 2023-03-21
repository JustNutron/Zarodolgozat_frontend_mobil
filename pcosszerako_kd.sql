-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2023. Már 16. 11:15
-- Kiszolgáló verziója: 10.4.6-MariaDB
-- PHP verzió: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `pcosszerako_kd`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `alaplap`
--

CREATE TABLE `alaplap` (
  `alaplap_id` int(11) NOT NULL,
  `alaplap_marka` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `alaplap_nev` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `alaplap_formatum` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `alaplap_memoria_foglalat` varchar(10) COLLATE utf8_hungarian_ci NOT NULL,
  `alaplap_processzor_foglalat` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `alaplap_kep` varchar(11) COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `alaplap`
--

INSERT INTO `alaplap` (`alaplap_id`, `alaplap_marka`, `alaplap_nev`, `alaplap_formatum`, `alaplap_memoria_foglalat`, `alaplap_processzor_foglalat`, `alaplap_kep`) VALUES
(1, 'ASUS', 'ASUS TUF GAMING B560M-PLUS Intel B560', 'Micro-ATX', 'DDR4', 'Intel 1200', 'a1'),
(2, 'MSI', 'MSI H410M-B Pro alaplap (7D82-001R)', 'Micro-ATX', 'DDR4', 'Intel 1200', 'a2'),
(3, 'GIGABYTE', 'GIGABYTE Alaplap S1700 B660M DS3H DDR4 INTEL B660', 'Micro-ATX', 'DDR4', 'Intel 1700', 'a3'),
(4, 'ASRock', 'ASRock B660M Pro RS alaplap', 'Micro-ATX', 'DDR4', 'Intel 1700', 'a4'),
(5, 'ASUS', 'ASUS TUF GAMING B550M-E alaplap', 'Micro-ATX', 'DDR4', 'AMD AM4', 'a5');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `gephaz`
--

CREATE TABLE `gephaz` (
  `gephaz_id` int(11) NOT NULL,
  `gephaz_marka` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `gephaz_nev` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `gephaz_alapszin` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `gephaz_alaplaptipus` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `gephaz_audiocsatlakozo` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `gephaz_beepitettventi` int(11) NOT NULL,
  `gephaz_kep` varchar(11) COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `gephaz`
--

INSERT INTO `gephaz` (`gephaz_id`, `gephaz_marka`, `gephaz_nev`, `gephaz_alapszin`, `gephaz_alaplaptipus`, `gephaz_audiocsatlakozo`, `gephaz_beepitettventi`, `gephaz_kep`) VALUES
(1, 'Zalman', 'i3', 'Fekete', 'ATX, Micro-ATX, Mini-ITX', 'Igen', 4, 'g1'),
(2, 'Be quiet!', 'Pure Base 500DX', 'Fekete', 'ATX, Micro-ATX, Mini-ITX', 'Igen', 3, 'g2'),
(3, 'NZXT', 'H7 Flow', 'Fehér', 'ATX', 'Igen', 2, 'g3'),
(4, 'Aerocool', 'ACCM-PB17143.21 Aero One Eclipse ARGB ', 'Fehér', 'ATX, Micro-ATX, Mini-ITX', 'Igen', 4, 'g4'),
(5, 'Sharkoon', 'RGB Slider White', 'Fehér', 'ATX', 'Igen', 1, 'g5');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `hattertar`
--

CREATE TABLE `hattertar` (
  `hattertar_id` int(11) NOT NULL,
  `hattertar_marka` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `hattertar_nev` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `hattertar_atvitelisebbesseg` int(11) NOT NULL,
  `hattertar_irasisebesseg` int(11) NOT NULL,
  `hattertar_olvasasisebesseg` int(11) NOT NULL,
  `hattertar_beepitesimeret` int(11) NOT NULL,
  `hattertar_kapacitas` int(11) NOT NULL,
  `hattertar_tipus` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `hattertar_interface` varchar(11) COLLATE utf8_hungarian_ci NOT NULL,
  `hattertar_kep` varchar(50) COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `hattertar`
--

INSERT INTO `hattertar` (`hattertar_id`, `hattertar_marka`, `hattertar_nev`, `hattertar_atvitelisebbesseg`, `hattertar_irasisebesseg`, `hattertar_olvasasisebesseg`, `hattertar_beepitesimeret`, `hattertar_kapacitas`, `hattertar_tipus`, `hattertar_interface`, `hattertar_kep`) VALUES
(1, 'KINGSTON', '480GB SATA3 2,5\" 7mm (SA400S37/480G) SSD', 6, 450, 500, 3, 480, 'SSD', 'SATA', 'h1'),
(2, 'Western Digital', 'Blue 2TB 7200rpm 256MB SATA3 3,5\" HDD WD20EZBX', 0, 0, 0, 0, 2000, 'HDD', '', 'h2'),
(3, 'Western Digital', '3.5\" HDD SATA-III 4TB 5400rpm 64MB Cache, CAVIAR P', 0, 0, 0, 0, 4500, 'HDD', '', 'h3'),
(4, 'Kingston', '2TB M.2 NVMe 2280 Fury Renegade (SFYRD/2000G) SSD', 0, 0, 0, 0, 0, 'SSD', '', 'h4');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `memoria`
--

CREATE TABLE `memoria` (
  `memoria_id` int(11) NOT NULL,
  `memoria_marka` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `memoria_nev` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `memoria_tipus` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `memoria_orajel` int(11) NOT NULL,
  `memoria_kapacitas` int(11) NOT NULL,
  `memoria_kep` varchar(50) COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `memoria`
--

INSERT INTO `memoria` (`memoria_id`, `memoria_marka`, `memoria_nev`, `memoria_tipus`, `memoria_orajel`, `memoria_kapacitas`, `memoria_kep`) VALUES
(1, 'Kingston', '4GB/1600MHz DDR-3 FURY Beast Red (KF316C10BR/4) me', 'DDR3', 1600, 4, 'm1'),
(2, 'Kingston', '8GB/1600MHz DDR-3 (KVR16S11/8) notebook memória', 'DDR3', 1600, 8, 'm2'),
(3, 'Kingston', '16GB/3200MHz DDR-4 (Kit of 2) FURY Beast Black (KF', 'DDR4', 3200, 16, 'm3'),
(4, 'G.Skill', 'RipJaws V 2x16GB 3600MHz DDR4 memória (F4-3600C18D', 'DDR4', 3600, 32, 'm4'),
(5, 'KINGMAX', 'NB Memória DDR4 4GB 2666MHz, 1.2V, CL19', 'DDR4', 2666, 4, 'm5');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `osszeallitott_gep`
--

CREATE TABLE `osszeallitott_gep` (
  `osszeallitott_gep_id` int(11) NOT NULL,
  `osszeallitott_gep_alaplap` int(11) NOT NULL,
  `osszeallitott_gep_processzor` int(11) NOT NULL,
  `osszeallitott_gep_videokartya` int(11) NOT NULL,
  `osszeallitott_gep_memoria` int(11) NOT NULL,
  `osszeallitott_gep_tapegyseg` int(11) NOT NULL,
  `osszeallitott_gep_felhasznalo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `osszeallitott_gep`
--

INSERT INTO `osszeallitott_gep` (`osszeallitott_gep_id`, `osszeallitott_gep_alaplap`, `osszeallitott_gep_processzor`, `osszeallitott_gep_videokartya`, `osszeallitott_gep_memoria`, `osszeallitott_gep_tapegyseg`, `osszeallitott_gep_felhasznalo`) VALUES
(7, 3, 1, 1, 1, 1, 1),
(8, 1, 1, 1, 1, 1, 1);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `processzor`
--

CREATE TABLE `processzor` (
  `processzor_id` int(11) NOT NULL,
  `processzor_marka` varchar(100) COLLATE utf8_hungarian_ci NOT NULL,
  `processzor_nev` varchar(100) COLLATE utf8_hungarian_ci NOT NULL,
  `processzor_ar` int(11) NOT NULL,
  `processzor_teljesitmeny` varchar(100) COLLATE utf8_hungarian_ci NOT NULL,
  `processzor_foglalat` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `processzor_gyart_tech` int(11) NOT NULL,
  `processzor_kep` varchar(100) COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `processzor`
--

INSERT INTO `processzor` (`processzor_id`, `processzor_marka`, `processzor_nev`, `processzor_ar`, `processzor_teljesitmeny`, `processzor_foglalat`, `processzor_gyart_tech`, `processzor_kep`) VALUES
(1, 'Intel', 'Core i5 12500 BX8071512500', 101089, '3000 Mhz', 'Intel 1700', 10, '1'),
(2, 'AMD', 'Ryzen 5 3600 BOX Wraith Stealth', 78590, '3600 Mhz', 'AMD AM4', 7, '2'),
(3, 'Intel', 'Core i7 11700 BOX BX8070811700', 153890, '2500', 'Intel 1200', 14, '3'),
(4, 'Intel', 'Core i3 10320 BOX BX8070110320', 55690, '3800 Mhz', 'Intel 1200', 14, '4'),
(5, 'AMD', 'Ryzen 7 5800X AM4 WOF 100-100000063WOF', 104290, '3800 Mhz', 'AMD AM4', 12, '5'),
(6, 'fasz', 'nincs értelme az életemnek', 3, 'FUUUU Mhz', 'bársony koporsó', 1, '');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `processzor_huto`
--

CREATE TABLE `processzor_huto` (
  `processzor_huto_id` int(11) NOT NULL,
  `processzor_huto_marka` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `processzor_huto_nev` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `processzor_huto_csapagytipus` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `processzor_huto_led_vilagitas` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `processzor_huto_processzor_foglalat` varchar(1500) COLLATE utf8_hungarian_ci NOT NULL,
  `processzor_huto_kep` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `processzor_huto`
--

INSERT INTO `processzor_huto` (`processzor_huto_id`, `processzor_huto_marka`, `processzor_huto_nev`, `processzor_huto_csapagytipus`, `processzor_huto_led_vilagitas`, `processzor_huto_processzor_foglalat`, `processzor_huto_kep`) VALUES
(1, 'Noctua', 'Noctua NH-D15 univerzális CPU hűtő', 'SSO (önstabilizáló csapágy)', 'Nem', 'AMD AM2, AMD AM2+, AMD AM3, AMD AM3+, AMD AM4, AMD FM1, AMD FM2, AMD FM2+, Intel 1150, Intel 1151, Intel 1155, Intel 1156, Intel 1700, Intel 2011, Intel 2011-3', 1),
(2, 'Be quiet!', 'Be quiet! Pure Rock Slim 2 BK030', 'Puska', 'Nem', 'AMD AM3+, AMD AM4, Intel 1150, Intel 1151, Intel 1155, Intel 1200', 2),
(3, 'ID-Cooling', 'ID-Cooling CPU Cooler - SE-207-TRX BLACK', 'Hidraulikus', 'Nem', 'AMD TRX4\r\n', 3),
(4, 'Cooler Master', 'Cooler Master Hyper 212 RGB Black Edition univerzá', 'Nincs adat', 'RGB', 'AMD AM2, AMD AM2+, AMD AM3, AMD AM4, AMD FM1, AMD FM2, Intel 1150, Intel 1151, Intel 1155, Intel 1156, Intel 1366, Intel 2011, Intel 2011-3, Intel 2066', 4),
(5, 'Enermax', 'Enermax ETS-T50 AXE ARGB fehér processzor hűtő (ET', 'Nincs adat', 'RGB', 'AMD AM2, AMD AM2+, AMD AM3, AMD AM3+, AMD AM4, AMD FM1, AMD FM2, AMD FM2+, Intel 1150, Intel 1151, Intel 1155, Intel 1156, Intel 1200, Intel 1356, Intel 1366, Intel 2011, Intel 2011-1, Intel 2011-3, Intel 2066', 5);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `roles`
--

INSERT INTO `roles` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'user', '2020-08-02 14:57:31', '2020-08-02 14:57:31'),
(2, 'moderator', '2020-08-02 14:57:31', '2020-08-02 14:57:31'),
(3, 'admin', '2020-08-02 14:57:31', '2020-08-02 14:57:31');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `tapegyseg`
--

CREATE TABLE `tapegyseg` (
  `tapegyseg_id` int(11) NOT NULL,
  `tapegyseg_marka` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `tapegyseg_nev` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `tapegyseg_teljesitmeny` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `tapegyseg_kep` varchar(50) COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `tapegyseg`
--

INSERT INTO `tapegyseg` (`tapegyseg_id`, `tapegyseg_marka`, `tapegyseg_nev`, `tapegyseg_teljesitmeny`, `tapegyseg_kep`) VALUES
(1, 'Thermaltake', 'Toughpower Grand RGB ATX', '1200W', 't1'),
(2, 'Cooler Master', 'Cooler Master MWE 650W', '650W', 't2'),
(3, 'Corsair', 'Corsair 550W 80+ Bronze CX550F RGB White CP-902022', '550W', 't3'),
(4, 'ASUS', 'ASUS ROG Strix 1000W 80+ Gold (ROG-STRIX-1000G) 90', '1000W', 't4'),
(5, 'ASUS', 'ASUS TUF-GAMING-750B TUF Gaming 750W tápegység (90', '750W', 't5');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'user', 'user', '$2a$08$gXM4pyuhZFlC72PeAwxrUOR0uA31/d2PdgnHP35JGV.0bQNiZBatS', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'mod', 'mod', '$2a$08$gXM4pyuhZFlC72PeAwxrUOR0uA31/d2PdgnHP35JGV.0bQNiZBatS', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'admin', 'admin', '$2a$08$97Ze1/hXfOX44WdC62Rq8uRkog9HYC1HukRX8eld2ZEKPyenM5v.G', '2020-08-02 15:03:59', '2020-08-02 15:03:59');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `user_roles`
--

CREATE TABLE `user_roles` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `roleId` int(11) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `user_roles`
--

INSERT INTO `user_roles` (`createdAt`, `updatedAt`, `roleId`, `userId`) VALUES
('0000-00-00 00:00:00', '0000-00-00 00:00:00', 1, 1),
('2020-08-02 15:04:00', '2020-08-02 15:04:00', 1, 3),
('0000-00-00 00:00:00', '0000-00-00 00:00:00', 2, 2),
('0000-00-00 00:00:00', '0000-00-00 00:00:00', 2, 3),
('2020-08-02 15:04:00', '2020-08-02 15:04:00', 3, 3);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `videokartya`
--

CREATE TABLE `videokartya` (
  `videokartya_id` int(11) NOT NULL,
  `videokartya_marka` varchar(50) NOT NULL,
  `videokartya_nev` varchar(50) NOT NULL,
  `videokartya_belsomb` varchar(50) NOT NULL,
  `videokartya_directx` varchar(50) NOT NULL,
  `videokartya_displayport` varchar(50) NOT NULL,
  `videokartya_foglalat` varchar(50) NOT NULL,
  `videokartya_fogyasztas` int(11) NOT NULL,
  `videokartya_kep` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- A tábla adatainak kiíratása `videokartya`
--

INSERT INTO `videokartya` (`videokartya_id`, `videokartya_marka`, `videokartya_nev`, `videokartya_belsomb`, `videokartya_directx`, `videokartya_displayport`, `videokartya_foglalat`, `videokartya_fogyasztas`, `videokartya_kep`) VALUES
(1, 'ASUS ', 'TUF-RTX3060-O12G-V2-GAMING', '12228 ', 'DirectX 12.2', '3 ', 'PCI-E 16x 4.0', 170, 'v1'),
(2, 'Gainward', 'RTX 4090 Phantom 24GB GDDR6X ', '24576 ', 'DirectX 12.2', '1', 'PCI-E 16x 4.0 ', 450, 'v2'),
(3, 'Zotac', 'GAMING GeForce RTX 3080 Ti Trinity OC', '12228 ', 'DirectX 12.2', '3 ', 'PCI-E 16x 4.0 ', 350, 'v3'),
(4, 'Asus', 'GeForce GTX 1050 Ti Cerberus Advanced Edition 4GB ', '4096 ', 'DirectX 12', '1 ', 'PCI-E 16x 3.0', 300, 'v4'),
(5, 'PowerColor ', 'Radeon RX 550 Red Dragon 4GB GDDR5 128-bit', '4096 ', 'DirectX 12', '3', 'PCI-E 16x 3.0 ', 250, 'v5');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `alaplap`
--
ALTER TABLE `alaplap`
  ADD PRIMARY KEY (`alaplap_id`);

--
-- A tábla indexei `gephaz`
--
ALTER TABLE `gephaz`
  ADD PRIMARY KEY (`gephaz_id`);

--
-- A tábla indexei `hattertar`
--
ALTER TABLE `hattertar`
  ADD PRIMARY KEY (`hattertar_id`);

--
-- A tábla indexei `memoria`
--
ALTER TABLE `memoria`
  ADD PRIMARY KEY (`memoria_id`);

--
-- A tábla indexei `osszeallitott_gep`
--
ALTER TABLE `osszeallitott_gep`
  ADD PRIMARY KEY (`osszeallitott_gep_id`),
  ADD KEY `osszeallitott_gep_alaplap` (`osszeallitott_gep_alaplap`),
  ADD KEY `osszeallitott_gep_processzor` (`osszeallitott_gep_processzor`),
  ADD KEY `osszeallitott_gep_memoria` (`osszeallitott_gep_memoria`),
  ADD KEY `osszeallitott_gep_tapegyseg` (`osszeallitott_gep_tapegyseg`),
  ADD KEY `osszeallitott_gep_videokartya` (`osszeallitott_gep_videokartya`);

--
-- A tábla indexei `processzor`
--
ALTER TABLE `processzor`
  ADD PRIMARY KEY (`processzor_id`);

--
-- A tábla indexei `processzor_huto`
--
ALTER TABLE `processzor_huto`
  ADD PRIMARY KEY (`processzor_huto_id`);

--
-- A tábla indexei `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `tapegyseg`
--
ALTER TABLE `tapegyseg`
  ADD PRIMARY KEY (`tapegyseg_id`);

--
-- A tábla indexei `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`roleId`,`userId`),
  ADD KEY `userId` (`userId`);

--
-- A tábla indexei `videokartya`
--
ALTER TABLE `videokartya`
  ADD PRIMARY KEY (`videokartya_id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `alaplap`
--
ALTER TABLE `alaplap`
  MODIFY `alaplap_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT a táblához `gephaz`
--
ALTER TABLE `gephaz`
  MODIFY `gephaz_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT a táblához `hattertar`
--
ALTER TABLE `hattertar`
  MODIFY `hattertar_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT a táblához `memoria`
--
ALTER TABLE `memoria`
  MODIFY `memoria_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT a táblához `osszeallitott_gep`
--
ALTER TABLE `osszeallitott_gep`
  MODIFY `osszeallitott_gep_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT a táblához `processzor`
--
ALTER TABLE `processzor`
  MODIFY `processzor_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT a táblához `processzor_huto`
--
ALTER TABLE `processzor_huto`
  MODIFY `processzor_huto_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT a táblához `tapegyseg`
--
ALTER TABLE `tapegyseg`
  MODIFY `tapegyseg_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT a táblához `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT a táblához `videokartya`
--
ALTER TABLE `videokartya`
  MODIFY `videokartya_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `osszeallitott_gep`
--
ALTER TABLE `osszeallitott_gep`
  ADD CONSTRAINT `osszeallitott_gep_ibfk_1` FOREIGN KEY (`osszeallitott_gep_alaplap`) REFERENCES `alaplap` (`alaplap_id`),
  ADD CONSTRAINT `osszeallitott_gep_ibfk_2` FOREIGN KEY (`osszeallitott_gep_processzor`) REFERENCES `processzor` (`processzor_id`),
  ADD CONSTRAINT `osszeallitott_gep_ibfk_3` FOREIGN KEY (`osszeallitott_gep_memoria`) REFERENCES `memoria` (`memoria_id`),
  ADD CONSTRAINT `osszeallitott_gep_ibfk_4` FOREIGN KEY (`osszeallitott_gep_tapegyseg`) REFERENCES `tapegyseg` (`tapegyseg_id`),
  ADD CONSTRAINT `osszeallitott_gep_ibfk_5` FOREIGN KEY (`osszeallitott_gep_videokartya`) REFERENCES `videokartya` (`videokartya_id`);

--
-- Megkötések a táblához `user_roles`
--
ALTER TABLE `user_roles`
  ADD CONSTRAINT `user_roles_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_roles_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
