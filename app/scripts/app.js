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

        $urlRouterProvider.otherwise('/root/home');
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
            .state('root.default', {
                url: '/root',
                abstract: true,
                views: {
                    'header': {
                        templateUrl: 'views/header.html',
                        controller: 'HeaderCtrl'
                    },
                    'page': {
                        templateUrl: 'views/root-layout.html',
                    },
                    'footer': {
                        templateUrl: 'views/footer.html',
                        controller: 'FooterCtrl'
                    }
                }
            })
            .state('root.default.home', {
                url: '/home',
                views: {
                    'content': {
                        templateUrl: 'views/home.html',
                        controller: 'HomeCtrl'
                    }
                }
            })
    })
    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('purple', {
                'default': '900',
                'hue-1': '500', // use shade 100 for the <code>md-hue-1</code> class
                'hue-2': '800', // use shade 600 for the <code>md-hue-2</code> class
                'hue-3': 'A700'
            })
            .accentPalette('pink', {
                'default': '600'
            })
            .warnPalette('red', {
                'default': '700'
            });
    });
