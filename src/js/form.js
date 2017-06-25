var app = angular.module('app', []);
app.controller('login', function($scope) {
    $scope.helloMessage = "Sign up";
    $scope.name = "";
    $scope.email = "";
    $scope.emailLog = "";
    $scope.passLog = "";
    $scope.subButton = "";
    $scope.toggle = false;
    $scope.toggleFilter = function() {
        $scope.toggle = $scope.toggle === false ? true : false;
    }
});

