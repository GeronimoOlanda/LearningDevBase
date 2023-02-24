
/* 
  * ng-app directive defines an AngularJS application.
  * ng-model directive binds the value of HTML controls (input, select, textarea) to application data.
  * ng-bind directive binds application data to the HTML view
  * learning angular
  * A module is created by using the AngularJS function angular.module
  * Quando adicionamos a propriedade $scope, as views passam a ter acesso as nossas propriedades daquela controller
  * In the view, you do not use the prefix $scope, you just refer to a property name, like {{carname}}.
*/

/* 
services in angularjs are methods used to execute somethings
$location get the actual location at page
$http execute http request or response
$timeout to execute timeaout
*/

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
  // Working with Services
    //$scope.UrlAtual = $location.absUrl(); // get the absolute url

    //actually execute a http request
    /*
      $http.get("https://www.youtube.com/watch?v=sAYuOc7_TKg").then(function (response) {
      $scope.myWelcome = response.data;
    });
    */

    /*
      $timeout(function () {
      $scope.myHeader = "How are you today?";
      }, 2000);
   */

let listaItens = [];
  $scope.btnCadastrar = function() {
    let item = document.getElementById("itens").value;
      listaItens.push(item);

    
  };

  $scope.lista = listaItens;

});


