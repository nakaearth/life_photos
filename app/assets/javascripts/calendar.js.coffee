$ ->
  $('#calendar').fullCalendar
	  header:
		  right: 'agendaDay agendaWeek month today prev next'
    defaultView: 'agendaWeek'
    height: 500
    slotMinutes: 30
    selectable: true
    selectHelper: true
    editable: true
    titleFormat:
      month: 'yyyy年 MMMM'
    monthNames: [
      '１月'
      '２月'
      '３月'
      '４月'
      '５月'
      '６月'
      '７月'
      '８月'
      '９月'
      '１０月'
      '１１月'
      '１２月'
    ]
    dayNamesShort: [
      '日'
      '月'
      '火'
      '水'
      '木'
      '金'
      '土'
    ]
    buttonText: [
      today: '今日'
      month: '月'
      week: '週'
      day: '日'
    ]

    events: '/events?format=json'
		eventSources: [
			{
				url: '/albums/my_list',
				color: 'yellow',
				textColor: 'black'
			}
		]
    dragOpacity: "0.5",
    eventDrop: (event, dayDelta, minuteDelta, allDay, revertFunc) ->
      updateEvent(event);

    eventResize: (event, dayDelta, minuteDelta, revertFunc) ->
      updateEvent(event);

    select: (start, end, allDay) ->
      addEvent(start, end , allDay)

   eventDblClick: (event, jsEvent) ->
     title = prompt('Event Title:');
     if title
       $('#calendar').fullCalendar('renderEvent', {title: title, start: start, end: end, allDay: allDay}, true)
       $('#calendar').fullCalendar('unselect');
			 
addEvent = (start, end , allDay,the_event) ->
  title = prompt('Event Title:');
  if title
    $('#calendar').fullCalendar('renderEvent', {title: title, start: start, end: end, allDay: allDay}, true)
  $('#calendar').fullCalendar('unselect');

updateEvent = (the_event) ->
  $.update "/events/" + the_event.id,
    event:
      nama: the_event.nama,
      starts_at: "" + the_event.start,
      ends_at: "" + the_event.end,
      keterangan: the_event.keterangan

