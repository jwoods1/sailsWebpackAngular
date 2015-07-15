var angular = require('angular');
require('angular-ui-router');

var app = angular.module('app',['ui.router']);

app.controller('testCtrl',function($scope,$http){

  $scope.test = $http.get('/api/user')
     .success(function(data, status, headers, config) {
     console.log(data[0].name);
     $scope.name = data[0].name;
    }).
    error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
  
});