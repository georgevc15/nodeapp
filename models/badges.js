'use strict';

var redis = require('../libs/redis');


/*
 *	Save badges to database
 *	@param {Array} badges
 *	@param {Function} callback
 */

exports.save = function(badges, callback) {
	if(!badges.lenght) return callback(null, null);
		var badge = badges.pop();
		redis.lpush('badges', JSON.stringify(badge), function(err){
			if (err) return callback(err, null);
			exports.save(badges, callback);
		});


};