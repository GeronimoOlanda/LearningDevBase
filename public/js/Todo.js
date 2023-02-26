const app = angular.module("MyApp", []);

app.controller("todoController", ($scope) => {
  $scope.todoList = [{
    todoText: 'Exemplo: Tirar Areia dos Pets',
    done: false
  }];

    $scope.todoAdd = () => {
        $scope.todoList.push({
        todoText: $scope.todoInput,
            done: false
    });
    
    $scope.todoInput = "";

    };
    $scope.remove = () => {
      var oldList = $scope.todoList;
      $scope.todoList = [];
      angular.forEach(oldList, function(x) {
          if (!x.done) $scope.todoList.push(x);
      });
  };
});