angular.module('myApp')
  .controller('myController', function($scope, quoteSvc){

      $scope.getQuotes = quoteSvc.getQuotes();
      $scope.addData = quoteSvc.addData;
      $scope.removeData = quoteSvc.removeData;
  });
