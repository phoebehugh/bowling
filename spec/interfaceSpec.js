describe('Bowling Game Interface', function() {

  var game;

  beforeEach(function() {
    game = new Game();
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
  });

  it('Has a title', function() {
    expect('title').toContainText('Bowling Game');
  });

});
