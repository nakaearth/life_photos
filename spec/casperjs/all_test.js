//==============================================================================
// Casper generated Tue Dec 10 2013 11:56:41 GMT+0900 (JST)
//==============================================================================

var x = require('casper').selectXPath;
var casper = require('casper').create();
casper.options.viewportSize = {width: 1427, height: 783};
casper.start('http://lifephoto.herokuapp.com/events');
casper.waitForSelector(x("//a[normalize-space(text())='Myグループ']"),
    function success() {
        this.test.assertExists(x("//a[normalize-space(text())='Myグループ']"));
        this.click(x("//a[normalize-space(text())='Myグループ']"));
    },
    function fail() {
        this.test.assertExists(x("//a[normalize-space(text())='Myグループ']"));
});
casper.waitForSelector(x("//a[normalize-space(text())='My写真']"),
    function success() {
        this.test.assertExists(x("//a[normalize-space(text())='My写真']"));
        this.click(x("//a[normalize-space(text())='My写真']"));
    },
    function fail() {
        this.test.assertExists(x("//a[normalize-space(text())='My写真']"));
});
casper.waitForSelector(x("//a[normalize-space(text())='トップページへ']"),
    function success() {
        this.test.assertExists(x("//a[normalize-space(text())='トップページへ']"));
        this.click(x("//a[normalize-space(text())='トップページへ']"));
    },
    function fail() {
        this.test.assertExists(x("//a[normalize-space(text())='トップページへ']"));
});
casper.waitForSelector(x("//a[normalize-space(text())='Myアルバム']"),
    function success() {
        this.test.assertExists(x("//a[normalize-space(text())='Myアルバム']"));
        this.click(x("//a[normalize-space(text())='Myアルバム']"));
    },
    function fail() {
        this.test.assertExists(x("//a[normalize-space(text())='Myアルバム']"));
});

casper.run(function() {this.test.renderResults(true);});
