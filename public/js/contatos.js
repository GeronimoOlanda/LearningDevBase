//learning angular
//A module is created by using the AngularJS function angular.module
var app = angular.module("myApp", []);

app.controller("myController", function($scope){
  $scope.firstName = "Geronimo";
  $scope.secondName = "Olanda";
})
