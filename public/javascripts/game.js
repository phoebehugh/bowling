var Game = function() {
  this.rolls = [];
};

Game.prototype.roll = function(pins) {
  this.rolls.push(pins);
};

Game.prototype.score = function() {
   var result = 0;
   var rollIndex = 0;
   var game = this;

   for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
    if (isStrike()) {
      result += getStrikeScore();
      rollIndex += 1;
    }
    else if (isSpare()) {
      result += getSpareScore();
      rollIndex += 2;
    }
    else {
      result += getNormalScore();
      rollIndex += 2;
    }
   }

   return result;

   function isStrike() {
      return game.rolls[rollIndex] === 10;
   };

   function isSpare() {
      return game.rolls[rollIndex] + game.rolls[rollIndex + 1] === 10;
   };

   function getStrikeScore() {
      return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
      // 2 bonuses
   };

   function getSpareScore() {
      return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
      // 1 bonus
   };

   function getNormalScore() {
      return game.rolls[rollIndex] + game.rolls[rollIndex + 1]
   }

};
