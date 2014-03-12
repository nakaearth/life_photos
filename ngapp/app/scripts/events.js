var eventCtrl = function($scope, $http) {
	$scope.doSearch = function() {
	  var url = '/events/event_list.json';
	  $http.jsonp(url).success(function(data) {
			console.dir(data);
      $scope.events = data.feed.entry;
	  });
	};
}
