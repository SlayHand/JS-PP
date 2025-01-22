const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'dbuser',
    password: 'qwerty',
    database: 'web_shop'
})

module.exports = pool.promise()