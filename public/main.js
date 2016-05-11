var app = angular.module('app', ['ngRoute']);

app.factory('_', function(){
 return window._;
});

app.config(function($routeProvider) {
    $routeProvider
        .when('/onewaybinding', {
            templateUrl : 'oneWayBinding.html'
        })
        .when('/twowaybinding', {
            templateUrl : 'twoWayBinding.html'
        })
        .when('/multiplecontrollers', {
            templateUrl : 'multiplecontrollers.html'
        })
        .when('/nestedcontrollers', {
            templateUrl : 'nestedcontrollers.html'
        })
        .when('/services', {
            templateUrl : 'sevices.html'
        })
        .when('/conditionals', {
            templateUrl : 'conditionals.html'
        })
        .when('/include', {
            templateUrl : 'include.html'
        })
        .when('/repeater', {
            templateUrl : 'repeater.html'
        })
        .when('/filters', {
            templateUrl : 'filters.html'
        })
        .when('/q', {
            templateUrl:'q.html'
        })
        .when('/directives', {
            templateUrl:'directives.html'
        })
        .when('/directivescontrols', {
            templateUrl:'directivesControls.html'
        })
        .otherwise({
            redirectTo: '/onewaybinding'
        });
});
