'use strict';

var redis = require('../libs/redis');
var broadcast = require('../libs/broadcast');


/*
 *	Save badges to database
 *	@param {Array} badges
 *	@param {Function} callback
 */
exports.save = function(badges, callback) {
 //var lungimeObiect = badges.length;	
	if(!badges.length) return callback(null, null);
		var badge = badges.pop();
		redis.lpush('badges', JSON.stringify(badge), function(err){
		if (err) { 
				//console.log("Sunt in eroare");
				//console.log(badges);
					return callback(err, null);
			} else {
				exports.save(badges, callback);
				//console.log(badges);
			}
		});
};
		
/*
 *	Trim down the redis list
 */
exports.trim = function() {
	redis.ltrim('badges', 0, 9, function(err) {
		if(err) throw err;
	});
};

/*
 *	Send out basges to the broadcaster
 *	@param {Array} badges
 *	@param {Function} callbach
 */
 exports.send = function(badges, callback) {
	 badges.forEach(broadcast.send);
	 callback(null, null);
 };

 
 /**
 * Get badges from redis
 * @param {Function} callback
 */
exports.get = function(callback) {
	redis.lrange('badges', 0, -1, function(err, data) {
		if(err) return callback(err, null);
		callback(null, data.map(JSON.parse));
	});
};
 
 