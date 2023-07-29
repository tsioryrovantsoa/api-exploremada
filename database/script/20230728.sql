ALTER TABLE utilisateur
ADD FOREIGN KEY (id_langue) REFERENCES langue (id);
ALTER TABLE lieu_image
ADD FOREIGN KEY (id_lieu) REFERENCES lieu (id);
ALTER TABLE lieu_video
ADD FOREIGN KEY (id_lieu) REFERENCES lieu (id);
ALTER TABLE lieu_html
ADD FOREIGN KEY (id_lieu) REFERENCES lieu (id);
ALTER TABLE favoris
ADD FOREIGN KEY (id_lieu) REFERENCES lieu (id);
ALTER TABLE favoris
ADD FOREIGN KEY (id_utilisateur) REFERENCES utilisateur (id);
ALTER TABLE lieu_avis
ADD FOREIGN KEY (id_utilisateur) REFERENCES utilisateur (id);
ALTER TABLE lieu
ADD FOREIGN KEY (id_ville) REFERENCES ville (id);
ALTER TABLE lieu
ADD FOREIGN KEY (id_utilisateur) REFERENCES utilisateur (id);
ALTER TABLE lieu
ADD FOREIGN KEY (id_type_lieu) REFERENCES typelieu (id);
ALTER TABLE notification
ADD FOREIGN KEY (id_utilisateur) REFERENCES utilisateur (id);
ALTER TABLE lieu_avis
ADD COLUMN id_lieu INT NOT NULL;
ALTER TABLE lieu_avis
ADD FOREIGN KEY (id_lieu) REFERENCES lieu (id);
ALTER TABLE langue
MODIFY nom VARCHAR(5);
ALTER TABLE lieu
MODIFY is_populaire BOOLEAN;
ALTER TABLE lieu_html
MODIFY html text;
ALTER TABLE lieu_image
MODIFY image varchar(50);
ALTER TABLE notification DROP COLUMN dateetheure;
ALTER TABLE typelieu
ADD COLUMN remarque VARCHAR(200) NOT NULL;
INSERT INTO typelieu (nom, remarque)
VALUES (
        'Parcs nationaux',
        'Zones protégées abritant une faune et une flore uniques, offrant des possibilités de randonnées, d''observation de la faune, de paysages naturels exceptionnels.'
    ),
    (
        'Plages',
        'Régions côtières avec des étendues de sable fin, offrant des activités de baignade, de sports nautiques, de détente et des paysages côtiers pittoresques.'
    ),
    (
        'Sites historiques',
        'Lieux riches en histoire, monuments anciens, ruines, musées, palais royaux, etc., qui permettent aux visiteurs de découvrir le patrimoine culturel du pays.'
    ),
    (
        'Réserves naturelles',
        'Espaces protégés pour préserver la biodiversité, offrant des opportunités d''observation des animaux et de la nature dans leur environnement naturel.'
    ),
    (
        'Îles et archipels',
        'Îles isolées ou en groupe, offrant des paysages uniques, des plages, des activités de plongée et des expériences de vie insulaire.'
    ),
    (
        'Cascades et rivières',
        'Sites naturels présentant des chutes d''eau spectaculaires et des rivières pittoresques, offrant des opportunités de baignade et d''aventures en plein air.'
    ),
    (
        'Villages traditionnels',
        'Communautés locales présentant des traditions, des coutumes, des artisanats et des cultures authentiques pour les visiteurs à découvrir.'
    ),
    (
        'Montagnes et pics',
        'Massifs montagneux proposant des treks, de l''alpinisme, des panoramas époustouflants et une expérience de vie en haute altitude.'
    ),
    (
        'Réserves marines',
        'Zones marines protégées pour préserver la vie marine et offrant des possibilités de plongée sous-marine et de snorkeling.'
    ),
    (
        'Sites culturels',
        'Musées, centres d''art, festivals, événements culturels et artistiques mettant en valeur la richesse culturelle du pays.'
    );
INSERT INTO ville(nom, remarque)
VALUES(
        'Antananarivo',
        'Capitale de Madagascar, Antananarivo est une ville dynamique située dans les hautes terres centrales.'
    ),
    (
        'Toamasina (Tamatave)',
        'Principal port de Madagascar situé sur la côte est, Toamasina est une ville côtière animée.'
    ),
    (
        'Antsirabe',
        'Nichée dans les hautes terres centrales, Antsirabe est une charmante ville thermale.'
    ),
    (
        'Fianarantsoa',
        'Autre ville des hautes terres centrales, Fianarantsoa est réputée pour ses vignobles et ses plantations de thé.'
    ),
    (
        'Mahajanga',
        'Située sur la côte nord-ouest, Mahajanga est une ville balnéaire au charme exotique.'
    ),
    (
        'Toliara (Tuléar)',
        'Sur la côte sud-ouest, Toliara est une ville portuaire offrant un accès privilégié à la célèbre réserve d''Isalo avec ses canyons spectaculaires et ses formations rocheuses uniques.'
    ),
    (
        'Antsiranana (Diego Suarez)',
        'Située sur la côte nord, Antsiranana est entourée de baies impressionnantes.'
    ),
    (
        'Morondava',
        'Sur la côte ouest, Morondava est célèbre pour son allée de baobabs, une rangée majestueuse d''arbres emblématiques qui attire les visiteurs du monde entier.'
    ),
    (
        'Nosy Be',
        'Bien qu''il s''agisse d''une île, Nosy Be mérite d''être mentionnée en raison de sa popularité auprès des touristes.'
    );
ALTER TABLE lieu
MODIFY heure_ouverture time;
ALTER TABLE lieu
ADD COLUMN heure_fermeture time;
ALTER TABLE lieu
ADD COLUMN remarque_horaire VARCHAR(100);
ALTER TABLE lieu
MODIFY remarque_frais_entree varchar(100);
ALTER TABLE lieu
MODIFY frais_entree DECIMAL(10, 2);
-- Lieu 1 : Rova d'Antananarivo
INSERT INTO `lieu` (
        `id`,
        `nom`,
        `description_longue`,
        `description_courte`,
        `image_miniature`,
        `latitude`,
        `longitude`,
        `heure_ouverture`,
        `frais_entree`,
        `remarque_frais_entree`,
        `contact`,
        `autres_informations`,
        `id_type_lieu`,
        `id_ville`,
        `is_populaire`,
        `id_utilisateur`,
        `heure_fermeture`,
        `remarque_horaire`
    )
VALUES (
        NULL,
        'Le Rova d''Antananarivo (Palais de la Reine)',
        'Le Rova d''Antananarivo, également connu sous le nom de Palais de la Reine, est un complexe palatial qui a été le siège du pouvoir royal à Madagascar pendant plusieurs siècles. Le palais a été construit au XVIIe siècle et est situé sur la colline d''Analamanga, offrant une vue imprenable sur la capitale. Aujourd''hui, c''est un site historique et culturel important.',
        'Palais historique offrant une vue panoramique sur la capitale.',
        NULL,
        NULL,
        NULL,
        '09:00:00',
        10000,
        'environ 2,5 €',
        NULL,
        'Des guides locaux proposent des visites guidées en français et en anglais.',
        '3',
        '1',
        NULL,
        NULL,
        '17:00:00',
        'tous les jours sauf le lundi'
    );
-- Lieu 2: Toamasina (Tamatave) - Plage d'Andovoranto
INSERT INTO lieu (
        nom,
        description_longue,
        description_courte,
        remarque_horaire,
        frais_entree,
        autres_informations,
        id_type_lieu,
        id_ville
    )
VALUES (
        'Plage d''Andovoranto',
        'La plage d''Andovoranto est l''une des plages les plus prisées par les habitants et les visiteurs de Toamasina. Elle est située à environ 20 km du centre-ville et offre un cadre tranquille pour se détendre et profiter des eaux cristallines.',
        'Magnifique plage de sable blanc à proximité de Toamasina.',
        'Ouverte en continu',
        NULL,
        'Il est conseillé d''apporter des équipements de plage tels que des serviettes, des chapeaux et de la crème solaire.',
        '2',
        '2'
    );
-- Lieu 3: Antsirabe - Lac Tritriva
INSERT INTO lieu (
        nom,
        description_longue,
        description_courte,
        remarque_horaire,
        frais_entree,
        autres_informations,
        id_type_lieu,
        id_ville
    )
VALUES (
        'Lac Tritriva',
        'Le lac Tritriva est un site naturel remarquable situé à environ 20 km d''Antsirabe. Il est niché dans un cratère volcanique éteint, entouré de collines verdoyantes et de formations rocheuses. Le lac est d''une beauté saisissante, avec ses eaux calmes d''un bleu profond.',
        'Lac pittoresque dans un cratère volcanique entouré de collines verdoyantes.',
        'Ouvert en continu',
        NULL,
        'La température peut être fraîche à Antsirabe, donc il est conseillé d''apporter des vêtements chauds, surtout si vous prévoyez de visiter le lac tôt le matin ou en fin de journée.',
        '4',
        '3'
    );
-- Lieu 4: Fianarantsoa - Parc National de Ranomafana
INSERT INTO lieu (
        nom,
        description_longue,
        description_courte,
        heure_ouverture,
        heure_fermeture,
        frais_entree,
        remarque_frais_entree,
        autres_informations,
        id_type_lieu,
        id_ville
    )
VALUES (
        'Parc National de Ranomafana',
        'Le parc national de Ranomafana est une réserve de forêt tropicale située à environ 60 km de Fianarantsoa. Il est célèbre pour sa biodiversité exceptionnelle, abritant une grande variété d''espèces de lémuriens, de caméléons et d''oiseaux rares.',
        'Réserve de forêt tropicale abritant une biodiversité incroyable avec de nombreuses espèces de lémuriens et d''oiseaux rares.',
        '07:00:00',
        '16:30:00',
        75000,
        '(environ 18 €) par personne pour les étrangers ; 15 000 Ariary (environ 3,5 €) par personne pour les résidents malgaches.',
        'Il est recommandé de se faire accompagner par un guide local pour profiter pleinement de la visite et découvrir les spécificités de la faune et de la flore du parc.',
        '1',
        '4'
    );
