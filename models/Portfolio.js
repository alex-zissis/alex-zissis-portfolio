var keystone = require('keystone');
var Types = keystone.Field.Types;

var Portfolio = new keystone.List('Portfolio');
Portfolio.add({
	title: { type: Types.Text, initial: true, required: true },
	description: {
		type: Types.Html, initial: true, required: true, wysiwyg: true,
	},
	featured_photo: { type: Types.CloudinaryImage, initial: true, required: true },
	photos: { type: Types.CloudinaryImages, initial: true, required: false },
	website_demo_url: { type: Types.Url, initial: true, required: false },
	github_url: { type: Types.Url, initial: true, required: false },
	website_demo_username: { type: Types.Text, initial: true, required: false },
	website_demo_password: { type: Types.Text, initial: true, required: false },
	font_colour: { type: Types.Text, initial: true, required: false },
});
Portfolio.register();
