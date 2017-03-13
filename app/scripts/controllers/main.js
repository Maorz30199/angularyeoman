'use strict';

angular.module('angularyeomanApp')
  .controller('MainCtrl', function ($scope) {
    $scope.tareas = ['item 1','item 2','item3'];
    $scope.addTarea = function(){
      $scope.tareas.push($scope.tarea);
      $scope.tarea = '';
    };
    $scope.eliminarTarea = function(index){
      $scope.tareas.splice(index, 1);
    };
  });
