var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.data = {
		portfolios: [],
		milestones: [],
	};

	view.on('init', function (next) {
		keystone.list('Portfolio').model.find().sort('title').exec(function (err, results) {
			if (err || !results.length) {
				return next(err);
			}

			locals.data.portfolios = results;
			next();
		});
	});

	view.on('init', function (next) {
		keystone.list('Milestone').model.find().sort('Order').exec(function (err, results) {
			if (err || !results.length) {
				return next(err);
			}

			locals.data.milestones = results;
			next();
		});
	});

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	locals.showNav = true;

	// Render the view
	view.render('index');
};
