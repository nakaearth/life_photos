var casper = require('casper').create();

casper.start('http://lifephoto.herokuapp.com/', function() {
    this.echo(this.getTitle());
});

casper.run();
