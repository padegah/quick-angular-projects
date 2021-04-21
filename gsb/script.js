var app = angular.module("RankingLeadersApp", []);

app.controller("RankingLeaderController", function ($scope) {

    $scope.showGold = false;
    $scope.showSilver = false;
    $scope.showBronze = false;

    $scope.toggleGold = function() {
        $scope.showGold = !$scope.showGold;
    }

    $scope.toggleSilver = function() {
        $scope.showSilver = !$scope.showSilver;
    }

    $scope.toggleBronze = function() {
        $scope.showBronze = !$scope.showBronze;
    }

    $scope.leaders = [
        {"pic": "assets/img/chandra.JPG", "rank": 1},
        {"pic": "assets/img/cleopatra.JPG", "rank": 1},
        {"pic": "assets/img/dido.JPG", "rank": 1},
        {"pic": "assets/img/gandhi.JPG", "rank": 2},
        {"pic": "assets/img/genkhis.JPG", "rank": 2},
        {"pic": "assets/img/gilga.JPG", "rank": 2},
        {"pic": "assets/img/harald.JPG", "rank": 3},
        {"pic": "assets/img/hojo.JPG", "rank": 3},
        {"pic": "assets/img/musa.JPG", "rank": 3}
    ]
});