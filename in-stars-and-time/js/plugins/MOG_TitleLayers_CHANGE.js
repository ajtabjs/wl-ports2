TitleBackground.prototype.loadBitmap = function() {
	this._anime = [];
	this._anime[0] = String(Moghunter.titleBackAN[this._index]) === "true" ? true : false;
	this._anime[1] = 0;
	this._anime[2] = this._anime[0] ? Moghunter.titleBackAF[this._index] : 1;
	this._anime[3] = Moghunter.titleBackAS[this._index];
	this._anime[4] = 0;
	this._imgs = [];
	if (!this.isAnimated()) {
		   var name = String(Moghunter.titleBackN[this._index]);
		   this._imgs[0] = ImageManager.loadTitle1(name);
	} else {
		if ($gameVariables.value(127) <= 1){
			for (var i = 0; i < Moghunter.titleBackAF[this._index]; i++) {
		   		var name = String(Moghunter.titleBackN[this._index]) + "_" + i;
		   		this._imgs[i] = ImageManager.loadTitle1(name);
			};

		};
		if ($gameVariables.value(127) === 2){
			for (var i = 0; i < Moghunter.titleBackAF[this._index]; i++) {
		   		var name = String(Moghunter.titleBackN[this._index]) + "2_" + i;
		   		this._imgs[i] = ImageManager.loadTitle1(name);
			};

		};
		if ($gameVariables.value(127) === 3){
			for (var i = 0; i < Moghunter.titleBackAF[this._index]; i++) {
		   		var name = String(Moghunter.titleBackN[this._index]) + "3_" + i;
		   		this._imgs[i] = ImageManager.loadTitle1(name);
			};

		};	
		if ($gameVariables.value(127) === 4){
			for (var i = 0; i < Moghunter.titleBackAF[this._index]; i++) {
		   		var name = String(Moghunter.titleBackN[this._index]) + "3_" + i;
		   		this._imgs[i] = ImageManager.loadTitle1(name);
			};

		};	
		if ($gameVariables.value(127) === 5){
			for (var i = 0; i < Moghunter.titleBackAF[this._index]; i++) {
		   		var name = String(Moghunter.titleBackN[this._index]) + "4_" + i;
		   		this._imgs[i] = ImageManager.loadTitle1(name);
			};

		};
		if ($gameVariables.value(127) === 6){
			for (var i = 0; i < Moghunter.titleBackAF[this._index]; i++) {
		   		var name = String(Moghunter.titleBackN[this._index]) + "5_" + i;
		   		this._imgs[i] = ImageManager.loadTitle1(name);
			};

		};
		if ($gameVariables.value(127) === 7){
			for (var i = 0; i < Moghunter.titleBackAF[this._index]; i++) {
		   		var name = String(Moghunter.titleBackN[this._index]) + "6_" + i;
		   		this._imgs[i] = ImageManager.loadTitle1(name);
			};

		};				   
	};
};