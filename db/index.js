const { Pool } = require('pg')

const pool = new Pool({
    user: 'dbuser',
    host: 'localhost',
    database: 'true2size',
    password: 'secretpassword',
    port: 5432,
})

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  }
}