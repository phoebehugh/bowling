require 'bowling'

describe('Bowling game', function() {

  var bowling
  beforeEach(function() {
    bowling = new Bowling;
  });

  describe('Gutter game', function() {
    it('should score 0 when no rolls hit any pins', function() {
      for (i = 0; i < 20; i++) {
          game.roll(0)
        };  
    });
  });

});
