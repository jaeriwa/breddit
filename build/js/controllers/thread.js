export default angular
    .module('app.threads', [])
    .controller("thread", ['$scope', function($scope) {
      $scope.message = "Thread title";

    }])
    .name;