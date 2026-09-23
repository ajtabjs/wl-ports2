	Window_Message.prototype.isShakingActive = function() {
		if ($gameSwitches.value(129)) {
					return (this._textShaking[0] > 0 || this._textShaking[0] === 'circle') || 
			this._textShaking[1] > 0 || this._textShaking[2] > 0 || this._textShaking[3] > 0;	
		}
	};