'use strict';

/**
 * @ngdoc overview
 * @name tiyaraApp
 * @description
 * # tiyaraApp
 *
 * Main module of the application.
 */
angular
    .module('tiyaraApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ui.router',
        'ngMaterial'
    ])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/home');
        // $locationProvider.html5Mode({
        //     enabled: true,
        //     requireBase: false
        // });

        $stateProvider
            .state('root', {
                abstract: true,
                url: '',
                views: {
                    'layout': {
                        templateUrl: 'views/root.html'
                    }
                }
            })
            .state('root.home', {
                url: '/home',
                views: {
                    'header': {
                        templateUrl: 'views/header.html',
                        controller: 'HeaderCtrl'
                    },
                    'page': {
                        templateUrl: 'views/home.html',
                    },
                    'footer': {
                        templateUrl: 'views/footer.html',
                        controller: 'FooterCtrl'
                    }
                }
            })
    });
