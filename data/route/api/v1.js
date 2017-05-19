'use strict';

function _(app, azbn) {
	
	app.log.info(__filename);
	
	return function(req, res) {
		
		var q = req.query;
		
		res.send({
			test : azbn.now(),
		});
		
	};
}

module.exports = _;