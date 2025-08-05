// api/index.js
const { Pool } = require('pg');

// Create a new connection pool using the environment variable
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // You may need to add SSL configuration for cloud databases
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT NOW()'); // Example query
    client.release();
    res.status(200).json({ currentTime: result.rows[0].now });
  } catch (error) {
    console.error('Database connection or query error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};