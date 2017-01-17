angular.module('myApp')
  .controller('myController', function($scope, quoteSvc){
      $scope.test = quoteSvc.test();
  });
