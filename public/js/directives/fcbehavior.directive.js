app.directive('borderOnHover', function() {
	return {
		restrict: 'A',
		link: function(scope, element, attr) {
			element.on('mouseenter', function() {
				element.addClass('border-thick')
			})
			element.on('mouseleave', function() {
				element.removeClass('border-thick')
			})
		}
	}
})