const express = require('express');
const router = express.Router();
const http = require('http');
var mysql = require('mysql');

var con = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "admin123",
    database: 'capacitaciones',
    insecureAuth: true,
    multipleStatements: true
});

router.get('/hello_workd', (req, res, next) => {
    res.status(200).json("Hello World");
    /*var query = 'SELECT * FROM table';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });*/
});


module.exports = router;