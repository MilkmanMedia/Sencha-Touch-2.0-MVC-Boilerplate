Ext.define('app.store.Contacts', {
    extend: 'Ext.data.Store',
	requires: 'app.model.Contact',
	config: {
		storeId: 'Contacts',	//	ref to bind inside views
		model: 'app.model.Contact',
		data: [
			{fName: 'Alex', 	lName: 'Rolek', 	phone: '619-866-4543'},
			{fName: 'Erin', 	lName: 'Rolek', 	phone: '619-866-4543'},
			{fName: 'Justen', 	lName: 'Palmer', 	phone: '619-866-4543'},
			{fName: 'Michael', 	lName: 'Sacca', 	phone: '619-866-4543'}
		]
	}
});