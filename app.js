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