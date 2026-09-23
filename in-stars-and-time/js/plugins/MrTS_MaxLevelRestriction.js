

(function() {

'use strict';

  // Check for <Max Level: x> notetag on current class (case-sensitive!)
  let _Game_Actor_maxLevel = Game_Actor.prototype.maxLevel;
  Game_Actor.prototype.maxLevel = function() {
    return parseInt(this.currentClass().meta['Max Level']) || _Game_Actor_maxLevel.call(this);
  };

  // Clamp level to max after changing class
  let _Game_Actor_changeClass = Game_Actor.prototype.changeClass;
  Game_Actor.prototype.changeClass = function(classId, keepExp) {
    _Game_Actor_changeClass.call(this, classId, keepExp);
    this._level = this.level.clamp(0, this.maxLevel());
    this.refresh();
  };

})();

