const gameLogic = require('../src/battleship.js')

// tests to verify ship creation and various parameters and methods function properly
const battleship = new gameLogic.ShipCreator('battleship');

test('Create a battleship object', () => {
  expect(new gameLogic.ShipCreator('battleship')).toBeDefined();
});

test('Check shipType parameter for battleship', () => {
  expect(battleship.shipType).toEqual('battleship');
});

test('Check hits parameter for battleship', () => {
  expect(battleship.hits).toEqual(0);
});

test('Check hits function works', () => {
  battleship.hit();
  expect(battleship.hits).toEqual(1);
});

test('Check if the ship is sunk with one hit', () => {
  expect(battleship.isSunk()).toBeFalsy();
});

test('Check if the ship is sunk after multiple hits', () => {
  battleship.hit();
  battleship.hit();
  battleship.hit();
  battleship.hit();
  expect(battleship.sunk).toBeTruthy();
});


// tests that ship creator works for other ship types
const destroyer = new gameLogic.ShipCreator('destroyer');

test('Create a destroyer object', () => {
  expect(new gameLogic.ShipCreator('destroyer')).toBeDefined();
});

test('Check shipType parameter for battleship', () => {
  expect(destroyer.shipType).toEqual('destroyer');
});

test('Check if the ship is sunk after multiple hits', () => {
  destroyer.hit();
  destroyer.hit();
  expect(destroyer.sunk).toBeTruthy();
});




// test that the game board object class properly creates a board object
const testBoard = new gameLogic.GameBoard('player');

test('Create a game board', () => {
  expect(new gameLogic.GameBoard('player')).toBeDefined();
});

test("Check that player hasn't lost yet", () => {
  expect(testBoard.lost).toBeFalsy();
});

test('Check the name of the player', () => {
  expect(testBoard.name).toEqual('player');
});

// test that game board properly places a ship
testBoard.placeShip('battleship', 'x', [0,0]);

test("The top left square of the board is now occupied by the player's battleship", () => {
  expect(testBoard.board[0][0].occupied).toBeTruthy();
});

test("The player's battleship extends four spaces", () => {
  expect(testBoard.board[0][3].occupied).toBeTruthy();
});

test("The player's battleship stops at four spaces", () => {
  expect(testBoard.board[0][4].occupied).toBeFalsy();
});

test("The player's battleship doesn't travel down the y-axis", () => {
  expect(testBoard.board[1][0].occupied).toBeFalsy();
});

test("Trying to place a ship outside of the board's bounds will fail", () => {
  expect(testBoard.placeShip('battleship', 'x', [0,5])).toBeFalsy();
});

// test if you can place another ship

test("Trying to place a ship that overlaps an existing one will fail", () => {
  expect(testBoard.placeShip('destroyer', 'x', [0,1])).toBeFalsy();
});

// place destroyer near battleship but not on it
testBoard.placeShip('battleship', 'x', [2,0]);

test("A second ship is placed properly", () => {
  expect(testBoard.board[2][0].occupied).toBeTruthy();
});

test("The second ship makes the fleet count equal to two", () => {
  expect(testBoard.fleet.length).toEqual(2);
});



// launch attacks on space containing the destroyer
test("Destroyer struck once so far", () => {
  testBoard.receiveAttack([2,0]);
  expect(testBoard.fleet[1].hits).toEqual(1);
});

test("The destroyer still floats", () => {
  expect(testBoard.fleet[1].sunk).toBeFalsy();
});

test("The space it occupies is flagged as previously targeted", () => {
  expect(testBoard.board[2][0].struck).toBeTruthy();
});

test("The next attack was a miss", () => {
  testBoard.receiveAttack([2,0]);
  testBoard.receiveAttack([1,0]);
  expect(testBoard.fleet[1].sunk).toBeFalsy();
});

test("Direct hit, the destroyer has sunk", () => {
  testBoard.receiveAttack([2,0]);
  testBoard.receiveAttack([2,1]);
  expect(testBoard.fleet[1].sunk).toBeTruthy();
});
