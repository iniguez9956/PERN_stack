/**** This file we create the connection between postgres and node ****/
const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "postgres",
    host: "127.0.0.1",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;