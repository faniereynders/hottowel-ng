(function () {
    'use strict';

    angular
        .module('app.admin')
        .controller('Admin', Admin);

    Admin.$inject = ['logger'];

    /* @ngInject */
    function Admin(logger) {
        /*jshint validthis: true */
        var vm = this;

        vm.title = 'Admin';

        activate();

        function activate() {
            logger.info('Activated Admin View');
        }
    }
})();