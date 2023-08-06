CREATE OR REPLACE VIEW vue_video as
SELECT lv.*,ll.nom,ll.description_courte,ll.image_miniature,ll.id_type_lieu,ll.id_ville, ll.nom_ville FROM lieu_video lv
JOIN lieu_lib ll on lv.id_lieu = ll.id ORDER BY rand();


CREATE OR REPLACE VIEW vue_image AS
SELECT id,
    image_miniature AS image
FROM lieu
UNION
SELECT id_lieu as id,
    image
FROM lieu_image
ORDER BY rand();