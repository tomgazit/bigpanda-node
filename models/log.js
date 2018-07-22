const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Log Model
var Log = new Schema({
  taskId: {
    type: String
  },
  logType: {
    type: String
  },
  logDate: {
  	type: Date
  },
  request: {
    type: Object
  },
  response: {
    type: Object
  },
  responseText: {
    type: String
  },
  extraData: {
    rtpe: Object
  }
},{
    collection: 'logs'
});

module.exports = mongoose.model('Log', Log);