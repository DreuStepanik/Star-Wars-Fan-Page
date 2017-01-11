(function() {
    'use strict';

    angular
        .module('app', ['ui.router'])
        .config(function($urlRouterProvider, $stateProvider) {

            $urlRouterProvider.otherwise('/search');

            $stateProvider
                .state('search', {
                    url: '/search',
                    templateUrl: 'search/search.html',
                    controller: 'SearchController as search'
                })
                .state('detail', {
                    url: '/detail?imdbID',
                    templateUrl: 'detail/detail.html',
                    controller: 'DetailController as detail'
                });

        });
})();
