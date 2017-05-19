'use strict';

function _(app, azbn) {
	
	app.log.info(__filename);
	
	return function(req, res) {
		
		var p = req.params;
		var q = req.query;
		
		res.send({
			meta : {
				version : 1,
				version_api : 1,
				created_at : azbn.now(),
				created_at_str : '',
				platform : 'AAE',
				access : {
					access_as : null,
					id : 0,
				},
				msg : {
					type : 'info',
					text : '',
				},
				need : {
					reload : 0,
				},
				notifies : [],
			},
			response : {
				params : req.params,
				query : req.query,
				body : req.body,
			},
		});
		
	};
}

module.exports = _;