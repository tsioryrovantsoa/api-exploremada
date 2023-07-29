CREATE OR REPLACE VIEW lieu_lib as
SELECT 
    lieu.*,
    utilisateur.nom AS nom_utilisateur,
    typelieu.nom AS nom_typelieu,
    ville.nom AS nom_ville
FROM lieu
LEFT JOIN utilisateur ON lieu.id_utilisateur = utilisateur.id
LEFT JOIN typelieu ON lieu.id_type_lieu = typelieu.id
LEFT JOIN ville ON lieu.id_ville = ville.id;

SELECT * FROM lieu_lib \G;

ALTER TABLE `ville` ADD UNIQUE(`nom`);

ALTER TABLE `utilisateur` ADD UNIQUE(`email`);

ALTER TABLE `typelieu` ADD UNIQUE(`nom`);

ALTER TABLE `lieu` ADD UNIQUE(`nom`);

ALTER TABLE `lieu` ADD UNIQUE(`latitude`, `longitude`);

ALTER TABLE `lieu` CHANGE `is_populaire` `is_populaire` TINYINT(1) NULL DEFAULT '1';