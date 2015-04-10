app.controller('AddFlashCard', function($scope, $http) {
	$scope.newCard = {
		'question': null,
		'category': null,
		'answers': [{
			text: null,
			correct: false
		}]
	};

	$scope.submit = function() {
		$http.post('/cards', $scope.newCard).then(function(response) {
			console.log('response', response);
		}).catch(function(err) {
			console.log('error', err);
		})
	}

	$scope.$watch('newCard.answers', function(newValue, oldValue) {
		console.log($scope.newCard);
	}, [true])
})










