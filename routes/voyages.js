var express = require('express');
var router = express.Router();

// Require controller modules
var voyages = require('../controllers/voyages');

// GET request for creating a voyage
router.get('/create',
	function(req, res){
		// any code? or just render form
		res.render('./voyages/create-update.pug');
	}
);

// POST request for creating a voyage. Same controller as for updating a voyage.
router.post('/create', voyages.create_update);

// GET request for deleting a voyage
router.get('/:depart_time/delete',
	function(req, res){
		// Use req.params.depart_time to make SQL query to delete that voyage. Redirect to list of voyages
		res.redirect('/voyages');
	}
);

// GET request for updating a voyage
router.get('/:depart_time/update',
	function(req, res){
		// Use req.params.depart_time to make SQL query to populate form with values.
		res.render('./voyages/create-update.pug');
	}
);

// POST request for updating a voyage. Same controller as for creating a voyage.
router.post('/:depart_time/update', voyages.create_update);

// GET request for list of all voyages
router.get('/', 
	function(req, res){
		res.render('./voyages/list.pug');
	}
);

// GET request to view a voyage in detail
router.get('/:depart_time',
	function(req, res){
		// Use req.params.depart_time to query details of a voyage and send to pug
		res.render('./voyages/detail.pug');
	}
);

module.exports = router;
