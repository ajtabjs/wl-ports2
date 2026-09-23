//=============================================================================
// Arisu's Dollhouse - Sealed Battle Commands - for RPG Maker MV version 1.6.1
// Arisu_SealedBattleCommands.js
//=============================================================================
 /*:
 * @plugindesc <SealedBattleCommands> created by Arisu's Dollhouse
 * @author Arisu's Dollhouse
 *
 * @help
 * == Introduction ==
 *
 * This plugin adds some new notetags that lets you seal specific commands in
 * battle like Attack, Guard, and Item using notetags.
 *
 * == Instructions ==
 *
 * # Install this plugin into your RPG Maker MV project's js/plugin folder.
 * # Open your game project in RPG Maker MV and open up the Plugin Manager.
 * # Add a new plugin and place this plugin beneath all Yanfly plugins present.
 * # Adjust any Plugin Parameter settings to this plugin.
 * # Read through plugin help file to understand how to use plugin.
 * # When testing this plugin, save first.
 *
 * == Notetags ==
 *
 * Actor, Class, Item, Weapon, Armor, Enemy, State Notetags:
 *
 *   <Attack Seal>
 *   <Guard Seal>
 *   <Item Seal>
 *   - If a battler has one of these notetags inside their associated noteboxes,
 *   then the battle command for that respective notetag will be sealed.
 *
 * == Warning ==
 *
 * This plugin is made for RPG Maker MV versions 1.6.1 and below. If you update
 * RPG Maker MV past that and this plugin breaks, I am NOT responsible for it.
 *
 * == Terms of Use ==
 *
 * # For Free and Commercial Use.
 * # Put "Arisu's Dollhouse" in your game's credits.
 * # Do not redistribute this plugin without permission.
 * # Do not take code from this plugin without permission.
 * # Edit of code is allowed as long as it's within plugin file.
 * # I do not support changes made to code edit.
 *
 * == Changelog ==
 * 
 * * None
 *
 */
//=============================================================================

var Imported=Imported||{};Imported.Arisu_SealedBattleCommands=true;var Arisu=Arisu||{};Arisu.SealedBattleCommands=Arisu.SealedBattleCommands||{};Arisu.getValidBattlerObjects=function(battler){var objects=[];if(battler.isActor()){objects.push(battler.actor());objects.push(battler.currentClass());objects=objects.concat(battler.equips())}else{objects.push(battler.enemy())}objects=objects.concat(battler.states());return objects};Arisu.checkObjectsForNotetag=function(objects,notetag){for(var i=0;i<objects.length;i++){var object=objects[i];if(object&&object.note&&object.note.match(notetag))return true}return false};Arisu.SealedBattleCommands.Game_BattlerBase_canAttack=Game_BattlerBase.prototype.canAttack;Game_BattlerBase.prototype.canAttack=function(){var objects=Arisu.getValidBattlerObjects(this);var notetag=/<Attack Seal>/i;if(Arisu.checkObjectsForNotetag(objects,notetag))return false;return Arisu.SealedBattleCommands.Game_BattlerBase_canAttack.call(this)};Arisu.SealedBattleCommands.Game_BattlerBase_canGuard=Game_BattlerBase.prototype.canGuard;Game_BattlerBase.prototype.canGuard=function(){var objects=Arisu.getValidBattlerObjects(this);var notetag=/<Guard Seal>/i;if(Arisu.checkObjectsForNotetag(objects,notetag))return false;return Arisu.SealedBattleCommands.Game_BattlerBase_canGuard.call(this)};Arisu.SealedBattleCommands.Window_ActorCommand_addAttackCommand=Window_ActorCommand.prototype.addAttackCommand;Window_ActorCommand.prototype.addAttackCommand=function(){Arisu.SealedBattleCommands.Window_ActorCommand_addAttackCommand.call(this);if(this._actor){var objects=Arisu.getValidBattlerObjects(this._actor);var notetag=/<Attack Seal>/i;if(Arisu.checkObjectsForNotetag(objects,notetag)){var index=this.findSymbol("attack");this._list[index].enabled=false}}};Arisu.SealedBattleCommands.Window_ActorCommand_addGuardCommand=Window_ActorCommand.prototype.addGuardCommand;Window_ActorCommand.prototype.addGuardCommand=function(){Arisu.SealedBattleCommands.Window_ActorCommand_addGuardCommand.call(this);if(this._actor){var objects=Arisu.getValidBattlerObjects(this._actor);var notetag=/<Guard Seal>/i;if(Arisu.checkObjectsForNotetag(objects,notetag)){var index=this.findSymbol("guard");this._list[index].enabled=false}}};Arisu.SealedBattleCommands.Window_ActorCommand_addItemCommand=Window_ActorCommand.prototype.addItemCommand;Window_ActorCommand.prototype.addItemCommand=function(){Arisu.SealedBattleCommands.Window_ActorCommand_addItemCommand.call(this);if(this._actor){var objects=Arisu.getValidBattlerObjects(this._actor);var notetag=/<Item Seal>/i;if(Arisu.checkObjectsForNotetag(objects,notetag)){var index=this.findSymbol("item");this._list[index].enabled=false}}};