var app = angular.module("RembrandtApp", []);

app.controller("PaintingsController", function ($scope) {
    $scope.paintingCount = 0;

    $scope.paintings = [
        "assets/img/paint1.PNG",
        "assets/img/paint2.PNG",
        "assets/img/paint3.PNG",
        "assets/img/paint4.PNG",
        "assets/img/paint5.PNG",
        "assets/img/paint6.PNG",
    ];

    $scope.previous = function() {
        $scope.paintingCount = $scope.paintingCount - 1;
    }

    $scope.next = function() {
        $scope.paintingCount = $scope.paintingCount + 1;
    }
});