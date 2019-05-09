var express = require('express');
const bcrypt = require('bcrypt');
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('shaula.db');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { user: req.session.userId });
});

router.get('/register', function(req, res, next) {
	res.render('register');
});

router.post('/register', function(req, res, next) {
	const hash = bcrypt.hashSync(req.body.password, 10);
	let sql = `INSERT INTO users(username, password) VALUES (?, ?)`;
	db.run(sql, [req.body.username, hash], () => {});
	res.end();
});

router.get('/login', function(req, res, next) {
	res.render('login', { user: req.session.userId });
});

router.post('/login', function(req, res, next) {
	    let sql = `SELECT * FROM users WHERE username = ?`;
    db.get(sql, [req.body.username], function(err, row) {
        if(!row){
            console.log('Invalid Username');
            res.redirect('/login');
        } else {
            if(bcrypt.compareSync(req.body.password, row.password)){
                req.session.userId = row.username;
                console.log('You are logged in');
                console.log(req.session);
                res.redirect('/');
            } else {
                console.log('Incorrect Password');
                res.redirect('/login');
            }
        }
    })
});

router.get('/any-route', function(req, res, next) {
	res.send(process.env.MY_ENV_VAR);
});

module.exports = router;
