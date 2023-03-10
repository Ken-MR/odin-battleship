const gameLogic = require('../src/battleship.js')

const battleship = new gameLogic.ShipCreator('battleship');

test('Create a battleship object', () => {
  expect(new gameLogic.ShipCreator('battleship')).toBeDefined()
})

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