app.controller('MainController', function ($scope, $state, FlashCardsFactory) {
    $scope.loaded = true;

    $scope.flashCards = [];

    $scope.categories = [
        'MongoDB',
        'Express',
        'Angular',
        'Node'
    ];

    $scope.cheatFilter = function() {
        angular.forEach($scope.flashCards, function(flashCard) {
            angular.forEach(flashCard.answers, function(answer) {
                if (answer.correct) {
                    answer.cheatFiltered = false;
                } else {
                    answer.cheatFiltered = true;
                }
            })
        })
    }
    $scope.getAddForm = function() {
        $scope.addingNewCard = true;
    }
});