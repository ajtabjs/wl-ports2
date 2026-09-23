

master2015hp.isatSnp.cGetKeyMap = function(key) {
    var list = Object.keys(Input.keyMapper).filter(function(v) {
		return Input.keyMapper[v] == key;
	});//.map(function(v2) {return String.fromCharCode(Number(v2));});
	if (list.length <= 0) return [];
	for (var i = 0; i < list.length; i++) {
		switch(Number(list[i])) {
			case 8:
				list[i] = 'BACKSPACE'; break;
			case 13:
				list[i] = 'ENTER'; break;
			case 16:
				list[i] = 'SHIFT'; break;
			case 17:
				list[i] = 'CTRL'; break;
			case 27:
				list[i] = 'ESC'; break;
			case 32:
				list[i] = 'SPACE'; break;
			case 33:
				list[i] = 'PageUp'; break;
			case 34:
				list[i] = 'PageDown'; break;
			case 35:
				list[i] = 'END'; break;
			case 36:
				list[i] = 'ESC'; break;
			case 37:
				list[i] = '←'; break;
			case 38:
				list[i] = '↑'; break;
			case 39:
				list[i] = '→'; break;
			case 40:
				list[i] = '↓'; break;
			case 45:
				list[i] = 'INS'; break;
			case 46:
				list[i] = 'DEL'; break;
			case 96:
				list[i] = 'num0'; break;	
			case 97:
				list[i] = 'num1'; break;
			case 98:
				list[i] = 'num2'; break;
			case 99:
				list[i] = 'num3'; break;
			case 100:
				list[i] = 'num4'; break;
			case 101:
				list[i] = 'num5'; break;
			case 102:
				list[i] = 'num6'; break;
			case 103:
				list[i] = 'num7'; break;
			case 104:
				list[i] = 'num8'; break;
			case 105:
				list[i] = 'num9'; break;
			case 110:
				list[i] = '.'; break;
			default:
				list[i] = String.fromCharCode(Number(list[i]));
		}
	}
	return list;
};

Scene_Item.prototype.createTopWindow = function() {
	this._titleWindow = new Window_Help2(1);
    this._titleWindow.setText('Pockets');
    this.addWindow(this._titleWindow);
};

//disable moving parallax
Game_Map.prototype.updateParallax = function() {
	if (!$gameSwitches.value(master2015hp.isatSnp.stopParallax)) return;
    master2015hp.isatSnp.b_36.call(this);
};