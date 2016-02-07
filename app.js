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
		this.overlay.className = this.overlay.className.replace("jsc-open", "");

		this.modal.addEventListener(this.transitionEnd, function(){
			self.modal.parentNode.removeChild(self.modal);
		});

		this.overlay.addEventListener(this.transitionEnd, function(){
			if ( self.overlay.parentNode ) {
				self.overlay.parentNode.removeChild(self.overlay);
			}
		});
	}

// private methods
	function _build() {
		var content, contentHolder, docFrag;

		if (typeof this.options.content === 'string') {
			content = this.options.content;
		} else {
			content = this.options.content.innerHTML;
		}

		docFrag = document.createDocumentFragment();

		// create element
		this.modal = document.createElement('div');
		this.modal.className = 'jsc-modal' + this.options.className;
		this.modal.style.minWidth = this.options.minWidth + "px";
		this.modal.style.maxWidth = this.options.maxWidth + "px";

		// create close button
		if (this.options.closeButton === true) {
			this.closeButton = '';
			this.closeButton.className = '';
			this.closeButton.innerHTML = '';
			this.modal.appendChild(this.closeButton);
		}

		// create overlay
		if (this.options.overlay === true) {
			this.overlay = document.createElement('div');
			this.overlay.className = 'jsc-overlay' + this.options.className;
			docFrag.appendChild(this.overlay);
		}

		// content area
		contentHolder.document.createElement('div');
		contentHolder.className = 'jsc-content';
		contentHolder.innerHTML = content;
		this.modal.appendChild(contentHolder);

		docFrag.appendChild(this.modal);

		document.body.appendChild(docFrag);
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