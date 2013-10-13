casper = require('casper').create();

casper.start('http://www.yaplog.jp/', function() {
    this.echo(this.getTitle());
});

casper.thenOpen('http://www.girlscamera.asia', function() {
    this.echo(this.getTitle());
});

casper.run();
