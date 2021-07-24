const { Pool } = require('pg');
const connectionString = process.env.PG_URI;

const pool = new Pool({connectionString});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
};