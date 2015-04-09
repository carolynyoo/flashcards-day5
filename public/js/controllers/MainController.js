app.controller('MainController', function ($scope, FlashCardsFactory) {
    $scope.loaded = false;

    $scope.flashCards = [];

    $scope.categories = [
        'MongoDB',
        'Express',
        'Angular',
        'Node'
    ];

    $scope.chosenCategory = 'All';

    $scope.getAllCards = function () {
        $scope.chosenCategory = 'All';
        FlashCardsFactory.getFlashCards().then(function (cards) {
            $scope.flashCards = cards;
            $scope.loaded = true;
        });
    };

    $scope.getCategoryCards = function (category) {
        $scope.chosenCategory = category;
        FlashCardsFactory.getFlashCards(category).then(function (cards) {
            $scope.flashCards = cards;
        }).catch(function(err) {
            $scope.error = err;
        });
    };

    $scope.getAllCards();

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

});