describe('Bowling Game Interface', function() {

  var game;

  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    game = new Game();
  });

  it('Has a title', function() {
    expect('title').toContainText('Bowling Game');
  });

  it('has text 1', function() {
    // $("#btn1").click();
    expect($('#box1')).toHaveText("1");
  });

});
