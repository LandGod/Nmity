DROP DATABASE IF EXISTS nmityDB;

-- Created the DB "nmityDB" (only works on local connections)
CREATE DATABASE nmityDB;

-- Use the DB nmityDB for all the rest of the script
USE nmityDB;

-- Created the table "people"
CREATE TABLE people (
  id INT AUTO_INCREMENT NOT NULL,
  userName varchar(255) NOT NULL,
  picture varchar(255) DEFAULT 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
  ansKey varchar(10) NOT NULL,
  roll varchar(10) NOT NULL,
  createdAt TIMESTAMP NOT NULL,
  PRIMARY KEY(id)
);

-- Inserted a set of records into the table
INSERT INTO people (userName, picture, ansKey, roll)
VALUES ("ItsJim", 'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?resize=256%2C256&quality=100&ssl=1', '5555555555', 'hero');

INSERT INTO people (userName, picture, ansKey, roll)
VALUES ("BobbyTest", 'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?resize=256%2C256&quality=100&ssl=1', '1111111111', 'villian');

INSERT INTO people (userName, picture, ansKey, roll)
VALUES ("FrankO", 'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?resize=256%2C256&quality=100&ssl=1', '0000000000', 'hero');
