var app = angular.module("app", []);
app.controller("control", ['$scope', function($scope) {
  $scope.phide1 = false;
  $scope.phide2 = false;
  $scope.show1 = function() {
    $scope.phide1 = false;
    $scope.phide2 = true;
  }
  $scope.show2 = function() {
    $scope.phide2 = false;
    $scope.phide1 = true;
  }
}]);
