const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "5432",
    database: "datawad",
    host: "localhost",
    port: "5432"
});
module.exports = pool;