function Container(){
	this.width = 480;
	this.height = 620;
	this.marginLeft = 'auto';
	this.marginRight = 'auto';
	this.position = 'relative';
	this.overflow = 'hidden';

	this.create = function (){
		this.element = document.createElement('div');
		this.element.style.width = this.width +'px';
		this.element.style.height = this.height + 'px';
		this.element.style.marginLeft= this.marginLeft;
		this.element.style.background = this.background;
		this.element.style.marginRight = this.marginRight;
		this.element.style.position = this.position;
		this.element.style.overflow = this.overflow;
	}

	this.append = function (childElement){
		this.element.appendChild(childElement);
	};

	this.remove = function (childElement){
		this.element.removeChild(childElement);
	};
}