  // STEP 2
  // creates a module called "app" matching the ng-app declaration on the <body>
  var app = angular.module("app", []);

  app.service('PostsSvc', function($http){
    this.fetch = function() {
      return $http.get('/api/posts');
    };
    this.create = function(post){
      return $http.post('/api/posts', post);
    };
  });


  // STEP 3 create a controller and put some data in $scope.posts
  // app.controller() creates a module called "PostsCtrl" which controls the "app" module
  // dependency inject $scope
  app.controller("PostsCtrl", function ($scope, PostsSvc){
    // STEP 7 add the function addPost() to $scope so ng-click can use it
    $scope.addPost = function () {
      // STEP 10 wrap the addPost() logic in an if statement to prevent empty posts
      if ($scope.postBody) {
        PostsSvc.create({
          username: "giuliaxxx",
          body: $scope.postBody // use the text entered in the input field by the user
        }).success(function(post){
          $scope.posts.unshift(post); // unshift: pushes the new element to the beginning of the array
          $scope.postBody = null; // clear the input field after the post is added to the list
        });
      }
    };

    PostsSvc.fetch().success(function(posts){
      $scope.posts = posts;
    });
  });
