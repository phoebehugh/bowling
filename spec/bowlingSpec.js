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

  describe('Game can roll a spare', function() {
    it('Rolling a spare and then a 3 would give a current score of 16', function() {
      game.roll(5);
      game.roll(5);
      game.roll(3);
      rollMany(0, 17);
      expect(game.score()).toBe(16);
    });
  });

  describe('Game can roll a strike', function() {
    it('Rolling a strike and then a 4 and 3 would give a current score of 24', function() {
      game.roll(10);
      game.roll(4);
      game.roll(3);
      rollMany(0, 16);
      expect(game.score()).toBe(24);
    });
  });

  describe('A perfect game', function() {
    it('Rolling a strike every time', function() {
      rollMany(10, 12); //1 for each frame plus two bonuses in last frame
      expect(game.score()).toBe(300);
    });
  });
});
