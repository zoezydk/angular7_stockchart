// import of Express module (web-framework handling HTTP, routing, template data insertion, port/connection settings, handles middleware etc.)
var express = require('express');
// creates Express application
var app = express();

app.get('/', function (req, res) {

const sql = require("mssql");


// var rcdset = temprcdset;

    // config for your database
    const config = {
        user: 'AHK',
        password: 'Pa55w0rD',
        server: 'PC3077326\\RPA',
        database: 'RPA_LOGS',
        // add for JSON_QUERY and formatting to raw JSON to work
        parseJSON: true,
        port: 5000
    };

    // connect to your database
    sql.connect(config, function (err) {

        if (err) {
            console.log(err)
        };

        // create Request object
        const request = new sql.Request();

        //query inside Stored Procedure / wrap JSON_QUERY around TaskResult to return string array data as raw JSON
        //SELECT ExeTimeStamp, LogTimeStamp, JSON_QUERY(TaskResult) AS TaskResult FROM test_live_rpa_logs FOR JSON AUTO;
        
        // query the database and get the records
        request.query('ExeTimeLogTimeTaskResult', function (err, recordset) {

            if (err) {
                console.log(err) 
            }
            else
            {
            // send records as a response
            res.send(recordset) //.toString().replace(/\\/g, ""));
            console.log(recordset);
            sql.close();
            }

        });
    });
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});