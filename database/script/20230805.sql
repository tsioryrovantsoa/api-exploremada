SELECT ll.*,
    CASE
        WHEN f.id IS NOT NULL THEN true
        ELSE false
    END AS is_my_favorite
FROM lieu_lib ll
    LEFT JOIN favoris f ON ll.id = f.id_lieu
    AND f.id_utilisateur = 2;
CREATE VIEW vue_image AS
SELECT id,
    image_miniature AS image
FROM lieu
UNION
SELECT id_lieu as id,
    image
FROM lieu_image;
SELECT ll.id,
    ll.nom,
    ll.description_courte,
    ll.image_miniature,
    ll.id_type_lieu,
    ll.nom_typelieu,
    ll.id_ville,
    ll.nom_ville,
    ll.is_populaire
FROM favoris f
    JOIN lieu_lib ll ON ll.id = f.id_lieu
where f.id_utilisateur = 2;

ALTER TABLE favoris
ADD CONSTRAINT unique_favoris_combination
UNIQUE (id_lieu, id_utilisateur);