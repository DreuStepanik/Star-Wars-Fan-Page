(function() {
    'use strict';

    angular
        .module('app')
        .controller('SearchController', SearchController);

        SearchController.$inject = ['MovieFactory', '$stateParams'];

     function SearchController(MovieFactory, $stateParams) {
        var vm = this;
         vm.movie = '';
        
        

        //what happens on click   
        vm.inputResults = function(movies) {

            //retrieving the data from the factory
            MovieFactory.getMovieData(movies).then(
                function(data) {
                    vm.movieData = data;
                    console.log(vm.movieData);
                },
                function(error) {});
        };
    }
})();