// CREATED AN OBJECT
const EmptyGame = () => ({

  // PROPERTIES/VALUES
  playerSpins: 0,
  fundsAvailable: 500,
  spinsMade: 0,
  gameState: '',
  gameWon: false,
  winCount: 0,
});

// NOT A FUNCTION, BUT AN INSTANCE OF THE OBJECT
let game = EmptyGame();

$('.slot').jSlots({

  // PROPERTIES/VALUES
  number: 5,
  winnerNumber: 1,
  spinner: '#playSlot',
  easing: 'easeInOutQuad',
  time: 3000,
  loops: 6,

  // ONSTART() THAT START THE GAME
  onStart: () => {
    $('.slot').removeClass('winner');

    // () => TO PLAY THE GAME
    playGame = () => {
      game.fundsAvailable = game.fundsAvailable - 50;
      game.spinsMade = game.spinsMade + 1;
      game.gameState = `Attempts: ${game.spinsMade},<br/> Funds Available: $${game.fundsAvailable}`;

      // IF FUNDS AVAILABLE MORE ATTEMPTS
      if (game.fundsAvailable > game.playerSpins) {
        $('#attempts').html(game.gameState);
      }

      // PROBLEM WITH IF STATEMENT
      if ((game.fundsAvailable - 1) < 0) {
        game.gameWon = true;
        endGame();
      }

      // ADD EVENT LISTENER TO CLICK BUTTON
      $('#resetSlot').click(function () {
        reset()
      });

      // LOGGING THE REMAINING
      console.log(game.fundsAvailable);

    }

    // RESET THE GAME () =>
    reset = () => {
      game = EmptyGame();
      $('#attempts').html(game.gameState);
      $('#results').html('');
      $('#playSlot').attr('disabled', false);
    }

    // GAME OVER () =>
    endGame = () => {
      if (game.gameWon === true) {
        $('#attempts').html("Game Over! <br/> Thanks for playing!");
        $('#playSlot').attr('disabled', true);
      } else {
        $('#attempts').html("You have no more spins left! <br/> Thanks for playing!");
      }
    }

    // CALLING THE PLAYGAME()
    playGame();
  },
  
  // APPLIES ONLY TO WINS AND LOSSES
  onWin: (winCount) => {

    // MORE THAN ONE LEMON AND FUNDS INCREMENT (REMAINS SAME)
    if (winCount >= 3) {      
      $('#attempts').html(game.fundsAvailable += 100);
      $('#attempts').html(game.gameState);
    }
    else if (winCount === 2) {      
      $('#attempts').html(game.fundsAvailable += 50);
      $('#attempts').html(game.gameState);
    }

    // RESPOND TO # OF LEMONS
    if (winCount === 1) {
      $('#results').html(`You got ${winCount} LEMON!`);
    } else if (winCount > 1) {
      $('#results').html(`You got ${winCount} LEMONS, and earned $50!!!`);
    } else {
      $('#results').html(`You received no LEMONS!`);
    }
    console.log('Hi', winCount);

  }

});
