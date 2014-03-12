App.controller 'PhotosCtrl', ['$scope', ($scope) ->
  $scope.message = "Angular Rocks!"
]
App.controller 'PhotosCtrl', ['$scope', 'Photo', ($scope, Photo) ->
  $scope.groups = Photo.query()
]

