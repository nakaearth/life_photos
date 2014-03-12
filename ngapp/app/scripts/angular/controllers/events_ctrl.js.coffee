App.controller 'EventsCtrl', ['$scope', ($scope) ->
  $scope.message = "Angular Rocks!"
]
App.controller 'EventsCtrl', ['$scope', 'Events', ($scope, Events) ->
  $scope.events = Events.query()
]
