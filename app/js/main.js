;(function (){

  'use strict';

  angular.module('ButtonModule', [])

  .controller('ButtonController', ['$scope', function ($scope){

    // $scope.likes = [];

    $scope.likes= 0;

    $scope.count = function (){
      return $scope.likes;
    };

    $scope.plural = function () {
      if($scope.likes === 1){
        return 'like';
      } else {
        return 'likes';
      }
    };


    $scope.addLike = function incrementScope(){
      $scope.likes ++;

      // console.log($scope.likes);
    };

  }]);

}());
