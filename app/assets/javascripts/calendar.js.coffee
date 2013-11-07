$ ->
  $('#calendar').fullCalendar
	  header:
		  right: 'agendaDay agendaWeek month today prev next'
    defaultView: 'month'
    selectable: true
    selectHelper: true
    editable: true
    events: '/events.json'
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
    buttonText: 
      today: '今日'
      month: '月'
      week: '週'
      day: '日'
    

