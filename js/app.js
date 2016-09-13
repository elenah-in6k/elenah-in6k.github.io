'use strict';
angular.module("myApp", ["ngRoute"])
    .config( function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl : "login.html"
            });
            // .when("/1", {
            //     templateUrl : "login.html"
            // })
    });