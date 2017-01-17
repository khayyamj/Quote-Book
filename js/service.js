angular.module('myApp')
  .service('quoteSvc', function() {
      this.test = function() {
          return "Success";
      }
  });
