function Score(){
	this.width = 480;
	this.height = 30;
	this.margin = '0 auto';
	this.bgColor = 'red';

	this.create = function (){
		this.element = document.createElement('div');

		this.element.style.width = this.width + 'px';
		this.element.style.height = this.height + 'px';
		this.element.style.margin = this.margin;
		this.element.background = this.bgColor;
	}

	this.append = function (childElement){
		this.element.appendChild(childElement);
	};
}