var app = angular.module('app', []); // création variable app, ng-app="app", tableau vide
app.controller('myCtrl', function($scope, $http) { //ng-controller="myCtrl" création function $scope et $http
    $http.get('voiture.json').then(function(reponse) { // séléction du fichier 'voiture.json' avec $http.get, .then (function(name))
        $scope.marques = reponse.data; //créaction de marques et récupération des données.
    });
});
