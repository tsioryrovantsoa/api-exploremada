create table Langue(
	id varchar(100) constraint langue_pk primary key,
	nom varchar(50)
);

create table Utilisateur(
	id varchar(100) constraint utilisateur_pk primary key,
	nom varchar(50),
    email varchar(50),
    motdepasse varchar(250),
    id_langue varchar(100) constraint utilisateur_langue_fk references Langue(id),
    contact varchar(50)
);


create table TypeLieu(
	id varchar(100) constraint typelieu_pk primary key,
	nom varchar(50)
);

create table Ville(
	id varchar(100) constraint ville_pk primary key,
	nom varchar(50),
    remarque text
);

create table Lieu_Avis(
	id varchar(100) constraint lieu_avis_pk primary key,
	avis_message text,
    photo  varchar(50),
    id_utilisateur varchar(100) constraint lieu_avis_utilisateur_fk references Utilisateur(id)
);

create table Notification(
	id varchar(100) constraint notification_pk primary key,
    id_utilisateur varchar(100) constraint notification_utilisateur_fk references Utilisateur(id),
    contenu text ,
    dateetheure datetime 
);


create table Lieu(
	id varchar(100) constraint lieu_pk primary key,
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
    id_type_lieu varchar(100) constraint lieu_typelieu_fk references TypeLieu(id),
    id_ville varchar(100) constraint lieu_ville_fk references Ville(id),
    is_populaire varchar(10),
    id_utilisateur varchar(100) constraint lieu_utilisateur_fk references Utilisateur(id),
);


create table Favoris(
	id varchar(100) constraint favoris_pk primary key,
    id_utilisateur varchar(100) constraint favoris_utilisateur_fk references Utilisateur(id),
    id_lieu varchar(100) constraint favoris_lieu_fk references Lieu(id)
);


create table Lieu_Image(
	id varchar(100) constraint lieu_image_pk primary key,
    id_lieu varchar(100) constraint lieu_image_lieu_fk references Lieu(id),
    image varchar(50)
);

create table Lieu_Video(
	id varchar(100) constraint lieu_video_pk primary key,
    id_lieu varchar(100) constraint lieu_video_lieu_fk references Lieu(id),
    video varchar(50)
);

create table Lieu_HTML(
	id varchar(100) constraint lieu_html_pk primary key,
    id_lieu varchar(100) constraint lieu_html_lieu_fk references Lieu(id),
    html varchar(50)
);