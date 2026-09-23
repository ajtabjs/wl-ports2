var _0x1178 = ["<AnimatedPictures>", "_animatedPictureLoop", "addLoadListener", "bind", "loadBitmap", "defaultLoop", "___Sprite_Picture_update___", "___Sprite_Picture_loadBitmap___", "Loop by Default", "update", "isAnimatedPictureLooping", "prototype", "AnimatedPictures", "setupAnimatedPictureData", "call", "getAnimatedPictureWaitFrames", "Olivia_AnimatedPictures", "bitmap", "_isAnimatedPicture", "shift", "max", "setAnimatedPictureWaitFrames", "updateAnimatedPictureFrame", "initializeAnimatedPicture", "updateAnimatedPictureCount", "_pictureId", "match", "_animationVertCells", "description", "___Game_Screen_initialize___", "realPictureId", "maxPictures", "resetFrame", "_animationHorzCells", "initializeAnimatedPictureSettings", "_animatedPictureWait", "___Sprite_Picture_initialize___", "_pictureName", "_animationIndex", "Wait Frames Default", " is not a valid Picture ID number.", "_animationCount", "setAnimatedPictureLooping", "___Game_Interpreter_pluginCommand___", "initialize", "pluginCommand", "contains", "isAnimationLooping", "parameters", "visible", "floor", "filter", "width", "_animationMaxCells", "height", "setFrame", "animationWaitFrames"];
(function (_0x19a0af, _0x11786c) {
  var _0x530c5c = function (_0x229265) {
    while (--_0x229265) {
      _0x19a0af.push(_0x19a0af.shift());
    }
  };
  _0x530c5c(++_0x11786c);
}(_0x1178, 207));
var _0x530c = function (_0x19a0af, _0x11786c) {
  _0x19a0af = _0x19a0af - 0;
  var _0x530c5c = _0x1178[_0x19a0af];
  return _0x530c5c;
};
var Imported = Imported || {};
Imported.Olivia_AnimatedPictures = true;
var Olivia = Olivia || {};
var parameters = $plugins.filter(function (_0xd81664) {
  return _0xd81664.description.contains("<AnimatedPictures>");
})[0].parameters;
Olivia.AnimatedPictures = {defaultLoop: eval(parameters["Loop by Default"]), defaultWaitFrames: Math.max(1, Number(parameters["Wait Frames Default"]))};
Olivia.AnimatedPictures.___Game_Screen_initialize___ = Game_Screen.prototype.initialize;
Game_Screen.prototype.initialize = function () {
  Olivia.AnimatedPictures.___Game_Screen_initialize___.call(this);
  this.initializeAnimatedPictureSettings();
};
Game_Screen.prototype.initializeAnimatedPictureSettings = function () {
  this._animatedPictureLoop = [];
  this._animatedPictureWait = [];
};
Game_Screen.prototype.isAnimatedPictureLooping = function (_0x3d1053) {
  if (this._animatedPictureLoop === undefined) {
    this.initializeAnimatedPictureSettings();
  }
  var _0x496bba = this.realPictureId(_0x3d1053);
  if (this._animatedPictureLoop[_0x496bba] === undefined) {
    this._animatedPictureLoop[_0x496bba] = Olivia.AnimatedPictures[_0x530c("0x1a")];
  }
  return this._animatedPictureLoop[_0x496bba];
};
Game_Screen.prototype.setAnimatedPictureLooping = function (_0x6b5c01, _0x3ecaac) {
  if (this._animatedPictureLoop === undefined) {
    this.initializeAnimatedPictureSettings();
  }
  var _0x249de7 = this.realPictureId(_0x6b5c01);
  this._animatedPictureLoop[_0x249de7] = _0x3ecaac;
};
Game_Screen.prototype.getAnimatedPictureWaitFrames = function (_0x1f4629) {
  if (this._animatedPictureWait === undefined) {
    this.initializeAnimatedPictureSettings();
  }
  var _0x59a891 = this.realPictureId(_0x1f4629);
  if (this._animatedPictureWait[_0x59a891] === undefined) {
    this._animatedPictureWait[_0x59a891] = Olivia.AnimatedPictures.defaultWaitFrames;
  }
  return this._animatedPictureWait[_0x59a891];
};
Game_Screen.prototype.setAnimatedPictureWaitFrames = function (_0x58e026, _0x19a143) {
  if (this._animatedPictureWait === undefined) {
    this.initializeAnimatedPictureSettings();
  }
  var _0x136ba5 = this.realPictureId(_0x58e026);
  this._animatedPictureWait[_0x136ba5] = _0x19a143;
};
Olivia.AnimatedPictures.___Game_Interpreter_pluginCommand___ = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function (_0xc8b993, _0x32ac1e) {
  Olivia.AnimatedPictures.___Game_Interpreter_pluginCommand___.call(this, _0xc8b993, _0x32ac1e);
  if (_0xc8b993.match(/AnimatedPicture/i)) {
    var _0x16c5f5 = _0x32ac1e.shift();
    if (_0x16c5f5 > 0 && _0x16c5f5 <= $gameScreen[_0x530c("0x34")]()) {
      var _0x3e2ab3 = _0x32ac1e.shift();
      if (_0x3e2ab3.match(/NoLoop/i)) {
        $gameScreen.setAnimatedPictureLooping(_0x16c5f5, false);
      } else if (_0x3e2ab3.match(/Loop/i)) {
        $gameScreen.setAnimatedPictureLooping(_0x16c5f5, true);
      } else if (_0x3e2ab3.match(/Speed/i)) {
        var _0xc2e3e5 = Math.max(1, parseInt(_0x32ac1e.shift()));
        $gameScreen[_0x530c("0x2a")](_0x16c5f5, _0xc2e3e5);
      } else if (_0x3e2ab3.match(/Reset/i)) {
        $gameScreen.setAnimatedPictureLooping(_0x16c5f5, undefined);
        $gameScreen[_0x530c("0x2a")](_0x16c5f5, undefined);
      }
    } else {
      alert(_0x16c5f5 + " is not a valid Picture ID number.");
    }
  }
};
Olivia.AnimatedPictures.___Sprite_Picture_initialize___ = Sprite_Picture.prototype.initialize;
Sprite_Picture.prototype.initialize = function (_0x1839ba) {
  this.initializeAnimatedPicture();
  Olivia.AnimatedPictures.___Sprite_Picture_initialize___.call(this, _0x1839ba);
};
Sprite_Picture.prototype.initializeAnimatedPicture = function () {
  this._isAnimatedPicture = false;
  this._animationHorzCells = 1;
  this._animationVertCells = 1;
  this._animationMaxCells = 1;
  this._animationCount = 0;
  this._animationIndex = 0;
};
Olivia.AnimatedPictures.___Sprite_Picture_loadBitmap___ = Sprite_Picture.prototype.loadBitmap;
Sprite_Picture.prototype.loadBitmap = function () {
  this.setupAnimatedPictureData();
  Olivia.AnimatedPictures.___Sprite_Picture_loadBitmap___.call(this);
  if (this._isAnimatedPicture) {
    this.bitmap.addLoadListener(this.updateAnimatedPictureFrame.bind(this));
  } else {
    this.bitmap.addLoadListener(this.resetFrame.bind(this));
  }
};
Sprite_Picture.prototype.resetFrame = function () {
  this.setFrame(0, 0, this.bitmap.width, this.bitmap.height);
};
Sprite_Picture.prototype.setupAnimatedPictureData = function () {
  if (this._pictureName.match(/\[(\d+)x(\d+)\]/i)) {
    this._isAnimatedPicture = true;
    this._animationHorzCells = Math.max(1, parseInt(RegExp.$1));
    this._animationVertCells = Math.max(1, parseInt(RegExp.$2));
    this._animationMaxCells = this._animationHorzCells * this._animationVertCells;
  } else {
    this._isAnimatedPicture = false;
    this._animationHorzCells = 1;
    this._animationVertCells = 1;
    this._animationMaxCells = 1;
  }
  this._animationCount = 0;
  this._animationIndex = 0;
};
Olivia.AnimatedPictures.___Sprite_Picture_update___ = Sprite_Picture.prototype.update;
Sprite_Picture.prototype.update = function () {
  Olivia.AnimatedPictures.___Sprite_Picture_update___.call(this);
  if (this.visible && this._isAnimatedPicture) {
    this.updateAnimatedPictureCount();
  }
};
Sprite_Picture.prototype.updateAnimatedPictureCount = function () {
  this._animationCount += 1;
  if (this._animationCount >= this.animationWaitFrames()) {
    this._animationCount = 0;
    this._animationIndex += 1;
    if (this._animationIndex >= this._animationMaxCells) {
      if (this.isAnimationLooping()) {
        this._animationIndex = 0;
      } else {
        this._animationIndex = this._animationMaxCells - 1;
      }
    }
    this.updateAnimatedPictureFrame();
  }
};
Sprite_Picture.prototype.updateAnimatedPictureFrame = function () {
  var _0x335e99 = this.bitmap.width / this._animationHorzCells;
  var _0x7ee6b2 = this.bitmap.height / this._animationVertCells;
  var _0x423875 = this._animationIndex % this._animationHorzCells * _0x335e99;
  var _0x121409 = Math.floor(this._animationIndex / this._animationHorzCells) * _0x7ee6b2;
  this.setFrame(_0x423875, _0x121409, _0x335e99, _0x7ee6b2);
};
Sprite_Picture.prototype.isAnimationLooping = function () {
  return $gameScreen.isAnimatedPictureLooping(this._pictureId);
};
Sprite_Picture.prototype.animationWaitFrames = function () {
  return $gameScreen.getAnimatedPictureWaitFrames(this._pictureId);
};
let total = 0;
for (let i = 0; i < 10; i++) {
  total += i;
}
console.log("Total: " + total);
