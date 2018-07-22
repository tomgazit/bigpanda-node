// Load mongo LOG model
const Log = require('./models/log');

methods = {
	/*
		log model:
			{
				taskId: STRING,
				logDate: DATE (Default: Date.now()),
				response: STRING,
				extraData: OBJECT,
				logType: ENUM('NORMAL', SUCCESS', 'ERROR', 'WARNING')
			}
	
	*/
	log(log) {

		//Set default date to now (if not provided)
		if (_.isNil(log.logDate)) {
			log.logDate = moment().format();
		}
		
		try {
			const logObject = new Log(log);

			logObject.save()
				.then(log => {
					console.log('Log Details:');
					console.log(log);
				})
				.catch(err => {
					//2DO: if can't write to log DB - write the log details to a file
					console.log('log error1:',err);
				});
		}
		catch (error) {
			console.log('log error2:',error);
			// Shouldn't get here 0_o
			//2DO: if can't write to log DB - write the log details to a file
		}
	}
}

module.exports = methods;