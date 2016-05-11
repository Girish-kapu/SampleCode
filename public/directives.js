app.controller('directivesController', ['$scope', function(scope) {
	scope.firstName = 'Chaithu';
	scope.lastName = 'Bobby';

	scope.updateName = function (firstName, lastName)
    {
      scope.firstName = firstName;
      scope.lastName = lastName;
    };
}]);

app.directive('sharedScope', function(){
	return {
		restrict:'EA',
		scope:false ,
		template: 	'<label>First name: <input type="text" ng-model="firstName"/></label><br />' +
        		  	'<label>Last name: <input type="text" ng-model="lastName"/></label><br />' +
        			'<br />' +
        			'<strong>First name:</strong> {{firstName}}<br />' +
        			'<strong>Last name:</strong> {{lastName}}'
	};
});

app.directive('inheritedScope', function(){
	return {
		restrict:'EA',
		scope:true,
		template: 	'<label>First name: <input type="text" ng-model="firstName"/></label><br />' +
        		  	'<label>Last name: <input type="text" ng-model="lastName"/></label><br />' +
        			'<br />' +
        			'<strong>First name:</strong> {{firstName}}<br />' +
        			'<strong>Last name:</strong> {{lastName}}'
	};
});

app.directive('isolatedScope', function(){
	return {
		restrict:'EA',
		scope:{
          firstName: '@dirFirstName',
          lastName: '=dirLastName',
          setNameMethod: '&dirUpdateNameMethod'
        },
		template: 	'<label>First name: <input type="text" ng-model="firstName"/></label><br />' +
			        '<label>Last name: <input type="text" ng-model="lastName"/></label><br />' +
			        '<button ng-click="execSetNameMethod()">Set name on external scope</button><br />' +
			        '<br />' +
			        '<strong>First name:</strong> {{firstName}}<br />' +
			        '<strong>Last name:</strong> {{lastName}}',
		link: function(scope, element, attrs){
			scope.execSetNameMethod = function (){
	          scope.setNameMethod(
	            {
	              newFirstName: scope.firstName,
	              newLastName: scope.lastName
	            });
	        };
		}
	};
});