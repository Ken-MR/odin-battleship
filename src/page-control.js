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

  // tracker for how many player ships have been placed
  let currentShip = 0;
  let shipLengths = [4, 5, 3, 3, 2];

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
   /* for (let i = 0; i < 5; i++) {
      humanPlayer.gameBoard.placeShip(shipTypes[i], shipDirection[i], shipPositions[i]);
    }*/
    // temporary code ends

    placePlayerShips();

    //displayGameBoards();
  };

  const placePlayerShips = () => {
    // clear the form now that the player objects exist
    let gameDisplay = document.getElementById('game-display')
    gameDisplay.innerHTML = '';

    let ocean = document.createElement('div');
    ocean.setAttribute('id', 'game-waters');
    ocean.appendChild(createGameBoard('human'));
    let gameBoard = document.getElementById('game-board');

    let messageDisplay = document.createElement('div');
    messageDisplay.setAttribute('id', 'messages');
    messageDisplay.appendChild(document.createTextNode(`Place your ${shipTypes[currentShip]}`));

    let directionButton = document.createElement('button');
    directionButton.textContent = 'x-axis';
    directionButton.addEventListener('click', () => {
      if (directionButton.textContent === 'x-axis') {
        directionButton.textContent = 'y-axis';
      }
      else {
        directionButton.textContent = 'x-axis';
      }
    });

    gameDisplay.appendChild(messageDisplay);
    gameDisplay.appendChild(directionButton);
    gameDisplay.appendChild(ocean);

    let playerWaters = document.querySelector('.fleet-waters');
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let space = document.createElement('div');
        space.classList.add('game-space');
        playerWaters.appendChild(space);
        space.addEventListener('click', () => {
          currentShipPlacement(messageDisplay, playerWaters, [i, j], directionButton);
        });
      }
    }
    //gameBoard.appendChild(playerWaters);
  };

  const currentShipPlacement = (message, waters, coordinates, directionButton) => {
    // extract currently selected direction
    let direction = directionButton.textContent;
    direction = direction.slice(0, 1);

    // verify this is a valid position to place the ship
    let validPosition;
    validPosition = humanPlayer.gameBoard.placeShip(shipTypes[currentShip], direction, coordinates);
    
    if (validPosition) {
      let spaces = waters.children;
      let location;
      let space;
      if (direction === 'x') {
        for (let i = 0; i < shipLengths[currentShip]; i++) {
          location = (coordinates[0] * 10) + (coordinates[1] + i);
          space = spaces[location];
          space.classList.add('ship-space');
        }
      }
      else {
        for (let i = 0; i < shipLengths[currentShip]; i++) {
          location = ((coordinates[0] + i) * 10) + coordinates[1];
          space = spaces[location];
          space.classList.add('ship-space');
        }
      }
      currentShip++;
      message.innerHTML = `Place your ${shipTypes[currentShip]}`;
    }
    else {
      message.innerHTML = `Invalid location, try placing your ${shipTypes[currentShip]} again`;
    }
    if (currentShip > 4) {
      displayGameBoards();
    }
  };

  const placeComputerShips = () => {
    let x;
    let y;
    // randomize the direction the ship will be placed
    let direction = (Math.floor(Math.random() * 2) ? 'x' : 'y');
    let coordinates;
    let validPosition;

    for (let i = 0; i < 5; i++) {
      do {
        x = computerPlayer.getCoordinates();
        y = computerPlayer.getCoordinates();
        coordinates = [y, x];
        // place ship function returns false if position is filled
        // this prompts the loop to run again and choose new coordinates until it works
        validPosition = computerPlayer.gameBoard.placeShip(shipTypes[i], direction, coordinates);
        direction = (Math.floor(Math.random() * 2) ? 'x' : 'y');
      } while (!validPosition);
      // reset check for valid position
      validPosition = false;
    }
  };

  const createGameBoard = (type) => {
    let board = document.createElement('div');
    board.setAttribute('id', `${type}`);
    board.classList.add('game-board');

    let header = document.createElement('h2');
    if (type === 'human') {
      header.appendChild(document.createTextNode(`${humanPlayer.name}'s Fleet`));
    }
    else {
      header.appendChild(document.createTextNode(`Enemy Fleet`));
    }

    let waters = document.createElement('div');
    waters.setAttribute('class', 'fleet-waters');

    board.appendChild(header);
    board.appendChild(waters);
    return board;
  };

  const displayGameBoards = () => {
    // clear the form now that the game objects exist
    let gameDisplay = document.getElementById('game-display')
    gameDisplay.innerHTML = '';

    let ocean = document.createElement('div');
    ocean.setAttribute('id', 'game-waters');

    let messageDisplay = document.createElement('div');
    messageDisplay.setAttribute('id', 'messages');
    messageDisplay.appendChild(document.createTextNode('Enemy fleet approaching!'));
    messageDisplay.appendChild(document.createElement('br'));
    messageDisplay.appendChild(document.createTextNode('Prepare for battle!'));

    gameDisplay.appendChild(messageDisplay);
    gameDisplay.appendChild(ocean);

    // create game boards to manipulate
    ocean.appendChild(createGameBoard('human'));
    ocean.appendChild(createGameBoard('computer'));

    let computerWaters = document.querySelectorAll('.fleet-waters')[1];
    let playerWaters = document.querySelectorAll('.fleet-waters')[0];

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
          }, 1500);
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
    let messageDisplay = document.getElementById('messages');
    messageDisplay.innerHTML = '';

    if ((player.type === 'human') && (target)) {
      messageDisplay.appendChild(document.createTextNode(`Direct hit, Captain ${player.name}!`));
      if (target.occupied.sunk) {
        messageDisplay.appendChild(document.createElement('br'));
        messageDisplay.appendChild(document.createTextNode(`You sunk the enemy's ${target.occupied.shipType}!`));
      }
      else {
        messageDisplay.appendChild(document.createElement('br'));
        messageDisplay.appendChild(document.createTextNode(`You struck the enemy's ${target.occupied.shipType}!`));
      }
    }
    else if (player.type === 'human') {
      messageDisplay.appendChild(document.createTextNode("A miss! But we'll get them yet!"));
    }
    else if ((player.type === 'computer') && (target)) {
      messageDisplay.appendChild(document.createTextNode("Blast!"));
      if (target.occupied.sunk) {
        messageDisplay.appendChild(document.createElement('br'));
        messageDisplay.appendChild(document.createTextNode(`The enemy just sunk our ${target.occupied.shipType}!`));
      }
      else {
        messageDisplay.appendChild(document.createElement('br'));
        messageDisplay.appendChild(document.createTextNode(`The enemy's hit our ${target.occupied.shipType}!`));
      }
    }
    else {
      messageDisplay.appendChild(document.createTextNode("A miss! We're still in this!"));
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
    let messageDisplay = document.getElementById('messages');
    if (type === 'human') {
      messageDisplay.appendChild(document.createElement('br'));
      messageDisplay.appendChild(document.createTextNode("You lost!"));
    }
    else {
      messageDisplay.appendChild(document.createElement('br'));
      messageDisplay.appendChild(document.createTextNode("You won!"));
    }
    playAgain();
  };

  const playAgain = () => {
    let gameScreen = document.getElementById('game-display');
    let playAgain = document.createElement('button');
    gameScreen.appendChild(playAgain);

    playAgain.setAttribute('id', 'play-again');
    playAgain.innerHTML = 'Play Again?';
    playAgain.addEventListener('click', () => {
      // recreate initial player form entry screen
      gameScreen.innerHTML = 
        `<form id="player-entry" onsubmit="event.preventDefault()">
          <label for="playerNameInput">Enter Player Name:</label>
          <input type="text" name="playerNameInput" id="playerNameInput" placeholder="Battleship Captain ________" pattern="^((?!computer).)*$" required>
          <input type="submit" value="Start">
        </form>`
      
      // remake event listener for inputting new player name
      document.getElementById('player-entry').addEventListener("submit", () => {DOMControl.playerCreation()})

      // reset game states
      gameOver = false;
      computerMove = false;
      currentShip = 0;
    });
  };
  return { playerCreation };
})();