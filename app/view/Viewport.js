Ext.define('app.view.Viewport', {
	extend: 'Ext.TabPanel',
	
	
	config: {
		fullscreen: true,
		xtype: 'appviewport',
		tabBarPosition: 'bottom',
		
		items: [
			{
				html: "hello",
				title: "Button",
				iconCls: "home"
				
			},
			{
				html: "world",
				title: 'Button 2',
				iconCls: 'star'
			},
			{ 	// Adding by xtype
				xtype: 'contacts'
			},
			// Adding by explicit create
			Ext.create('app.view.Contacts',{
				title: "Fourth Tab",
				iconCls: 'more',
			})
		]
		
	}
});
