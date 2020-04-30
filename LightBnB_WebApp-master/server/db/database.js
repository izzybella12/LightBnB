const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'lightbnb'
});

module.exports = {

  getUserWithEmail: (email) => {
    return pool.query(`
    SELECT *
    FROM users
    WHERE email = $1
    `, [email])
    .then (res => res.rows[0]);
  },

  getUserWithId: (id) => {
    return pool.query(`
    SELECT *
    FROM users
    WHERE id = $1
    `, [id])
    .then (res => res.rows[0]);
  }, 

  addUser: (user) => {
    return pool.query(`
    INSERT INTO users (name, email, password)
    VALUES ($1, $2, $3)
    RETURNING *;
    `, [user.name, user.email, user.password])
    .then (res => res.rows[0])
  }, 

  getAllReservations: (guest_id, limit = 10) => {
    return pool.query(`
    SELECT reservations.*, properties.*, AVG(property_reviews.rating) as average_rating
    FROM reservations
    JOIN properties ON reservations.property_id  = properties.id 
    JOIN property_reviews ON properties.id = property_reviews.property_id
    WHERE reservations.guest_id = $1
    AND reservations.end_date < now()::date
    GROUP BY reservations.id, properties.id
    ORDER BY reservations.start_date DESC
    `, [guest_id])
    .then (res => res.rows)
  },

  getAllProperties: (options, limit = 10) => {
    const queryParams = [];
    let queryString = `
    SELECT properties.*, AVG(property_reviews.rating) as average_rating
    FROM properties
    JOIN property_reviews ON property_id = properties.id
    `
    if (options.city) {
      queryParams.push(`%${options.city}%`)
      queryString += `WHERE city LIKE $${queryParams.length} `;
    }
    if (options.minimum_price_per_night) {
      if (queryParams.length !== 0) {
        queryParams.push(options.minimum_price_per_night)
        queryString += `AND cost_per_night > $${queryParams.length} `;
      } else {
        queryParams.push(options.minimum_price_per_night)
        queryString += `WHERE cost_per_night > $${queryParams.length} `;
      }
    }
    if (options.maximum_price_per_night) {
      if (queryParams.length !== 0) {
        queryParams.push(options.maximum_price_per_night)
        queryString += `AND cost_per_night < $${queryParams.length} `;
      } else {
        queryParams.push(options.maximum_price_per_night)
        queryString += `WHERE cost_per_night < $${queryParams.length} `;
      }
    }
    if (options.minimum_rating) {
      if (queryParams.length !== 0) {
        queryParams.push(options.minimum_rating)
        queryString += `AND property_reviews.rating >= $${queryParams.length} `;
      } else {
        queryParams.push(options.minimum_rating)
        queryString += `WHERE property_reviews.rating >= $${queryParams.length} `;
      }
    }
    queryParams.push(limit);
    queryString += `GROUP BY properties.id
    ORDER BY cost_per_night
    LIMIT $${queryParams.length};
    `;
    return pool.query(queryString, queryParams)
    .then (res => res.rows);
  },

  addProperty: (property) => {
    return pool.query(`
    INSERT INTO properties (owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, street, city, province, country, post_code, parking_spaces, number_of_bathrooms, number_of_bedrooms)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
    RETURNING *;
    `, [property.owner_id, property.title, property.description, property.thumbnail_photo_url, property.cover_photo_url, property.cost_per_night, property.street, property.city, property.province, property.country, property.post_code, property.parking_spaces, property.number_of_bathrooms, property.number_of_bedrooms])
    .then (res => res.rows[0])
  }
};