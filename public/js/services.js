//---------------
// Services
//---------------

vestus.factory('Clients', ['$resource', function($resource){
    return $resource('/clients/:id', null, {
    'update': { method:'PUT' }
    });
}]);