(function() {
	
	"use strict";
	
	window.CanvasVideo = function CanvasVideo(element, options) {
		var _self = this;
		this._settings = {
			userOptions: {}
		};
		if(typeof options !== 'object') return console.error('CanvasVideo only accepts the options as an object.');
		this._settings.userOptions = options;
		this.default_options = {
			container: '',
			filename: '',
			autoplay: false,
			width: '400',
			height: '400'
		};
		this.options = this.setupOptions(options);
		this.el = element;
		this.renderCanvas(this.options);
	};

	var CanvasVideoPrototype = window.CanvasVideo.prototype;

	CanvasVideoPrototype.setupOptions = function(new_options) {
		var merged_options = {};
		for (var attrname in this.default_options) {
			merged_options[attrname] = this.default_options[attrname];
		}
		if(this._settings.userOptions) {
			for (var attrname in this._settings.userOptions) {
				merged_options[attrname] = this._settings.userOptions[attrname];
			}
		}
		for (var attrname in new_options) {
			merged_options[attrname] = new_options[attrname];
		}
		return merged_options;
	};

	CanvasVideoPrototype.renderCanvas = function (options) {
		var _tpl  = '<canvas width="'+options.width+'" height="'+options.height+'" id="v_buffer"></canvas>';
			_tpl += '<canvas width="'+options.width+'" height="'+(options.height/2)+'" id="v_output"></canvas>';
		var _target = document.getElementById(options.container);
		_target.innerHTML = _tpl;
	};

})();