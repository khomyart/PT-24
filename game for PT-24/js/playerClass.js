class Player {
	constructor (name, gameInstance) {
		this.gameInstance = gameInstance;
		this.name = name;
	}

	takeOnePoint() {
		this.gameInstance.giveNeededAmountOfPoints(1, this.name);
	}

	takeTwoPoints() {
		this.gameInstance.giveNeededAmountOfPoints(2, this.name);
	}

	takeThreePoints() {
		this.gameInstance.giveNeededAmountOfPoints(3, this.name);
	}
}
