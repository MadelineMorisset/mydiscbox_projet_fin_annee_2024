CREATE TABLE utilisateur(
   id_user INT AUTO_INCREMENT,
   nickname_user VARCHAR(20) ,
   email_user VARCHAR(150)  NOT NULL,
   password_user VARCHAR(255)  NOT NULL,
   admin_user BOOLEAN NOT NULL,
   photo_user TEXT,
   PRIMARY KEY(id_user),
   UNIQUE(nickname_user),
   UNIQUE(email_user),
   UNIQUE(password_user)
);

CREATE TABLE artisteGroupe(
   id_artistBand INT AUTO_INCREMENT,
   name_artistBand VARCHAR(150)  NOT NULL,
   country_artistBand VARCHAR(150) ,
   startActivityDate_artistBand DATE,
   inActivity_artistBand BOOLEAN,
   PRIMARY KEY(id_artistBand)
);

CREATE TABLE format(
   id_format INT AUTO_INCREMENT,
   name_format VARCHAR(15)  NOT NULL,
   PRIMARY KEY(id_format)
);

CREATE TABLE genre(
   id_genre INT AUTO_INCREMENT,
   image_genre TEXT,
   name_genre VARCHAR(15)  NOT NULL,
   PRIMARY KEY(id_genre),
   UNIQUE(name_genre)
);

CREATE TABLE etagere(
   id_etagere INT AUTO_INCREMENT,
   image_etagere TEXT,
   name_etagere VARCHAR(15)  NOT NULL,
   PRIMARY KEY(id_etagere),
   UNIQUE(name_etagere)
);

CREATE TABLE article(
   id_item_ INT AUTO_INCREMENT,
   image_item TEXT,
   title_item VARCHAR(150)  NOT NULL,
   performingArtist_item VARCHAR(150) ,
   feat_item VARCHAR(255) ,
   label_item VARCHAR(150)  NOT NULL,
   barcode_item VARCHAR(50)  NOT NULL,
   releaseDate_item DATE,
   languages_item VARCHAR(100) ,
   collector_item BOOLEAN NOT NULL,
   signed_item BOOLEAN NOT NULL,
   id_format INT NOT NULL,
   PRIMARY KEY(id_item_),
   UNIQUE(barcode_item),
   FOREIGN KEY(id_format) REFERENCES format(id_format)
);

CREATE TABLE AVOIR(
   id_item_ INT,
   id_genre INT,
   PRIMARY KEY(id_item_, id_genre),
   FOREIGN KEY(id_item_) REFERENCES article(id_item_),
   FOREIGN KEY(id_genre) REFERENCES genre(id_genre)
);

CREATE TABLE REALISER(
   id_item_ INT,
   id_artistBand INT,
   PRIMARY KEY(id_item_, id_artistBand),
   FOREIGN KEY(id_item_) REFERENCES article(id_item_),
   FOREIGN KEY(id_artistBand) REFERENCES artisteGroupe(id_artistBand)
);

CREATE TABLE APPARAITRE(
   id_item_ INT,
   id_etagere INT,
   PRIMARY KEY(id_item_, id_etagere),
   FOREIGN KEY(id_item_) REFERENCES article(id_item_),
   FOREIGN KEY(id_etagere) REFERENCES etagere(id_etagere)
);

CREATE TABLE DETENIR(
   id_user INT,
   id_item_ INT,
   PRIMARY KEY(id_user, id_item_),
   FOREIGN KEY(id_user) REFERENCES utilisateur(id_user),
   FOREIGN KEY(id_item_) REFERENCES article(id_item_)
);
