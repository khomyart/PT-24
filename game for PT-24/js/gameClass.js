class Game {
	constructor(numberOfAvailablePoints) {
		this.numberOfAvailablePoints = numberOfAvailablePoints;
		this.lastPlayerWhoPressedButton = '';
		this.pointTemplate = '<div class="point"></div>';
		this.containerForAvailablePoints = document.getElementById('points_holder');
		this.isGameOver = false;
	}
	 
	displayPoints() {
		this.containerForAvailablePoints.innerHTML = '';

		for (let i = 0; i < this.numberOfAvailablePoints; i++) {
			this.containerForAvailablePoints.innerHTML += this.pointTemplate;
		}
	}

	showAlertMessageWithDelay(message, delay) {
		setTimeout(alert, delay, message);
	}

	givePlayerNeededAmountOfPoints(pointsToGive, playerName) {
		if (this.isGameOver === true) {
			this.showAlertMessageWithDelay('Game is over!', 100);
			return 0;
		}

		if (this.lastPlayerWhoPressedButton === playerName) {
			this.showAlertMessageWithDelay('This is not your turn, ' + playerName + '!', 100);
			return 0;
		}

		if (this.numberOfAvailablePoints < pointsToGive) {
			this.showAlertMessageWithDelay('You cant use this button right now!', 100);
			return 0;
		}

		this.numberOfAvailablePoints -= pointsToGive;
		this.displayPoints();

		if (this.numberOfAvailablePoints === 0 && (pointsToGive === 3 || pointsToGive === 2)) {
			this.showAlertMessageWithDelay('Win of ' + this.lastPlayerWhoPressedButton, 100);
			this.isGameOver = true;
			return 0;
		}

		if (this.numberOfAvailablePoints < 2) {
			this.showAlertMessageWithDelay('Win of ' + playerName, 100);
			this.isGameOver = true;
			return 0;
		}

		this.lastPlayerWhoPressedButton = playerName;
	}
}