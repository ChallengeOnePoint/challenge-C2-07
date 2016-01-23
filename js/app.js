'use strict';

angular.module('catApp', ['ngAnimate', 'ngTouch'])
  .controller('MainCtrl', function ($scope) {

    // Set of Photos
    var urlLoader = "../kittenIdentity.json"; 
    $.getJSON( urlLoader , function( data ) {
        $scope.photos = [] ;

        // For Each document , process accordingly 
        $.each( data, function( key, val ) {
            // Index - console.log(key); 
            // Document - console.log(val); 
            $scope.photos[key] = { src : val.picture , desc : val.name }; 
            console.log($scope.photos [key]);
        }); 
        
    }) ; 

    // initial image index
    $scope._Index = 0;

    // if a current image is the same as requested image
    $scope.isActive = function (index) {
        return $scope._Index === index;
    };

    // show prev image
    $scope.showPrev = function () {
        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
    };

    // show next image
    $scope.showNext = function () {
        $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
    };

    // show a certain image
    $scope.showPhoto = function (index) {
        $scope._Index = index;
    };
});
