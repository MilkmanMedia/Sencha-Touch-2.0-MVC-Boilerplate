/*========================================================
 *	App container
 *======================================================*/
Ext.Loader.setConfig({ enabled: true });
Ext.application({
	name: 'app',
	phoneStartupScreen: '',
	appFolder: 'app',
	views: 	[
		'Contacts'
	],
	stores: [
		'Contacts'
	],
	controllers: ['Viewport', 'Contacts'],
	launch: function() {
		this.fireEvent('showContacts');
		Ext.Viewport.getLayout().setAnimation({
			type: 'slide',
			direction: 'left'
		});
	}
});