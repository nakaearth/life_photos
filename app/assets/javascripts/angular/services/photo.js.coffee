App.factory 'Photo', ['$resource', ($resource) ->
  $resource '/api/photos/:id', id: '@id'
]

