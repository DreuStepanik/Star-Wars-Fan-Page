(function() {
    'use strict';

    angular
        .module('app')
        .controller('SearchController', SearchController);

        SearchController.$inject = ['MovieFactory', '$stateParams'];

     function SearchController(MovieFactory, $stateParams) {
        var vm = this;
        //what happens on click   
        vm.specificEpisode = function(movies) {
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