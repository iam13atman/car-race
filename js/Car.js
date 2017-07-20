function Car(){
	this.top = 430;
	this.left = 185;
	this.width = 102;
	this.height = 188;
	this.shift = 20;
	this.position = 'absolute';

	this.moveLeft = true;
	this.moveRight = true;
	this.moveCenter;
	this.lane = 1;

	this.element;
	this.isMoveAvilable = true;

	this.image = document.createElement('img');
	this.image.src = 'img/car.png';

	

	this.create = function (){
		this.element = document.createElement('div');
		
		this.element.style.top = this.top + 'px';
		this.element.style.left = this.left + 'px';
		this.element.style.width = this.width + 'px';
		this.element.style.height = this.height + 'px';
		this.element.style.position = this.position;
		this.element.lane = this.lane;

		this.append(this.image);
	};

	this.setPosition = function (x){
		this.left = x;
		this.element.style.left = this.left + 'px';
	};

	this.append = function (childElement){
		this.element.appendChild(childElement);
	};

	this.shiftLeft = function (){
		if(this.isMoveAvilable == true){
			if (this.element.lane == 1){ 
				this.setPosition(30); // move left
				this.element.lane = 0;
			}
			
			if (this.element.lane == 2){
				this.setPosition(185); // move center
				this.element.lane = 1;
			}
		}
	}
	this.shiftRight = function (){
		if(this.isMoveAvilable == true){
			if (this.element.lane == 0){
				this.setPosition(185); // move center
				this.element.lane = 1;
			}
			else if (this.element.lane == 1){
				this.setPosition(350); // move right
				this.element.lane = 2;
			}
		}
	}
}