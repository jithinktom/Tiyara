'use strict';

/**
 * @ngdoc function
 * @name tiyaraApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tiyaraApp
 */
angular.module('tiyaraApp')
    .controller('HomeCtrl', function ($scope) {
        $scope.init = function () {
            $scope.newUser = {};
            $scope.user = {};
            $scope.hover = false;
            $scope.page = 'signup';
            $scope.withEmail = false;
        }

        $scope.number = 18;

        $scope.getNumber = function (num) {
            return new Array(num);
        }

        // $scope.currentNavItem = 'page1';

        $scope.goto = function (page) {
            $scope.page = page;
        }
        $scope.SignUp = function () {
            console.log($scope.newUser);
        }

        $scope.SignUpWithEmail = function () {
            $scope.withEmail = true;
        }
        
        $scope.cancelWithEmail = function () {
            $scope.withEmail = false;
        }
        $scope.CheckWithEmail = function () {
            return $scope.withEmail;
        }

        $scope.init();
    });
