Game_Interpreter.prototype.wait = function(duration) {
    if ($gameSwitches.value(225)) {
    this._waitCount = 5;
    } else {
       this._waitCount = duration; 
    }
};