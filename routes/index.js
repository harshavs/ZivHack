var express = require('express');
var router = express.Router();

var connectionString = 'mongodb://localhost:27017/zivhack';
var mongojs = require('mongojs');
var db = mongojs.connect(connectionString, ['products', 'images']);
console.log('Db connected');


/* GET home page. */
router.get('/', function(req, res) {
	var fn = {};
	var category = req.query.category;
	if(category)
	{
		fn = {"category": category};
	}
	db.products.find(fn).toArray(function(err,docs){
		res.render('index',{products: docs, category: category});
	});
});

module.exports = router;
