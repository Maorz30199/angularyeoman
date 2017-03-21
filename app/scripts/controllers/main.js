'use strict';

angular.module('angularyeomanApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    if(localStorageService.get("angular-list")){
      $scope.tareas = localStorageService.get("angular-list");
    }else {
      $scope.tareas = [];
    }
    $scope.$watchCollection('tareas',function(newValue,oldValue){
      localStorageService.set("angular-list",$scope.tareas);
    });
    $scope.clickedTarea = {};
    $scope.addTarea = function(){
      if($scope.newAct != null){
        $scope.tareas.push($scope.newAct);
        $scope.newAct = {};
      }
      else {
        $scope.message = "Debes agregar una tarea";
        console.log("Campo");
      }
    };
    $scope.eliminarTarea = function(index){
      $scope.tareas.splice(index, 1);
    };

    $scope.selectTarea = function(tarea){
      $scope.clickedTarea = tarea;
    };

  });
