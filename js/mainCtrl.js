var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, mainService) {
//toggle variables and functions    
    $scope.addQuote = false;
    $scope.removeQuote = false;
    $scope.filterQuote = false;
    $scope.toggleA = function() {
        if ($scope.addQuote) {
            $scope.addQuote = false;
        }else {
            $scope.addQuote = true;
            $scope.removeQuote = false;
            $scope.filterQuote = false;
        }
    }
    $scope.toggleR = function() {
        if ($scope.removeQuote) {
            $scope.removeQuote = false;
        }else {
            $scope.removeQuote = true;
            $scope.addQuote = false;
            $scope.filterQuote = false;
        }
    }    
    $scope.toggleF = function() {
        if ($scope.filterQuote) {
            $scope.filterQuote = false;
        }else {
            $scope.filterQuote = true;
            $scope.addQuote = false;
            $scope.removeQuote = false;
        }
    }    
//****End Toggle Variables and Functions

//Hiding in order to add $cookieStore
//quote data functions
    var getData = function(){
        $scope.data = mainService.getData();
    }(); //calls the service get data and imediately invokes it so I have the data
    console.log($scope.data); //WORKING
    
//add new quotes to teh pages    
   $scope.addData = function() {
       mainService.addData($scope.quote);
   }; //Working!!!
      
      
//Remove Quotes
    $scope.remQuote = function(index) {
        mainService.removeData(index);
    }
      
});