var eventCtrl = function($scope, $http) {
	$scope.doSearch = function() {
	  var url = 'http://localhost:3000/events/event_list.json';
	  $http.jsonp(url).success(function(data) {
			console.dir(data);
      $scope.events = data.feed.entry;
	  });
	};
}
