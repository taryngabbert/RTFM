angular.module("rtfmApp")
.controller("threadsCtrl", function($scope, threadsRef, $firebaseArray) {
  // $scope.threads = $firebaseArray(threadsRef);
  // console.log($scope.threads);

  $scope.threads= $firebaseArray(threadsRef);
  console.log($scope.threads);
  $scope.createThread= function (un,tit) {
    $scope.threads.$add({
      username: un,
      title: tit
    });
  }


});
