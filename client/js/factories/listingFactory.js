angular.module('listings', []).factory('Listings', function($http) {
  var methods = {
    getAll: function() {
      return $http.get('https://agile-bootcamp4.herokuapp.com/api/listings');
    },
	
	create: function(listing) {
	  return $http.post('https://agile-bootcamp4.herokuapp.com/api/listings', listing);
    }, 

    delete: function(id) {
	   /**TODO
        return result of HTTP delete method
       */

    }
  };

  return methods;
});
