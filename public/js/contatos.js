//learning angular
//A module is created by using the AngularJS function angular.module
var app = angular.module("myApp", []);

app.controller("myController", function($scope){
  debugger;
  $scope.firstName = "Geronimo";
  $scope.secondName = "Olanda";

  //functions
  $scope.changeName = function(boolChange = false, boolconcate = false){
    if(boolChange){
      $scope.firstName = "Thalia";
      $scope.secondName = "Gostosa";
    
    }
    
    if(boolconcate){
      $scope.message = $scope.firstName + " " + $scope.secondName;
    
    }
    
    else{
      $scope.firstName = "";
      $scope.secondName = "";
      $scope.message = "O zé gotinha, ainda não foi passado como true, kita daqui"
    
    
    }
  }
})
