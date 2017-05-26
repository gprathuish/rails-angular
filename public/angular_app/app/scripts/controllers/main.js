'use strict';

/**
 * @ngdoc function
 * @name sampleAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sampleAppApp
 */
angular.module('sampleAppApp')
  .controller('MainCtrl', function ($scope, $http) {

		$http.get('getdata').success(function(data){
			console.log(data);
			$scope.message = data.message;
		}).catch(function(err){
			console.log(err);
		});
  });
