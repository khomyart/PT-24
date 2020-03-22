let numberOfAvailablePoints = 10;

const gameInstance = new Game (numberOfAvailablePoints);

const player1 = new Player('player1', gameInstance);
const player2 = new Player('player2', gameInstance);

gameInstance.displayPoints();



