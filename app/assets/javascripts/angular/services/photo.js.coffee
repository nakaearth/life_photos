App.factory 'Photo', ['$resource', ($resource) ->
  $resource '/photos/my_list'
]

