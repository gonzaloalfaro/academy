
drop database academy;

create database academy;
use academy;

create table users(
    id_user int(11) primary key auto_increment,
    names varchar(20),
    firstname varchar(20),
    lastname varchar(20),
    email varchar(25),
    password varchar(11)
);

create table tracks(
    id_track int(11) primary key auto_increment,
    title varchar(25),
    preview varchar(50),
    link varchar(200),
    artist_name varchar(200),
    album_cover varchar(200),
    id_user int(11),
    foreign key (id_user) references users (id_user)
);

create table playlists(
    id_playlist int(11) primary key auto_increment,
    title varchar(25),
    description varchar(50),
    link varchar(200),
    picture_xl varchar(200),
    trackslist varchar(200),
    id_user int(11),
    foreign key (id_user) references users (id_user)
);




