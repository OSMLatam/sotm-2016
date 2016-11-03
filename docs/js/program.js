(function () {
    'use strict';

  var App = angular.module("App", []);

  App.config(function($interpolateProvider) {
      $interpolateProvider.startSymbol('{[{');
      $interpolateProvider.endSymbol('}]}');
  });

  App.controller('sotm', ['$scope', '$http', function ($scope, $http) {
    $http.get('/js/sotmprogram.json')
      .then(function(json_f) {
        $scope.days = json_f.data.days;
        $scope.talks = json_f.data.talks;
      }
      );
    $scope.get_talk = function(id) {
      return $scope.talks[id - 1];
    };
  }]);
})();
