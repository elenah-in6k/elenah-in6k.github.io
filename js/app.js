'use strict';
angular.module("myApp", ["ngRoute"])
    .config( function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl : "view/login.html"
            })
            .when("/1", {
                templateUrl : "view/sherlok.html"
            })
            .when("/cart", {
                templateUrl : "view/cart.html"
            })
            .when("/ballon", {
                templateUrl : "view/ballon.html"
            })
            .when("/music", {
                templateUrl : "view/music.html"
            })
            .when("/1", {
                templateUrl : "view/sherlok.html"
            })
            .when("/1", {
                templateUrl : "view/sherlok.html"
            })
            .when("/1", {
                templateUrl : "view/sherlok.html"
            })
            .when("/1", {
                templateUrl : "view/sherlok.html"
            })
            .when("/1", {
                templateUrl : "view/sherlok.html"
            })
            .when("/1", {
                templateUrl : "view/sherlok.html"
            })
            .when("/1", {
                templateUrl : "view/sherlok.html"
            })
            .when("/1", {
                templateUrl : "view/sherlok.html"
            })
            .when("/1", {
                templateUrl : "view/sherlok.html"
            });
    });