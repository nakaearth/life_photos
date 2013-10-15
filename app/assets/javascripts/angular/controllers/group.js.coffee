App.controller 'GroupsCtrl', ['$scope', ($scope) ->
  $scope.groups = "Angular Rocks!"
]
App.controller 'GroupsCtrl', ['$scope', 'Group', ($scope, Group) ->
  $scope.groups = Group.query()
]

