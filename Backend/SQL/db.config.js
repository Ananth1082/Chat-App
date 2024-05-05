// db.js
import pgPromise from 'pg-promise';

// Create an instance of pg-promise
const pgp = pgPromise();

// Database connection configuration
const db = pgp({
  user: 'postgres',
  password: '8NWg3w&xpR@/w6Xw6p`a8#f',
  host: 'localhost',
  port: 5432,
  database: 'Chat App',
});

export default db;
