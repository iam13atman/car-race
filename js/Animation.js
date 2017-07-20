function Animation(track, car, container){
	var that = this;
	this.track = track;
	this.container = container;
	this.car = car;

	this.intervalId;
	this.bottom = 0;
	this.top = 0;
	this.scoreCount = 0;
	this.isGameOver = false;

	this.obstacles = [];

	this.obstacleLeftPosition = [55, 210, 375];

	this.animate = function (){
		this.createScoreWrapper();
		this.intervalId = setInterval(function(){
			that.bottom -= 2;
			that.container.element.firstElementChild.style.bottom = that.bottom + 'px';

			if(-that.bottom >= that.track.image.naturalWidth/3){
				that.bottom = 0;
			}

			// Creating and Showing Obstacle 
			that.createObstacle();
			that.updateViewOfObstacle();
			that.collisionDetect();
			that.updateScore();

		}, 1000/ 60);

		// Event Listener
		window.addEventListener('keydown', function(event){
			event.preventDefault();
			// Left Arrow Key Pressed
			if(event.keyCode == 37){
				that.car.shiftLeft();
			}
			// Right Arrow Key Pressed
			if(event.keyCode == 39){

				that.car.shiftRight();;
			}
			// Enter Key Pressed
			if(event.keyCode == 13){
				if(that.isGameOver == true){
					that.gameRestart();
				}
			}
		});
	};


	this.generateRandom = function (min, max){
		min = min || 0;
		max = max || 3;

		return Math.random() * (max-min) + min;
	}; 

	this.createObstacle = function (){
		var randomFirst = Math.floor(this.generateRandom(0, 3));
		
		if(that.bottom % 850 == 0){

			obstacle = new Obstacle(that.obstacleLeftPosition[randomFirst], 0);
			obstacle.create();
			if(that.obstacleLeftPosition[randomFirst] == 55){
				obstacle.setLane(0);
			}else if(that.obstacleLeftPosition[randomFirst] == 210){
				obstacle.setLane(1);
			}else if(that.obstacleLeftPosition[randomFirst] == 375){
				obstacle.setLane(2);
			}
			
			this.container.append(obstacle.element);
			this.obstacles.push(obstacle);
		}
	}

	this.updateViewOfObstacle = function (){

		that.obstacles.forEach(function (obstacle, index){
			obstacle.update();

			if(obstacle.top >= 600){
				that.container.remove(obstacle.element);
				that.obstacles.splice(index, 1);
			}		
		});
	};

	this.collisionDetect = function (){

		var carX = this.car.left;
		var carY = this.car.top;
		var carHeight = this.car.height;

		for(var i = 0; i < that.obstacles.length; i++){
			if(this.obstacles[i]){
				if((this.obstacles[i].top >= carY && car.element.lane == this.obstacles[i].element.lane)){
					this.gameOver();
				}
			}
			
		}
	}

	this.gameOver = function (){
		this.gameOver = document.createElement('div');
		var text = document.createElement('p');
		text.innerHTML = " Press Enter to Restart";
		this.gameOver.appendChild(text);
		clearInterval(this.intervalId);
		this.gameOver.style.display = 'block';
		this.gameOver.style.position = 'absolute';
		this.gameOver.style.fontWeight = 'bold';
		this.gameOver.style.color = 'red';
		this.gameOver.style.fontSize = '38px';
		this.gameOver.style.left = '60px';
		this.gameOver.style.top = '290px';
		this.isGameOver = true;
		this.car.isMoveAvilable = false;

		this.container.append(this.gameOver);
	}

	this.createScoreWrapper = function(){
		
		this.scoreWrapper = document.createElement('div');
		this.scoreWrapper.style.display = 'block';
		this.scoreWrapper.style.position = 'absolute';
		this.scoreWrapper.style.fontWeight = 'bold';
		this.scoreWrapper.style.fontSize = '38px';
		this.scoreWrapper.style.left = '150px';
		this.scoreWrapper.style.top = '290px';

		this.container.append(this.scoreWrapper);
	};

	this.updateScore = function (){
		this.scoreCount += 1;
		this.scoreWrapper.innerHTML = 'Score :' + this.scoreCount;
	};

	this.gameRestart = function(){
		var element = document.getElementById('wrapper');
		element.removeChild(this.container.element);
		this.scoreWrapper.innerHTML = " ";
		this.score = 0;
		this.gameOver.innerHTML = " ";

		var wrapper = new GameController('wrapper');
		wrapper.init();
	}

}	