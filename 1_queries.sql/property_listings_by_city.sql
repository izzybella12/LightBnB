SELECT properties.id as id, properties.title as title, properties.cost_per_night as cost, AVG(property_reviews.rating) as average_rating 
FROM properties 
JOIN property_reviews ON property_id = properties.id
GROUP BY properties.id
HAVING city LIKE '%ancouv%' AND AVG(property_reviews.rating) >= 4
ORDER BY cost ASC
LIMIT 10;