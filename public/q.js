app.controller('qController', ['$scope','$q','$timeout', function(scope,q,$timeout){
	
	scope.url = [{}];
	scope.status = 'started';
	scope.completeStatus = 'started';
	scope.urlData = [];
	var createPromises = function(urlStatus, value){
		var deferred = q.defer();
		$timeout(function() {
			if (urlStatus) {
	            scope.urlData.push({status: value + ' level of step complted'});
	            deferred.resolve(name);
	        } else {
	            scope.urlData.push({status: value + ' level of step failed'});
	            deferred.reject(name);
	        }
	    }, value * 1000);
	    return deferred.promise;
	};
	var luckyNumber = 5;
	for (var i = 0; i <= luckyNumber; i++) {
		if(i === 2 || i === 4){
			scope.url.push(createPromises(true, i));
		}
		else{
			scope.url.push(createPromises(false, i));
		}
	}
	q.all(scope.url).then(
		function(){
			scope.status = 'processing done';
		},
		function(){
			scope.status = 'processing failed';
	})
	.finally(function(){
		scope.completeStatus = 'Done';
	});
	
}]);