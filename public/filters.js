app.controller('filtersController', ['$scope', function(scope){
	scope.allColumnsFilter = '';
	scope.nameFilter = '';
	scope.ageFilter = '';
	scope.allCountFilter = '';
	scope.headers = ['Name', 'Age', 'Gender'];
	scope.data = [{name:'Chaitanya', age:27, gender:'Male'},
				  {name:'Kishore', age:26, gender:'Male'},
				  {name:'Tinku', age:27, gender:'Male'},
				  {name:'sita', age:28, gender:'FeMale'}];
}]);