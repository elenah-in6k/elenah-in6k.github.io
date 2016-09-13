'use strict';
angular.module("myApp", ["ngRoute"])
    .config( function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl : "view/login.html"
            })
            .when("/sherlok", {
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
            .when("/tim", {
                templateUrl : "view/tim.html"
            })
            .when("/gosha", {
                templateUrl : "view/gosha.html"
            })
            .when("/balk", {
                templateUrl : "view/balk.html"
            })
            .when("/hist", {
                templateUrl : "view/hist.html"
            })
            .when("/mmm", {
                templateUrl : "view/mmm.html"
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