angular.module('myApp')
  .controller('myController', function($scope, quoteSvc){

      $scope.Quotes = quoteSvc.getQuotes();
      $scope.addData = quoteSvc.addData;
      $scope.removeData = function(quoteObj) {
          quoteSvc.removeData(quoteObj);
      }

  });
