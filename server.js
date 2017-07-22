/**
 * Created by ram on 22/7/17.
 */
var express = require('express');
var app = express();
var path = require('path');
var port = 5000 || process.env.PORT;

app.use('/',express.static(path.join(__dirname,'public_static')));

app.listen(port,function () {
    console.log('Server is running on the port '+port);
})