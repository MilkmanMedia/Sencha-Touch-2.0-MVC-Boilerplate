Ext.define('app.controller.Contacts', {
    extend: 'Ext.app.Controller',
	config: {
		refs: {
			contacts: 'contacts'
		}
	},

	init: function() {
		var me = this;
		this.app = this.getApplication();	//	short ref to our app
		this.app.vp = Ext.Viewport;			//	set app level ref to our viewport
		
		//	event listener to show view
		this.app.on('showContacts', function(){
			me.showContacts();
		});

		this.control({
			'contacts': {
				itemtap: function(view, idx){
					var rec = Ext.getStore('Contacts').getAt(idx);
					me.showContactDetails(rec);
				}
			}
		});

	},
	
	showContacts: function() {
		var contacts = Ext.create('app.view.Contacts');
		this.app.vp.add(contacts);
		this.app.vp.setActiveItem(contacts);
	},
	
	showContactDetails: function(rec){
		var details = Ext.create('app.view.ContactDetails', {data: rec.data});
		this.app.vp.add(details);
		this.app.vp.setActiveItem(details);
		console.log(rec);
	}
});