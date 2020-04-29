SELECT properties.city as city, COUNT(*) as total_reservations
FROM reservations
JOIN properties ON property_id = properties.id
GROUP BY properties.city
ORDER BY COUNT(*) DESC;