install mysql
// mysql
create database db;

use db;

CREATE TABLE student (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100)
);

select * from student;
// dont use
drop table student;
