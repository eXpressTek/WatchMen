module.exports = {
	'notifications' : {
		enabled: false, //if disabled, no notifications will be sent
		to: ['dev-test@eXpressTek.us'], //default notification list if no alert_to is specified for host or url
		postmark : {
			from: 'dev-test@eXpressTek.us',
			api_key : 'your-postmark-key-here'
		}
	}
};
