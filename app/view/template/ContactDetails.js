Ext.define('app.view.template.ContactDetails', {
    extend: 'Ext.XTemplate',
	config: {
		compiled: true
	},
	constructor: function (config) {
		var html = [
			'<tpl for=".">',
				'<div class="">',
					'{fName} {lName}',
				'</div>',
				'<div class="">',
					'{phone}',
				'</div>',
			'</tpl>'];

		this.callParent(html);
	}
});


