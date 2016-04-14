

var app = angular.module('myModule', []);

app.config(['$httpProvider', function ($httpProvider) {
		delete $httpProvider.defaults.headers.common['X-Requested-With'];
		$httpProvider.defaults.headers.common['Accept'] = 'application/json, text/javascript';
		$httpProvider.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';
		$httpProvider.defaults.useXDomain = true;
	}])


	.controller("myController", function($scope, $http){
		$http({
			method: 'GET',
			dataType: 'jsonp',
			url: 'http://planer.info.pl/api/rest/events.json?startTicket=25'})
			.then(function (response){
				$scope.events = response.data;
				console.log('$scope.events')
			})
	})