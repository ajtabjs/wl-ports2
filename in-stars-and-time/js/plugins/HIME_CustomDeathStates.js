/*:
-------------------------------------------------------------------------
@title Custom Death States
@author Hime @ HimeWorks
@date Nov 17, 2015
@filename HIME_CustomDeathStates.js
@url http://himeworks.com/2015/11/custom-death-states/

If you enjoy my work, consider supporting me on Patreon!

* https://www.patreon.com/himeworks

If you have any questions or concerns, you can contact me at any of
the following sites:

* Main Website: http://himeworks.com
* Facebook: https://www.facebook.com/himeworkscom/
* Twitter: https://twitter.com/HimeWorks
* Youtube: https://www.youtube.com/c/HimeWorks
* Tumblr: http://himeworks.tumblr.com/

-------------------------------------------------------------------------
@plugindesc Additional states that should be considered "death" which
will be used to trigger battle defeat or game over.
@help 
-------------------------------------------------------------------------
== Description ==

Video: https://youtu.be/s56kl3HIGGM

In RPGMaker MV, the default death state is the first state in your
database. When this state is applied, a battler (enemy or actor) is
considered to be dead.

During battle, when all enemies have the death state applied, the actors
are victorious. When all actors have the death state applied, they will
be defeated.

Outside of battle, if all actors have the death state applied, game over.

But what happens if you wanted other states to be considered death states?
For example, if all actors are petrified, then the game ends. Or if all
actors fall asleep, then the game ends.

This plugin allows you to designate additional states as "death" states.
Unlike the normal death state, actors won't lose all HP/MP, but they
will still be considered dead.

== Terms of Use ==

- Free for use in non-commercial projects with credits
- Contact me for commercial use

== Change Log ==

Nov 17, 2015 -  initial release

== Usage ==

To designate whether a state should be considered a death state or not,
go to the states in the database and write this note-tag in their note-box:

  <custom death state>
  
And you're ready to go!

-------------------------------------------------------------------------
 */ 
var Imported = Imported || {} ;
var TH = TH || {};
Imported.CustomDeathStates = 1;
TH.CustomDeathStates = TH.CustomDeathStates || {};

(function ($) {

  $.Regex = /<custom[-_ ]death[-_ ]state>/i

  $.loadCustomDeathStates = function() {
    $.customDeathStates = [];
    var state;
    var res;
    for (var i = 1, len = $dataStates.length; i < len; i++) {
      state = $dataStates[i];
      res = $.Regex.exec(state.note);
      if (res) {
        $.customDeathStates.push(i);
      }
    }
  };

  var TH_CustomDeathStates_DataManager_createGameObjects = DataManager.createGameObjects;
  DataManager.createGameObjects = function() {
    TH_CustomDeathStates_DataManager_createGameObjects.call(this);
    $.loadCustomDeathStates();
  };
  
  var TH_CustomDeathStates_GameBattlerBase_isDeathStateAffected = Game_BattlerBase.prototype.isDeathStateAffected;
  Game_BattlerBase.prototype.isDeathStateAffected = function() {
    return TH_CustomDeathStates_GameBattlerBase_isDeathStateAffected.call(this) || this.isCustomDeathStateAffected();
  };

  /* Returns true if any custom death state is applied */
  Game_BattlerBase.prototype.isCustomDeathStateAffected = function() {
    var states = $.customDeathStates;
    for (var i = 0, len = states.length; i < len; i++) {
      
      if (this.isStateAffected(states[i])) {
        return true;
      }
    }
    return false;
  };
})(TH.CustomDeathStates);