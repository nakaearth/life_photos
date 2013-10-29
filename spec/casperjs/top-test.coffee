casper = require('casper').create();
casper.start 'http://lifephoto.herokuapp.com', ->
    @capture "top.png"
    @test.assertTitle 'LifePhotos'
    @test.assertTextExists 'Wellcome', 'Wellcome message exists'
    @click("a[rel=facebook_login]")

casper.then ->
    @capture "login.png"
    @test.assertTitle 'Facebook', ' title is the one expected'

casper.run ->
    @test.done 3
    @test.renderResults true


