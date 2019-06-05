var keystone = require('keystone');
var Types = keystone.Field.Types;

var Milestone = new keystone.List('Milestone');
Milestone.add({
	title: { type: Types.Text, initial: true, required: true },
	content: {
		type: Types.Textarea, initial: true, required: true,
	},
	icon: { type: Types.Text, initial: true, required: true },
	icon_color: { type: Types.Select, options: 'yellow, green, red, blue, orange', initial: true, default: 'orange', required: true },
	alt: { type: Types.Text, initial: true, required: true },
	month: { type: Types.Text, initial: true, required: true },
	order: { type: Types.Number, initial: true, required: true, unqiue: true },

});
Milestone.register();
