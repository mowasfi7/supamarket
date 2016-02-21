var router = require('express').Router(),
	engine = require('../../engine/aldi');

router.get('/pullproducts',
	function (req, res, next) {
		engine.fire()
		.then(function(result){
			res.json(result);
		})
		.catch(function(error){
			res.status(500).send(error);
		});
	}
);

module.exports = router;