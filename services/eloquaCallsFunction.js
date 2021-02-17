(function(eloquaCallsFunction){
    const eloquaCallsBasicAuth = require('../services/eloquaCallsBasicAuth');
    var Q = require("q");
    var async = require("async");



    eloquaCallsFunction.getCall = function(payload) {
        var deferred = Q.defer();
        
        var baseUrl = "https://secure.p02.eloqua.com";
        var tokenInfo = {
            "userName" : "Sreevatsa.MS",
            "password" : "Viper@123",
            "siteName" : "TechnologyPartnerPortqiiPTELTD"
        };

        
            var endpointUrl = "/API/REST/2.0/assets/email/7658";
            tokenInfo.host = baseUrl+ endpointUrl;
            console.log(tokenInfo.host, tokenInfo.userName, tokenInfo.password, tokenInfo.siteName);

            eloquaCallsBasicAuth.get(tokenInfo)
            .then(function(response){
                deferred.resolve(response);
            })

        return deferred.promise;
    }

})(module.exports);