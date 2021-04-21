var app = angular.module("ComposersList", []);

app.controller("ComposerController", function ($scope) {
    $scope.pieces = [
        {"pic": "assets/img/composer1.PNG", "composer": "Bach", "title": "Goldberg Variations"},
        {"pic": "assets/img/composer1.PNG", "composer": "Bach", "title": "Harpischord Concerto"},
        {"pic": "assets/img/composer1.PNG", "composer": "Bach", "title": "Bradenburg Concerto"},
        {"pic": "assets/img/composer1.PNG", "composer": "Bach", "title": "Air on G"},
        {"pic": "assets/img/composer1.PNG", "composer": "Bach", "title": "Cantata #85"},
        {"pic": "assets/img/composer3.PNG", "composer": "Beethoven", "title": "Fur Elise"},
        {"pic": "assets/img/composer3.PNG", "composer": "Beethoven", "title": "Symphony #9"},
        {"pic": "assets/img/composer3.PNG", "composer": "Beethoven", "title": "Moonlight Sonata"},
        {"pic": "assets/img/composer3.PNG", "composer": "Beethoven", "title": "Violin Concerto"},
        {"pic": "assets/img/composer3.PNG", "composer": "Beethoven", "title": "Egmont Overture"},
        {"pic": "assets/img/composer2.PNG", "composer": "Mozart", "title": "Eine Kleine Nachtmusic"},
        {"pic": "assets/img/composer2.PNG", "composer": "Mozart", "title": "Piano Concerto #21"},
        {"pic": "assets/img/composer2.PNG", "composer": "Mozart", "title": "Don Giovani"},
        {"pic": "assets/img/composer2.PNG", "composer": "Mozart", "title": "Jupiter Symphony"},
        {"pic": "assets/img/composer2.PNG", "composer": "Mozart", "title": "Clarinet Concerto #3"},
    ]
});