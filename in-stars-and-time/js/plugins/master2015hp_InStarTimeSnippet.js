//===============================================================================
// master2015hp_InStarTimeSnippet.js
// by master2015hp
// 2024.06.12
//===============================================================================
/*:
 * @plugindesc snippet for In Stars & Time project
 * @author master2015hp
 *
 * @param var id
 * @desc id of the variable which will hold the result of current device test
 * with 1 = gamepad or 0 = keyboard
 * @type number
 * @default 10
 *
 * @param highlight Profile menu switch id
 * @desc for re-selecting Profile option after exit its scene
 * @type number
 * @default 100
 *
 * @param disable moving parallax switch id
 * @desc if this switch is on, parallax won't be moving
 * @type number
 * @default 101
 *
 * @param hide from applying item actor list
 * @desc list of actor Id to be hid from applying item. Separate by ','
 * @type string
 * @default 5
 *
 * @param left button image
 * @desc image for left switch button
 * @default eHelpButtonL
 * @require 1
 * @dir img/system/
 * @type file
 *
 * @param right button image
 * @desc image for right switch button
 * @default eHelpButtonR
 * @require 1
 * @dir img/system/
 * @type file
 *
 * @param left pad button image
 * @desc image for left switch pad button
 * @default eHelpButtonLPad
 * @require 1
 * @dir img/system/
 * @type file
 *
 * @param right pad button image
 * @desc image for right switch pad button
 * @default eHelpButtonRPad
 * @require 1
 * @dir img/system/
 * @type file
 *
 * @param left PS button image
 * @desc image for left PS pad button
 * @default eHelpButtonLPS
 * @require 1
 * @dir img/system/
 * @type file
 *
 * @param right PS button image
 * @desc image for right PS pad button
 * @default eHelpButtonRPS
 * @require 1
 * @dir img/system/
 * @type file
 *
 * @param button image size
 * @desc the size of a SINGLE frame of the button image
 * @type number
 * @default 32
 *
 * @param button image speed
 * @desc smaller mean faster animation speed
 * @type number
 * @default 10
 *
 * @param button image offset x
 * @desc offset for the button on x axis
 * @type number
 * @default 0
 *
 * @param button image offset y
 * @desc offset for the button on y axis
 * @type number
 * @default 0
 *
 * @param intro movie list
 * @desc list of movies for auto playing during idle
 * @type string[]
 * @default []
 *
 * @param count down time for idle videos
 * @desc if player idling for this much frames, idle videos will start playing
 * @type number
 * @default 300
 *
 * @param play idle video title command name
 * @desc leave it as blank to hide the command from title options
 * @type string
 * @default Watch Intro
 *
 * @param auto play movies if idling
 * @desc whether to use this feature or not
 * @type select
 * @default true
 * @option PLAY MOVIES
 * @value true
 * @option DO NOT PLAY MOVIES
 * @value false
 *
 * @param default fonts
 * @desc setup default fonts here. Leave empty to disable.
 * LanguageName:FontName - don't use Default as a name for Language
 * @type string[]
 * @default ["default1:BestTen-CRT.ttf","japanese:YujiBoku-Regular.ttf"]
 *
 * @param word wrap pad x
 * @desc wrap the text a bit sooner than normal
 * @type number
 * @default 10
 *
 * @param unable to target the user skill list
 * @desc separate by ,
 * @type string
 * @default 15, 27
 *
 * @param selected choice color
 * @desc it's Red:Green:Blue color
 * @type string
 * @default 150:150:150
 *
 * @param msg japanese 1st line ex
 * @desc extra x to plus to first line of message for japanese lang
 * @type string
 * @default -100
 *
 * @param msg japanese rest lines ex
 * @desc extra x to plus to lines of message (except 1st line) for japanese lang
 * @type string
 * @default 0
 *
 * @param msg non japanese 1st line ex
 * @desc extra x to plus to first line of message for NONjapanese lang
 * @type string
 * @default 0
 *
 * @param msg non japanese rest lines ex
 * @desc extra x to plus to lines of message (except 1st line) for NONjapanese lang
 * @type string
 * @default 0
 *
 * @param fast forward plus
 * @desc continue fast forward this much frames after activated the feature
 * @type number
 * @default 30
 *
 * @param up arrow image
 * @desc image for message up arrow
 * @default arrow_up
 * @require 1
 * @dir img/system/
 * @type file
 *
 * @param down arrow image
 * @desc image for message down arrow
 * @default arrow_down
 * @require 1
 * @dir img/system/
 * @type file
 *
 * @param up down arrow delay
 * @desc bigger mean slower animation
 * @type number
 * @default 30
 *
 * @param target dead but not KO ally skill list
 * @desc separate by ,
 * @type string
 * @default 36
 *
 * @param only KO ally item list
 * @desc separate by ,
 * @type string
 * @default 4
 *
 * @param only KO ally skill list
 * @desc separate by ,
 * @type string
 * @default 39
 *
 * @param off shake battle switch
 * @desc turn this switch OFF to turn off battle shake
 * @type number
 * @default 100
 *
 * @param platform type
 * @desc pick the correct platform for UI stuffs
 * @type select
 * @default 0
 * @option PC
 * @value 0
 * @option PS
 * @value 1
 * @option XBOX
 * @value 2
 * @option SWITCH
 * @value 3
 *
 * @param button style show categories
 * @desc the list of option categories that have Button Style option appear
 * @type string
 * @default all, controls
 *
 * @param button style option name
 * @desc display name of button style option
 * @type string[]
 * @default ["ENG:Button Style","JPN:ボタンのスタイル"]
 *
 * @param button style platforms name
 * @desc list of the sub options for Button Style option
 * @type string
 * @default PC, PS, XBOX
 *
 * @param button style help text
 * @desc help text for button style option
 * @type string[]
 * @default ["ENG:Select instruction guide button style","JPN:説明ガイドボタンのスタイルを選択してください"]
 *
 * @param pic reload max
 * @desc max times for trying to reset a picture when failed to get it
 * @type number
 * @default 5
 *
 * @param pic reload delay
 * @desc delay frames between reload. 1000 = 1 second
 * @type number
 * @default 50
 *
 * @param draw pressed gamepad
 * @desc for testing only. Won't be displayed in real game
 * @type select
 * @default true
 * @option ENABLE
 * @value true
 * @option DISABLE
 * @value false
 *
 * @param button list PS
 * @desc name list for PS buttons
 * @type string[]
 * @default ["✕","○","■","▲","L1","R1","L2","R2","Share","Opt","LS","RS"]
 *
 * @param button list XBOX
 * @desc name list for XBOX buttons
 * @type string[]
 * @default ["A","B","X","Y","LB","RB","LT","RT","Back","Start","LS","RS"]
 *
 * @param button list SWITCH
 * @desc name list for SWITCH buttons
 * @type string[]
 * @default ["B","A","Y","X","L","R","ZL","ZR","-","+","LS","RS"]
 *
 * @help
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░▒░░▒▒▒░░░▒▒░░░░▒▒▒▒░░▒▒▒░░▒░░░░░▒▒░░░░
░▒░▒▒░░░░░▒░▒░░░▒░░▒▒░░░▒▒░▒░░░░░▒░▒░░░
░▒░▒░░░░░▒▒░▒░░░▒░░░▒░░░░▒░▒░░░░▒▒░▒░░░
░▒░▒▒░░░░▒░░░▒░░▒░░▒▒░░░░▒░▒░░░░▒░░░▒░░
░▒░░▒▒░░░▒▒▒▒▒░░▒▒▒▒░░▒▒▒▒░▒░░░░▒▒▒▒▒░░
░▒░░░░▒░▒▒░░░▒░░▒░░▒▒░░░░▒░▒░░░▒▒░░░▒░░
░▒░░░░▒░▒░░░░▒▒░▒░░▒▒░░░░▒░▒░░░▒░░░░▒▒░
░▒░▒▒▒░░▒░░░░░▒░▒▒▒▒░░▒▒▒░░▒▒▒░▒░░░░░▒░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░

 * -------------------------------------------------------------------------------
 * ✧ REQUIRE
 * ===============================================================================
 * - Install below Insertdisc5_changeSkillStatusWindow.js
 *
 * -------------------------------------------------------------------------------
 * ✧ FEATURES
 * ===============================================================================
 * Get current manually set Platform (0 = PC | 1 = PS | 2 = SWitch)
master2015hp.isatSnp.getPlatform()
 *
 * Get mapped keys from current in-using device according to in-game key:
master2015hp.isatSnp.getKeyName(key)
 *
 * ex: master2015hp.isatSnp.getKeyName('ok')
 * ex: master2015hp.isatSnp.getKeyName('cancel')
 * - List of in-game keys:
 * -- ok / escape / cancel / menu / shift
 * -- pageup / pagedown / up / down / left / right
 *
 * - To rehighlight PROFILE icon after exit that scene.
 * -- set up the switchID in the plugin editor
 * -- turn that switch ON at the very start of 'menu_presscancel' common event
 * -- currently common event 153
 *
 * - To remove a choice from 'Selected Choices List' or ungrey it, run script:
$gameSystem.removeSelectedChoice('txt', mapId, eventId, pageId, listId)
 * -- txt: text of the choice
 * -- mapId: (optional) from which map Id this choice was from
 * -- eventId: (optional) which event this choice was from
 * -- pageId: (optional)
 * -- listId: (optional)
 * -- you can omit optional arguments, but if there are choices with similar
 * --- text, wrong one might get ungreyed instead.
 *
 * - To manually grey out a choice, run script:
$gameSystem.forceGreyChoice('txt', mapId, eventId, pageId, listId)
 * -- arguments work similar to removeSelectedChoice
 * -- may grey out wrong choice if 2 texts are similar and
 * -- you didn't provide any other arguments
 * 
 * -------------------------------------------------------------------------------
 * ✧ TERMS OF USE
 * ===============================================================================
 * - You must buy a license before using this plugin for any commercial purposes
 * - License must be obtained BEFORE you start selling your game.
 * - NOTE: Games with micro-transactions and/or advertising incomes are considred
 *   commercial use of this plugin!
 * - Edits are allowed as long as "Terms of Use" is not changed in any way.
 *
 * DO NOT COPY, RESELL, REDISTRIBUTE, REPUBLISH OR CLAIM ANY PIECE OF
 * THIS SOFTWARE AS YOUR OWN!
 * Copyright (c) 2022, Isabella Ava
 * Contact me at gmail: master2015hp
 *
 * -------------------------------------------------------------------------------
 * Version History
 * ===============================================================================
 * 2022/02/28 v1.0.0 - Initial release
 *
 */
var master2015hp = master2015hp || {};
master2015hp.isatSnp = master2015hp.isatSnp || {};
master2015hp.isatSnp.a = PluginManager.parameters('master2015hp_InStarTimeSnippet');
master2015hp.isatSnp.lastInputDeviceVarId = Number(master2015hp.isatSnp.a['var id']) || 10;
master2015hp.isatSnp.highlightProfile = Number(master2015hp.isatSnp.a['highlight Profile menu switch id']) || 100;
master2015hp.isatSnp.stopParallax = Number(master2015hp.isatSnp.a['disable moving parallax switch id']) || 101;
master2015hp.isatSnp.lrImageL = master2015hp.isatSnp.a['left button image'] || 'eHelpButtonL';
master2015hp.isatSnp.lrImageR = master2015hp.isatSnp.a['right button image'] || 'eHelpButtonR';
master2015hp.isatSnp.lrImageLPad = master2015hp.isatSnp.a['left pad button image'] || 'eHelpButtonLPad';
master2015hp.isatSnp.lrImageRPad = master2015hp.isatSnp.a['right pad button image'] || 'eHelpButtonRPad';
master2015hp.isatSnp.lrImageLPS = master2015hp.isatSnp.a['left PS button image'] || 'eHelpButtonLPS';
master2015hp.isatSnp.lrImageRPS = master2015hp.isatSnp.a['right PS button image'] || 'eHelpButtonRPS';
master2015hp.isatSnp.lrImageSize = Number(master2015hp.isatSnp.a['button image size']) || 32;
master2015hp.isatSnp.lrImageSpeed = Number(master2015hp.isatSnp.a['button image speed']) || 10;
master2015hp.isatSnp.lrOffX = Number(master2015hp.isatSnp.a['button image offset x']) || 0;
master2015hp.isatSnp.lrOffY = Number(master2015hp.isatSnp.a['button image offset y']) || 0;
master2015hp.isatSnp.idleVideosList = JSON.parse(master2015hp.isatSnp.a['intro movie list']) || [];
master2015hp.isatSnp.idleTime = Number(master2015hp.isatSnp.a['count down time for idle videos']) || 300;
master2015hp.isatSnp.exMsgJpn1 = Number(master2015hp.isatSnp.a['msg japanese 1st line ex']) || 0;
master2015hp.isatSnp.exMsgJpn2 = Number(master2015hp.isatSnp.a['msg japanese rest lines ex']) || 0;
master2015hp.isatSnp.exMsg0Jpn1 = Number(master2015hp.isatSnp.a['msg non japanese 1st line ex']) || 0;
master2015hp.isatSnp.exMsg0Jpn2 = Number(master2015hp.isatSnp.a['msg non japanese rest lines ex']) || 0;
master2015hp.isatSnp.fastForwardPlus = Number(master2015hp.isatSnp.a['fast forward plus']) || 30;
master2015hp.isatSnp.arrowUpdateDelay = Number(master2015hp.isatSnp.a['up down arrow delay']) || 30;
master2015hp.isatSnp.arrowUImage = master2015hp.isatSnp.a['up arrow image'] || 'arrow_up';
master2015hp.isatSnp.arrowDImage = master2015hp.isatSnp.a['down arrow image'] || 'arrow_down';

master2015hp.isatSnp.padButtonsPs = JSON.parse(master2015hp.isatSnp.a['button list PS']) || ['✕','○','■','▲','L1','R1','L2','R2','Share','Opt','LS','RS'];
master2015hp.isatSnp.padButtonsXbox = JSON.parse(master2015hp.isatSnp.a['button list XBOX']) || ['A','B','X','Y','LB','RB','LT','RT','Back','Start','LS','RS'];
master2015hp.isatSnp.padButtonsSwitch = JSON.parse(master2015hp.isatSnp.a['button list SWITCH']) || ['B','A','Y','X','L','R','ZL','ZR','-','+','LS','RS'];
master2015hp.isatSnp.testGamepad = master2015hp.isatSnp.a['draw pressed gamepad'] == 'true';
master2015hp.isatSnp.autoPlayMovie = master2015hp.isatSnp.a['auto play movies if idling'] == 'true';
master2015hp.isatSnp.idleVidTitleCommand = master2015hp.isatSnp.a['play idle video title command name'];
master2015hp.isatSnp.hideFromApplyingItemActorList = master2015hp.isatSnp.a['hide from applying item actor list'] || '5';
master2015hp.isatSnp.hideFromApplyingItemActorList =
master2015hp.isatSnp.hideFromApplyingItemActorList.split(',').map(function(v) {return Number(v.trim());});
master2015hp.isatSnp.skillsTargetDeadNotKo = master2015hp.isatSnp.a['target dead but not KO ally skill list'] || '36';
master2015hp.isatSnp.skillsTargetDeadNotKo = master2015hp.isatSnp.skillsTargetDeadNotKo.split(',').map(function(v) {return Number(v.trim());});
master2015hp.isatSnp.itemOnlyKoAlly = master2015hp.isatSnp.a['only KO ally item list'] || '4';
master2015hp.isatSnp.itemOnlyKoAlly = master2015hp.isatSnp.itemOnlyKoAlly.split(',').map(function(v) {return Number(v.trim());});
master2015hp.isatSnp.skillOnlyKoAlly = master2015hp.isatSnp.a['only KO ally skill list'] || '39';
master2015hp.isatSnp.skillOnlyKoAlly = master2015hp.isatSnp.skillOnlyKoAlly.split(',').map(function(v) {return Number(v.trim());});
master2015hp.isatSnp.statesFrozen = 19;
master2015hp.isatSnp.offShakeBattleSw = Number(master2015hp.isatSnp.a['off shake battle switch']) || 100;

master2015hp.isatSnp.picReloadMaxTimes = Number(master2015hp.isatSnp.a['pic reload max']) || 5;
master2015hp.isatSnp.picReloadDelay = Number(master2015hp.isatSnp.a['pic reload delay']) || 50;

master2015hp.isatSnp.platformType = Number(master2015hp.isatSnp.a['platform type']) || 0;
master2015hp.isatSnp.buttonstyleShowCategories =
	master2015hp.isatSnp.a['button style show categories'].split(',').map(function(a) {return a.trim().toLowerCase();}) || [];
master2015hp.isatSnp.buttonstyleOptionNames = JSON.parse(master2015hp.isatSnp.a['button style option name']) || ["ENG:Button Style","JPN:ボタンのスタイル"];
master2015hp.isatSnp.buttonstylePlatformNames =
	master2015hp.isatSnp.a['button style platforms name'].split(',').map(function(a) {return a.trim();}) || ['PC','PS', 'XBOX'];
master2015hp.isatSnp.buttonstyleHelpText = JSON.parse(master2015hp.isatSnp.a['button style help text']) || ["ENG:Select instruction guide button style","JPN:説明ガイドボタンのスタイルを選択してください"];

master2015hp.isatSnp.skillsCannotTargetUser = master2015hp.isatSnp.a['unable to target the user skill list'] || '15, 27';
master2015hp.isatSnp.skillsCannotTargetUser = master2015hp.isatSnp.skillsCannotTargetUser.split(',').map(function(v) {return Number(v.trim());});
master2015hp.isatSnp.selectedChoiceColor = master2015hp.isatSnp.a['selected choice color'] || '150:150:150';
master2015hp.isatSnp.selectedChoiceColor = master2015hp.isatSnp.selectedChoiceColor.split(':').map(function(v) {return v.trim();});

master2015hp.isatSnp.tmpObj = JSON.parse(master2015hp.isatSnp.a['default fonts']) || [];
master2015hp.isatSnp.fontList = {};
master2015hp.isatSnp.tmpObj.forEach(function(str) {
	let data = str.split(':');
	master2015hp.isatSnp.fontList[data[0]] = data[1];
});

master2015hp.isatSnp.wordWrapPadX = Number(master2015hp.isatSnp.a['word wrap pad x']) || 0;

master2015hp.isatSnp.b_0 = Input.update;
master2015hp.isatSnp.b_1 = Window_Message.prototype.updateInput;
master2015hp.isatSnp.b_2 = Sprite_Base.prototype.startAnimation;
master2015hp.isatSnp.b_3 = Scene_Battle.prototype.start;
master2015hp.isatSnp.b_4 = Scene_Base.prototype.start;
master2015hp.isatSnp.b_5 = Scene_Item.prototype.createItemWindow;
master2015hp.isatSnp.b_6 = Game_Temp.prototype.reserveCommonEvent;
master2015hp.isatSnp.b_7 = Scene_Base.prototype.closeCommonEventMenuWindows;
master2015hp.isatSnp.b_8 = Scene_Item.prototype.update;
master2015hp.isatSnp.b_9 = Scene_Item.prototype.create;
master2015hp.isatSnp.b_10 = Scene_Battle.prototype.selectActorSelection;
master2015hp.isatSnp.b_11 = Scene_Battle.prototype.createStatusWindow;
master2015hp.isatSnp.b_12 = Scene_Battle.prototype.update;
master2015hp.isatSnp.b_13 = SpriteSelectionMenu.prototype.rc;
master2015hp.isatSnp.b_14 = Scene_Battle.prototype.onActorOk;
master2015hp.isatSnp.b_15 = Scene_Battle.prototype.onActorCancel;
master2015hp.isatSnp.b_16 = Spriteset_Battle.prototype.battleFieldDepthCompare;
master2015hp.isatSnp.b_17 = Scene_Battle.prototype.startActorCommandSelection;
master2015hp.isatSnp.b_18 = BattleManager.endAction;
master2015hp.isatSnp.b_19 = Window_BattleActor.prototype.select;
master2015hp.isatSnp.b_20 = Window_KeyConfig.prototype.select;
master2015hp.isatSnp.b_21 = Scene_KeyConfig.prototype.onActionOk;
master2015hp.isatSnp.b_22 = Scene_GamepadConfig.prototype.commandReset;
master2015hp.isatSnp.b_23 = Scene_KeyConfig.prototype.commandDefault;
master2015hp.isatSnp.b_24 = Scene_KeyConfig.prototype.commandWasd;
master2015hp.isatSnp.b_25 = ConfigManager.makeData;
master2015hp.isatSnp.b_26 = ConfigManager.applyData;
master2015hp.isatSnp.b_27 = Spriteset_Battle.prototype.initialize;
master2015hp.isatSnp.b_28 = Scene_Battle.prototype.createSpriteset;
master2015hp.isatSnp.b_29 = Scene_Title.prototype.update;
master2015hp.isatSnp.b_30 = Scene_Title.prototype.initialize;
master2015hp.isatSnp.b_31 = Window_TitleCommand.prototype.makeCommandList;
master2015hp.isatSnp.b_32 = Scene_Title.prototype.createCommandWindow;
master2015hp.isatSnp.b_33 = Window_ItemList.prototype.refresh;
master2015hp.isatSnp.b_34 = Window_MenuActor.prototype.initialize;
master2015hp.isatSnp.b_35 = Scene_Menu.prototype.start;
master2015hp.isatSnp.b_36 = Game_Map.prototype.updateParallax;
master2015hp.isatSnp.b_37 = Window_Message.prototype.onEndOfText;
master2015hp.isatSnp.b_38 = Window_ChoiceList.prototype.drawItem;
// master2015hp.isatSnp.b_39 = ConfigManager.makeData;
// master2015hp.isatSnp.b_40 = ConfigManager.applyData;
master2015hp.isatSnp.b_41 = Window_Base.prototype.resetFontSettings;
master2015hp.isatSnp.b_42 = Bitmap.prototype.drawText;
master2015hp.isatSnp.b_43 = Scene_Load.prototype.onLoadSuccess;
master2015hp.isatSnp.b_44 = Window_Options.prototype.refresh;
master2015hp.isatSnp.b_45 = Window_ChoiceList.prototype.refresh;
master2015hp.isatSnp.b_46 = Window_ChoiceList.prototype.initialize;
master2015hp.isatSnp.b_47 = Game_Message.prototype.add;
master2015hp.isatSnp.b_48 = Game_Temp.prototype.initialize;
master2015hp.isatSnp.b_49 = Window_ChoiceList.prototype.callCancelHandler;
master2015hp.isatSnp.b_50 = Window_ChoiceList.prototype.processCancel;
master2015hp.isatSnp.b_51 = Game_Message.prototype.onChoice;
master2015hp.isatSnp.b_52 = Game_System.prototype.initialize;
master2015hp.isatSnp.b_53 = Window_ChoiceList.prototype.processNormalCharacter;
master2015hp.isatSnp.b_54 = Window_ChoiceList.prototype.drawTextEx;
master2015hp.isatSnp.b_55 = Game_Message.prototype.removeHiddenChoices;
master2015hp.isatSnp.b_56 = Game_Interpreter.prototype.setupReservedCommonEvent;
master2015hp.isatSnp.b_57 = Window_Message.prototype.newLineX;
master2015hp.isatSnp.b_58 = Sprite_VisualNovelBust.prototype.clear;
master2015hp.isatSnp.b_59 = Window_Message.prototype.newPage;
master2015hp.isatSnp.b_60 = Sprite_VisualNovelBust.prototype.opacityTo;
master2015hp.isatSnp.b_61 = Sprite_VisualNovelBust.prototype.fullClear;
master2015hp.isatSnp.b_62 = Window_Message.prototype.isFastForward;
master2015hp.isatSnp.b_63 = Scene_Map.prototype.updateMainMultiply;
master2015hp.isatSnp.b_64 = BattleManager.startBattle;
master2015hp.isatSnp.b_65 = BattleManager.startATBInput;
master2015hp.isatSnp.b_66 = Window.prototype.initialize;
master2015hp.isatSnp.b_67 = Window.prototype._updateArrows;
master2015hp.isatSnp.b_68 = Game_BattlerBase.prototype.meetsSkillConditions;
master2015hp.isatSnp.b_69 = Scene_Battle.prototype.onItemCancel;
master2015hp.isatSnp.b_70 = Scene_Battle.prototype.onSkillCancel;
master2015hp.isatSnp.b_71 = BattleManager.createSetupActions;
master2015hp.isatSnp.b_72 = BattleManager.initMembers;
master2015hp.isatSnp.b_73 = Game_Screen.prototype.startShake;
master2015hp.isatSnp.b_74 = Window_Options.prototype.addGeneralOptions;

master2015hp.isatSnp.b_76 = Window_Options.prototype.processOk;
master2015hp.isatSnp.b_77 = Scene_Options.prototype.createOptionsWindow;
master2015hp.isatSnp.b_78 = Window_Options.prototype.drawAllItems;
master2015hp.isatSnp.b_79 = Scene_Options.prototype.createCategoryWindow;
master2015hp.isatSnp.b_80 = Window_Options.prototype.makeCommandList;
master2015hp.isatSnp.b_81 = Window_SavefileList.prototype.update;
master2015hp.isatSnp.b_82 = Scene_Save.prototype.start;
master2015hp.isatSnp.b_83 = Scene_Save.prototype.onSaveSuccess;
// master2015hp.isatSnp.b_84 = Scene_Load.prototype.onLoadSuccess;

master2015hp.isatSnp.getGamepadName = function() {
	if (navigator.getGamepads) {
		let gamepads = navigator.getGamepads();
		let keys = Object.keys(gamepads);
		let count = 0;
		keys.forEach(function(k) {
			if (!gamepads[k]) return;
			if (gamepads[k].id) alert('found gamepad: ' + gamepads[k].id);
			count++;
		});
		if (count <= 0) alert('found no gamepad. Please re-press any gamepad button and try again');
	}
};

master2015hp.isatSnp.getGamepadType = function() {
	let type = null;
	if (navigator.getGamepads) {
		let gamepads = navigator.getGamepads();
		let keys = Object.keys(gamepads);
		let count = 0;
		keys.some(function(k) {
			if (!gamepads[k]) return false;
			if (gamepads[k].id.search(/PS/ig) > -1) type = 'PS';
			else if (gamepads[k].id.search(/XBOX/ig) > -1) type = 'XBOX';
			else type = 'OTHER';
			return true;
		});
	}
	return type;
};

master2015hp.isatSnp.isGamepadConnected = function() {
	if (navigator.getGamepads) {
	  var gamepads = navigator.getGamepads();
	  if (gamepads) {
		for (var i = 0; i < gamepads.length; i++) {
		  var gamepad = gamepads[i];
		  if (gamepad && gamepad.connected) return true;
		}
	  }
	}
	return false;
};

master2015hp.isatSnp.inputAnyKeyPressed = function() {
	return Input._currentState[Input._latestButton];
};

master2015hp.isatSnp.gamepadAnyButtonPressed = function(checkStick) {
	if (navigator.getGamepads) {
		var gamepads = navigator.getGamepads();
        if (gamepads) {
			for (var i = 0; i < gamepads.length; i++) {
                var gamepad = gamepads[i];
                if (gamepad && gamepad.connected) {
					//any button pressed
                    var buttons = gamepad.buttons;
					for (var j = 0; j < buttons.length; j++) {
						if (buttons[j].pressed) {
							return true;
						}
					}
					//neu nhu xoay hai con lan dieu khien huong di
					if (checkStick) {
						var axes = gamepad.axes;
						var threshold = 0.5;
						for (var j = 0; j < axes.length; j++) {
							if ( Math.abs(axes[j]) > Math.abs(threshold) ) {
								return true;
							}
						}
					}
                }
            }
		}
	}
	return false;
};

master2015hp.isatSnp.getPlatform = function() {
	return ConfigManager['buttonstyle'];
};

master2015hp.isatSnp.stringContainsString = function(str1, str2) {
  let index1 = 0;
  let index2 = 0;

  while (index1 < str1.length && index2 < str2.length) {
    if (str1[index1] === str2[index2]) {
      index1++;
    }
    index2++;
  }

  return index1 === str1.length;
};

Game_System.prototype.initialize = function() {
	master2015hp.isatSnp.b_52.call(this);
	this._msSelectedChoices = [];//[{text: str, 'evId': eventId, 'mapId': mapId}]
};

Game_Temp.prototype.initialize = function() {
	master2015hp.isatSnp.b_48.call(this);
	this._lastCursor1 = '';
};

///►0001
ConfigManager.ms2015hp_keyboardSetLastKeyName = function(name) {
	this._ms2015_lastKBKeyName = name;
};

ConfigManager.ms2015hp_setLastKey = function(key) {
	this._ms2015_lastKBKey = key;
};

ConfigManager.ms2015hp_setData = function(mode) {
	if (mode == 'reset') {
		this._ms2015_lastKBList = null;
	} else {
		this._ms2015_lastKBList = this._ms2015_lastKBList || {};
		if (this._ms2015_lastKBKeyName && this._ms2015_lastKBKey) {
			if (this._ms2015_lastKBKey.search(/clear/ig) > -1) {
				if (this._ms2015_lastKBList) {
					var keyList = [];
					for (key in this._ms2015_lastKBList) {
						if (this._ms2015_lastKBList[key] == this._ms2015_lastKBKeyName) keyList.push(key);
					}
					keyList.forEach(function(k) {
						delete this._ms2015_lastKBList[k];
					},this);
				}
			} else {
				this._ms2015_lastKBList[this._ms2015_lastKBKey] = this._ms2015_lastKBKeyName;
			}
		}
	}
	this._ms2015_lastKBKeyName = null;
	this._ms2015_lastKBKey = null;
	this.save();
};

Window_KeyConfig.prototype.select = function(index) {
	master2015hp.isatSnp.b_20.call(this, index);
	if (this._list[index])
		ConfigManager.ms2015hp_keyboardSetLastKeyName(this.visualName(index));
};

Scene_KeyConfig.prototype.onActionOk = function() {
	var action = this._actionWindow.currentExt();
	master2015hp.isatSnp.b_21.call(this);
	ConfigManager.ms2015hp_setLastKey(action);
	ConfigManager.ms2015hp_setData();
};

Scene_KeyConfig.prototype.commandDefault = function() {
	master2015hp.isatSnp.b_23.call(this);
	ConfigManager.ms2015hp_setData('reset');
};

Scene_KeyConfig.prototype.commandWasd = function() {
	master2015hp.isatSnp.b_24.call(this);
	ConfigManager.ms2015hp_setData('reset');
};

//
ConfigManager.ms2015hp_gamepadSetLastKeyName = function(name) {
	this._ms2015_lastGPKeyName = name;
};

ConfigManager.ms2015hp_gamepadSetLastKey = function(key) {
	this._ms2015_lastGPKey = key;
};

ConfigManager.ms2015hp_gamepadSetData = function(mode) {
	if (mode == 'reset') {
		this._ms2015_lastGPList = null;
	} else {
		this._ms2015_lastGPList = this._ms2015_lastGPList || {};
		if (this._ms2015_lastGPKeyName && this._ms2015_lastGPKey)
			this._ms2015_lastGPList[this._ms2015_lastGPKey] = this._ms2015_lastGPKeyName;
	}
	this._ms2015_lastGPKeyName = null;
	this._ms2015_lastGPKey = null;
	this.save();
};

Scene_GamepadConfig.prototype.applyButtonConfig = function(buttonId) {
	this._configEnabled = false;
	var index = this._configWindow.index();
	var newConfig = this._configWindow.getButtonKey(index);
	var formerConfig = Input.gamepadMapper[buttonId];
	var formerButton = Input.getGamepadButton(newConfig);
	//
	ConfigManager.ms2015hp_gamepadSetLastKey(newConfig);
	ConfigManager.ms2015hp_gamepadSetLastKeyName(buttonId);
	ConfigManager.ms2015hp_gamepadSetData();
	//
	ConfigManager.gamepadInput[buttonId] = newConfig;
	ConfigManager.gamepadInput[formerButton] = formerConfig;
	ConfigManager.applyGamepadConfig();
	this._configTimer = 12;
};

Scene_GamepadConfig.prototype.commandReset = function() {
	master2015hp.isatSnp.b_22.call(this);
	ConfigManager.ms2015hp_gamepadSetData('reset');
};

//
ConfigManager.makeData = function() {
	var config = master2015hp.isatSnp.b_25.call(this);
	config._ms2015_lastGPList = this._ms2015_lastGPList;
	config._ms2015_lastKBList = this._ms2015_lastKBList;
	config.fontStyle = this.fontStyle;
	config.buttonstyle = this.setPlatformType();
	return config;
};

ConfigManager.applyData = function(config) {
	master2015hp.isatSnp.b_26.call(this, config);
	this._ms2015_lastGPList = config._ms2015_lastGPList;
	this._ms2015_lastKBList = config._ms2015_lastKBList;
	this.fontStyle = this.readFontStyle(config, 'fontStyle');
	this.buttonstyle = this.readPlatformType(config, 'buttonstyle');
};
///◄0001

master2015hp.isatSnp.getPlatformName = function() {
	let pid = master2015hp.isatSnp.getPlatform() || master2015hp.isatSnp.platformType;
	let selectedPlatform = 'pc';
	switch (pid) {
		case 1:
			selectedPlatform = 'ps'; break;
		case 2:
			selectedPlatform = 'xbox'; break;
		case 3:
			selectedPlatform = 'sw'; break;
	}
	if (master2015hp.isatSnp.platformType == 3) selectedPlatform = 'sw';
	return selectedPlatform;
};

master2015hp.isatSnp.cGetPadMap = function(key) {
	// var list = Object.keys(Input.gamepadMapper).filter(function(v) {
		// return Input.gamepadMapper[v] == key;
	// });
	// if (list.length <= 0) return [];
	let pid = master2015hp.isatSnp.getPlatform() || master2015hp.isatSnp.platformType;
	let selectedPlatform = null;
	switch (pid) {
		case 1:
			selectedPlatform = 'ps'; break;
		case 2:
			selectedPlatform = 'xbox'; break;
		case 3:
			selectedPlatform = 'sw'; break;
	}
	if (master2015hp.isatSnp.platformType == 3) selectedPlatform = 'sw';
	let isPs = selectedPlatform == 'ps';
	let isSw = selectedPlatform == 'sw';
	
	let button = Input.getGamepadButton(key);
	let res = '';
	switch(button) {
        case 0:
            res = (isPs ? '✖' : (isSw ? 'B' : 'A')) + '\\v[319]'; break;
        case 1:
            res = (isPs ? '●' : (isSw ? 'A' : 'B')) + '\\v[319]'; break;
        case 2:
            res = (isPs ? '■' : (isSw ? 'Y' : 'X')) + '\\v[319]'; break;
        case 3:
            res = (isPs ? '▲' : (isSw ? 'X' : 'Y')) + '\\v[319]'; break;
		case 4:
			res = (isPs ? 'L1':  (isSw ? 'L' : 'LB')) + '\\v[319]'; break;
		case 5:
			res = (isPs ? 'R1':  (isSw ? 'R' : 'RB')) + '\\v[319]'; break;
		case 6:
			res = (isPs ? 'L2':  (isSw ? 'ZL' : 'LT')) + '\\v[319]'; break;
		case 7:
			res = (isPs ? 'R2':  (isSw ? 'ZR' : 'RT')) + '\\v[319]'; break;
		case 8:
			res = (isPs ? 'SHARE': (isSw ? '-' : 'View')) + '\\v[319]'; break;
		case 9:
			res = (isPs ? 'OPTIONS': (isSw ? '+' : 'Menu')) + '\\v[319]'; break;
		case 10:
			res = 'L\\v[319]'; break;
		case 11:
			res = 'R\\v[319]'; break;
		case 12:
			res = 'dUp'; break;
		case 13:
			res = 'dDown'; break;
		case 14:
			res = 'dLeft'; break;
		case 15:
			res = 'dRight'; break;
	}
	
	let buttonNameList = [];
	if (master2015hp.isatSnp.padButtonsPs && selectedPlatform == 'ps') {
		buttonNameList = master2015hp.isatSnp.padButtonsPs;
	} else if (master2015hp.isatSnp.padButtonsXbox && selectedPlatform == 'xbox') {
		buttonNameList = master2015hp.isatSnp.padButtonsXbox;
	} else if (master2015hp.isatSnp.padButtonsSwitch && selectedPlatform == 'sw') {
		buttonNameList = master2015hp.isatSnp.padButtonsSwitch;
	}
	
	if (buttonNameList[button])
		res = buttonNameList[button];
	// if (master2015hp.isatSnp.padButtonsPs && master2015hp.isatSnp.padButtonsXbox) {
		// let buttonNameList = isPs ? master2015hp.isatSnp.padButtonsPs : (isSw ? master2015hp.isatSnp.padButtonsSwitch : master2015hp.isatSnp.padButtonsXbox);
		// if (buttonNameList[button])
			// res = buttonNameList[button];
	// }
	
	return [res];
};

master2015hp.isatSnp.cGetKeyMap = function(key) {
    var list = Object.keys(Input.keyMapper).filter(function(v) {
		return Input.keyMapper[v] == key;
	});//.map(function(v2) {return String.fromCharCode(Number(v2));});
	if (list.length <= 0) return [];
	for (var i = 0; i < list.length; i++) {
		switch(Number(list[i])) {
			case 8:
				list[i] = 'Backspace'; break;
			case 13:
				list[i] = 'Enter'; break;
			case 16:
				list[i] = 'Shift'; break;
			case 17:
				list[i] = 'Ctrl'; break;
			case 27:
				list[i] = 'Esc'; break;
			case 32:
				list[i] = 'Space'; break;
			case 33:
				list[i] = 'PageUp'; break;
			case 34:
				list[i] = 'PageDown'; break;
			case 35:
				list[i] = 'End'; break;
			case 36:
				list[i] = 'Home'; break;
			case 37:
				list[i] = '←'; break;
			case 38:
				list[i] = '↑'; break;
			case 39:
				list[i] = '→'; break;
			case 40:
				list[i] = '↓'; break;
			case 45:
				list[i] = 'Ins'; break;
			case 46:
				list[i] = 'Del'; break;
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

master2015hp.isatSnp.getKeyName = function(key) {
	var res = null;
	var list = [];
	if (master2015hp.isatSnp.getPlatform() > 0 || $gameVariables.value(master2015hp.isatSnp.lastInputDeviceVarId)) {
		list = master2015hp.isatSnp.cGetPadMap(key);
		if (list.length > 0) res = list[0];
		// if (ConfigManager._ms2015_lastGPList && ConfigManager._ms2015_lastGPList.hasOwnProperty(key)) res = ConfigManager._ms2015_lastGPList[key];		
	} else {
		list = master2015hp.isatSnp.cGetKeyMap(key);
		if (list.length > 0) {
			if (key == 'ok' && (list.contains('space') || list.contains('SPACE')))
				res = 'SPACE';
			else if (key == 'escape' && (list.contains('esc') || list.contains('ESC')))
				res = 'ESC';
			else if (key == 'escape' && (list.contains('x') || list.contains('X')))
				res = 'X';
			else
				res = list[0];
		}
		if (ConfigManager._ms2015_lastKBList && ConfigManager._ms2015_lastKBList.hasOwnProperty(key)) res = ConfigManager._ms2015_lastKBList[key];
	}
	return res;
};

Input.update = function() {
    master2015hp.isatSnp.b_0.call(this);
	if (!this._ms2015CheckGamePadPressed) {
		this._ms2015CheckGamePadPressed = 1;
		this.checkGamePadPressed();
	} else {
		if (++this._ms2015CheckGamePadPressed > 1) {
			this._ms2015CheckGamePadPressed = null;
		}
	}
};

Input.checkGamePadPressed = function() {
	if (!$gameVariables) return;
	if (master2015hp.isatSnp.gamepadAnyButtonPressed(true)) {
		$gameVariables.setValue(master2015hp.isatSnp.lastInputDeviceVarId, 1);
	} else if (master2015hp.isatSnp.inputAnyKeyPressed()) {
		$gameVariables.setValue(master2015hp.isatSnp.lastInputDeviceVarId, 0);
	}
};

//►hilight all allies target
// Window_Selectable.prototype.forceUpdateCursor = function() {
    // var rect = this.itemRect(0);
	// this.setCursorRect(rect.x, rect.y, this.contents.width, this.contents.height);
// };

//turn off select sprite
BattleManager.endAction = function() {
	master2015hp.isatSnp.b_18.call(this);
	//clear endActionQueue if it's self endAction
	if (this._subject && this._endActionQueue == this._subject) this._endActionQueue = null;
	if (this._subject && this._subject.isActor()) SceneManager._scene.highlightAllDisable();
};

Scene_Battle.prototype.curActorHighlight = function() {
	var curActor = BattleManager.actor();
	var exId = (curActor ? curActor.index() : 0);
	var curWindow = this._battleUpgWindList.filter(function(w) {if (w._actor.index() == exId) return true; return false});
	if (curWindow) {
		var w = curWindow[0];
		if (!w.active) {
			w.activate();
			if (w.index() < 0) w.select(0);
		}
	}
};

Scene_Battle.prototype.startActorCommandSelection = function() {
	master2015hp.isatSnp.b_17.call(this);
	//active currect actor window
	SceneManager._scene.highlightAllDisable();//sometime endAction ended with no subject/actor() at all
	this.curActorHighlight();
};

Scene_Battle.prototype.getScopeCurActor = function() {
	var curActor = BattleManager.actor();
	if (!curActor) return -1;
	var curAction = curActor._actions[0];
	if (!curAction) return -1;
	if (!curAction.item()) return -1;
	return curAction.item().scope;
};

Scene_Battle.prototype.getSkillCurActor = function() {
	var curActor = BattleManager.actor();
	if (!curActor) return null;
	var curAction = curActor._actions[0];
	if (!curAction) return null;
	if (!curAction.item()) return null;
	// if (!curAction.isSkill()) return null;
	return curAction.item();
};

Scene_Battle.prototype.selectActorSelection = function() {
    master2015hp.isatSnp.b_10.call(this);
	var scope = this.getScopeCurActor();
	if (scope == 8) {
		this._updateAllBUW = true;
	} else if (scope == 7 || scope == 9) {
		this._actorWindow.select(this._actorWindow.index());
	}
};

Scene_Battle.prototype.onActorOk = function() {
	if (this._actorWindow.index() < 0) {
		this.onActorCancel();
		return;
	}
	master2015hp.isatSnp.b_14.call(this);
	this.highlightAllDisable();
};

Scene_Battle.prototype.onActorCancel = function() {
	master2015hp.isatSnp.b_15.call(this);
	this.highlightAllDisable();
};

//===
Window_BattleActor.prototype.cursorRight = function(wrap) {
	$gameTemp._lastCursor1 = 'right';
	var scope = SceneManager._scene.getScopeCurActor();
    var index = this.index();
    var maxItems = this.maxItems();
    var maxCols = this.maxCols();
    if (maxCols >= 2 && (index < maxItems - 1 || (wrap && this.isHorizontal()))) {
		if (scope && scope == 9)
			this.select(this.findNextDeadAllyIndex());
		else
			this.select((index + 1) % maxItems);
    }
};

Window_BattleActor.prototype.cursorLeft = function(wrap) {
	$gameTemp._lastCursor1 = 'left';
	var scope = SceneManager._scene.getScopeCurActor();
    var index = this.index();
    var maxItems = this.maxItems();
    var maxCols = this.maxCols();
    if (maxCols >= 2 && (index > 0 || (wrap && this.isHorizontal()))) {
		if (scope && scope == 9)
			this.select(this.findPrevDeadAllyIndex());
		else
			this.select((index - 1 + maxItems) % maxItems);
    }
};

Window_BattleActor.prototype.findNextDeadAllyIndex = function() {
	var skill = SceneManager._scene.getSkillCurActor();
	var found = null;
	var res = this.index();
	if (!skill) return res;
	
	var id = res + 1;
	var maxItems = this.maxItems();
	for (var i = id; i < maxItems; i++) {
		if ($gameParty.members()[i].isDead()) {
			if (DataManager.isSkill(skill) && master2015hp.isatSnp.skillsTargetDeadNotKo.contains(skill.id)) {
				if ($gameParty.members()[i].hpRate() <= 0) continue;
			}
			let cond1 = DataManager.isItem(skill) && master2015hp.isatSnp.itemOnlyKoAlly.contains(skill.id);
			let cond2 = DataManager.isSkill(skill) && master2015hp.isatSnp.skillOnlyKoAlly.contains(skill.id);
			if (cond1 || cond2) {
				if ($gameParty.members()[i].hpRate() > 0) continue;
			}
			res = i;
			found = true;
			break;
		}
	}
	return (found ? res : null);
};

Window_BattleActor.prototype.findPrevDeadAllyIndex = function() {
	var skill = SceneManager._scene.getSkillCurActor();
	var found = null;
	var res = this.index();
	if (!skill) return res;
	
	var id = res - 1;
	for (var i = id; i >= 0; i--) {
		if ($gameParty.members()[i].isDead()) {
			if (DataManager.isSkill(skill) && master2015hp.isatSnp.skillsTargetDeadNotKo.contains(skill.id)) {
				if ($gameParty.members()[i].hpRate() <= 0) continue;
			}
			let cond1 = DataManager.isItem(skill) && master2015hp.isatSnp.itemOnlyKoAlly.contains(skill.id);
			let cond2 = DataManager.isSkill(skill) && master2015hp.isatSnp.skillOnlyKoAlly.contains(skill.id);
			if (cond1 || cond2) {
				if ($gameParty.members()[i].hpRate() > 0) continue;
			}
			res = i;
			found = true;
			break;
		}
	}
	return (found ? res : null);
};

Window_BattleActor.prototype.nextAliveAlly = function(exceptList, index) {
	//exceptList - array of actors who won't be considered
	var cid = (index >= $gameParty.battleMembers().length - 1 ? -1 : index);
	var g = $gameParty.battleMembers().slice(cid + 1);
	var res = null;
	for (var i = 0; i < g.length; i++) {
		if (!exceptList.contains(g[i]) && g[i].isAlive()) {
			res = g[i];
			break;
		}
	}
	return res;
};

Window_BattleActor.prototype.prevAliveAlly = function(exceptList, index) {
	//exceptList - array of actors who won't be considered
	var cid = (index == 0 ? $gameParty.battleMembers().length : index);
	var g = $gameParty.battleMembers().slice(0, cid);
	var res = null;
	for (var i = g.length - 1; i >= 0; i--) {
		if (!exceptList.contains(g[i]) && g[i].isAlive()) {
			res = g[i];
			break;
		}
	}
	return res;
};

Window_BattleActor.prototype.select = function(index) {
	// console.log(index);
	var list = [];
	var scope = SceneManager._scene.getScopeCurActor();
	var skill = SceneManager._scene.getSkillCurActor();
	var cannotTargetUser = false;
	
	//skill cannot target user efx
	if (scope == 7 && skill) {
		let user = BattleManager.actor();
		let cond1 = DataManager.isSkill(skill) && master2015hp.isatSnp.skillsCannotTargetUser.contains(skill.id);
		let cond2 = user.index() == index;
		let cond3 = $gameParty.members()[index] ? $gameParty.members()[index].isDead() : false;
		if ((cond1 && cond2) || cond3) {
			if ($gameTemp._lastCursor1 == 'left') {
				if (!cond1 && cond3)
					var newTarget = this.prevAliveAlly([], index);
				else
					var newTarget = this.prevAliveAlly([user], index);
			} else {
				if (!cond1 && cond3)
					var newTarget = this.nextAliveAlly([], index);
				else
					var newTarget = this.nextAliveAlly([user], index);
			}
			if (!newTarget) {
				if ($gameTemp._lastCursor1 == 'left') {
					if (!cond1 && cond3)
						var newTarget = this.nextAliveAlly([], index);
					else
						var newTarget = this.nextAliveAlly([user], index);
				} else {
					if (!cond1 && cond3)
						var newTarget = this.prevAliveAlly([], index);
					else
						var newTarget = this.prevAliveAlly([user], index);
				}
			}
			
			if (!newTarget) {
				//there is none target available
				// index = -1;
			} else {
				if (newTarget && ((cond1 && cond2) || cond3)) {
					index = newTarget.index();
					if (cond1 && cond2) cannotTargetUser = true;
				}
			}
		}
	}
	
	//target dead no KO fx
	if (scope == 9 && skill) {
		let user = BattleManager.actor();
		let cond1 = DataManager.isSkill(skill) && master2015hp.isatSnp.skillsTargetDeadNotKo.contains(skill.id);
		let cond2 = $gameParty.members()[index] ? $gameParty.members()[index].isDead() : false;
		let cond3 = $gameParty.members()[index] ? $gameParty.members()[index].hpRate() : 1;
		let cond4 = DataManager.isItem(skill) && master2015hp.isatSnp.itemOnlyKoAlly.contains(skill.id);
		let cond5 = DataManager.isSkill(skill) && master2015hp.isatSnp.skillOnlyKoAlly.contains(skill.id);
		// console.log(cond1);
		// console.log(cond2);
		// console.log(cond3);
		// console.log(cond4);
		
		if ((cond1 && cond2 && !cond3) || ((cond4 || cond5) && cond2 && cond3)) {
			// console.log($gameTemp._lastCursor1);
			if ($gameTemp._lastCursor1 == 'left')
				var newTarget = this.findPrevDeadAllyIndex([user], index);
			else
				var newTarget = this.findNextDeadAllyIndex([user], index);
			
			if (newTarget == null) {
				if ($gameTemp._lastCursor1 == 'left')
					var newTarget = this.findNextDeadAllyIndex([user], index);
				else
					var newTarget = this.findPrevDeadAllyIndex([user], index);
			}
			
			// console.log(newTarget);
			// console.log(this.index());
			if (newTarget == null) {
				//there is none target available
				// index = -1;
			} else {
				index = newTarget;
			}
		}
		// console.log(index);
		// console.log(this.index());
	}
	if (index == null)
		index = this.index();//remain the same if
	
	master2015hp.isatSnp.b_19.call(this, index);
    if (BattleManager._actorSelectOn) {
		var actor = this.actor();
		if (actor) list.push(actor);
		if (scope != 7 && scope != 9) {
			if (BattleManager.actor() != actor) list.push(BattleManager.actor());
		}
		
		if (cannotTargetUser) {
			let user = BattleManager.actor();
			if (list.contains(user)) {
				list.splice(list.indexOf(user), 1);
				// if (list.length < 1)
					// list.push($gameParty.members()[index]);
			}
		}
		
		SceneManager._scene.highlightAllDisable();
		SceneManager._scene.highlightTargetedActor(list);
		SceneManager._scene.resetAllMogCursor();
	}
};

Scene_Battle.prototype.highlightTargetedActor = function(list) {
	list.forEach(function(a) {
		this._battleUpgWindList.forEach(function(w) {
			if (w._actor == a) {
				w.select(0);
			}
		});
	},this);
};

Scene_Battle.prototype.highlightAllDisable = function() {
	var scope = this.getScopeCurActor();
	
	this._updateAllBUW = null;
	this._1timeA = null;
	var curActor = BattleManager.actor();
	var exId = (curActor ? curActor.index() : 0);
	// var curWindow = this._battleUpgWindList.filter(function(w) {if (w._actor.index() == exId) return true; return false});
	this._battleUpgWindList.forEach(function(w) {
		if (scope != 7 && scope != 9) {
			if (curActor) {
				if (w._actor.index() == exId)
					return;
			}
		}
		w.deselect();
		w.deactivate();
	});
};

Scene_Battle.prototype.resetAllMogCursor = function() {
	this._battleUpgWindList.forEach(function(sw) {
		var spr = sw._spriteSelMenu;
		if (spr && spr.visible) {
			spr._border._ani = [0,0,0];
		}
	});
};

Scene_Battle.prototype.updateAllBattleUpgradeWindowsCursor = function() {
	if (this._updateAllBUW) {
		var len = this._battleUpgWindList.length;
		for (var i = 0; i < len; i++) {
			var w = this._battleUpgWindList[i];
			if (w._actor.isAlive() && w.index() < 0) {
				w.select(0);
			}
		}
		
		if (!this._1timeA) {
			this._1timeA = true;
			this.resetAllMogCursor();
		}
	}
};

Scene_Battle.prototype.update = function() {
	master2015hp.isatSnp.b_12.call(this);
	this.updateAllBattleUpgradeWindowsCursor();
};

SpriteSelectionMenu.prototype.updateBorder = function() {
	this.updateSlideAnimation();
    for (var i = 0; i < this._border.length; i++) {
		 if (i === 0) {
			 nx = this._border[i]._org[0] - this._border._ani[0];
			 ny = this._border[i]._org[1] - this._border._ani[0];
		 };
		 if (i === 1) {
			 nx = this._border[i]._org[0] - this._border._ani[0];
			 ny = this._border[i]._org[1] + this._border._ani[0];
		 };
		 if (i === 2) {
			 nx = this._border[i]._org[0] + this._border._ani[0];
			 ny = this._border[i]._org[1] - this._border._ani[0];
		 };
		 if (i === 3) {
			 nx = this._border[i]._org[0] + this._border._ani[0];
			 ny = this._border[i]._org[1] + this._border._ani[0];
		 };
		 // if (!this._window.active) {
			 // nx = this._border[i]._org[0];
			 // ny = this._border[i]._org[1];
		 // };
		 this._border[i].x = nx;
		 this._border[i].y = ny;
	};

};

SpriteSelectionMenu.prototype.rc = function() {
	var def = master2015hp.isatSnp.b_13.call(this);
	if (this.parent instanceof Window_BattleStatusUpgrade) {
		if (SceneManager._scene._updateAllBUW) {
			def = {'x':0, 'y':0, 'width':140, 'height':164, 'type':1};
		}
	}
   return def;
};

/*this must be done within SRD_BattleStatusCustomizer plugin
Window_BattleStatusUpgrade.prototype.update = function() {
	Window_BattleStatus.prototype.update.call(this);
	this.updateRedraw();
	this.updateOpenness();
	this.updatePosition();
	//this.updateMotion();//master2015hp
	this.updateMovement();
	if(_.activeUpdating) this.updateRefreshes();
};
*/
//◄hilight all allies target

//►0001
Window_SkillStatus.prototype.refresh = function() {
    this.contents.clear();
    if (this._actor) {
        this.drawText(this._actor.name(), 0, 0, this.width, 'center');
    }
};
Scene_Base.prototype.createCommonEventMenuHelpWindow = function() {
    this._commonEventMenuHelpWindow = new Window_Help2(2);
    this._commonEventMenuHelpWindow.setText('');
    this._commonEventMenuHelpWindow.openness = 0;
    this.addChild(this._commonEventMenuHelpWindow);
};
//-----------------------------------------------------------------------------
// Window_Help2

function Window_Help2() {
    this.initialize.apply(this, arguments);
}

Window_Help2.prototype = Object.create(Window_Help.prototype);
Window_Help2.prototype.constructor = Window_Help2;

Window_Help2.prototype.initialize = function(numLines) {
    Window_Help.prototype.initialize.call(this, numLines);
};

Window_Help2.prototype.textWidthEx = function(text) {
    return this.drawTextEx(text, 0, this.contents.height);
};

Window_Help2.prototype.refresh = function() {
	var tw = this.textWidthEx(this._text);
	var pad = this.textPadding();
	this.contents.clear();
	var realW = this.width - pad*2;
	var realX = realW/2 - tw/2;
    this.drawTextEx(this._text, realX, 0);
};
//◄0001

//►extra window for item menu
Scene_Item.prototype.create = function() {
    master2015hp.isatSnp.b_9.call(this);
	this.createTopWindow();
};
Scene_Item.prototype.createTopWindow = function() {
	this._titleWindow = new Window_Help2(1);
    this._titleWindow.setText('POCKET');
    this.addWindow(this._titleWindow);
};
//◄extra window for item menu

///msgSkip
Window_Message.prototype.updateInput = function() {
	var cond = false;
	if (Imported.YEP_MessageCore) cond = this.isFastForward();
    if (this.pause && cond) {
      this.pause = false;
      this.terminateMessage();
    }
	return master2015hp.isatSnp.b_1.call(this);
};

///animation over portrait patch
Scene_Battle.prototype.createStatusWindow = function() {
	this._battleUpgWindList = [];
	master2015hp.isatSnp.b_11.call(this);
	//collectSatus
	var list = [];
	this._windowLayer.children.forEach(function(w) {
		if (w instanceof Window_BattleStatusUpgrade)
			list.push(w);
	});
	this._battleUpgWindList = list.splice(0);
};

Sprite_Base.prototype.startAnimation = function(animation, mirror, delay) {
	master2015hp.isatSnp.b_2.call(this, animation, mirror, delay);
	SceneManager._scene.aniOnTop();
};

Spriteset_Battle.prototype.battleFieldDepthCompare = function(a, b) {
	// var cond1 = false;
	// var cond2 = false;
	// var cond3 = false;
	// var cond4 = false;
	// cond1 = a instanceof Sprite && a._horrorFilters;
	// if (cond1) cond2 = Object.keys(a._horrorFilters).length > 0;
	// cond3 = b instanceof Sprite && b._horrorFilters;
	// if (cond3) cond4 = Object.keys(b._horrorFilters).length > 0;
	// if (cond1 && cond2 && b instanceof Window_BattleStatusUpgrade)
		// return 1;
	// else if (a instanceof Window_BattleStatusUpgrade && cond3 && cond4)
		// return -1;
		
	if (a instanceof Window_BattleStatusUpgrade) {
		return -1;
	} else if (b instanceof Window_BattleStatusUpgrade) {
		return 1;
	}
	master2015hp.isatSnp.b_16.call(this, a, b);
};

Scene_Battle.prototype.aniOnTop = function() {
    //move all extra actor window to bottom of battle field
	var list = [];
	var i = 0;
	for (;;) {
		if (i >= this._windowLayer.children.length) break;
		if (this._windowLayer.children[i] instanceof Window_BattleStatusUpgrade) {
			list = list.concat(this._windowLayer.children.splice(i, 1));
			continue;
		}
		i++;
	}
	
	list.forEach(function(w) {
		if (w._actor) {
			var spr = w._actor.battler();
			var xx = w.x + w.width/2;
			var yy = w.y + w.height/2;
			spr.setHome(xx, yy);
		}
		//
		this._spriteset._battleField.addChild(w);
	},this);
};

//horrorFilter above patch
// Spriteset_Battle.prototype.initialize = function() {
    // master2015hp.isatSnp.b_27.call(this);
    // this._horrorFiltersSource = null;
// };

// Scene_Battle.prototype.createSpriteset = function() {
	// master2015hp.isatSnp.b_28.call(this);
	
	// this._ms2015hpHorrorSprite = new Sprite();
	// this._ms2015hpHorrorSprite.setFrame(0, 0, Graphics.width, Graphics.height);
	// this._ms2015hpHorrorSprite._tone = [0, 0, 0, 0];
	// this._ms2015hpHorrorSprite.opaque = true;
	// this._ms2015hpHorrorSprite._horrorFiltersSource = $gameSystem;
	// this.addChild(this._ms2015hpHorrorSprite);
// };

//mog cursor patch
Scene_Battle.prototype.reMogCursorBorder = function() {
	this._windowLayer.children.forEach(function(w) {
		if (w instanceof Window_BattleStatusUpgrade) {
			//
			var id = -1;
			w.children.some(function(b, index) {
				if (b instanceof SpriteSelectionMenu) {
					id = index;
					return true;
				}
			});
			if (id > -1) {
				w.addChild(w.children[id]);
			}
		}
	});
};

Scene_Battle.prototype.start = function() {
    master2015hp.isatSnp.b_3.call(this);
	this.reMogCursorBorder();
};

///L/R Switch
Game_Temp.prototype.reserveCommonEvent = function(commonEventId) {
    master2015hp.isatSnp.b_6.call(this, commonEventId);
	if (commonEventId == 142) {
		$gameTemp._isCmEvMenu = true;
	}
};

Scene_Base.prototype.closeCommonEventMenuWindows = function() {
    master2015hp.isatSnp.b_7.call(this);
	$gameTemp._isCmEvMenu = null;
	if (this._lrSpriteLeft) this._lrSpriteLeft.visible = false;
	if (this._lrSpriteRight) this._lrSpriteRight.visible = false;
};

Scene_Base.prototype.start = function() {
	master2015hp.isatSnp.b_4.call(this);
	this.createLRSprite();
};

Scene_Base.prototype.createLRSprite = function() {
	if (this instanceof Scene_KeyConfig) return;
	if (this instanceof Scene_GamepadConfig) return;
	if (this instanceof Scene_Menu) return;
	if (this instanceof Scene_Battle) return;
	if (this instanceof Scene_Title) return;
	if (this instanceof Scene_GameEnd) return;
	if (this instanceof Scene_Options) return;
	if (this instanceof Scene_Save) return;
	if (this instanceof Scene_Load) return;
	if (this instanceof Scene_Map) {
		if ($gameTemp && $gameTemp._isCmEvMenu) {}
		else {
			return;
		}
	}
	
	if ($gameParty && $gameParty.members().length > 1) {
		var ww = master2015hp.isatSnp.lrImageSize;
		var bmR = master2015hp.isatSnp.getLRBitmap('right');
		var bmL = master2015hp.isatSnp.getLRBitmap('left');
		this._lrSpriteLeft = new Sprite_helpLR(bmL, ww/2 + master2015hp.isatSnp.lrOffX, master2015hp.isatSnp.lrOffY);
		this._lrSpriteRight = new Sprite_helpLR(bmR, Graphics.boxWidth - ww/2 - master2015hp.isatSnp.lrOffX, master2015hp.isatSnp.lrOffY);
		this.addChild(this._lrSpriteLeft);
		this.addChild(this._lrSpriteRight);
	}
};

master2015hp.isatSnp.getLRBitmap = function(buttonName) {
	//buttonName: left/right
	let res = '';
	let useController = $gameVariables.value(master2015hp.isatSnp.lastInputDeviceVarId);
	if (master2015hp.isatSnp.getPlatform() == 0) {
		//PC
		if (!useController) {
			if (buttonName == 'left') res = master2015hp.isatSnp.lrImageL;
			else if (buttonName == 'right') res = master2015hp.isatSnp.lrImageR;
		} else {
			let controllerType = master2015hp.isatSnp.getGamepadType();
			//use PS controller?
			if (controllerType && controllerType == 'PS') {
				if (buttonName == 'left') res = master2015hp.isatSnp.lrImageLPS;
				else if (buttonName == 'right') res = master2015hp.isatSnp.lrImageRPS;
			} else {
				if (buttonName == 'left') res = master2015hp.isatSnp.lrImageLPad;
				else if (buttonName == 'right') res = master2015hp.isatSnp.lrImageRPad;
			}
		}
	} else if (master2015hp.isatSnp.getPlatform() == 1) {
		//PS
		if (buttonName == 'left') res = master2015hp.isatSnp.lrImageLPS;
		else if (buttonName == 'right') res = master2015hp.isatSnp.lrImageRPS;
	} else {
		//SWITCH
		if (buttonName == 'left') res = master2015hp.isatSnp.lrImageLPad;
		else if (buttonName == 'right') res = master2015hp.isatSnp.lrImageRPad;
	}
	return res;
};

master2015hp.isatSnp.getCorrectBitmap = function(baseName) {
	let selectedPlatform = master2015hp.isatSnp.getPlatformName();
	let useController = $gameVariables.value(master2015hp.isatSnp.lastInputDeviceVarId);
	let sfixPS = '_ps';
	let sfixSW = '_sw';
	let sixBOX = '_xb';
	let sfixOTHER = '_controller';
	let res = baseName;
	
	if (selectedPlatform == 'xbox') {
		res += sixBOX;
	} else if (selectedPlatform == 'ps') {
		res += sfixPS;
	} else if (selectedPlatform == 'sw') {
		res += sfixSW;
	} else if (useController) {
		res += sfixOTHER;
	}
	return res;
};

//Sprite Hint ======================================================================
function Sprite_helpLR() {
	this.initialize.apply(this, arguments);
}

Sprite_helpLR.prototype = Object.create(Sprite_Base.prototype);
Sprite_helpLR.prototype.constructor = Sprite_helpLR;

Sprite_helpLR.prototype.initialize = function(bitmap, x, y) {
	Sprite_Base.prototype.initialize.call(this);
	this._pattern = 0;
	this._count = 0;
	this._frames = 1;
	this.loadBitmap(bitmap);
	this.x = x;
	this.y = y;
	this.anchor.x = 0.5;
	this.anchor.y = 0;
};

Sprite_helpLR.prototype.loadBitmap = function(bitmap) {
	this.bitmap = ImageManager.loadSystem(bitmap);
	this.bitmap.addLoadListener(this.getFrames.bind(this));
};

Sprite_helpLR.prototype.getFrames = function() {
	this._frames = this.bitmap.width / master2015hp.isatSnp.lrImageSize;
	this.updateFrame();
};

Sprite_helpLR.prototype.update = function() {
	if (this._frames <= 1) return;
	this._count++;
	if (this._count < master2015hp.isatSnp.lrImageSpeed) {
		return;
	} else {
		this._count = 0;
		this._pattern += 1;
		if (this._pattern >= this._frames) this._pattern = 0;
		this.updateFrame();
	}
};

Sprite_helpLR.prototype.updateFrame = function() {
	var sx = this._pattern * master2015hp.isatSnp.lrImageSize;
	var sy = 0;
	this.setFrame(sx, sy, master2015hp.isatSnp.lrImageSize, this.bitmap.height);
};

//
Scene_Item.prototype.update = function() {
	master2015hp.isatSnp.b_8.call(this);
	if (this._categoryWindow.active) {
		if (Input.isTriggered('pagedown')) {
			this.nextCatg();
			this._categoryWindow.deactivate();
		} else if (Input.isTriggered('pageup')) {
			this.previousCatg();
			this._categoryWindow.deactivate();
		}
	}
};

Scene_Item.prototype.createItemWindow = function() {
    master2015hp.isatSnp.b_5.call(this);
	this._itemWindow.setHandler('pagedown', this.nextCatg.bind(this));
    this._itemWindow.setHandler('pageup',   this.previousCatg.bind(this));
};

Scene_Item.prototype.nextCatg = function() {
    var cid = this._categoryWindow.index();
	cid++;
	if (cid >= this._categoryWindow.maxItems()) cid = 0;
	this._categoryWindow.select(cid);
	this.onCategoryOk();
};

Scene_Item.prototype.previousCatg = function() {
    var cid = this._categoryWindow.index();
	cid--;
	if (cid < 0) cid = this._categoryWindow.maxItems() - 1;
	this._categoryWindow.select(cid);
	this.onCategoryOk();
};

Window_ItemList.prototype.refresh = function() {
    master2015hp.isatSnp.b_33.call(this);
    this.updateHelp();
};

///►Idle Video
if (master2015hp.isatSnp.autoPlayMovie) {
if (master2015hp.isatSnp.idleVideosList.length > 0) {
	
Scene_Title.prototype.initialize = function() {
	master2015hp.isatSnp.b_30.call(this);
	this._idleVideoMode = 0;
	this._idleCount = 0;
	this._idleForceEndVideo = false;
};

Scene_Title.prototype.update = function() {
	master2015hp.isatSnp.b_29.call(this);
	switch (this._idleVideoMode) {
		case 0:
			this.updateIdleVideo();
			break;
		case 1:
			this.setupIdleVideo();
			break;
		case 2:
			this.playingIdleVideo();
			break;
		case 3:
			this.setupIdleVideo(1);
			break;
	}
};

Scene_Title.prototype.updateIdleVideo = function() {
	var cond = !this.isBusy() && !master2015hp.isatSnp.inputAnyKeyPressed();
	if (cond) {
		if (++this._idleCount > master2015hp.isatSnp.idleTime) {
			this._idleVideoMode = 1;
			this._idleCount = 0;
		}
	} else {
		this._idleCount = 0;
	}
};

Scene_Title.prototype.setupIdleVideo = function(mode) {
	this._idleForceEndVideo = false;
	var movieName = master2015hp.isatSnp.idleVideosList[Math.randomInt(master2015hp.isatSnp.idleVideosList.length)];
	Graphics.playVideo('movies/' + movieName + this.getVidExt());
	if (!mode) {
		this._commandWindow.deactivate();
		this._commandWindow.close();
		this.fadeOutAll();
	}
	this._idleVideoMode = 2;
};

Scene_Title.prototype.playingIdleVideo = function() {
	var cond1 = Graphics._video.ended;
	var cond2 = (TouchInput.isTriggered() || TouchInput.isCancelled() ||
		Input.isTriggered('up') || Input.isTriggered('down') || Input.isTriggered('left') || Input.isTriggered('right') || Input.isTriggered('ok') || Input.isTriggered('cancel'));
	if (cond1) {
		if (this._idleForceEndVideo) {
			this._idleVideoMode = 0;
			this.start();
			this._commandWindow.activate();
		} else
			this._idleVideoMode = 3;
		return;
	}
	if (cond2) {
		this._idleForceEndVideo = true;
		Graphics._video.currentTime = Graphics._video.duration || 0;
		Graphics._onVideoEnd();
		return;
	}
};

Scene_Title.prototype.getVidExt = function() {
    if (Graphics.canPlayVideoType('video/webm') && !Utils.isMobileDevice()) {
        return '.webm';
    } else {
        return '.mp4';
    }
};

Window_TitleCommand.prototype.makeCommandList = function() {
	master2015hp.isatSnp.b_31.call(this);
	if (master2015hp.isatSnp.idleVidTitleCommand) {
		this.addCommand(master2015hp.isatSnp.idleVidTitleCommand, 'playIntro');
		this._list.sort(function(a,b) {
			if (a['name'] == 'Quit') return 1;
			if (b['name'] == 'Quit') return -1;
			return 0;
		});
	}
};

Scene_Title.prototype.createCommandWindow = function() {
	master2015hp.isatSnp.b_32.call(this);
	if (master2015hp.isatSnp.idleVidTitleCommand) {
		this._commandWindow.setHandler('playIntro',  this.commandPlayIntro.bind(this));
	}
};

Scene_Title.prototype.commandPlayIntro = function() {
	this.setupIdleVideo();
};

}}
///◄Idle Video

//hide certain actor from using item window
Window_MenuActor.prototype.initialize = function() {
	var excludeActorIdList = master2015hp.isatSnp.hideFromApplyingItemActorList;
	this._data = $gameParty.members().filter(function(a) {
		if (!a) return false;
		if (excludeActorIdList.contains(a._actorId)) return false;
		return true;
	});
    master2015hp.isatSnp.b_34.call(this);
};

Window_MenuActor.prototype.maxItems = function() {
    return this._data.length;
};

Window_MenuActor.prototype.loadImages = function() {
    this._data.forEach(function(actor) {
        ImageManager.reserveFace(actor.faceName());
    }, this);
};

Window_MenuActor.prototype.drawItemImage = function(index) {
    var actor = this._data[index];
    var rect = this.itemRect(index);
    this.changePaintOpacity(actor.isBattleMember());
    this.drawActorFace(actor, rect.x + 1, rect.y + 1, Window_Base._faceWidth, Window_Base._faceHeight);
    this.changePaintOpacity(false);
};

Window_MenuActor.prototype.drawItemStatus = function(index) {
    var actor = this._data[index];
    var rect = this.itemRect(index);
    var x = rect.x;// + 162;
    var y = rect.y + rect.height / 2 - this.lineHeight() * 1.5;
    var width = rect.width - x - this.textPadding();
    this.drawActorSimpleStatus(actor, x, y, width);
};

Window_MenuActor.prototype.processOk = function() {
    if (!this.cursorAll()) {
        $gameParty.setTargetActor(this._data[this.index()]);
    }
    this.callOkHandler();
};

Window_MenuActor.prototype.isCurrentItemEnabled = function() {
    if (this._formationMode) {
        var actor = this._data[this.index()];
        return actor && actor.isFormationChangeOk();
    } else {
        return true;
    }
};

//Re-highlight PROFILE menu
Scene_Menu.prototype.start = function() {
    master2015hp.isatSnp.b_35.call(this);
	if ($gameSwitches.value(master2015hp.isatSnp.highlightProfile)) {
		$gameSwitches.setValue(master2015hp.isatSnp.highlightProfile, false);
		this._commandWindow.select(3);
	}
};

//disable moving parallax
Game_Map.prototype.updateParallax = function() {
	if ($gameSwitches.value(master2015hp.isatSnp.stopParallax)) return;
    master2015hp.isatSnp.b_36.call(this);
};

//►Always wrap message text
Game_Message.prototype.addText = function(text) {
    if ($gameSystem.wordWrap())
		$gameSystem._doWrapMsg = true;
    this.add(text);
};

Window_Message.prototype.setWordWrap = function(text) {
	this._wordWrap = false;
    if ($gameSystem._doWrapMsg) {
		this._wordWrap = true;
		$gameSystem._doWrapMsg = false;
	}
    if (this._wordWrap) {
      var replace = Yanfly.Param.MSGWrapSpace ? ' ' : '';
      text = text.replace(/[\n\r]+/g, replace);
    }
    if (this._wordWrap) {
      text = text.replace(/<(?:BR|line break)>/gi, '\n');
    } else {
      text = text.replace(/<(?:BR|line break)>/gi, '');
    }
    return text;
};

//wrap choice too
Window_ChoiceList.prototype.initialize = function(messageWindow) {
    master2015hp.isatSnp.b_46.call(this, messageWindow);
	this.initChoicesRec();
};

Window_ChoiceList.prototype.initChoicesRec = function() {
	this._choicesRec = {};
	this._choicesRec._doneList = [];
};

Window_ChoiceList.prototype.drawItem = function(index) {
	$gameSystem._doWrapChoice = true;
	this._choiceSelected = $gameSystem.isSelectedChoice(this.commandName(index));//♦
    master2015hp.isatSnp.b_38.call(this, index);
};

Window_ChoiceList.prototype.setWordWrap = function(text) {
	this._wordWrap = false;
    if ($gameSystem._doWrapChoice) {
		this._wordWrap = true;
		$gameSystem._doWrapChoice = false;
	}
    if (this._wordWrap) {
      var replace = Yanfly.Param.MSGWrapSpace ? ' ' : '';
      text = text.replace(/[\n\r]+/g, replace);
    }
    if (this._wordWrap) {
      text = text.replace(/<(?:BR|line break)>/gi, '\n');
    } else {
      text = text.replace(/<(?:BR|line break)>/gi, '');
    }
    return text;
};

Window_ChoiceList.prototype.processNewLine = function(textState) {
	if (textState.text) {
		let txt = textState.text;
		//record the origin text also
		let txt2 = '';
		$gameMessage.choices().some(function(str) {
			if (master2015hp.isatSnp.stringContainsString(txt, str)) {
				txt2 = str;
				return true;
			}
			return false;
		});
		txt = txt.replace(/lsoff..lson /ig,'');
		txt = txt.replace(/[\u001b\u009b]([^\d\w[ ]]?|[\d\w]+)/g,'');
		txt = txt.trim();
		
		if (!this._choicesRec._doneList.contains(txt)) {
			if (this._choicesRec[txt]) {
				this._choicesRec[txt]++;
				this._choicesRec[txt2] = this._choicesRec[txt];
			}
			else {
				this._choicesRec[txt] = 2;
				this._choicesRec[txt2] = this._choicesRec[txt];
			}
		}
	}
    Window_Base.prototype.processNewLine.call(this, textState);
};

Window_ChoiceList.prototype.setTopRow = function(row) {
    var scrollY = row.clamp(0, this.maxTopRow()) * this.itemHeight();
	// console.log(scrollY);
    if (this._scrollY !== scrollY) {
        this._scrollY = scrollY;
		//►
		Object.keys(this._choicesRec).forEach(function(key) {
			if (key != '_doneList' && !this._choicesRec._doneList.contains(key))
				this._choicesRec._doneList.push(key.trim());
		},this);
		
        this.refresh();
        this.updateCursor();
		
		if (!this.isCurrentChoiceFullyShown())
			this.setTopRow(row + 1);
    }
};

Window_ChoiceList.prototype.getCurrentRow = function() {
	var id = this.index();
	var lineCount = 0;
	for (var i = 0; i < id; i++) {
		lineCount += this.calcLines(i);
	}
	return lineCount++;
};

Window_ChoiceList.prototype.isCurrentChoiceFullyShown = function() {
	var topRow = this.topRow();
	var maxPageRow = this.maxPageRows();
	var curRow = this.getCurrentRow();
	var maxCurRow = this.calcLines(this.index());
	if (curRow + maxCurRow <= topRow + maxPageRow)
		return true;
	return false;
};

Game_Message.prototype.add = function(text) {
    master2015hp.isatSnp.b_47.call(this, text);
	if (SceneManager._scene._messageWindow)
		SceneManager._scene._messageWindow._choiceWindow.initChoicesRec();//reset
};

Window_ChoiceList.prototype.calcLines = function (index) {
	var choices = $gameMessage.choices();
	if (this._choicesRec) {
		var str = '';
		Object.keys(this._choicesRec).some(function(key) {
			if (choices[index] && choices[index].contains(key)) {
				str = key;
				return true;
			}
			return false;
		},this);
		if (str) return this._choicesRec[str];
	}
	if(choices[index]) {
		return choices[index].split(/<br>|\\n/).length;
	} else {
		return 0;
	}
};

Window_ChoiceList.prototype.getSelfX = function() {
	var res = 0;
	try {
		res = this.x;
	} catch (error) {
	}
	return res;
};

Window_ChoiceList.prototype.maxChoiceWidth = function() {
	var x = this.getSelfX();
	var maxWidth = this._messageWindow.width - x - this.textPadding() * 6 || 800;
	var initWidth = maxWidth;
	var choices = $gameMessage.choices();
	for (var i = 0; i < choices.length; i++) {
		var lines = choices[i].split(/\\n/);
		for(var j = 0; j < lines.length; j++) {
			var choiceWidth = this.textWidthEx(lines[j]) + this.textPadding() * 2;
			if (initWidth < choiceWidth) {
				initWidth = choiceWidth;
			}
		}
	}
	return Math.min(maxWidth, initWidth);
};

// Window_ChoiceList.prototype.itemRect = function(index) {
	// var rect = new Rectangle();
	// var maxCols = this.maxCols();
	// rect.width = this.itemWidth();
	// if($gameMessage.choices().length != 0){
		// rect.height = this.itemHeight() * this.calcLines(index);
	// } else {
		// rect.height = this.itemHeight();
	// }
	// rect.x = index % maxCols * (rect.width + this.spacing()) - this._scrollX;
	// rect.y = this.calcRectY(index) - this._scrollY;
	// console.log(this._scrollY);
	// return rect;
// };

// Window_ChoiceList.prototype.maxRows = function() {
	// return this.calcTotalLines();
// };

// Window_ChoiceList.prototype.drawAllItems = function() {
	// var topIndex = this.topIndex();
	// var index = topIndex;
	// var totalLines = this.lineStart(index) - this.topRow();
	// console.log(totalLines);
	// console.log(this.maxPageItems());
	
	// while(totalLines < this.maxPageItems()){
		// console.log(index);
		// var lines = this.calcLines(index);
		// if(lines > 0) {
			// console.log(index);
			// console.log(this.maxItems());
			// if (index < this.maxItems()) {
				// this.drawItem(index);
			// }
			// totalLines += lines;
			// index++;
		// } else {
			// break;
		// }
	// }
// };

//break Japanese
Window_Message.prototype.newPage = function(textState) {
	this.clearingTmpBustValue();
	$gameTemp._msgFirstLine = true;
	//looking for bustclear code
	var list = $gameMessage.allText().match(/(\\m\[[\w\d]+\])/ig);
	if (list) {
		list.some(function(a) {
			var realText = this.convertMacroText(a);
			if (realText.search(/bustclear/ig) > -1) {
				$gameTemp._clearingBust = true;
				return true;
			}
			return false;
		},this);
	}
	master2015hp.isatSnp.b_59.call(this, textState);
	// if (ConfigManager.getLanguage().toLowerCase() == "japanese") {
		// textState.x += master2015hp.isatSnp.exMsgJpn1;
		// textState.left += master2015hp.isatSnp.exMsgJpn2;
	// } else {
		// textState.x += master2015hp.isatSnp.exMsg0Jpn1;
		// textState.left += master2015hp.isatSnp.exMsg0Jpn2;
	// }
};

//should include error catch
Sprite_VisualNovelBust.prototype.clear = function(t) {
	master2015hp.isatSnp.b_58.call(this, t);
	$gameTemp._clearingBust = true;
};

Sprite_VisualNovelBust.prototype.fullClear = function() {
    if (this._bustName === "") {
        $gameTemp._clearingBust = true;
    }
	master2015hp.isatSnp.b_61.call(this);
};

Sprite_VisualNovelBust.prototype.opacityTo = function(t, e) {
	master2015hp.isatSnp.b_60.call(this, t, e);
	// console.log(t);
	if (t > 0)
		$gameTemp._displayingBust = true;
};

Window_Message.prototype.clearingTmpBustValue = function() {
	$gameTemp._clearingBust = null;
	$gameTemp._displayingBust = null;
};

// $gameMessage.allText()//show all current text of message
// SceneManager._scene._messageWindow.convertMacroText('\\m[vwoman]')//retrieve macro true text
//"bustClear[0,0]lspi[100]lson"

Window_Message.prototype.newLineX = function() {
	//image still be there
	var ex = 0;
	if ($gameTemp._msgFirstLine) {
		ex = master2015hp.isatSnp.exMsgJpn1;
		$gameTemp._msgFirstLine = null;
		if (ConfigManager.getLanguage().toLowerCase() != "japanese") {
			return master2015hp.isatSnp.b_57.call(this);
		}
	}
	if ($gameTemp._clearingBust) {
		// console.log('1');
		return master2015hp.isatSnp.b_57.call(this);
	}
	if ($gameTemp._displayingBust || (this._messageBodyBustSprite.bitmap && this._messageBodyBustSprite.alpha > 0)) {
		// console.log('2');
		var res = eval(Yanfly.Param.MSGFaceIndent);
		res = Math.max(0, res + ex);
		return res;
	} else {
		// console.log('3');
		return master2015hp.isatSnp.b_57.call(this);
	}
};

Window_Base.prototype.msIsLineBreak = function(txt, textState) {
	var exW = (this instanceof Window_ChoiceList ? 2 : 0);//cutoff of choicebox
	var size = this.textWidthExCheck(txt);
	var isWidthExceed = (size + textState.x + exW > (this.wordwrapWidth() - master2015hp.isatSnp.wordWrapPadX));
	return isWidthExceed;
};

Window_Base.prototype.msWrapWidthExceed = function(size, textState) {
	var exW = (this instanceof Window_ChoiceList ? 2 : 0);//cutoff of choicebox
	var res = size + textState.x + exW > (this.wordwrapWidth() - master2015hp.isatSnp.wordWrapPadX);
	return res;
};

Window_Base.prototype.checkWordWrap = function(textState) {
	if (!textState) return false;
	if (!this._wordWrap) return false;
	//passWholeBlock effect
	if (textState.index <= 0) $gameTemp._passWholeBlock = null;//reset at new textState
	if ($gameTemp._passWholeBlock && textState.index < $gameTemp._passWholeBlock) return false;
	else {
		$gameTemp._passWholeBlock = null;
	}
	
	if (ConfigManager.getLanguage() === "Japanese") {
		var nextSpace = textState.index + 1;
		var nextBreak = textState.text.indexOf('\n', textState.index + 1);
		if (nextSpace < 0) nextSpace = textState.text.length + 1;//?
		if (nextBreak > 0) nextSpace = Math.min(nextSpace, nextBreak);
		var word = textState.text.substring(textState.index, nextSpace);
		var endWord = word[word.length-1];
		var passWholeBlock = false;
		
		//►is belong to forbid chars
		var noStartList = "—‥〳〴〵…" + ")]｝〕〉》」』】〙〗〟'\"｠»ヽヾーァィゥェォッャュョヮヵヶぁぃぅぇぉっゃゅょゎゕゖㇰㇱㇲㇳㇴㇵㇶㇷㇸㇹㇺㇻㇼㇽㇾㇿ々〻‐゠–〜？ ! ‼ ⁇ ⁈ ⁉・、:;,。.";
		var noEndList = "([｛〔〈《「『【〘〖〝'\"｟«";
		var noBreakList = ['...', 'ここにあ'];
		if (noEndList.contains(endWord)) {
			//check to see if fulfill line break, then just break
			if (this.msIsLineBreak(word + endWord.slice(1), textState)) {
				textState.index--;
				return true;
			}
			//go check the next char
			var nextChar = nextSpace++;
			//if it's noEnd, number or noBreak then continue to move next
			//then check the final size to see if it exceed
			//if yes, then move all to next line
			//if not, pass the whole block and check the next
			do {
				endWord += textState.text[nextChar];
				nextChar++;
			} while (nextChar < textState.text.length &&
					(!isNaN(textState.text[nextChar]) || noEndList.contains(textState.text[nextChar])))
			passWholeBlock = true;
		} else {
			
			var nextChar = nextSpace++;
			//►[do not split] check to get numbers
			if (!isNaN(endWord)) {
				//try to group up the next number(s)
				while(nextChar < textState.text.length && !isNaN(textState.text[nextChar])) {
					endWord += textState.text[nextChar];
					nextChar++;
				}
			}
			//◄[do not split] check to get numbers
			
			while(nextChar < textState.text.length && noStartList.contains(textState.text[nextChar])) {
				endWord += textState.text[nextChar];
				nextChar++;
			}
			
			//check to see this current char belong to any noBreak groups?
			//if yes, filter the list. Collect next char then compare to the list again
			//if it was not a nonBreak, revert the index & process normally
			//if it was nonBreak, check to see if it is exceed wrapSize
			//yes? move the wholeBLock to next line OR just passWholeBlock
			var tmpWord = '';
			noBreakList.some(function(v) {
				var len = v.length;
				if ((nextChar + len - 1) > textState.text.length) return false;
				var tmpTxt = textState.text.slice(nextChar, nextChar + len);
				if (v.toLowerCase() == tmpTxt.toLowerCase()) {
					tmpWord = tmpTxt;
					return true;
				}
				return false;
			});
			if (tmpWord) {
				if (this.msIsLineBreak(word + endWord.slice(1) + tmpWord, textState)) {
					textState.index--;
					return true;
				} else {
					passWholeBlock = true;
					nextChar = nextChar + tmpWord.length - 1;
				}
			}
		}
		
		var finalWord = word + endWord.slice(1);
		var size = this.textWidthExCheck(finalWord);
		
		var isWidthExceed = this.msWrapWidthExceed(size, textState);
		if (isWidthExceed) {
			//move the whole numbers group to nextline
			textState.index--;
			return true;
		} else if (passWholeBlock) {
			//pass whole of this group
			$gameTemp._passWholeBlock = nextChar;
			return false;
		}
		
	} else if (textState.text[textState.index] === ' ') {
		var nextSpace = textState.text.indexOf(' ', textState.index + 1);
		var nextBreak = textState.text.indexOf('\n', textState.index + 1);
		if (nextSpace < 0) nextSpace = textState.text.length + 1;
		if (nextBreak > 0) nextSpace = Math.min(nextSpace, nextBreak);
		var word = textState.text.substring(textState.index, nextSpace);
		var size = this.textWidthExCheck(word);
	}
	var res = this.msWrapWidthExceed(size, textState);
	if (res && ConfigManager.getLanguage() === "Japanese") textState.index--;
    return res;
};

//Fix SRD translation error
//need to be applied on the SRD file itself
`
SRD.TranslationEngine.parseNoteData = function(data) {
	var updateFields = null;
	data.note.replace(/<(.*)[ ]Translation>((?:(?!<\/)[\s\S])*)<\/(.*)[ ]Translation>/gi, function(match, m1, m2, m3) {
		if(m1 !== m3) return match;
		if(data._tt_translations === undefined) data._tt_translations = {};
		// console.log(m2);
		var pairs = m2.split(/[\r\n]+/);
		pairs.forEach(function(pair) {
			pair.replace(/\[(.*)\]:\n*((?:(?!\\\[.*\])[\s\S])*)\s*/gi, function(match2, name, value) {
					// console.log(match2);
					// console.log(name);
					// console.log(value);
					if(name && value && typeof(data[name]) === 'string') {
					if(value.indexOf('\n', value.length - 1) > 0) {
						value = value.substring(0, value.length - 1);
					}
					if(data._tt_translations[m1] === undefined) data._tt_translations[m1] = {};
					data._tt_translations[m1][name] = value;
					if(updateFields === null) updateFields = [];
					if(!updateFields.contains(name)) updateFields.push(name);
				}
				return match2;
			}.bind(this));
		},this);
		// m2.replace(/\[(.*)\]:\n*((?:(?!\\\[.*\])[\s\S])*)\s*/gi, function(match2, name, value) {
			// console.log(match2);
			// console.log(name);
			// console.log(value);
			// if(name && value && typeof(data[name]) === 'string') {
				// if(value.indexOf('\n', value.length - 1) > 0) {
					// value = value.substring(0, value.length - 1);
				// }
				// if(data._tt_translations[m1] === undefined) data._tt_translations[m1] = {};
				// data._tt_translations[m1][name] = value;
				// if(updateFields === null) updateFields = [];
				// if(!updateFields.contains(name)) updateFields.push(name);
			// }
			// return match2;
		// }.bind(this));
		return match;
	}.bind(this));
	return updateFields;
};
`
//◄Always wrap message text

//fix Hime_HMSChoiceDisplayMode. Also require modification of the original file
Window_Message.prototype.onEndOfText = function() {
	this._recTextState = JsonEx.makeDeepCopy(this._textState);
	master2015hp.isatSnp.b_37.call(this);
};

//►init font setting
for (key in master2015hp.isatSnp.fontList) {
	Graphics.loadFont(key, 'fonts/' + master2015hp.isatSnp.fontList[key]);
}

ConfigManager.refreshAllWindows = function() {
	const scene = SceneManager._scene;
	if(scene && scene._windowLayer) {
		const layer = scene._windowLayer;
		if(!layer.children) return;
		layer.children.forEach(function(win) {
			win.resetFontSettings();
			if(win.refresh) win.refresh();
		})
	}
};

// ConfigManager.makeData = function() {
	// var config = master2015hp.isatSnp.b_39.call(this);
	// config.fontStyle = this.fontStyle;
	// return config;
// };

// ConfigManager.applyData = function(config) {
	// master2015hp.isatSnp.b_40.call(this, config);
	// this.fontStyle = this.readFontStyle(config, 'fontStyle');
// };

ConfigManager.readFontStyle = function(config, name) {
	var value = config[name];
	if (value !== undefined) {
		return value;
	} else {
		return 0;
	}
};

ConfigManager.setFontStyle = function(id) {
	this.fontStyle = id;
};

// Window_Base.prototype.resetFontSettings = function() {
	// master2015hp.isatSnp.b_41.call(this);
	// this.loadOptionsFont();
// };

// Window_Base.prototype.loadOptionsFont = function() {
	// var keyList = Object.keys(master2015hp.isatSnp.fontList);
	// var fontName = keyList[ConfigManager.fontStyle];
	// if (ConfigManager.getLanguage() === "Japanese")
		// fontName = 'japanese';
	// else
		// fontName = keyList[0];//default
	
	// ConfigManager.setFontStyle(keyList.indexOf(fontName));
	// this.contents.fontFace = fontName;
// };

Bitmap.prototype.drawText = function(text, x, y, maxWidth, lineHeight, align) {
	this.loadOptionsFont();
	master2015hp.isatSnp.b_42.call(this, text, x, y, maxWidth, lineHeight, align);
};

Bitmap.prototype.loadOptionsFont = function() {
	var keyList = Object.keys(master2015hp.isatSnp.fontList);
	var fontName = keyList[ConfigManager.fontStyle];
	fontName = ConfigManager.getLanguage().toLowerCase().trim();
	if (!master2015hp.isatSnp.fontList.hasOwnProperty(fontName))
		fontName = keyList[0];//default
	
	ConfigManager.setFontStyle(keyList.indexOf(fontName));
	this.fontFace = fontName;
};
//◄init font setting

//►reload Items language
Game_System.prototype.reloadItemsLanguage = function() {
    var g = $gameParty.allItems();
	$gameParty.members().forEach(function(actor) {
		if (actor) {
			g = g.concat(actor.equips());
		}
	});
	var lang = 'english';
	if (ConfigManager.getLanguage().search(/japanese/ig) > -1)
		lang = 'japanese';
	g.forEach(function(it) {
		if (!it) return;
		if (lang == 'japanese') {
			if (it.note.match(/<Japanese[ ]Translation>((?:(?!<\/)[\s\S])*)<\/Japanese[ ]Translation>/gi)) {
				var data = RegExp.$1.split(/[\r\n]+/);
				data.forEach(function(dat) {
					if (!dat) return;
					if (dat.search(/\[name\][ ]?:[ ]?(\.*)/ig) > -1) {
						it.name = dat.substr(dat.search(':'));
					} else if (dat.search(/\[description\][ ]?:[ ]?(\.*)/ig) > -1) {
						it.description = dat.substr(dat.search(':'));
					}
				});
			}
		} else {
			if (it.baseItemId) {
				var baseItem = DataManager.getDatabase(it)[it.baseItemId];
				it.name = baseItem.name;
				it.description = baseItem.description;
			}
		}
	});
};

Scene_Load.prototype.onLoadSuccess = function() {
	$gameSystem.reloadItemsLanguage();
	master2015hp.isatSnp.b_43.call(this);
	$gameTemp._accessedSaveFiles = true;
};

Yanfly.Param.ItemNoteParse = true;
//◄reload Items language

Window_Options.prototype.refresh = function() {
    master2015hp.isatSnp.b_44.call(this);
	if (SceneManager._scene._categoryWindow)
		SceneManager._scene._categoryWindow.refresh();
};

//►disable choice cancel auto selection
Window_ChoiceList.prototype.callCancelHandler = function() {
	var index = $gameMessage.choiceCancelType();
	if (index >= 0) {
		var g = $gameMessage.choices();
		//compare origin to current to search the true cancel index
		var og = $gameTemp._originalChoices;
		if (og) {
			var tindex = g.indexOf(og[index]);
			if (tindex > -1) index = tindex;
			else {
				//if failed to match
				if (!g[index]) index = 0;
			}
		} else {
			//select first choice if failed to find cancel index
			if (!g[index]) index = 0;
		}
		
		this.select(index);
		return;
	}
	master2015hp.isatSnp.b_49.call(this);
};

Window_ChoiceList.prototype.processCancel = function() {
	if ($gameMessage.choiceCancelType() > 0) {
		SoundManager.playCancel();
		this.updateInputData();
		this.callCancelHandler();
		return;
	}
    master2015hp.isatSnp.b_50.call(this);
};
//◄disable choice cancel auto selection

Game_Interpreter.prototype.setupReservedCommonEvent = function() {
	if ($gameTemp.isCommonEventReserved()) {
		$gameTemp._ms2015hp_commonEventId = $gameTemp._commonEventId;//record ceid
	} else {
		$gameTemp._ms2015hp_commonEventId = 0;//clear
	}
	return master2015hp.isatSnp.b_56.call(this);
};

//
if (Imported.ALOE_ConditionalChoices) {
Game_Message.prototype.removeHiddenChoices = function (choices) {
	$gameTemp._originalChoices = choices;
	return master2015hp.isatSnp.b_55.call(this, choices);
};
}
	
Game_Message.prototype.onChoice = function(n) {
	//record selected choice. eventeId that calling it. mapId.
	var g = $gameTemp._originalChoices || this.choices();
	$gameSystem.recordSelectedChoice(g[n]);
    master2015hp.isatSnp.b_51.call(this, n);
};

Game_System.prototype.schoicePushIn = function(obj, noSearchJPN) {
	if (obj) {
		this._msSelectedChoices.push(obj);
		if (noSearchJPN) return;
		//search for JPN version to remove
		let jpnTxt = this.schoiceGetJpnVersion(obj['text']);
		if (jpnTxt) {
			this.forceGreyChoice(jpnTxt['Japanese'], obj['mapId'], obj['evId'], obj['pageId'], obj['listId'], true, true);
			//remove hidden choice code && import it too
			if (Imported.ALOE_ConditionalChoices) {
				let txt = jpnTxt['Japanese'].trim().replace(/([ ]?<<.+>>)/ig,'');
				this.forceGreyChoice(txt, obj['mapId'], obj['evId'], obj['pageId'], obj['listId'], true, true);
			}
		}
	}
};

Game_System.prototype.schoiceTakeOut = function(index, noSearchJPN) {
	if (index > -1) {
		let tmpObj = this._msSelectedChoices.splice(oid, 1);
		if (!tmpObj) return;
		if (noSearchJPN) return;
		//search for JPN version to remove
		let jpnTxt = this.schoiceGetJpnVersion(tmpObj['text']);
		if (jpnTxt) {
			this.removeSelectedChoice(jpnTxt['Japanese'], tmpObj['mapId'], tmpObj['evId'], tmpObj['pageId'], tmpObj['listId'], true);
		}
	}
};

Game_System.prototype.schoiceGetJpnVersion = function(txt) {
	let res = '';
	if (txt) {
		res = window.$dataTranslations["cmd"][JSON.parse(JSON.stringify(txt))];
	}
	return res;
};

Game_System.prototype.removeSelectedChoice = function(txt, mapId, eventId, pageId, listId, noSearchJPN) {
	this._msSelectedChoices = this._msSelectedChoices || [];//
	if (txt) {
		//remove hidden choice code
		if (Imported.ALOE_ConditionalChoices) {
			txt = txt.replace(/([ ]?<<.+>>[ ]*)/ig,'');
		}
		
		var oid = -1;
		var res = this._msSelectedChoices.some(function(obj, index) {
			if (obj.text.toLowerCase() != txt.toLowerCase()) return false;
			else {
				if (eventId == 0 && pageId == obj.pageId) {
					//choice was from a CommonEvent
					oid = index;
					return true;
				}
				if (mapId && obj.mapId != mapId) return false;
				if (eventId && obj.evId != eventId) return false;
				if (pageId >= 0 && obj.pageId != pageId) return false;
				if (listId >= 0 && obj.listId != listId) return false;
				oid = index;
				return true;
			}
			return false;
		});
		
		this.schoiceTakeOut(oid, noSearchJPN);
	}
};

Game_System.prototype.forceGreyChoice = function(txt, mapId, eventId, pageId, listId, condRemovedPush, noSearchJPN) {
	this._msSelectedChoices = this._msSelectedChoices || [];//
	if (txt) {
		var evId = eventId;
		var mapId = mapId;
		var pageId = pageId;
		var listId = listId;
		var tmpObj = {
			'text': txt,
			'evId': evId,
			'mapId': mapId,
			'pageId': pageId,
			'listId': listId
		};
		
		var res = this._msSelectedChoices.some(function(obj) {
			if (JSON.stringify(obj) == JSON.stringify(tmpObj)) return true;
			return false;
		});
		
		if (!res) this.schoicePushIn(tmpObj, noSearchJPN);
		
		//remove hidden choice code && import it too
		if (!condRemovedPush && Imported.ALOE_ConditionalChoices) {
			txt = txt.trim().replace(/([ ]?<<.+>>)/ig,'');
			this.forceGreyChoice(txt, mapId, eventId, pageId, listId, true);
		}
	}
};

Game_System.prototype.recordSelectedChoice = function(txt, condRemovedPush) {
	this._msSelectedChoices = this._msSelectedChoices || [];//
	if (txt) {		
		var evId = $gameMap._interpreter._eventId;
		var mapId = $gameMap.mapId();
		var pageId = $gameMap.event(evId) ? $gameMap.event(evId)._pageIndex : $gameTemp._ms2015hp_commonEventId;
		var listId = $gameMap._interpreter._index;
		var tmpObj = {
			'text': txt,
			'evId': evId,
			'mapId': mapId,
			'pageId': pageId,
			'listId': listId
		};
		
		var res = this._msSelectedChoices.some(function(obj) {
			if (JSON.stringify(obj) == JSON.stringify(tmpObj)) return true;
			return false;
		});
		
		if (!res) this.schoicePushIn(tmpObj);
		
		//remove hidden choice code && import it too
		if (!condRemovedPush && Imported.ALOE_ConditionalChoices) {
			txt = txt.trim().replace(/([ ]?<<.+>>)/ig,'');
			this.recordSelectedChoice(txt, true);			
		}
	}
};

Game_System.prototype.isSelectedChoice = function(txt, condRemovedCheck) {
	this._msSelectedChoices = this._msSelectedChoices || [];//
	// console.log(this._msSelectedChoices);
	if (txt) {		
		var evId = $gameMap._interpreter._eventId;
		var mapId = $gameMap.mapId();
		var pageId = $gameMap.event(evId) ? $gameMap.event(evId)._pageIndex : $gameTemp._ms2015hp_commonEventId;
		var listId = $gameMap._interpreter._index;
		var tmpObj = {
			'text': txt.trim(),
			'evId': evId,
			'mapId': mapId,
			'pageId': pageId,
			'listId': listId
		};
		// console.log(tmpObj);
		
		var res = this._msSelectedChoices.some(function(obj) {
			if (JSON.stringify(obj) == JSON.stringify(tmpObj)) return true;
			if (tmpObj['text'] == obj['text'] && (!obj['evId'] && !obj['mapId'] && !obj['pageId'] && !obj['listId'])) return true;
			return false;
		});
		if (res) return res;
		
		//remove hidden choice code (ALREADY BEEN REMOVED?)
		// if (!condRemovedCheck && Imported.ALOE_ConditionalChoices) {
			// txt = txt.trim().replace(/([ ]?<<.+>>)/ig,'');
			// return this.isSelectedChoice(txt, true);
		// }
	}
	return false;
};

// Window_ChoiceList.prototype.drawTextEx = function(text, x, y) {
	// console.log(text);
	// if (text)
		// this._choiceSelected = $gameSystem.isSelectedChoice(text);//♦
	// return master2015hp.isatSnp.b_54.call(this, text, x, y);
// };

Window_ChoiceList.prototype.processNormalCharacter = function(textState) {
	if (this._choiceSelected) {
		this.contents.textColor = 'rgba(' + master2015hp.isatSnp.selectedChoiceColor[0] + ',' + master2015hp.isatSnp.selectedChoiceColor[1] + ',' + master2015hp.isatSnp.selectedChoiceColor[2] + ', 1)';
	}
	master2015hp.isatSnp.b_53.call(this, textState);
};

//fastForward handle
if (Imported.YEP_MessageCore) {
Window_Message.prototype.isFastForward = function() {
    var res = master2015hp.isatSnp.b_62.call(this);
	if (res && !$gameTemp._fastForwardCD)
		$gameTemp._fastForwardCD = master2015hp.isatSnp.fastForwardPlus;
	return (res || $gameTemp._fastForwardCD > 0);
};

Scene_Map.prototype.updateMainMultiply = function() {
	// console.log($gameTemp._fastForwardCD);
	if ($gameTemp._fastForwardCD) {
		this._messageWindow._showFast = true;
		$gameTemp._fastForwardCD--;
		if ($gameTemp._fastForwardCD <= 0)
			$gameTemp._fastForwardCD = null;
	}
    master2015hp.isatSnp.b_63.call(this);
};
}

//softlock after ask question
BattleManager.startBattle = function() {
	this._instantCasting = false;//
    master2015hp.isatSnp.b_64.call(this);
};

//
BattleManager.startATBInput = function(battler) {
	master2015hp.isatSnp.b_65.call(this, battler);
	$gameParty.battleMembers().forEach(function(ac) {
		if (!ac) return;
		if (ac == battler) return;
		if (ac.atbSpeed() > BattleManager.atbTarget()) ac.setATBSpeed(BattleManager.atbTarget() - 1);
	});
};

//►animated up/down arrow
Window.prototype.initialize = function() {
	master2015hp.isatSnp.b_66.call(this);
	this._arrowUpdateCount = 0;
	this._arrowUpdatePattern = 0;
};

Window.prototype.arrowBitmapReady = function() {
	if (!this._ckeArrowUpBm) this._ckeArrowUpBm = ImageManager.loadSystem(master2015hp.isatSnp.arrowUImage);
	if (!this._ckeArrowDownBm) this._ckeArrowDownBm = ImageManager.loadSystem(master2015hp.isatSnp.arrowDImage);
	if (!this._ckeArrowUpBm.isReady()) return false;
	if (!this._ckeArrowDownBm.isReady()) return false;
	return true;
};

Window.prototype._updateArrows = function() {
	master2015hp.isatSnp.b_67.call(this);
	
	//
	if (!this.arrowBitmapReady()) {
		return;
	}
	this._arrowUpdateCount = this._arrowUpdateCount || 0;
	this._arrowUpdateCount++;
	if (this._arrowUpdateCount >= master2015hp.isatSnp.arrowUpdateDelay) {
		this._arrowUpdateCount = null;
		this._arrowUpdatePattern++;
	}
	if (this._arrowUpdatePattern > 1) this._arrowUpdatePattern = 0;
	
    var w = this._width;
    var h = this._height;
    var s = 32;
	
    this._downArrowSprite.bitmap = this._ckeArrowDownBm;
    this._downArrowSprite.anchor.x = 0.5;
    this._downArrowSprite.anchor.y = 0.5;
    this._downArrowSprite.setFrame(s * this._arrowUpdatePattern, 0, s, s);
    this._downArrowSprite.move(w/2, h-s/2);
	
    this._upArrowSprite.bitmap = this._ckeArrowUpBm;
    this._upArrowSprite.anchor.x = 0.5;
    this._upArrowSprite.anchor.y = 0.5;
    this._upArrowSprite.setFrame(s * this._arrowUpdatePattern, 0, s, s);
    this._upArrowSprite.move(w/2, s/2);
};
//◄animated up/down arrow

//disable unfrozen skill if none is frozen
Game_BattlerBase.prototype.meetsSkillConditions = function(skill) {
    var res = master2015hp.isatSnp.b_68.call(this, skill);
	
	let cond1 = true;
	if (master2015hp.isatSnp.skillsTargetDeadNotKo.contains(skill.id)) {
		let tmpcond = this.friendsUnit().members().some(function(b) {
			if (b.isStateAffected(master2015hp.isatSnp.statesFrozen)) return true;
			return false;
		});
		if (!tmpcond) cond1 = false;
	}
	
	let cond2 = true;
	if (master2015hp.isatSnp.skillOnlyKoAlly.contains(skill.id)) {
		let tmpcond = this.friendsUnit().members().some(function(b) {
			if (b.isDead()) return true;
			return false;
		});
		if (!tmpcond) cond2 = false;
	}
	
	return res && cond1 && cond2;
};

//►rehighlight current active actor
Scene_Battle.prototype.onItemCancel = function() {
    master2015hp.isatSnp.b_69.call(this);
	this.curActorHighlight();
};

Scene_Battle.prototype.onSkillCancel = function() {
    master2015hp.isatSnp.b_70.call(this);
	this.curActorHighlight();
};

//►actor re-act after CommonEvent
BattleManager.initMembers = function() {
    master2015hp.isatSnp.b_72.call(this);
	this._endActionQueue = null;
};

BattleManager.createSetupActions = function() {
    master2015hp.isatSnp.b_71.call(this);
	if (!this.isActionForced && this._endActionQueue) {
		if (this._subject && this._endActionQueue == this._subject) {
			this._phase = '';
			this.endAction();
		}
	} else {
		if (this._subject) this._endActionQueue = this._subject;
	}
};
//◄actor re-act after CommonEvent

Game_Screen.prototype.startShake = function(power, speed, duration) {
	if (!$gameSwitches.value(master2015hp.isatSnp.offShakeBattleSw)) return;
    master2015hp.isatSnp.b_73.call(this, power, speed, duration);
};

///▼manual buttonUI option
//categoryWindow.commandName(index) - name of the category
Scene_Options.prototype.createCategoryWindow = function() {
	master2015hp.isatSnp.b_79.call(this);
	this._optionsWindow.refresh();
};

Window_Options.prototype.drawAllItems = function() {
	let w1 = SceneManager._scene._categoryWindow;
	if (w1) {
		let categoryName = w1.commandName(w1.index());
		let cond = master2015hp.isatSnp.buttonstyleShowCategories.some(function(a) {
			if (!a) return false;
			let reg = new RegExp(a,'ig');
			if (categoryName.search(reg) > -1) return true;
			return false;
		});
		if (cond) {
			let g = [
				{ name: 'Button Style', symbol: 'buttonstyle', enabled: true, ext: 0}
			];
			this._list = this._list.concat(g);
		}
	}
	master2015hp.isatSnp.b_78.call(this);
};

// Scene_Options.prototype.createOptionsWindow = function() {
	// master2015hp.isatSnp.b_77.call(this);
	// this._optionsWindow.setHandler('buttonstyle', this.buttonStyleOk.bind(this));
// };

//
Window_Options.prototype.commandName = function(index) {
	let list = [
		{ name: 'Button Style', symbol: 'buttonstyle', enabled: true, ext: 0}
	];
	list = this._list.concat(list);
	//
    return list[index].name;
};

Window_Options.prototype.commandSymbol = function(index) {
    let list = [
		{ name: 'Button Style', symbol: 'buttonstyle', enabled: true, ext: 0}
	];
	list = this._list.concat(list);
	//
    return list[index].symbol;
};

Window_Options.prototype.isCommandEnabled = function(index) {
	let list = [
		{ name: 'Button Style', symbol: 'buttonstyle', enabled: true, ext: 0}
	];
	list = this._list.concat(list);
	//
    return list[index].enabled;
};

Game_Temp.prototype.optExcludeList = function(symbol) {
	let cond = ['buttonstyle'].some(function(a) {return a == symbol.toLowerCase();});
	return cond;
};

Window_Options.prototype.drawPlatformOpt = function(index) {
	let p1 = master2015hp.isatSnp.buttonstylePlatformNames[0];
	let p2 = master2015hp.isatSnp.buttonstylePlatformNames[1];
	let p3 = master2015hp.isatSnp.buttonstylePlatformNames[2];
	
	var rect = this.itemRectForText(index);
	var statusWidth = this.statusWidth();
	var itemWidth = Math.floor(this.statusWidth() / 3);
	var titleWidth = rect.width - statusWidth;
	this.resetTextColor();
	
	let symbol = this.commandSymbol(index);//buttonstyle
	let value = this.getConfigValue(symbol);
	
	this.changePaintOpacity(value == 0);
	this.drawText(p1, titleWidth, rect.y, itemWidth, 'center');
	this.changePaintOpacity(value == 1);
	this.drawText(p2, titleWidth + itemWidth, rect.y, itemWidth, 'center');
	this.changePaintOpacity(value == 2);
	this.drawText(p3, titleWidth + itemWidth * 2, rect.y, itemWidth, 'center');
};

Window_Options.prototype.buttonStyleGetText = function(obj) {
	let key = ['en','eng','english'];
	let txt = '';
	if (ConfigManager.getLanguage().search(/japanese/ig) > -1)
		key = ['jpn','japanese','japan'];
	obj.some(function(str) {
		let dat = str.split(':');
		if (key.contains(dat[0].toLowerCase())) {
			txt = dat[1];
			return true;
		}
		return false;
	});
	return txt;
};

Window_Options.prototype.buttonStyleDrawItem = function(index) {
	var rect = this.itemRectForText(index);
	var text = this.buttonStyleGetText(master2015hp.isatSnp.buttonstyleOptionNames);
	this.resetTextColor();
	this.changePaintOpacity(this.isCommandEnabled(index));
	this.drawText(text, rect.x, rect.y, rect.width, 'left');
	this.drawPlatformOpt(index);
};

Window_Options.prototype.buttonStyleOk = function() {
};

Window_Options.prototype.buttonStyleLeft = function() {
	let v = ConfigManager['buttonstyle'];
	v = Math.max(0, v - 1);
	this.changeValue('buttonstyle', v);
	this.refresh();
};

Window_Options.prototype.buttonStyleRight = function() {
	let v = ConfigManager['buttonstyle'];
	v = Math.min(2, v + 1);
	this.changeValue('buttonstyle', v);
	this.refresh();
};

Window_Options.prototype.processOk = function() {
	var symbol = this.commandSymbol(this.index());
	if (symbol) {
		if (symbol.toLowerCase() == 'buttonstyle') this.buttonStyleOk();
		else eval(JSON.parse(this._symbolData[symbol].ProcessOkCode));
	} else {
		Yanfly.Options.Window_Options_processOk.call(this);
	}
};

Window_Options.prototype.cursorLeft = function(wrap) {
	var symbol = this.commandSymbol(this.index());
	if (symbol) {
		if (symbol.toLowerCase() == 'buttonstyle') this.buttonStyleLeft();
		else eval(JSON.parse(this._symbolData[symbol].CursorLeftCode));
	} else {
		Yanfly.Options.Window_Options_cursorLeft.call(this, wrap);
	}
};

Window_Options.prototype.cursorRight = function(wrap) {
	var symbol = this.commandSymbol(this.index());
	if (symbol) {
		if (symbol.toLowerCase() == 'buttonstyle') this.buttonStyleRight();
		else eval(JSON.parse(this._symbolData[symbol].CursorRightCode));
	} else {
		Yanfly.Options.Window_Options_cursorRight.call(this, wrap);
	}
};

Window_Options.prototype.drawItem = function(index) {
	var symbol = this.commandSymbol(index);
	if (symbol) {
		if (symbol.toLowerCase() == 'buttonstyle') this.buttonStyleDrawItem(index);
		else eval(JSON.parse(this._symbolData[symbol].DrawItemCode));
	} else {
		Yanfly.Options.Window_Options_drawItem.call(this, index);
	}
};

Window_Options.prototype.updateHelp = function() {
  if (!this._helpWindow) return;
  if (this.index() < 0) return;
  var symbol = this.commandSymbol(this.index());
  if (symbol) {
		if (symbol.toLowerCase() == 'buttonstyle') {
			console.log(this.buttonStyleGetText(master2015hp.isatSnp.buttonstyleHelpText));
			this._helpWindow.setText(this.buttonStyleGetText(master2015hp.isatSnp.buttonstyleHelpText));
		} else if (this._symbolData && this._symbolData[symbol])
			this._helpWindow.setText(JSON.parse(this._symbolData[symbol].HelpDesc));
  } else {
	  this._helpWindow.clear();
  }
  // if (this._symbolData && this._symbolData[symbol]) {
    // this._helpWindow.setText(JSON.parse(this._symbolData[symbol].HelpDesc));
  // } else {
    // this._helpWindow.clear();
  // }
};

//
//ConfigManager.makeData
//ConfigManager.applyData
ConfigManager.readPlatformType = function(config, name) {
	let value = config[name];
	if (value !== undefined) {
		return value;
	} else {
		return master2015hp.isatSnp.platformType;
	}
};

ConfigManager.setPlatformType = function() {
	let value = (this.buttonstyle != null ? this.buttonstyle : master2015hp.isatSnp.platformType);
	return value;
};
///▲manual buttonUI option

//►scroll to lastest index
Window_SavefileList.prototype.update = function() {
	master2015hp.isatSnp.b_81.call(this);
	if (this._oHeight != this.height) {
		this._oHeight = this.height;
		if ($gameTemp._accessedSaveFiles)
			this.setTopRow(DataManager.lastAccessedSavefileId() - 1);
		else
			this.setTopRow(DataManager.latestSavefileId() - 1);
	}
};

Scene_Save.prototype.start = function() {
    master2015hp.isatSnp.b_82.call(this);
    if ($gameTemp._mapStarted)
		this._listWindow.setTopRow(DataManager.lastAccessedSavefileId() - 1);
	else
		this._listWindow.setTopRow(DataManager.latestSavefileId() - 1);
};

Scene_Save.prototype.onSaveSuccess = function() {
    master2015hp.isatSnp.b_83.call(this);
	$gameTemp._accessedSaveFiles = true;
};

// Scene_Load.prototype.onLoadSuccess = function() {
    // master2015hp.isatSnp.b_84.call(this);
	// $gameTemp._accessedSaveFiles = true;
// };
//◄scroll to lastest index

Sprite_Picture.prototype.resetFrame = function () {
	if (this.bitmap) {
		this._picReloadCount = 0;
		this.setFrame(0, 0, this.bitmap.width, this.bitmap.height);
	}
	else {
		this._picReloadCount = this._picReloadCount || 1;
		if (++this._picReloadCount > master2015hp.isatSnp.picReloadMaxTimes) return;
		setTimeout(this.resetFrame.bind(this), master2015hp.isatSnp.picReloadDelay);
	}
};

//replace gamepad config names
Window_GamepadConfig.prototype.getButtonConfig = function(index) {
	if (index > 5) return '';
	var key = this.getButtonKey(index);
	var button = Input.getGamepadButton(key);
	return this.buttonNameByPlatform(button);
	// ConfigManager['buttonstyle']
  // return Yanfly.Param.GamepadConfigButton.format(button);
};

Window_GamepadConfig.prototype.buttonNameByPlatform = function(button) {
	let res = '';
	switch(ConfigManager['buttonstyle']) {
		case 1:
			res = master2015hp.isatSnp.padButtonsPs[button]; break;
		default:
			res = master2015hp.isatSnp.padButtonsXbox[button];
	}
	return res;
};

(function() {
if (master2015hp.isatSnp.testGamepad) {
    var alias_update = Input._updateGamepadState;
	var gamepadNames = ['BUTTON_0', 'BUTTON_1', 'BUTTON_2', 'BUTTON_3', 'BUTTON_4', 'BUTTON_5', 'BUTTON_6', 'BUTTON_7', 'BUTTON_8', 'BUTTON_9', 'BUTTON_10', 'BUTTON_11', 'BUTTON_12', 'BUTTON_13', 'BUTTON_14', 'BUTTON_15', 'BUTTON_16', 'BUTTON_17', 'BUTTON_18', 'BUTTON_19', 'BUTTON_20', 'BUTTON_21', 'BUTTON_22', 'BUTTON_23', 'BUTTON_24', 'BUTTON_25', 'BUTTON_26', 'BUTTON_27', 'BUTTON_28', 'BUTTON_29', 'BUTTON_30', 'BUTTON_31'];
	
    var _Scene_Base_create = Scene_Map.prototype.createDisplayObjects;
    Scene_Map.prototype.createDisplayObjects = function() {
        _Scene_Base_create.call(this);
		
        this._mytextSprite = new Sprite(new Bitmap(500, 500));
        this._mytextSprite.x = 10;
        this._mytextSprite.y = 10;
        this.addChild(this._mytextSprite);
    };

    Input._updateGamepadState = function(gamepad) {
        alias_update.apply(this, arguments);
		if ($gameTemp && !$gameTemp.isPlaytest()) return;
		if (!SceneManager._scene._mytextSprite) return;
		if (gamepad) {
            var buttonPressed = false;
            var axisUsed = false;

            for (var i = 0; i < gamepad.buttons.length; i++) {
                if (gamepad.buttons[i].pressed) {
                    var buttonName = gamepadNames[i];
                    SceneManager._scene._mytextSprite.bitmap.clear();
                    SceneManager._scene._mytextSprite.bitmap.textColor = '#FFFFFF';
                    SceneManager._scene._mytextSprite.bitmap.fontSize = 16;
                    SceneManager._scene._mytextSprite.bitmap.drawText(buttonName, 0, 0, 200, 50, 'left');
                    buttonPressed = true;
                    axisUsed = false;
                    break;
                }
            }

            if (!buttonPressed) {
                for (var j = 0; j < gamepad.axes.length; j++) {
                    if (Math.abs(gamepad.axes[j]) > 0.5) {
                        var axisName = "AXIS_" + j + "_" + gamepad.axes[j].toFixed(2);
                        SceneManager._scene._mytextSprite.bitmap.clear();
                        SceneManager._scene._mytextSprite.bitmap.textColor = '#FFFFFF';
                        SceneManager._scene._mytextSprite.bitmap.fontSize = 16;
                        SceneManager._scene._mytextSprite.bitmap.drawText(axisName, 0, 0, 200, 50, 'left');
                        axisUsed = true;
                        break;
                    }
                }
            }

            if (!buttonPressed && !axisUsed) {
                SceneManager._scene._mytextSprite.bitmap.clear();
            }
        } else {
            SceneManager._scene._mytextSprite.bitmap.clear(); // Reset text if no gamepad is connected
        }
    };
}
})();
