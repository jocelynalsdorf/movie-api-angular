var app = angular.module("movieSearchApp", ["ngAnimate"]);

app.directive("movieSearch", function(){
//create a return object literal  
  return {
    templateUrl: "templates/movie-search.html",
    controller: "movieCtrl",
    restrict: "E"
  }

});

app.controller("movieCtrl", function($scope, $http){
  // $scope.movie = movie;
  $scope.showMovieDetails = false;
  $scope.resetSearch = function() {
    $scope.showMovieDetails = false;
  }
  $scope.loadMovie = function(){
    
    $http.get("http://omdbapi.com?t=" + encodeURIComponent($scope.movieQuery))
    .success(function(movieData){
      $scope.showMovieDetails = true;
      $scope.movieData = movieData;
    })
    .error(function(){
      alert("there was an error");
    });
  }

});



