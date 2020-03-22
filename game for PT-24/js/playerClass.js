class Player {
	constructor (name, gameInstance) {
		this.gameInstance = gameInstance;
		this.name = name;
	}

	takeOnePoint() {
		this.takeNeededAmountOfPoints(1);
	}

	takeTwoPoints() {
		this.takeNeededAmountOfPoints(2);
	}

	takeThreePoints() {
		this.takeNeededAmountOfPoints(3);
	}

	showAlertMessageWithDelay(message, delay) {
		setTimeout(alert, delay, message);
	}

	takeNeededAmountOfPoints(pointsToTake) {
		if (this.gameInstance.isGameOver === true) {
			this.showAlertMessageWithDelay('Game is over!', 100);
			return 0;
		}

		if (this.gameInstance.lastPlayerWhoPressedButton === this.name) {
			this.showAlertMessageWithDelay('This is not your turn, ' + this.name + '!', 100);
			return 0;
		}

		if (this.gameInstance.numberOfAvailablePoints < pointsToTake) {
			this.showAlertMessageWithDelay('You cant use this button right now!', 100);
			return 0;
		}

		this.gameInstance.numberOfAvailablePoints -= pointsToTake;
		this.gameInstance.displayPoints();

		if (this.gameInstance.numberOfAvailablePoints === 0 && (pointsToTake === 3 || pointsToTake === 2)) {
			this.showAlertMessageWithDelay('Win of ' + this.gameInstance.lastPlayerWhoPressedButton, 100);
			this.gameInstance.isGameOver = true;
			return 0;
		}

		if (this.gameInstance.numberOfAvailablePoints < 2) {
			this.showAlertMessageWithDelay('Win of ' + this.name, 100);
			this.gameInstance.isGameOver = true;
			return 0;
		}

		this.gameInstance.lastPlayerWhoPressedButton = this.name;
	}
}
