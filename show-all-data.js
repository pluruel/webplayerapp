/*show-all-data.js*/
var express = require('express');
var router = express.Router();

var mysql = require('mysql');

router.get('/', function (req, res, next) {
    var connection = mysql.createConnection({
        host: '192.168.33.136',
        post: 3306,
        user: 'was',
        password: 'dkssud133',
        database: 'VIDEO_DB'
    });
    connection.connect();
    connection.query('select * from test_user', function (err, rows, fields) {
        connection.end();
        if (!err) {
            console.log(rows);
            console.log(fields);
            var result = 'rows : ' + JSON.stringify(rows) + '<br><br>' +
                'fields : ' + JSON.stringify(fields);
            res.send(result);
        } else {
            console.log('query error : ' + err);
            res.send(err);
        }
    });
});

module.exports = router;
