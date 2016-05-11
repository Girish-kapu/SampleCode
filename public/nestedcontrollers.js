app.controller('firstControllerScope', ['$scope', function($scope){
	$scope.firstName = "John";
}]);

app.controller('secondControllerScope', ['$scope', function($scope){
	$scope.lastName = "Doe";

  	$scope.getFullName = function (){
    	return $scope.firstName + " " + $scope.lastName;
  	};
}]);

app.controller('thirdControllerScope', ['$scope', function($scope){
	$scope.middleName = "Al";
  	$scope.lastName = "Smith";

  	$scope.getFullName = function (){
    	return $scope.firstName + " " + $scope.middleName + " " + $scope.lastName;
  	};
}]);

app.controller('firstControllerObj', ['$scope', function($scope){
	$scope.firstModelObj = {
	    firstName: "John"
	};
}]);

app.controller('secondControllerObj', ['$scope', function($scope){
	$scope.secondModelObj = {
	    lastName: "Doe"
	};

  	$scope.getFullName = function (){
    	return $scope.firstModelObj.firstName + " " + $scope.secondModelObj.lastName;
  	};
}]);

app.controller('thirdControllerObj', ['$scope', function($scope){
	$scope.thirdModelObj = {
	    middleName: "Al",
	    lastName: "Smith"
	};

  	$scope.getFullName = function (){
    	return $scope.firstModelObj.firstName + " " +$scope.thirdModelObj.middleName + " " + $scope.thirdModelObj.lastName;
  	};
}]);

