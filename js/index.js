const EmptyGame = () => ({
  playerSpins: 0,
  remainingSpins: 10,
  spinsMade: 0,
  gameState: '',
  gameWon: false,
  winCount: 0,
});

// NOT A FUNCTION, BUT AN OBJECT
let game = EmptyGame();

$('.container .slot').jSlots({
  number: 5,
  winnerNumber: 1,
  spinner: '#playSlot',
  easing: 'easeOutSine',
  time: 100,
  loops: 6,

  onStart: () => {
    $('.slot').removeClass('winner');

    playGame = () => {
      game.remainingSpins = game.remainingSpins - 1;
      game.spinsMade = game.spinsMade + 1;
      game.gameState = `Attempts: ${game.spinsMade}, Remaining Spins: ${game.remainingSpins}`;

      if (game.remainingSpins > game.playerSpins) {
        $('#attempts').html(game.gameState);
      }

      if ((game.remainingSpins - 1) < 0) {
        game.gameWon = true;
        endGame();
      }

      $('#resetSlot').click(function () {
        console.log("Yeah D..")
        reset()
      });

      // Think about putting (onWin()) here?????????

      console.log(game.remainingSpins + 1);

    }

    reset = () => {
      game = EmptyGame();
      $('#attempts').html(game.gameState);
      $('#results').html('');
    }


    endGame = () => {
      if (game.gameWon === true) {
        $('#attempts').html("Game Over");
        $('#playSlot').attr('disabled', true);
      } else {
        $('#attempts').html("No more spins left");
      }
    }

    playGame();
  },

  onWin: (winCount, winners) => {
    // APPLIES ONLY TO WINS

    // $.each(winners, () => {
    //   $('.slot').addClass('winner');
    // });

    // RESPOND TO # OF WINNING SLOTS
    console.log('Hi', winCount);
    if (winCount === 1) {
      $('#results').html(`You got ${winCount} LEMON!!!`);
    } else if (winCount > 1) {
      $('#results').html(`You got ${winCount} LEMONS!!!`);
    } else {
      $('#results').html(`You got Nothing`);
    }

  }

});


// const canvas = document.getElementById("demoCanvas");
// if (canvas.getContext) {
//   let ctx = canvas.getContext("2d");
//   let gradient = ctx.createLinearGradient(10, 0, 500, 0);
//   gradient.addColorStop(0, 'red');
//   gradient.addColorStop(1 / 6, 'orange');
//   gradient.addColorStop(2 / 6, 'yellow');
//   gradient.addColorStop(3 / 6, 'green');
//   gradient.addColorStop(4 / 6, 'blue');
//   gradient.addColorStop(5 / 6, 'indigo');
//   gradient.addColorStop(1, 'violet');
//   ctx.fillStyle = gradient;
//   ctx.fillRect(0, 0, 500, 75);
// }