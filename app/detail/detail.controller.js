(function() {
    'use strict';

    angular
        .module('app')
        .controller('DetailController', DetailController);

    DetailController.$inject = [];

    /* @ngInject */
    function DetailController() {
        var vm = this;
       vm.movie = 'star wars!!';
    }
})();