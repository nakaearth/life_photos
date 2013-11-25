App.controller 'GroupsCtrl', ['$scope', ($scope) ->
  $scope.message = "Angular Rocks!"
]
App.controller 'GroupsCtrl', ['$scope', 'Groups', ($scope, Groups) ->
  $scope.groups = Groups.query()
]
