const EmptyGame = () => ({

  playerSpins: 0,
  fundsAvailable: 500,
  spinsMade: 0,
  gameState: '',
  gameWon: false,
  winCount: 0,
});

let game = EmptyGame();

$('.slot').jSlots({

  number: 5,
  winnerNumber: 1,
  spinner: '#playSlot',
  easing: 'easeInSine',
  time: 3000,
  loops: 6,

  onStart: () => {
    $('.slot').removeClass('winner');

    playGame = () => {
      game.fundsAvailable = game.fundsAvailable - 50;
      game.spinsMade = game.spinsMade + 1;
      game.gameState = `Attempts: ${game.spinsMade},<br/> Funds Available: $${game.fundsAvailable}`;

      if (game.fundsAvailable > game.playerSpins) {
        $('#attempts').html(game.gameState);
      }

      if ((game.fundsAvailable - 1) < 0) {
        game.gameWon = true;
        endGame();
      }

      $('#resetSlot').click(() => {
        reset();
        // $('.slot').reset()
      });

      console.log(game.fundsAvailable);

    }

    reset = () => {
      game = EmptyGame();
      $('#attempts').html(game.gameState);
      $('#results').html('');
      $('#playSlot').attr('disabled', false);
    }

    endGame = () => {
      if (game.gameWon === true) {
        $('#attempts').html("Game Over! <br/> Thanks for playing!");
        $('#playSlot').attr('disabled', true);
      } 
      else {
        $('#attempts').html("You have no more spins left! <br/> Thanks for playing!");
      }
    }

    playGame();
  },
  
  onWin: (winCount) => {

    if (winCount >= 3) {      
      $('#attempts').html(game.fundsAvailable += 100);
      $('#attempts').html(game.gameState);
    }
    else if (winCount === 2) {      
      $('#attempts').html(game.fundsAvailable += 50);
      $('#attempts').html(game.gameState);
    }
    
    if (winCount === 1) {
      $('#results').html(`You have ${winCount} LEMON!`);
    }
    else if (winCount > 1) {
      $('#results').html(`${winCount} LEMONS,<br/> You have another ($50)!`);
    }
    else {
      $('#results').html(`You received no LEMONS!`);
    }
    console.log(`Lemons: ${winCount}`);

  }

});
