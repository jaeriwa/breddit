export default angular
    .module('app.threads', [])
    .controller("thread", ['$scope', function($scope) {
      $scope.message = "Thread title";
      $scope.class = "down";
      $scope.toggle = false;
      $scope.toggleFilter = function() {
        $scope.toggle = $scope.toggle === false ? true : false;
        if ($scope.class === "down"){
          $scope.class = "up";
        }
        else{
          $scope.class = "down";
        }
      }
    }])
    .name;