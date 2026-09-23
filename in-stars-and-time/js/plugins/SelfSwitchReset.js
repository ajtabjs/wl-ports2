Game_SelfSwitches.prototype.bulk_set = function(letter, state){
for(var key in this._data) {
if(key[key.length-1] == letter) {
this._data[key] = state;
console.log('setting ' + key + ' to ' + state);
}
}
};


Game_Interpreter.prototype.bulk_self_switch = function (letter, state) {
$gameSelfSwitches.bulk_set(letter, state);
};