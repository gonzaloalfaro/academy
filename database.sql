
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

create table artists(
    id_artist int(11) primary key auto_increment,
    name varchar(20),
    external_url varchar(100)
);

create table tracks(
    id_track int(11) primary key auto_increment,
    name varchar(15),
    author varchar(15),
    duration_ms int(11),
    external_url varchar(100),
    uri varchar(50),
    id_artist int(11),
    foreign key (id_artist) references artists (id_artist)
);

create table mymusic(
    id_user int(11),
    id_track int(11),
    saved_date date,
    foreign key (id_user) references users (id_user),
    foreign key (id_track) references tracks (id_track)
);


