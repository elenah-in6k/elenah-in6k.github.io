'use strict';
angular.module('myApp')
    .controller('hbCtrl', function ($scope, $rootScope) {
    $rootScope.nastia = "Сируха";

        $rootScope.login = function (username, password) {
            if (username == "сируха" && password=="korona18")
            alert("ok");
            else  if (username == "сируха" && password !="korona18")
                alert("Не вірний пароль");
            else  if (username != "сируха" && password =="korona18")
                alert("Не вірний логін");
            else
                alert("Не вірний пароль і логін");
        }
});