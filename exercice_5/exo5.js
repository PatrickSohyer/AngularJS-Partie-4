var app = angular.module("app", []); //création variable app pour ng-app="app"
app.controller("control", ['$scope', function($scope) { //je lance mon app.controler que j'appel control avec une fonction scope
$scope.hideShow= false; // je lui met hideShow = False pour qu'il s'affiche au lancement de la plage
$scope.hide = function(){ // je créer la fonction au click sur le bouton hide
$scope.hideShow=true; // si j'appuie alors la div ce cache
}
$scope.show = function(){
$scope.hideShow=false;
}
}]);
