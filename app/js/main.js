;(function (){

  'use strict';

  angular.module('ButtonModule', [])

  .controller('ButtonController', ['$scope', function ($scope){

    $scope.likes= 0;

    $scope.count = function (){
      return $scope.likes;
    };

    $scope.addLike = function incrementScope(){
      $scope.likes ++;

      console.log($scope.likes);
    };

  }]);

}());
