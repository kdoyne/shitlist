'use strict';

const Promise = require('bluebird');
const request = Promise.promisify(require('request'));

function getReps(req, res) {
	console.log('called');
	console.log(req.body);
	console.log(process.env.GKEY);

	console.log(req.body.street);

	let address = req.body.street + ' ' + req.body.city + ' ' + req.body.state + ' ' + req.body.zip;

	request({
		uri: 'https://www.googleapis.com/civicinfo/v2/representatives',
		qs: {
			address: address,
			key: process.env.GKEY
		}
	}).then(function(reps) {
		console.log('here');
		console.log(reps);
	});

	res.send('Yo dude');
}

module.exports = {
	getReps : getReps
};