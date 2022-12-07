create database coal;

Add databse table
we need State and the cities 

create table cities(
    id INT AUTO_INCREMENT PRIMARY KEY,
    state varchar(255) NOT NULL,
    city varchar(255) NOT NULL
);

INSERT INTO cities (state, city) VALUES
('Maharashtra', 'Mumbai'),
('Maharashtra', 'Pune'),
('Rajasthan', 'Udaipur'),
('Rajasthan', 'Jaipur');