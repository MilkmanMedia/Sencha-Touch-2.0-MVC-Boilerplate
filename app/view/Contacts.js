Ext.define('app.view.Contacts', {
    extend: 'Ext.List',
	require: 'app.view.template.Contact',
	xtype: 'contacts',
	
	config: {
		emptyText: 'No Contacts :-(',
		store: 'Contacts',
		layout: {
			type: 'vbox'
		},
		itemTpl: Ext.create('app.view.template.Contact')
	},

    constructor : function(config) {
		this.callParent([config]);
	}
});