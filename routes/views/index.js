var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.hamburgerClicked = false;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	locals.showNav = true;

	// Render the view
	view.render('index');
};
