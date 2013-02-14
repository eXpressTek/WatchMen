var icmp = require('net-ping');

function validate_http_response (service, body, res){
  if (service.expected){
    if (res.statusCode != service.expected.statuscode){
      return 'FAILED! expected status code :' + service.expected.statuscode +
        ' at ' + service.url + ' but got ' + res.statusCode;
    }
    else if (service.expected.contains && (!body ||
        (body.indexOf(service.expected.contains)==-1))){
      return 'FAILED! expected text "' + service.expected.contains +
        '" but it wasn\'t found';
    }
    else{
      return ''; //ok
    }
  }
  return ''; //nothing to check for
}

function ping (service, callback){

	var startTime = new Date();

	// Default options
	var options = {
	    retries: service.host.retries || 1,
	    timeout: service.host.timeout || 2000
	};

	//create the session
	var session = icmp.createSession (options);

	//do the thing
	session.pingHost (service.host.host, function (error, target) {
	    if (error)
	        if (error instanceof ping.RequestTimedOutError)
	            return 'FAILED! ' + target + " no response";
	        else
            	return 'FAILED! ' + target + " " + error.toString ();
	    else {
			var timeDiff = (new Date() - startTime);
			callback(null, null, null, timeDiff);
			return '';
		}
	});

}

module.exports.ping = ping;