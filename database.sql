
drop database academy;

create database academy;
use academy;

create table users(
    id_user int(11) primary key auto_increment,
    names varchar(20),
    firstname varchar(20),
    lastname varchar(20),
    email varchar(25),
    password varchar(11),
    unique(email)
);

create table tracks(
    id_track int(11) primary key auto_increment,
    id_user int(11),
    foreign key (id_user) references users (id_user)
);

create table playlists(
    id_playlist int(11) primary key auto_increment,
    id_user int(11),
    foreign key (id_user) references users (id_user)
);




