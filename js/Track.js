function Track(){
	this.width = 480;
	this.height = 2160;
	this.position = 'absolute';
	
	this.image = document.createElement('img');
	this.image.src = 'img/track.png';

	this.create = function (){
		this.element = document.createElement('div');

		this.element.style.width = this.width + 'px';
		this.element.style.height = this.height + 'px';
		this.element.style.position = this.position;
		
		this.append(this.image);
	}	

	this.append = function (childElement){

		this.element.appendChild(childElement);
	};
}