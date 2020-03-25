// let msg = document.getElementById('msg')
// document.write(`Messag: ${winCount}`)

// let recall = () => {
//   $('#result').empty();
// }

const output = document.querySelector('#result')

let playerSpins = 0;
let remainingSpins = 10;
let spinsMade = 0;
let gameState = '';
let gameWon = false;

$('.container .slot').jSlots({
  number: 5,
  winnerNumber: 1,
  spinner: '#playSlot',
  easing: 'easeOutSine',
  time: 2000,
  loops: 6,

  onStart: () => {
    $('.slot').removeClass('winner');

    function playGame() {
      remainingSpins = remainingSpins -1;
      spinsMade = spinsMade +1;
      gameState = `Attempts: ${spinsMade}, Remaining Spins: ${remainingSpins}`;

      

      if (playerSpins < remainingSpins) {
        output.innerHTML = gameState;
      }
      console.log(remainingSpins);
      // if (playerSpins < 1) {
      //   endGame();
      // }

    }
    function endGame() {
      if (spinsMade < remainingSpins) {
        console.log("next")
        gameWon = true;
      }
      
    }

  playGame()
  },
  

  onWin: (winCount, winners) => {
    // only fires if you win

    $.each(winners, () => {
      $('.slot').addClass('winner');
    });

    // react to the # of winning slots
    if (winCount === 1) {
      console.log(`You got ${winCount} LEMON!!!`);
    } else if (winCount > 1) {
      console.log(`You got ${winCount} LEMON’s!!!`);
    } else if (winCount === 0) {
      console.log(`You got Nothing`)
    }


  }

});

// recall()

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