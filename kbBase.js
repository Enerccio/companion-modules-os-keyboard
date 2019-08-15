var KEY_2_KEY_ID = {
  '0': 'KEY_0',
  '1': 'KEY_1',
  '102ND': 'KEY_102ND',
  '2': 'KEY_2',
  '3': 'KEY_3',
  '4': 'KEY_4',
  '5': 'KEY_5',
  '6': 'KEY_6',
  '7': 'KEY_7',
  '8': 'KEY_8',
  '9': 'KEY_9',
  'A': 'KEY_A',
  'APOSTROPHE': 'KEY_APOSTROPHE',
  'B': 'KEY_B',
  'BACK': 'KEY_BACK',
  'BACKSLASH': 'KEY_BACKSLASH',
  'BACKSPACE': 'KEY_BACKSPACE',
  'C': 'KEY_C',
  'CAPSLOCK': 'KEY_CAPSLOCK',
  'COMMA': 'KEY_COMMA',
  'COMPOSE': 'KEY_COMPOSE',
  'CONFIG': 'KEY_CONFIG',
  'D': 'KEY_D',
  'DELETE': 'KEY_DELETE',
  'DOT': 'KEY_DOT',
  'DOWN': 'KEY_DOWN',
  'E': 'KEY_E',
  'END': 'KEY_END',
  'ENTER': 'KEY_ENTER',
  'EQUAL': 'KEY_EQUAL',
  'ESC': 'KEY_ESC',
  'F': 'KEY_F',
  'F1': 'KEY_F1',
  'F10': 'KEY_F10',
  'F11': 'KEY_F11',
  'F12': 'KEY_F12',
  'F2': 'KEY_F2',
  'F3': 'KEY_F3',
  'F4': 'KEY_F4',
  'F5': 'KEY_F5',
  'F6': 'KEY_F6',
  'F7': 'KEY_F7',
  'F8': 'KEY_F8',
  'F9': 'KEY_F9',
  'FORWARD': 'KEY_FORWARD',
  'G': 'KEY_G',
  'GRAVE': 'KEY_GRAVE',
  'H': 'KEY_H',
  'HOME': 'KEY_HOME',
  'HOMEPAGE': 'KEY_HOMEPAGE',
  'I': 'KEY_I',
  'INSERT': 'KEY_INSERT',
  'J': 'KEY_J',
  'K': 'KEY_K',
  'KP0': 'KEY_KP0',
  'KP1': 'KEY_KP1',
  'KP2': 'KEY_KP2',
  'KP3': 'KEY_KP3',
  'KP4': 'KEY_KP4',
  'KP5': 'KEY_KP5',
  'KP6': 'KEY_KP6',
  'KP7': 'KEY_KP7',
  'KP8': 'KEY_KP8',
  'KP9': 'KEY_KP9',
  'KPASTERISK': 'KEY_KPASTERISK',
  'KPDOT': 'KEY_KPDOT',
  'KPENTER': 'KEY_KPENTER',
  'KPMINUS': 'KEY_KPMINUS',
  'KPPLUS': 'KEY_KPPLUS',
  'KPSLASH': 'KEY_KPSLASH',
  'L': 'KEY_L',
  'LEFT': 'KEY_LEFT',
  'LEFTALT': 'KEY_LEFTALT',
  'LEFTBRACE': 'KEY_LEFTBRACE',
  'LEFTCTRL': 'KEY_LEFTCTRL',
  'LEFTMETA': 'KEY_LEFTMETA',
  'LEFTSHIFT': 'KEY_LEFTSHIFT',
  'M': 'KEY_M',
  'MINUS': 'KEY_MINUS',
  'MUTE': 'KEY_MUTE',
  'N': 'KEY_N',
  'NEXTSONG': 'KEY_NEXTSONG',
  'NUMLOCK': 'KEY_NUMLOCK',
  'O': 'KEY_O',
  'P': 'KEY_P',
  'PAGEDOWN': 'KEY_PAGEDOWN',
  'PAGEUP': 'KEY_PAGEUP',
  'PAUSE': 'KEY_PAUSE',
  'PLAYPAUSE': 'KEY_PLAYPAUSE',
  'PREVIOUSSONG': 'KEY_PREVIOUSSONG',
  'Q': 'KEY_Q',
  'R': 'KEY_R',
  'RIGHT': 'KEY_RIGHT',
  'RIGHTALT': 'KEY_RIGHTALT',
  'RIGHTBRACE': 'KEY_RIGHTBRACE',
  'RIGHTCTRL': 'KEY_RIGHTCTRL',
  'RIGHTMETA': 'KEY_RIGHTMETA',
  'RIGHTSHIFT': 'KEY_RIGHTSHIFT',
  'S': 'KEY_S',
  'SCROLLLOCK': 'KEY_SCROLLLOCK',
  'SEMICOLON': 'KEY_SEMICOLON',
  'SLASH': 'KEY_SLASH',
  'SPACE': 'KEY_SPACE',
  'SYSRQ': 'KEY_SYSRQ',
  'T': 'KEY_T',
  'TAB': 'KEY_TAB',
  'U': 'KEY_U',
  'UP': 'KEY_UP',
  'V': 'KEY_V',
  'VOLUMEDOWN': 'KEY_VOLUMEDOWN',
  'VOLUMEUP': 'KEY_VOLUMEUP',
  'W': 'KEY_W',
  'X': 'KEY_X',
  'Y': 'KEY_Y',
  'Z': 'KEY_Z'
};

function Keyboard() {
	var self = this;

	self.initialized = false;
}

Keyboard.prototype.close = function() {
  var self = this;

};

Keyboard.prototype.send = function (key_sequence) {
  var self = this;

  self.dispatch(self.translate(key_sequence));
};

Keyboard.prototype.translate = function (key_sequence) {
  var self = this;

  var keys = key_sequence.split(" ");
  var key_ids = [];

  for(var i = 0; i < keys.length; i++) {
    key_ids.push(KEY_2_KEY_ID[keys[i]]);
  }

  return key_ids;
};

Keyboard.prototype.dispatch = function (keys) {
  var self = this;

};

exports = module.exports = Keyboard;
