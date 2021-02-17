(function(eloquaCallsFunction){
    const eloquaCallBasicAuth = require('../services/eloquaCallsBasicAuth');
    var Q = require("q");
    var async = require("async")



    eloquaCallsFunction.getCall = function(payload) {
        var deferred = Q.defer();
        
        var baseUrl = "https://secure.p02.eloqua.com/";
        var tokenInfo = {
            "username" : "Sreevatsa.MS",
            "password" : "Viper@123",
            "siteName" : "TechnologyPartnerportqiiPTELTD"
        };

        async.forEachLimit(function(){
            var endpointUrl = "/API/REST/2.0/assets/email/7658";
            tokenInfo.host = baseUrl+ endpointUrl;
            console.log(tokenInfo.host, tokenInfo.username, tokenInfo.password, tokenInfo.siteName);

            eloquaCallBasicAuth.get(tokenInfo)
            .then(function(response){
                deferred.resolve(response);
            })


        })
        return deferred.promise;
    }

})(module.exports);