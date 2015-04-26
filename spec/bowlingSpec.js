describe('Bowling game', function() {

  var game;
  beforeEach(function() {
    game = new Game();
  });

  describe('Gutter game', function() {
    it('should score 0 when no rolls hit any pins', function() {
      for (i = 0; i < 20; i++) {
          game.roll(0)
          expect(game.score).toEqual(0)
        };  
    });
  });
});
