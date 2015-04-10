app.controller('MainController', function ($scope, $state, FlashCardsFactory) {
    $scope.loaded = true;

    $scope.flashCards = [];

    $scope.categories = [
        'MongoDB',
        'Express',
        'Angular',
        'Node'
    ];

    $scope.getAll = function() {
        $scope.loaded=false; 
        $scope.chosenCategory = 'All';
        $state.go('home.all', {})
        $scope.loaded = true;
    };

    $scope.getCategory = function(cat) {
        $scope.loaded = false;
        $scope.chosenCategory = cat;
        $state.go('home.category', {category: cat})
        $scope.loaded = true;
    };

    // $scope.getAllCards = function () {
    //     $scope.chosenCategory = 'All';
    //     FlashCardsFactory.getFlashCards().then(function (cards) {
    //         $scope.flashCards = cards;
    //         $scope.loaded = true;
    //     });
    // };

    // $scope.getCategoryCards = function (category) {
    //     $scope.chosenCategory = category;
    //     FlashCardsFactory.getFlashCards(category).then(function (cards) {
    //         $scope.flashCards = cards;
    //     }).catch(function(err) {
    //         $scope.error = err;
    //     });
    // };

    // $scope.getAllCards();

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