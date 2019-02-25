var express = require('express');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('shaula.db');
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
router.get('/:id/delete',
	function(req, res){
		// Use req.params.id to make SQL query to delete that voyage. Redirect to list of voyages
		res.redirect('/voyages');
	}
);

// GET request for updating a voyage
router.get('/:id/update',
	function(req, res){
		// Use req.params.id to make SQL query to populate form with values.
		res.render('./voyages/create-update.pug');
	}
);

// POST request for updating a voyage. Same controller as for creating a voyage.
router.post('/:id/update', voyages.create_update);

// GET request for list of all voyages
router.get('/', 
	function(req, res){
		const sql = `SELECT * FROM voyages`;
		db.all(sql, (err, rows) => {
			console.log(err);
			res.render('./voyages/list.pug', { user: req.session.userId, voyages: rows });
		})
	}
);

// GET request to view a voyage in detail
router.get('/:id',
	function(req, res){
		// Use req.params.id to query details of a voyage and send to pug
		const sql = `SELECT * FROM voyages WHERE id = ?`
		db.get(sql, req.params.id, (err, row) => {
			console.log(err)
			res.render('./voyages/detail.pug', { voyage: row })
		})
	}
);

module.exports = router;
