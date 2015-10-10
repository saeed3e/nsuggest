var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 5000));



var sugPrefetchData = require("./data/prefetch_data.js");
var sugACData = require("./data/ac_data.js");
var sugRCData = require("./data/rc_data.js");

app.get('/suggest/autocomplete/', function(req, res) {
    var dataAC = sugACData.autocomplete[req.query.query] || {}
    res.jsonp(dataAC);
});

app.get('/suggest/autoconcepts/', function(req, res) {
    var dataRC = sugRCData.relatedConcepts[req.query.query] || {}
    res.jsonp(dataRC);
});

app.get('/suggest/prefetch/', function(req, res) {
    res.jsonp(sugPrefetchData.prefetch);
});


app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
