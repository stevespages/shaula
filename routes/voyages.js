var express = require('express');
var router = express.Router();

// GET request for creating a voyage
router.get('/create',
	function(req, res){
		res.send('Will display form for creating / updating the log of a voyage. The fields will be empty or have placeholders but values will be empty');
	}
);

// POST request for creating a voyage
router.post('/create',
	function(req, res){
		res.send('this will not be a visible page. It is the script for creating / updating a voyage. After success it shoud redirect to that voyage');
	}
);

// GET request for deleting a voyage
router.get('/:depart_time/delete',
	function(req, res){
		res.send('this will not be a visible page. It is the script for deleting a voyage. After success it should redirect to the list of voyages');
	}
);

// GET request for updating a voyage
router.get('/:depart_time/update',
	function(req, res){
		res.send('Will display form for creating / updating the log of a voyage. The form will be populated with values for the voyage to be updated');
	}
);

// POST request for updating a voyage. Maybe be not needed. Use POST request for creating a voyage....
router.post('/create',
	function(req, res){
		res.send('this will not be a visible page. It is the script for creating / updating a voyage. After success it should redirect to that voyage');
	}
);

// GET request for list of all voyages
router.get('/', 
	function(req, res){
		res.send('List of all voyages. Each voyage links to detail page for voyage');
	}
);

module.exports = router;
