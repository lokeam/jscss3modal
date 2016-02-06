(function() {

//constructor
this.Modal = function(){

	// globals
	this.closeButton = null;
	this.modal = null;
	this.overlay = null;

	// option defaults
	var defaults = {
		className: 'fadeDrop',
		closeButton: true,
		content: '',
		maxWidth: 600,
		minWidth: 275,
		overlay: true
	};

	// create options by extending defaults with stuff passed in
	if (arguments[0] && typeof arguments[0] === 'object') {
		this.options = extendDefaults(defaults, arguments[0]);
	}
}

	// public methods
	Method.prototype.open = function() {
		_build.call(this);
		_init.call(this);
		window.getComputedStyle(this.modal).height;
		this.modal.className = this.modal.className + (this.modal.offsetHeight > window.innerHeight ? "jsc-open jsc-anchored" : "jsc-open");
		this.overlay.className = this.overlay.className + "jsc-open";
	}

	Method.prototype.close = function() {
		var self = this;
		this.modal.className = this.modal.className.replace("jsc-open", "");
		this.overlay.className = this.overlay.className.replace("js-open", "");

		this.modal.addEventListener(this.transitionEnd, function(){
			self.modal.parentNode.removeChild(self.modal);
		});

		this.overlay.addEventListener(this.transitionEnd, function(){
			if ( self.overlay.parentNode ) {
				self.overlay.parentNode.removeChild(self.overlay);
			}
		});
	}


// utility method to extend defaults with user options
function extendDefaults(src, properties) {
	var prop;
	for (prop in properties) {
		if (properties.hasOwnProperty(prop)) {
			source[property] = properties[property];
		}
	}
	return src;
}

}());