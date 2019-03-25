var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '192.168.33.136',
    post: 3306,
    user: 'was',
    password: 'dkssud133',
    database: 'VIDEO_DB'
});

module.exports = connection;
