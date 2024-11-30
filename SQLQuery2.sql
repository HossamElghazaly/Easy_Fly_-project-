use [Easy-FlyDB];
go
create table users
(
users_id int,
first_name varchar(20) not null,
last_name varchar(20) not null,
username varchar(20) not null,
email varchar(20) not null,
user_password varchar(20) not null ,
passport_number float(50) not null,
date_of_birth datetime not null,
phone_number varchar(15) not null,
user_adress varchar(50) not null,

constraint users_primary primary key (users_id),
constraint chk_password_length check (len(user_password) >= 8),
constraint phone_number_length check (len(phone_number)=11 )
);

