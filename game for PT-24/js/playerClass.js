class Player {
	constructor (playerId, name, gameInstance) {
		this.playerId = playerId;
		this.name = name;
		this.gameInstance = gameInstance;

		//Seting up name for current player (in h1 tag with proper ID where player name is located)
		let currentTextForPlayerTag = document.getElementById(this.playerId);
		currentTextForPlayerTag.innerText = currentTextForPlayerTag.innerText + ' (' + this.name + ')';
	}

	takeOnePoint() {
		this.gameInstance.givePlayerNeededAmountOfPoints(1, this.name);
	}

	takeTwoPoints() {
		this.gameInstance.givePlayerNeededAmountOfPoints(2, this.name);
	}

	takeThreePoints() {
		this.gameInstance.givePlayerNeededAmountOfPoints(3, this.name);
	}
}
