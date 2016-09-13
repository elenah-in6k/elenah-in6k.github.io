'use strict';
angular.module('myApp')
    .controller('hbCtrl', function ($scope, $rootScope) {
    $rootScope.nastia = "Сируха";
        $rootScope.audioScore = 0;

        $rootScope.login = function (username, password) {
            if (username == "сируха" && password=="korona18")
            alert("ok");
            else  if (username == "сируха" && password !="korona18")
                alert("Не вірний пароль");
            else  if (username != "сируха" && password =="korona18")
                alert("Не вірний логін");
            else
                alert("Не вірний пароль і логін");
        };

        $rootScope.audioTrue = function() {
            $rootScope.audioScore = $rootScope.audioScore +1 ;
            alert("Всьо ок :))))") ;
        }

        $rootScope.audioFalse = function() {
            alert("Не вірно, спробуй ще :))))") ;
        }

        $rootScope.audio = function() {
            var value = "";
            if($rootScope.audioScore > 5)
            alert("Ти гарно знаєш улюблені пісні :))))") ;
            else
            alert("стид-позор ти не пам'ятаєш пісень");
        }
});