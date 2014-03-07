App.factory 'Events', ['$resource', ($resource) ->
  $resource '/events/event_list'
]
