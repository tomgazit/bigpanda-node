//Load regex capabilities
const glob = require( 'glob' );
const path = require( 'path' );

//Load DB handlers
const mongoose = require('mongoose');
const config = require('./db');

//Load Message model and manager
const Message = require('./models/message');

//Set global actions variable containing all trigger actions
actions={};

const bootstrapMethods = {
	connectToDb() {
		// Connect to the db
		mongoose.connect(config.DB, { useNewUrlParser: true }).then(
			() => {
				console.log('Database is connected');
			},
			err => { console.log('Can not connect to the database' + err)
		});
	}
}

module.exports = {
	init: () => {
		bootstrapMethods.connectToDb();
	}   
}