var app = angular.module('FlashCards', ['ui.router']);

app.config(function($stateProvider) {
	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: '../templates/home.html',
		controller: 'MainController'
	})
		.state('home.all', {
			url: 'all',
			templateUrl: '../templates/cardview.html',
			controller: 'allCardsViewController',
			resolve: {
				allCards: function($stateParams, FlashCardsFactory) {
					return FlashCardsFactory.getFlashCards();
				}
			}
		})
		.state('home.category', {
			url: ':category',
			templateUrl: '../templates/cardview.html',
			controller: 'CardViewController',
			resolve: {
				cardsInCategory: function($stateParams, FlashCardsFactory) {
					// debugger;
					return FlashCardsFactory.getFlashCards($stateParams.category);
				}
			}
		})
	.state('statistics', {
		url: '/statistics',
		templateUrl: '../templates/stats.html',
		controller: 'StatsController'
	})
	.state('form', {
		url: '/add',
		templateUrl: '../templates/form.html',
		controller: 'addCardController'
	})
});


