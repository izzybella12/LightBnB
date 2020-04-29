INSERT INTO users (name, email, password)
VALUES ('Bella Panagrosso', 'isabellapanagrosso22@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
INSERT INTO users (name, email, password)
VALUES ('Sam Panagrosso', 'sampanagrosso20@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
INSERT INTO users (name, email, password)
VALUES ('Phil Panagrosso', 'philpanagrosso63@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
INSERT INTO users (name, email, password)
VALUES ('Caryn Panagrosso', 'carynkaftal61@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');

INSERT INTO properties (owner_id, name, description, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code, active)
VALUES (1, 'Speed lamp', description, 93061, 6, 4, 8, 'Canada', '536 Namsub Highway', 'Sotboske', 'Quebec', '28142', t);
INSERT INTO properties (owner_id, name, description, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code, active)
VALUES (2, 'Black corner', description, 85234, 6, 6, 7, 'Canada', '651 Nami Road', 'Bohbatev', 'Alberta', '83680', t);
INSERT INTO properties (owner_id, name, description, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code, active)
VALUES (3, 'Habit mix', description, 46058, 0, 5, 6, 'Canada', '536 Namsub Highway', 'Genwezuj', 'Newfoundland And Labrador', '44583', t);

INSERT INTO reservations (start_date, end_date, property_id, guest_id)
VALUES (2017-09-11, 2017-09-26, 2, 4);
INSERT INTO reservations (start_date, end_date, property_id, guest_id)
VALUES (2018-01-04, 2018-02-01, 3, 4);
INSERT INTO reservations (start_date, end_date, property_id, guest_id)
VALUES (2019-10-01, 2019-10-14, 1, 4);

INSERT INTO property_veviews (guest_id, property_id, reservation_id, rating, message)
VALUES (4, 2, 1, 8, 'messages')
INSERT INTO property_veviews (guest_id, property_id, reservation_id, rating, message)
VALUES (4, 3, 2, 4, 'messages')
INSERT INTO property_veviews (guest_id, property_id, reservation_id, rating, message)
VALUES (4, 1, 3, 10, 'messages')