Ext.define('app.view.Contacts', {
    extend: 'Ext.List',
	requires: 'app.view.template.Contact',
	xtype: 'contacts',

	config: {
		title: 'Contacts List',
		iconCls: "team",
		emptyText: 'No Contacts :-(',
		store: 'Contacts',
		// layout: {
		// 	type: 'vbox'
		// },
		itemTpl: Ext.create('app.view.template.Contact')
	},

    constructor : function(config) {
		this.callParent([config]);
	}
});