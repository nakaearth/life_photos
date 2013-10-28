getLinks =->
	links = document.querySelectorAll "h3.a"
	Array::map.call links, (e) -> e.getAttribute "href"

links =[]
casper = require('casper').create()

casper.start "http://www.google.co.jp/", ->
	@fill "form[action='/search']", q:"casperjs", true

casper.then  ->
	links = @evaluate getLinks

casper.run ->
	@echo links.length + "links found:"
	@echo("-" + links.join("/n-")).exit()
