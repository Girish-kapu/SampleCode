app.controller('firstController', ['$scope', function($scope){
	$scope.firstName = "John";
	$scope.lastName = "Doe";

	$scope.getFullName = function (){
    	return $scope.firstName + " " + $scope.lastName;
    };

}]);

app.controller('secondController', ['$scope', function($scope){
	$scope.firstName = "Bob";
	$scope.middleName = "Al";
	$scope.lastName = "Smith";

	$scope.getFullName = function (){
    	return $scope.firstName + " " + $scope.middleName + " " + $scope.lastName;
  	};
}]);