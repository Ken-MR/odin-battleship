module.exports = {};

class ShipCreator {
  constructor(name) {
    this.shipType = name;
    this.hits = 0;
    this.sunk = false;
    this.length = this.getLength(name);
  }

  getLength = (name) => {
    switch (name) {
      case 'destroyer': return 2;
      case 'submariner': return 3;
      case 'cruiser': return 3;
      case 'battleship': return 4;
      case 'carrier': return 5;
    }
  }

  hit = () => {
    this.hits++;
    this.isSunk();
  };

  isSunk = () => {
    if (this.hits === this.length) {
      this.sunk = true;
    }
  };
}
module.exports.ShipCreator = ShipCreator;



class Space {
  // create a new space and parameters to track whether it was hit, its coordinates,
  // whether a ship is located there, etc
  constructor(coordinates) {
    this.struck = null;
    this.occupied = null;
    this.space = coordinates;
  }
}

class GameBoard {
  constructor(name) {
    this.board = this.generateBoard();
    this.lost = false;
    this.name = name;
    this.fleet = [];
  }

  generateBoard() {
    // 2d array of board spaces
    let board = [[],[],[],[],[],[],[],[]];
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 7; j++) {
        board[i].push(new Space([i, j]));
      }
    }
    return board;
  }

  placeShip(shipType, direction, location) {
    // create ship object
    let ship = new ShipCreator(shipType);

    let shipLength = ship.length;

    // if ship is placed such that it falls out of bounds on the board then reject placement
    if ((direction === 'y') && ((location[0] + shipLength) < 7)) {
      // ship placement is valid so add it to the player's fleet and populate required spaces
      this.fleet.push(ship);
      for (let i = location[0]; i < (location[0] + shipLength); i++) {
        this.board[i][location[1]].occupied = ship;
      }
    }
    else if ((direction === 'x') && ((location[1] + shipLength) < 7)) {
      // same as above but alternate axis
      this.fleet.push(ship);
      for (let i = location[1]; i < (location[1] + shipLength); i++) {
        this.board[location[0]][i].occupied = ship;
      }
    }
    else {
      return false;
    }

  }

  receiveAttack (space) {

  }
}

module.exports.GameBoard = GameBoard;