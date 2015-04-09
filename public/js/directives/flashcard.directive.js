app.directive('flashCard', function (ScoreFactory) {
    return {
        restrict: 'E',
        templateUrl: 'templates/flashcard.html',
        link: function(scope, element, attr) {
        	scope.answered = false;
        	scope.answeredCorrectly = null;

        	scope.answerQuestion = function (answer) {

        	    if (scope.answered) {
        	        return;
        	    }

        	    scope.answered = true;
        	    scope.answeredCorrectly = answer.correct;

        	    if (answer.correct) {
        	        ScoreFactory.correct++;
        	    } else {
        	        ScoreFactory.incorrect++;
        	    }

        	};
        },
        scope: {
        	card: '=',
        }
    };
});







