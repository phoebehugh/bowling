describe('Bowling game', function() {

  var game;
  beforeEach(function() {
    game = new Game();
  });

  var rollMany = function(pins, rolls) {
    for (var i = 0; i < rolls; i++) {
        game.roll(pins);
    };  
  };

  describe('Gutter game', function() {
    it('should score 0 when no rolls hit any pins', function() {
      rollMany(0, 20);
      expect(game.score()).toBe(0);
    });
  });

  describe('Game when all rolls hit only 1 pin', function() {
    it('should score 20 when 1 pin hit every roll', function() {
      rollMany(1, 20);
      expect(game.score()).toBe(20);
    });
  });
});
