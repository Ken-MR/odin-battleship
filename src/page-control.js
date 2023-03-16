// import styles
import './style.css';

// import various game logic functions to help run the page
const gameLogic = require('../src/battleship.js');

// variables to track the two players in the game
let humanPlayer;
let computerPlayer;

// hard coded array of ship coordinates for testing
// will be replaced with player choice and random computer coordinates in final game build
let shipPositions = [[0,0], [1,9], [7,1], [5,4], [3,2]];
let shipDirection = ['x', 'y', 'x', 'x', 'y'];
let shipTypes = ['battleship', 'carrier', 'cruiser', 'submarine', 'destroyer'];

window.onload = () => {
  document.getElementById('player-entry').addEventListener("submit", () => {DOMControl.playerCreation()});
};

const DOMControl = (() => {
  const playerCreation = () => {
    let playerName = playerNameInput.value;
    humanPlayer = new gameLogic.GamePlayer(playerName, 'human');
    computerPlayer = new gameLogic.GamePlayer();
    placeComputerShips();
  };
  // this function will be changed to randomly place them when the human player is given the ability to choose locations
  const placeComputerShips = () => {
    for (let i = 0; i < 5; i++) {
      computerPlayer.gameBoard.placeShip(shipTypes[i], shipDirection[i], shipPositions[i]);
    }
  };
  return { playerCreation };
})();