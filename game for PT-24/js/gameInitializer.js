let numberOfAvailablePoints = 10;

const gameInstance = new Game (numberOfAvailablePoints);

const player1 = new Player('player1Id', 'Gamer', gameInstance);
const player2 = new Player('player2Id', 'Lawyer', gameInstance);

gameInstance.displayPoints();



