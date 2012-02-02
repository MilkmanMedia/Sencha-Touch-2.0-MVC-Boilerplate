Ext.define('app.model.Contact', {
    extend: 'Ext.data.Model',
	config: {
	    fields: [
			{name: 'fName', type: 'string'},
			{name: 'lName', type: 'string'},
			{name: 'phone', type: 'string'},
		]		
	}
});
