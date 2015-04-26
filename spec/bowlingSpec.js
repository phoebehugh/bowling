describe('Bowling game', function() {

  var game;
  beforeEach(function() {
    game = new Game();
  });

  describe('Gutter game', function() {
    it('should score 0 when no rolls hit any pins', function() {
      for (var i = 0; i < 20; i++) {
          game.roll(0);
        };  
      expect(game.score()).toBe(0);
    });
  });

  describe('Game when all rolls hit only 1 pin', function() {
    it('should score 20 when 1 pin hit every roll', function() {
      for (var i = 0; i < 20; i++) {
          game.roll(1);
        };
      expect(game.score()).toBe(20);
    });
  });
});
