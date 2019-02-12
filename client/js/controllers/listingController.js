angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    /* Get all the listings, then bind it to the scope */
    Listings.getAll().then(function(response) {
      $scope.listings = response.data;
    }, function(error) {
      console.log('Unable to retrieve listings:', error);
    });

    $scope.detailedInfo = undefined;

    $scope.addListing = function() {

      Listings.create($scope.newListing).then(function(res,err) {
        if(err){
          console.log(err);
        }
        else{
            $scope.listings = res.data;
            $scope.listings = {};
            window.location.reload();
       }
     });
     
    };

    $scope.deleteListing = function(id) {

       Listings.delete(id).then( function(res, err) {
          if (err){
            console.log(err);
          }
          else{
            $scope.listings =res.data;
            window.location.reload();
          }
       });
    };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);