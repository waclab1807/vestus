var vestus = angular.module('app', ['ngRoute', 'ngResource']);

//---------------
// Controllers
//---------------

vestus.controller('ClientController', ['$scope', 'Clients', '$filter', function ($scope, Clients, $filter) {
  $scope.editing = [];
  $scope.clients = Clients.query();
  $scope.solenizants = Clients.query();
  $scope.today = new Date;
  $scope.cities = ["Nowy Sącz", "Stalowa Wola", "Łódź"];
  $scope.city = window.city;
  $scope.userType = window.type;
  $scope.newClient = '';

  $scope.search = function(item) {
    if (!$scope.query || (item.name.toLowerCase().indexOf($scope.query.toLowerCase()) != -1) || (item.lastName.toLowerCase().indexOf($scope.query.toLowerCase()) != -1) ){
        return true;
    }
    return false;
  };

  $scope.save = function(){

    if ($scope.newClient.name === undefined || $scope.newClient.lastName === undefined || $scope.newClient.cardNr === undefined) {
      alert('Wypełnij brakujące pola! (imię, nazwisko i nr karty)');
      return;
    }

    if(!$scope.newClient || $scope.newClient.length < 1) return;
    var client = new Clients({ 
      name: $scope.newClient.name, 
      lastName: $scope.newClient.lastName, 
      note: $scope.newClient.note, 
      birthDate: $scope.newClient.birthDate, 
      address: $scope.newClient.address, 
      phone: $scope.newClient.phone,
      email: $scope.newClient.email,
      registerDate: $scope.today,
      city: $scope.city,
      cardNr: $scope.newClient.cardNr
    });

    client.$save(function(){
      $scope.clients.push(client);
      $scope.solenizants.push(client);
      $scope.newClient = ''; // clear textbox
    });
  }

  $scope.update = function(client){
    Clients.update({id: client._id}, $scope.editing[client._id]);
    $scope.editing[client._id] = null;
  }

  $scope.edit = function(client){
    $scope.editing[client._id] = client;
  }

  $scope.cancel = function(client){
    $scope.editing[client._id] = null;
  }

  $scope.remove = function(client){
    Clients.remove({id: client._id}, function(){
      $scope.clients = $scope.clients.filter((elem) => {
          return elem._id != client._id
      });
      $scope.solenizants = $scope.clients.filter((elem) => {
          return elem._id != client._id
      });
    });
  }
}]);

vestus.controller('ClientDetailCtrl', ['$scope', '$routeParams', 'Clients', '$location', function ($scope, $routeParams, Clients, $location) {
  $scope.client = Clients.get({id: $routeParams.id });
}]);