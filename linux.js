var Keyboard = require('./kbBase.js');
var fs = require('fs');
var ref = require('ref');
var ArrayType = require('ref-array');
var StructType = require('ref-struct');

var UINPUT_SCAN_CODES = {
	'KEY_ESC':			0x70029,
	'KEY_F1':			0x7003a,
	'KEY_F2':			0x7003b,
	'KEY_F3':			0x7003c,
	'KEY_F4':			0x7003d,
	'KEY_F5':			0x7003e,
	'KEY_F6':			0x7003f,
	'KEY_F7':			0x70040,
	'KEY_F8':			0x70041,
	'KEY_F9':			0x70042,
	'KEY_F10':			0x70043,
	'KEY_F11':			0x70044,
	'KEY_F12':			0x70045,
	'KEY_SYSRQ':		0x70046,
	'KEY_SCROLLLOCK':	0x70047,
	'KEY_PAUSE':		0x70048,
	'KEY_GRAVE':		0x70035,
	'KEY_1':			0x7001e,
	'KEY_2':			0x7001f,
	'KEY_3':			0x70020,
	'KEY_4':			0x70021,
	'KEY_5':			0x70022,
	'KEY_6':			0x70023,
	'KEY_7':			0x70024,
	'KEY_8':			0x70025,
	'KEY_9':			0x70026,
	'KEY_0':			0x70027,
	'KEY_MINUS':		0x7002d,
	'KEY_EQUAL':		0x7002e,
	'KEY_BACKSPACE':	0x7002a,
	'KEY_TAB':			0x7002b,
	'KEY_Q':			0x70014,
	'KEY_W':			0x7001a,
	'KEY_E':			0x70008,
	'KEY_R':			0x70015,
	'KEY_T':			0x70017,
	'KEY_Y':			0x7001c,
	'KEY_U':			0x70018,
	'KEY_I':			0x7000c,
	'KEY_O':			0x70012,
	'KEY_P':			0x70013,
	'KEY_LEFTBRACE':	0x7002f,
	'KEY_RIGHTBRACE':	0x70030,
	'KEY_ENTER':		0x70028,
	'KEY_CAPSLOCK':		0x70039,
	'KEY_A':			0x70004,
	'KEY_S':			0x70016,
	'KEY_D':			0x70007,
	'KEY_F':			0x70009,
	'KEY_G':			0x7000a,
	'KEY_H':			0x7000b,
	'KEY_J':			0x7000d,
	'KEY_K':			0x7000e,
	'KEY_L':			0x7000f,
	'KEY_SEMICOLON':	0x70033,
	'KEY_APOSTROPHE':	0x70034,
	'KEY_BACKSLASH':	0x70032,
	'KEY_LEFTSHIFT':	0x700e1,
	'KEY_102ND':		0x70064,
	'KEY_Z':			0x7001d,
	'KEY_X':			0x7001b,
	'KEY_C':			0x70006,
	'KEY_V':			0x70019,
	'KEY_B':			0x70005,
	'KEY_N':			0x70011,
	'KEY_M':			0x70010,
	'KEY_COMMA':		0x70036,
	'KEY_DOT':			0x70037,
	'KEY_SLASH':		0x70038,
	'KEY_RIGHTSHIFT':	0x700e5,
	'KEY_LEFTCTRL':		0x700e0,
	'KEY_LEFTMETA':		0x700e3,
	'KEY_LEFTALT':		0x700e2,
	'KEY_SPACE':		0x7002c,
	'KEY_RIGHTALT':		0x700e6,
	'KEY_RIGHTMETA':	0x700e7,
	'KEY_COMPOSE':		0x70065,
	'KEY_RIGHTCTRL':	0x700e4,
	'KEY_INSERT':		0x70049,
	'KEY_HOME':			0x7004a,
	'KEY_PAGEUP':		0x7004b,
	'KEY_DELETE':		0x7004c,
	'KEY_END':			0x7004d,
	'KEY_PAGEDOWN':		0x7004e,
	'KEY_UP':			0x70052,
	'KEY_LEFT':			0x70050,
	'KEY_DOWN':			0x70051,
	'KEY_RIGHT':		0x7004f,
	'KEY_NUMLOCK':		0x70053,
	'KEY_KPSLASH':		0x70054,
	'KEY_KPASTERISK':	0x70055,
	'KEY_KPMINUS':		0x70056,
	'KEY_KP7':			0x7005f,
	'KEY_KP8':			0x70060,
	'KEY_KP9':			0x70061,
	'KEY_KPPLUS':		0x70057,
	'KEY_KP4':			0x7005c,
	'KEY_KP5':			0x7005d,
	'KEY_KP6':			0x7005e,
	'KEY_KP1':			0x70059,
	'KEY_KP2':			0x7005a,
	'KEY_KP3':			0x7005b,
	'KEY_KPENTER':		0x70058,
	'KEY_KP0':			0x70062,
	'KEY_KPDOT':		0x70063,
	'KEY_CONFIG':		0xc0183,
	'KEY_PLAYPAUSE':	0xc00cd,
	'KEY_MUTE':			0xc00e2,
	'KEY_VOLUMEDOWN':	0xc00ea,
	'KEY_VOLUMEUP':		0xc00e9,
	'KEY_HOMEPAGE':		0xc0223,
	'KEY_PREVIOUSSONG':	0xc00f0,
	'KEY_NEXTSONG':		0xc00f1,
	'KEY_BACK':			0xc00f2,
	'KEY_FORWARD':		0xc00f3
}


function LinuxUinputKeyboard() {
	var self = this;

	Keyboard.apply(this, arguments);

	self.ioctl = require('ioctl');
	self.translator = require('./linux')
	self.open();

	return self;
}

LinuxUinputKeyboard.prototype.open = function() {
	var self = this;

	self.uinput_fd = fs.openSync('/dev/uinput');
	if (self.uinput_fd > -1) {
		self.uinput_stream = fs.createWriteStream(self.uinput_fd);



		self.initialized = true;
	}
};

LinuxUinputKeyboard.prototype.close = function() {
	var self = this;

	fs.closeSync(self.uinput_fd);
}

LinuxUinputKeyboard.prototype.dispatch = function (keys) {
  var self = this;

};

exports = module.exports = LinuxUinputKeyboard
