(function(eloquaCallBasicAuth) {
	
	var request = require('request-promise');
	
	eloquaCallBasicAuth.get = function(userInformation,resultantFunction) {
		if(userInformation.siteName){
			var authenticationHeader = "Basic " + new Buffer.from(userInformation.siteName +"\\"+ userInformation.userName + ":" + userInformation.password).toString("base64");	
		}
		else{
			var authenticationHeader = "Basic " + new Buffer.from(userInformation.username + ":" + userInformation.password).toString("base64");
		}	
		var options = {
			url     : userInformation.host,
			timeout : 90000,
			headers : { "Authorization" : authenticationHeader }
		};
		return request(options, resultantFunction);
	}

	eloquaCallBasicAuth.post = function(userInformation,resultantFunction) {
		if(userInformation.siteName){
			var authenticationHeader = "Basic " + new Buffer.from(userInformation.siteName +"\\"+ userInformation.userName + ":" + userInformation.password).toString("base64");	
		}
		else{
			var authenticationHeader = "Basic " + new Buffer.from(userInformation.username + ":" + userInformation.password).toString("base64");
		}	
		var options = {
	        url     : userInformation.host,
			timeout : 90000,
	        headers : { "Authorization" : authenticationHeader } ,
	        method  : 'POST',
			body    : userInformation.body,
			json    : true,
	  	}
		return request(options,resultantFunction);
	}
	
	eloquaCallBasicAuth.put = function(userInformation,resultantFunction) {
		if(userInformation.siteName){
			var authenticationHeader = "Basic " + new Buffer.from(userInformation.siteName +"\\"+ userInformation.userName + ":" + userInformation.password).toString("base64");	
		}
		else{
			var authenticationHeader = "Basic " + new Buffer.from(userInformation.username + ":" + userInformation.password).toString("base64");
		}	
		var options = {
	        url     : userInformation.host,
			timeout : 90000,
	        headers : { "Authorization" : authenticationHeader } ,
	        method  : 'PUT',
			body    : userInformation.body,
			json    : true,
	  	}
		return request(options,resultantFunction);
	}

})(module.exports);