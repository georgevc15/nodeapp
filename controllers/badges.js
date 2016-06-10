'use strict'

var model = require('../models/badges');
var _ = require('underscore');


/**
 *  Send badges to model
 */
exports.save = function(req, res, next){
	var badges = _.clone(req.body);
	model.save(badges, function(err, data) {
		if (err) return res.json(503, { error: true	});
		next();
		model.trim();
	});
};



/**
 *  Send badges to pub/sub socket in model
 */
exports.send = function(req, res, next){
	var badges = _.clone(req.body);
	model.send(badges, function(err) {
		if (err) return res.json(503, { error: true	});
		res.json(200, { error: null });
	});
}

/**
 * Get 10 badges from model
 */
 exports.get = function(req, res) {
	 model.get(function(err, data) {
		if (err) return res.json(503, { error: true	});
		res.json(200, data);
	 });	 
 };