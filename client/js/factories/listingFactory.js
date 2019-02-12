angular.module('listings', []).factory('Listings', function($http) {
  var methods = {
    getAll: function() {
      return $http.get('http://localhost:8080/api/listings');
    },
	
	create: function(listing) {
	  return $http.post('https://agile-bootcamp4.herokuapp.com/api/listings', listing);
    }, 

    delete: function(id) {
	   /**TODO
        return result of HTTP delete method
       */
    return $http.delete('https://agile-bootcamp4.herokuapp.com/api/listings/' +id);   

    }
  };

  return methods;
});
