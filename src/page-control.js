// import styles
import './style.css';

// import various game logic functions to help run the page
const gameLogic = require('../src/battleship.js');

window.onload = () => {
  document.getElementById('player-entry').addEventListener("submit", () => {DOMControl.playerCreation()});
};

const DOMControl = (() => {
  // variables to track the two players in the game
  let humanPlayer;
  let computerPlayer;

  // hard coded array of ship coordinates for testing
  // will be replaced with player choice and random computer coordinates in final game build
  let shipPositions = [[0,0], [1,9], [7,1], [5,4], [3,2]];
  let shipDirection = ['x', 'y', 'x', 'x', 'y'];
  let shipTypes = ['battleship', 'carrier', 'cruiser', 'submarine', 'destroyer'];

  // tracker for computer activity
  let computerMove = false;

  // tracker for whether or not the game is over
  let gameOver = false;

  const playerCreation = () => {
    let playerName = playerNameInput.value;
    humanPlayer = new gameLogic.GamePlayer(playerName, 'human');
    computerPlayer = new gameLogic.GamePlayer();
    placeComputerShips();

    // temporary section of code to populate the computer player's board with ships
    // will be replaced by player choice in final game build
    for (let i = 0; i < 5; i++) {
      humanPlayer.gameBoard.placeShip(shipTypes[i], shipDirection[i], shipPositions[i]);
    }
    // temporary code ends

    displayGameBoards();
  };
  // this function will be changed to randomly place them when the human player is given the ability to choose locations
  const placeComputerShips = () => {
    for (let i = 0; i < 5; i++) {
      computerPlayer.gameBoard.placeShip(shipTypes[i], shipDirection[i], shipPositions[i]);
    }
  };
  const displayGameBoards = () => {
    // clear the form now that the game objects exist
    let gameDisplay = document.getElementById('game-display')
    gameDisplay.innerHTML = '';

    // create game boards to manipulate
    let playerBoard = document.createElement('div');
    playerBoard.setAttribute('id', 'player');
    playerBoard.classList.add('game-board');
    let computerBoard = document.createElement('div');
    computerBoard.setAttribute('id', 'computer');
    computerBoard.classList.add('game-board');

    let playerWaters = document.createElement('div');
    playerWaters.setAttribute('class', 'fleet-waters');
    let computerWaters = document.createElement('div');
    computerWaters.setAttribute('class', 'fleet-waters');

    playerBoard.appendChild(playerWaters);
    computerBoard.appendChild(computerWaters);

    gameDisplay.appendChild(playerBoard);
    gameDisplay.appendChild(computerBoard);

    // create event listeners for each space on the enemy game board to track if it was a hit or miss
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let space = document.createElement('div');
        space.classList.add('game-space');
        // this class will be removed from enemy game board once ship positions are randomized
        if (computerPlayer.gameBoard.board[i][j].occupied) {
          space.classList.add('ship-space');
        }
        computerWaters.appendChild(space);
        space.addEventListener('click', () => {
          // if the computer is currently taking a turn the click event will not proceed
          if (computerMove === true) {
            return;
          }
          computerMove = true;
          playerTurn(i, j, space);

          setTimeout(() => {
            // if the game is over don't let the computer make a move
            if (!gameOver) {
              computerTurn();
              computerMove = false;
              // set to false; the computer made its move
            }
          }, 1000);
        });
      }
    }

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let space = document.createElement('div');
        space.classList.add('game-space');
        if (humanPlayer.gameBoard.board[i][j].occupied) {
          space.classList.add('ship-space');
        }
        playerWaters.appendChild(space);
      }
    }
  };

  const playerTurn = (y, x, space) => {
    let hit = humanPlayer.targetSpace(humanPlayer.type, computerPlayer, [y, x]);
    if (hit) {
      space.classList.add('hit');
      // send message on game state
      gameMessage(hit, humanPlayer);
      return hit;
    }
    else {
      space.classList.add('miss');
      gameMessage(hit, humanPlayer);
      return 'miss';
    }
  };

  const computerTurn = () => {
    let coordinates = computerPlayer.computerTarget(humanPlayer);
    let hit = computerPlayer.targetSpace(computerPlayer.type, humanPlayer, coordinates);
    let location = (coordinates[0] * 10) + coordinates[1];
    let spaces = document.querySelector('.fleet-waters').children;
    let space = spaces[location];

    if (hit) {
      space.classList.add('hit');
      gameMessage(hit, computerPlayer);
    }
    else {
      space.classList.add('miss');
      gameMessage(hit, computerPlayer);
    }
  };

  const gameMessage = (target, player) => {
    if ((player.type === 'human') && (target)) {
      console.log(`Direct hit, Captain ${player.name}!`)
      if (target.occupied.sunk) {
        console.log(`You sunk the enemy's ${target.occupied.shipType}!`);
      }
      else {
        console.log(`You struck the enemy's ${target.occupied.shipType}!`);
      }
    }
    else if (player.type === 'human') {
      console.log("A miss! But we'll get them yet!");
    }
    else if ((player.type === 'computer') && (target)) {
      console.log(`Blast!`);
      if (target.occupied.sunk) {
        console.log(`The enemy just sunk our ${target.occupied.shipType}!`);
      }
      else {
        console.log(`The enemy's hit our ${target.occupied.shipType}!`);
      }
    }
    else {
      console.log("A miss! We're still in this!");
    }

    if (humanPlayer.gameBoard.lost) {
      gameEnd('human');
    }
    else if (computerPlayer.gameBoard.lost) {
      gameEnd('computer');
    }
  };

  const gameEnd = (type) => {
    gameOver = true;

    if (type === 'human') {
      console.log("You lost!");
    }
    else {
      console.log("You won!");
    }
  };
  return { playerCreation };
})();