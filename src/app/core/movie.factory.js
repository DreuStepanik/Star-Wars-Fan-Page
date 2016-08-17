(function() {
   'use strict';
// Gave a name to the Factory
   angular
       .module('app')
       .factory('MovieFactory', MovieFactory);
// Inject the dependencies within the Factory
   MovieFactory.$inject = ['$http'];

   /* @ngInject */
   function MovieFactory($http) {
       var service = {
           getMovieData: getMovieData,
		   getDetailsData: getDetailsData
       };
       return service;

       ////////////////
       

       function getMovieData(movieName) {
    
           return $http.get('http://www.omdbapi.com/?s=' + movieName);
       }
		
	   function getDetailsData(movieDetails) {
    
           return $http.get('http://www.omdbapi.com/?i=' + movieDetails);
       }
   }
})();