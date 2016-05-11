app.value('valueService', {
	firstName:'Chaithu',
	lastName:'Babu'
});

app.constant('constantsService', {
	personInfo : {firstName:'Chaithu',lastName:'Babu'}
});

app.service('serviceService',function() {
	this.getFullName = function(firstName, lastName){
		return firstName + ' - ' + lastName;
	}
});

app.factory('factoryService',function() {
	return {
		getFullName : function(firstName, lastName){
			return 'Chinthapalli ' + firstName + '  ' + lastName;
		}
	}
});

app.provider('providerService',function() {
	this.$get = function() {
        var name = this.name;
        return {
            getFullName: function(firstName, lastName) {
                return "Hello, your name is " + firstName + ' ' +lastName;
            }
        }
    };
});

app.controller('valueController', ['$scope','valueService', function($scope, valueService){
	$scope.firstName = valueService.firstName;
	$scope.lastName = valueService.lastName;

	$scope.getFullName = function (){
    	return $scope.firstName + " " + $scope.lastName;
    };
}]);

app.controller('constantsController', ['$scope','constantsService', function($scope, constantsService){
	$scope.firstName = constantsService.personInfo.firstName;
	$scope.lastName = constantsService.personInfo.lastName;
	$scope.personInfo = constantsService.personInfo;
	$scope.getFullName = function (){
    	return $scope.personInfo.firstName + " " + $scope.personInfo.lastName;
    };
}]);

app.controller('serviceController', ['$scope','serviceService','constantsService', function($scope, serviceService, constantsService){
	$scope.firstName = constantsService.personInfo.firstName;
	$scope.lastName = constantsService.personInfo.lastName;
	$scope.personInfo = constantsService.personInfo;
	$scope.getFullName = function (){
		return  serviceService.getFullName($scope.firstName,$scope.lastName);
    };
}]);

app.controller('factoryController', ['$scope','factoryService','constantsService', function($scope, factoryService, constantsService){
	$scope.firstName = constantsService.personInfo.firstName;
	$scope.lastName = constantsService.personInfo.lastName;
	$scope.personInfo = constantsService.personInfo;
	$scope.getFullName = function (){
		return  factoryService.getFullName($scope.firstName,$scope.lastName);
    };
}]);

app.controller('providerController', ['$scope','providerService','constantsService', function($scope, providerService, constantsService){
	$scope.firstName = constantsService.personInfo.firstName;
	$scope.lastName = constantsService.personInfo.lastName;
	$scope.personInfo = constantsService.personInfo;
	$scope.getFullName = function (){
		return  providerService.getFullName($scope.firstName,$scope.lastName);
    };
}]);