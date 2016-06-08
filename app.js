angular.module("rtfmApp", ["ui.router","firebase"])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state("home", {
    url: "/",
    templateUrl: "home/home.html",
    controller: "home"
  })
  .state("threads",{
    url: "/threads",
    templateUrl: "threads/threads.html",
    controller: "threadsCtrl",
    resolve: {
     threadsRef: function (threadsService) {
       return threadsService.getThreads();
     }

   }

  })
  .state("indvThread", {
    url: "/threads/:threadId",
    templateUrl: "indvThread/indvThread.html",
    controller: "indvThreadCtrl",
    resolve: {
      threadRef: function (threadsService, $stateParams) {
        return threadsService.getThread($stateParam.threadId);
      }
    }
  })

  $urlRouterProvider.otherwise("/");

})

.constant("fb", {
  url: "https://chatroomnv.firebaseio.com"
});
