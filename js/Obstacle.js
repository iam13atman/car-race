function Obstacle(x, y){
	this.width = 54;
	this.height = 16;
	
	this.position = 'absolute';

	this.element;
	this.lane;

	this.top = y;
	this.left = x;
	

	this.image = document.createElement('img');
	this.image.src = 'img/obstacle.png';

	this.create = function (){
		this.element = document.createElement('div');
		this.element.style.width = this.width + 'px';
		this.element.style.height = this.height + 'px';
		this.element.style.left = this.left + 'px';
		this.element.style.top = this.top + 'px';
		this.element.style.position = this.position;
		this.element.lane = this.lane;

		this.element.appendChild(this.image);
	};


	this.update = function () {
		this.top += 3;
		this.element.style.top = this.top + 'px';
	}

	this.setLane = function (laneNo){
		this.element.lane = laneNo;
	}; 



}