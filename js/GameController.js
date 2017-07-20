function GameController(elementId){
	var element = document.getElementById(elementId);

	this.init = function (){
		// Creating Container
		this.container = new Container();
		this.container.create();

		// Creating Track
		var track = new Track();
		track.create();

		// Creating Car
		var car = new Car();
		car.create();

		// Creating Score Board 
		var scoreBoard = new Score();
		scoreBoard.create();


		this.container.append(track.element);

		this.container.append(car.element);
		this.container.append(scoreBoard.element);

		element.appendChild(this.container.element);

		// Animation
		var animation = new Animation(track, car, this.container);
		animation.animate();
	};

}

var wrapper = new GameController('wrapper');
wrapper.init();