Ext.define('app.view.template.Contact', {
    extend: 'Ext.XTemplate',
	config: {
		compiled: true
	},
	constructor: function (config) {
		var html = [
			'<tpl for=".">',
				'<div class="convo them">',
					'<p>{fName} {lName}</p>',
				'</div>',
			'</tpl>'];

		this.callParent(html);
	}
});


