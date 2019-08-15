var instance_skel = require('../../instance_skel');
var os = require('os');
var Keyboard = require('./kbBase.js');
var LinuxUinputKeyboard = require("./linux.js");
var debug;
var log;

function mkKeyboardInstance() {
	var type = os.type();

	if (type == 'Linux') {
		var kb = new LinuxUinputKeyboard(debug, log);
		if (kb.initialized) {
			return kb;
		}
	}

	return null;
}

function instance(system, id, config) {
	var self = this;

	instance_skel.apply(this, arguments);

	self.actions();
	return self;
}

instance.prototype.init = function () {
	var self = this;

  debug = self.debug;
	log = self.log;

	self.keyboard = mkKeyboardInstance();

	if (self.keyboard !== null) {
		self.status(self.STATUS_OK);
	} else {
		self.status(self.STATUS_ERROR);
	}
};

instance.prototype.config_fields = function () {
	var self = this;
	return [
		{
			type: 'text',
			id: 'info',
			width: 12,
			label: 'Information',
			value: 'This module is for emulating keyboard nativelly.'
		}
	];
};

instance.prototype.config_fields = function () {
	var self = this;
	return [];
};

instance.prototype.destroy = function () {
	var self = this;

	if (self.keyboard !== null) {
		self.keyboard.close();
	}

	debug("destroy", self.id);
};

instance.prototype.actions = function (system) {
  var self = this;

  var actions = {
		'KeyboardCombo': {
			label: 'Execute keyboard keys combo',
			options: [
				{
					type: 'textinput',
					label: 'Keys',
					id: 'keys',
					default: ''
				}
			]
		}
  };

  self.setActions(actions);
};

instance.prototype.action = function (action) {
	var self = this;

	if (self.keyboard !== null) {
		if (action.action == "KeyboardCombo") {
			var keyStrings = action.options.keys;
			self.keyboard.send(keyStrings);
		}
	}
};

instance_skel.extendedBy(instance);
exports = module.exports = instance;
