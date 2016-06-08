angular.module("rtfmApp")
.controller("indvThreadCtrl", function($scope, threadRef, $firebaseObject) {

  var thread = $firebaseObject(threadRef);
  thread.$bindTo($scope, 'indvThread');




});
