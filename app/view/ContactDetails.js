Ext.define('app.view.ContactDetails', {
    extend: 'Ext.Container',
	requires: ['app.view.template.ContactDetails'],
	xtype: 'contactDetails',
	
	config: {
		layout: {
			type: 'vbox'
		},
		scrollable: {
		    direction: 'vertical',
		    directionLock: true
		},
		tpl: Ext.create('app.view.template.ContactDetails')
	},

    constructor : function(config) {
		console.log(config);
//		this.setData(config.data);
		this.callParent([config]);
	}
});