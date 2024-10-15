CREATE TABLE utilisateur(
   id_user INT AUTO_INCREMENT,
   nickname_user VARCHAR(20) ,
   email_user VARCHAR(150)  NOT NULL,
   password_user VARCHAR(255)  NOT NULL,
   admin_user BOOLEAN,
   photo_user TEXT,
   PRIMARY KEY(id_user),
   UNIQUE(nickname_user),
   UNIQUE(email_user),
   UNIQUE(password_user)
);

CREATE TABLE article(
   id_item INT AUTO_INCREMENT,
   image_item TEXT,
   title_item VARCHAR(150)  NOT NULL,
   name_artistBand VARCHAR(150)  NOT NULL,
   PRIMARY KEY(id_item)
);

CREATE TABLE DETENIR(
   id_user INT,
   id_item INT,
   PRIMARY KEY(id_user, id_item),
   FOREIGN KEY(id_user) REFERENCES utilisateur(id_user),
   FOREIGN KEY(id_item) REFERENCES article(id_item)
);
