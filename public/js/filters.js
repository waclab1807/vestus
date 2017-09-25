vestus.filter('customFilter', function($filter) {
   return function(items) {
    var filtered = [];
    var today = $filter('date')(new Date, "dd/MM");
    //console.log(today);

    angular.forEach(items, function(item) {
        if(($filter('date')(item.birthDate, "dd/MM") === today) && (item.city === window.city)){
            filtered.push(item);
        }
    });

    return filtered;
  };
});