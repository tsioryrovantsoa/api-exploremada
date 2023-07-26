create table langue(
	id INT AUTO_INCREMENT   PRIMARY KEY,
	nom varchar(50) NOT NULL
);

INSERT INTO langue VALUES (NULL, 'fr'),(NULL,'en');

create table utilisateur(
	id int auto_increment   primary key,
	nom varchar(50),
    email varchar(50),
    motdepasse varchar(250),
    id_langue int  references langue(id),
    contact varchar(50)
);


create table typeLieu(
	id int auto_increment  primary key,
	nom varchar(50)
);

create table ville(
	id int auto_increment  primary key,
	nom varchar(50),
    remarque text
);

create table lieu_Avis(
	id int auto_increment  primary key,
	avis_message text,
    photo  varchar(50),
    id_utilisateur int  references utilisateur(id)
);

create table notification(
	id int auto_increment  primary key,
    id_utilisateur int  references utilisateur(id),
    contenu text ,
    dateetheure datetime 
);


create table lieu(
	id int auto_increment  primary key,
	nom varchar(50),
    description_longue text,
    description_courte text,
    image_miniature varchar(50),
    latitude varchar(50),
    longitude varchar(50),
    heure_ouverture varchar(20),
    frais_entree varchar(50),
    remarque_frais_entree text,
    contact varchar(50),
    autres_informations text ,
    id_type_lieu int  references typeLieu(id),
    id_ville int  references ville(id),
    is_populaire varchar(10),
    id_utilisateur int  references utilisateur(id)
);


create table favoris(
	id int auto_increment  primary key,
    id_utilisateur int  references utilisateur(id),
    id_lieu int  references lieu(id)
);


create table lieu_Image(
	id int auto_increment  primary key,
    id_lieu int  references lieu(id),
    image varchar(50)
);

create table lieu_Video(
	id int auto_increment  primary key,
    id_lieu int references lieu(id),
    video varchar(50)
);

create table lieu_HTML(
	id int auto_increment  primary key,
    id_lieu int  references lieu(id),
    html varchar(50)
);