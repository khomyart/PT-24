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
}