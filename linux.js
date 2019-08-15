var deasync = require('deasync');
var Keyboard = require('./kbBase.js');
var debug;
var log;

function LinuxUinputKeyboard(debug_log, log_log) {
	var self = this;

  debug = debug_log;
  log = log_log;

	Keyboard.apply(this, arguments);

	self.uinput = require('uinput');
	self.open();

	return self;
}

LinuxUinputKeyboard.prototype = Object.create(Keyboard.prototype)
LinuxUinputKeyboard.prototype.constructor = LinuxUinputKeyboard;

LinuxUinputKeyboard.prototype.open = function() {
	var self = this;

  var keys = [];
  for (var i = 0; i < self.KEY_IDS.length; i++) {
    keys.push(self.uinput[self.KEY_IDS[i]]);
  }
  var uinput_setup = {
    EV_KEY : keys
  };

  debug("creating uinput device with setup", uinput_setup);

  var uinput_err;
  self.uinput_stream = undefined;
  var done = false;

  self.uinput.setup(uinput_setup, function(err, stream) {
    uinput_err = err;
    self.uinput_stream = stream;
    done = true;
  });
  deasync.loopWhile(() => !done);

  if (uinput_err !== undefined) {
    debug("failed to load uinput", uinput_err);
    return;
  }

  var create_options = {
    name : 'companion-kb-emulator',
      id : {
        bustype : self.uinput.BUS_USB,
        vendor : 0x28de,
        product : 0x1142,
        version : 1
      }
  };

  uinput_err = undefined;
  done = false;
  self.uinput.create(self.uinput_stream, create_options, function(err) {
    uinput_err = err;
    done = true;
  });
  deasync.loopWhile(() => !done);

  if (uinput_err !== undefined) {
    debug("failed to create uinput device", uinput_err);
    return;
  }

  self.initialized = true;
};

LinuxUinputKeyboard.prototype.close = function() {
	var self = this;

	self.uinput_stream.close();
}

LinuxUinputKeyboard.prototype.dispatch = function (keys) {
  var self = this;

  debug("orig", keys);

  var kb_keys = [];
  for (var i = 0; i < keys.length; i++) {
    kb_keys.push(self.uinput[keys[i]]);
  }

  debug("emit", kb_keys);

  self.uinput.emit_combo(self.uinput_stream, kb_keys, function(err) {
    if (err)
      debug("failed to execute keys", err);
  });
};

exports = module.exports = LinuxUinputKeyboard
