create table langue(
	id INT AUTO_INCREMENT   PRIMARY KEY,
	nom varchar(50) NOT NULL
);

INSERT INTO langue VALUES (NULL, 'fr'),(NULL,'en');

create table Utilisateur(
	id int auto_increment   primary key,
	nom varchar(50),
    email varchar(50),
    motdepasse varchar(250),
    id_langue int  references Langue(id),
    contact varchar(50)
);


create table TypeLieu(
	id int auto_increment  primary key,
	nom varchar(50)
);

create table Ville(
	id int auto_increment  primary key,
	nom varchar(50),
    remarque text
);

create table Lieu_Avis(
	id int auto_increment  primary key,
	avis_message text,
    photo  varchar(50),
    id_utilisateur int  references Utilisateur(id)
);

create table Notification(
	id int auto_increment  primary key,
    id_utilisateur int  references Utilisateur(id),
    contenu text ,
    dateetheure datetime 
);


create table Lieu(
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
    id_type_lieu int  references TypeLieu(id),
    id_ville int  references Ville(id),
    is_populaire varchar(10),
    id_utilisateur int  references Utilisateur(id)
);


create table Favoris(
	id int auto_increment  primary key,
    id_utilisateur int  references Utilisateur(id),
    id_lieu int  references Lieu(id)
);


create table Lieu_Image(
	id int auto_increment  primary key,
    id_lieu int  references Lieu(id),
    image varchar(50)
);

create table Lieu_Video(
	id int auto_increment  primary key,
    id_lieu int references Lieu(id),
    video varchar(50)
);

create table Lieu_HTML(
	id int auto_increment  primary key,
    id_lieu varchar(100)  references Lieu(id),
    html varchar(50)
);