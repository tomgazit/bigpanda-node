const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Task Model
var Message = new Schema({
  email: {
    type: String
  },
  comment: {
  	type: String
  },
  ip: {
    type: String
  },
  msgDate: {
    type: Date
  },
  hidden: {
    type: Boolean,
    default: false
  },
  deleted: {
    type: Boolean,
    default: false
  }
},{
    collection: 'messages'
});

module.exports = mongoose.model('Message', Message);