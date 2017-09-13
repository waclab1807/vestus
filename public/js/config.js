//---------------
// Routes
//---------------

vestus.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: '/clients.html',
        controller: 'ClientController'
    })

    .when('/:id', {
        templateUrl: '/clientDetails.html',
        controller: 'ClientDetailCtrl'
    });
}]);