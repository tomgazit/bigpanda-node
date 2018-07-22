const express = require('express');
const app = express();
const router = express.Router();

const Message = require('../models/message');

// Ceate a new message
router.route('/').post(function (req, res) {
	const message = new Message(req.body);
	message.msgDate = moment();
	message.ip = ip.address();
	message.save()
		.then(message => {
			res.status(200).json({success: true, id: message._id});
		})
		.catch(err => {
			res.status(500).send({success: false, error: {message: "unable to save the message into database"}});
		});
});

// Display messages
router.route('/').get(function (req, res) {
	Message.find(function (err, messages){
		if(err){
			console.log(err);
		}
		else {
			//Simulate slow loading response
			new Promise(resolve => setTimeout(() => res.json(messages.map((__,i) => {
				return _.pick(messages[i], ['email', 'comment']);
			})), 2000))
		}
	}).sort({msgDate:-1});
});

// get one message
router.route('/:id').get(function (req, res) {
	Message.findById(req.params.id, function(err, message) {
		if (err)
			res.status(500).send({success: false, error: err});
		else {
			res.json(_.pick(message, ['email', 'comment', 'msgDate']));
		}
	});
});

// get last message by email
router.route('/byEmail/:email').get(function (req, res) {
	Message.findOne({email: req.params.email}, function(err, message) {
		if (err)
			res.status(500).send({success: false, error: err});
		else if (_.isEmpty(message)) {
			res.status(404).send({success: false, error: 'Message not found'});
		}
		else {
			res.json(_.pick(message, ['email', 'comment', 'msgDate']));
		}
	}).sort({msgDate:-1});
});

/*
// FOR FUTURE USE

// Update message
router.route('/:id').put(function (req, res) {
	Message.findById(req.params.id, function(err, message) {
		if (!message)
			return next(new Error('Could not load Document'));
		else {
			//message.message_name = req.body.message_name;

			message.save().then(message => {
				res.json('Successfully Updated');
			})
			.catch(err => {
				res.status(500).send("unable to update the database");
			});
		}
	});
});

// Delete message
router.route('/:id').delete(function (req, res) {
	console.log('remove id:', req.params.id);
	Message.findByIdAndRemove({_id: req.params.id}, function(err, message){
	if (message == null) {
		res.status(404).json({success: false, error: {message: `No such message available with id ${req.params.id}`}});
	}
	else if(err) res.status(500).json({success: false, error: err});
	else {
		//messageManager.stopmessage(message);
		res.json({success: true});
	}
  });
  
});*/

module.exports = router;