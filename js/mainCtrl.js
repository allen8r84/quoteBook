var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, mainService) {
    var getData = function(){
        $scope.data = mainService.getData();
    }();

    console.log($scope.data);
    
    
    var newQuote = $scope.obj;
    var addData = function() {
        $scope.data = mainService.addData(newQuote);
    }
    
    var newText = $scope.txt;
    var removeData = function() {
        $scope.data = mainService.removeData(newText);
    };
    
});