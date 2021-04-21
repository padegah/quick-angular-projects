var app = angular.module("PeopleApp", []);

app.controller("PeopleController", function ($scope) {

    $scope.collection = [];

    $scope.addThisOne = function(z) {
        $scope.collection.push(z);
    }

    $scope.leaders = [
        {"pic": "assets/img/chandra.JPG", "name": "Chandra"},
        {"pic": "assets/img/cleopatra.JPG", "name": "Cleopatra"},
        {"pic": "assets/img/dido.JPG", "name": "Dido"},
        {"pic": "assets/img/gandhi.JPG", "name": "Gandhi"},
        {"pic": "assets/img/genkhis.JPG", "name": "Genkhis"},
        {"pic": "assets/img/gilga.JPG", "name": "Gilga"},
        {"pic": "assets/img/harald.JPG", "name": "Harald"},
        {"pic": "assets/img/hojo.JPG", "name": "Hojo"},
        {"pic": "assets/img/musa.JPG", "name": "Musa"}
    ]
});