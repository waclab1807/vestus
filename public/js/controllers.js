var vestus = angular.module('app', ['ngRoute', 'ngResource']);

//---------------
// Controllers
//---------------

vestus.controller('ClientController', ['$scope', 'Clients', function ($scope, Clients) {
  $scope.editing = [];
  $scope.clients = Clients.query();
  $scope.today = new Date;

  $scope.save = function(){
    if(!$scope.newClient || $scope.newClient.length < 1) return;
    var client = new Clients({ name: $scope.newClient.name, lastName: $scope.newClient.lastName, note: $scope.newClient.note, birthDate: $scope.newClient.birthDate, address: $scope.newClient.address, phone: $scope.newClient.phone });

    client.$save(function(){
      $scope.clients.push(client);
      $scope.newClient = ''; // clear textbox
    });
  }

  $scope.update = function(index){
    var client = $scope.clients[index];
    Clients.update({id: client._id}, client);
    $scope.editing[index] = false;
  }

  $scope.edit = function(index){
    $scope.editing[index] = angular.copy($scope.clients[index]);
  }

  $scope.cancel = function(index){
    $scope.clients[index] = angular.copy($scope.editing[index]);
    $scope.editing[index] = false;
  }

  $scope.remove = function(index){
    var client = $scope.clients[index];
    Clients.remove({id: client._id}, function(){
      $scope.clients.splice(index, 1);
    });
  }
}]);

vestus.controller('ClientDetailCtrl', ['$scope', '$routeParams', 'Clients', '$location', function ($scope, $routeParams, Clients, $location) {
  $scope.client = Clients.get({id: $routeParams.id });

  $scope.remove = function(){
    Clients.remove({id: $scope.client._id}, function(){
      $location.url('/');
    });
  }
}]);