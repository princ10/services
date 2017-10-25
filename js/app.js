var myApp = angular.module("myApp",[]);

// myApp.service("randam", function(){
//     const num = Math.round(Math.random()*10);
//     this.GenerateRandam = function(){
//         return num;
//     }
// });

// myApp.controller("randamCtr", function($scope,randam){
//     $scope.randomcheck = function(){
//         $scope.randomNumber = randam.GenerateRandam();
//     }
// });

var myApp = angular.module("myApp" , ["ngRoute"]);

myApp.factory("random" , function(){
var testObj = {};
    const num = Math.round(Math.random()*100);

    testObj.GenerateRandom = function() {
        return num;
    }
    return testObj;

});


myApp.controller("randomCtr" , function($scope, random){

    $scope.randomCheck = function(){
        $scope.randomNumber = random.GenerateRandom();
    }
   

});