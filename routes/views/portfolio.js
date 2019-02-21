var keystone = require('keystone');

exports = module.exports = function (req, res) {

    var view = new keystone.View(req, res);
    var locals = res.locals;

    // Set locals
    locals.section = 'portfolio';
    locals.filters = {
        portfolio: req.params.portfolio,
    };
    locals.data = {
        portfolio: {},
    };

    // Load the current post
    view.on('init', function (next) {

        var q = keystone.list('Portfolio').model.findOne({
            _id: locals.filters.portfolio,
        })

        q.exec(function (err, result) {
            locals.data.portfolio = result;
            next(err);
        });

    });

    // Render the view
    view.render('portfolio');
};
