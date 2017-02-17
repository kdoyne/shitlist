'use strict';

const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const reps       = require('./reps/index');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.post('/api/reps', reps.getReps);

app.get('*', function(req, res) {
        res.sendfile('./public/index.html');
    });

app.listen(8080);
console.log('App listening on port 8080');
