var app = angular.module("SingersList", []);

app.controller("SingerController", function ($scope) {
    $scope.singers = [
        {"pic": "assets/img/beyonce.PNG", "name": "beyonce", "gender": "female", "quality": "assets/img/like.PNG"},
        {"pic": "assets/img/gaga.PNG", "name": "lady gaga", "gender": "female", "quality": "assets/img/dislike.PNG"},
        {"pic": "assets/img/swift.PNG", "name": "taylor swift", "gender": "female", "quality": "assets/img/like.PNG"},
        {"pic": "assets/img/bruno.PNG", "name": "bruno mars", "gender": "male", "quality": "assets/img/like.PNG"},
        {"pic": "assets/img/arianna.PNG", "name": "arrianna grande", "gender": "female", "quality": "assets/img/dislike.PNG"},
        {"pic": "assets/img/katy.PNG", "name": "katy perry", "gender": "female", "quality": "assets/img/like.PNG"},
        {"pic": "assets/img/bieber.PNG", "name": "justin bieber", "gender": "male", "quality": "assets/img/like.PNG"},
        {"pic": "assets/img/selena.PNG", "name": "selena gomez", "gender": "female", "quality": "assets/img/dislike.PNG"},
    ]
});