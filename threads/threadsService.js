angular.module("rtfmApp")
.service("threadsService", function(fb, $firebaseArray){

  this.getThreads = function () {
    var x= new Firebase(fb.url+"/threads");
    return x;
  }

  this.getThread = function (id) {
    var y= new Firebase(fb.url+"/threads/"+id);
    return y;
  }
});
