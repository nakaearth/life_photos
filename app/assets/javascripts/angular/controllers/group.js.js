// Generated by CoffeeScript 1.4.0

App.controller('GroupsCtrl', [
  '$scope', function($scope) {
    return $scope.groups = "Angular Rocks!";
  }
]);

App.controller('GroupsCtrl', [
  '$scope', 'Group', function($scope, Group) {
    return $scope.groups = Group.query();
  }
]);
