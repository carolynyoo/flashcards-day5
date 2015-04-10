app.controller('CardViewController', function($scope, $stateParams, cardsInCategory) {
	$scope.flashCards = cardsInCategory;
})