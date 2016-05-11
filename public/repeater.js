app.controller('repeaterController',['$scope','_', function(scope,_){
	scope.action = false;
	scope.headers = ['Name', 'Age', 'Gender', 'isSenior'];
	scope.data = [{name:'Chaitanya', age:27, gender:'M', isSenior:false, action:false},
				  {name:'Kishore', age:26, gender:'M', isSenior:false, action:false},
				  {name:'Tinku', age:27, gender:'M', isSenior:true, action:false},
				  {name:'Bittu', age:28, gender:'M', isSenior:false, action:false}];
	scope.checkSelection = function(status){
		_.forEach(scope.data, function(item){
			item.action = status;
		});
	};

	scope.indiviualSelection = function(item){
		item.action = !item.action;
		var data = _.where(scope.data, {action : true});
		if(data.length === scope.data.length){
			scope.action = true;
		}
		else{
			scope.action = false;
		}
	};

}]);