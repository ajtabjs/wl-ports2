//-----------------------------------------------------------------------------
//  RG19
//-----------------------------------------------------------------------------
//  For: RPGMAKER MV
//  RG19.js
//  VERSION 1.01
//-----------------------------------------------------------------------------

var Imported = Imported || {};
Imported.RG19 = true;

var RG19 = RG19 || {};			// RG19's main object

//-----------------------------------------------------------------------------
/*:
 * @plugindesc RG19 special stuff
 * 
 * @author RG
 *
 * @param Is Console
 * @desc true or false
 * @default false
 *
 * @help
 * Set to true to work like a console (the gamertag stuff will be displayed)
 *
 * @param Is Debug
 * @desc true or false
 * @default false
 *
 * @help
 * Set to true to enable RG19 debug mode.
 *
 * @help
 *
 * Plugin Command:
 *   RG19 GetEnvironment			# TODO
 *   RG19 IsEnvironment				# TODO
 *   RG19 IsEnvironmentSYS	 		# TODO
 *   RG19 IsEnvironmentREGION  		# TODO
 *   RG19 DoTheThing   				# TODO
 *   RG19 LogMessage				# TODO
 *   RG19 SetAchievement			# TODO
 *   RG19 RequestAccountPicker  	# TODO
 *   RG19 IsAsiaButtons		 		# TODO
 *   RG19 StartStory		   		# 
 *   RG19 EndStory		   			# 
 *   RG19 OpenPS5Activity	   		# 
 */

//-----------------------------------------------------------------------------
//  CODE STUFFS
//-----------------------------------------------------------------------------

(function()
{
	// PC fallbacks
	if (console.run_gc == undefined) console.run_gc = function() { console.log("Run GC"); };
	if (console.memory_usage == undefined) console.memory_usage = function(simple) { console.log("Memory Usage"); };

	var __IsConsole = PluginManager.parameters('RG19')["Is Console"] == "true";
	var __IsDebug = PluginManager.parameters('RG19')["Is Debug"] == "true";

	// Running inside MV
	RG19.IsDebug = function() { return __IsDebug; }
	RG19.IsConsole = function() { return __IsConsole; }
	RG19.GetSystem = function() { return "PS4"; }
	RG19.GetEnvironment = function(varname) { return ""; }
	RG19.StartStory = function() { console.log("PS5 StartStory"); };
	RG19.EndStory = function() { console.log("PS5 EndStory"); };
	RG19.OpenPS5Activity_Start = function() { console.log("PS5 OpenPS5Activity_Start"); };
	RG19.OpenPS5Activity_End = function() { console.log("PS5 OpenPS5Activity_End"); };
	RG19.OpenPS5Activity = function() { /*console.log("PS5 OpenPS5Activity");*/ };
	RG19.RequestAccountPicker = function() { console.log("RequestAccountPicker"); };

	// This will be true if we're running inside the PORT
	try
	{
		console.log("Trying to do a quick self-patch!");

		if (globalThis.RG19CPP != undefined)
		{
			RG19.IsConsole = function() { return true; }
			RG19.GetSystem = function() { return RG19CPP.GetEnvironment("SYS"); }
			RG19.IsDebug = function() { return RG19CPP.GetEnvironment("DEBUG") == "TRUE"; }
			RG19.GetEnvironment = RG19CPP.GetEnvironment;
			RG19.StartStory = RG19CPP.StartStory;
			RG19.EndStory = RG19CPP.EndStory;
			RG19.OpenPS5Activity_Start = RG19CPP.OpenPS5Activity_Start;
			RG19.OpenPS5Activity_End = RG19CPP.OpenPS5Activity_End;
			RG19.OpenPS5Activity = RG19CPP.OpenPS5Activity;
			RG19.RequestAccountPicker = RG19CPP.RequestAccountPicker;
		}
	} catch(ex)
	{
	}
	
	console.log("RG19 is running on console mode: " + RG19.IsConsole());
	// Console pathces
	if (RG19.IsConsole())
	{
		// Remove last option, controls
		Yanfly.Param.OptionsCategories.splice(3, 1);

		// Platform type
		if (RG19.GetSystem() == "PS4" || RG19.GetSystem() == "PS5")
		{
			master2015hp.isatSnp.platformType = 1;
			master2015hp.isatSnp.getPlatform = function() { return 1; }
		}

		if (RG19.IsConsole() && (RG19.GetSystem() == "SWITCH"))
		{
			master2015hp.isatSnp.platformType = 2;
			master2015hp.isatSnp.getPlatform = function() { return 2; }
		}

		// Set to empty
		master2015hp.isatSnp.buttonstyleShowCategories = [];

		// Only monkey patch this on PS5 no point on wasting execution on the rest
		console.log("Loading RG19 for " + RG19.GetSystem());
		if (RG19.GetSystem() == "PS5")
		{
			console.log("Monkey patching for PS5 activity!")

			var _Scene_Load_update = Scene_Load.prototype.update;
			Scene_Load.prototype.update = function()
			{
				_Scene_Load_update.call(this);

				if (RG19.OpenPS5Activity())
				{
					if (DataManager.loadGame(DataManager.latestSavefileId())) {
						this.onLoadSuccess();
					} else {
						this.onLoadFailure();
					}

					RG19.OpenPS5Activity_End();
				}
			}

			var _Scene_Options_update = Scene_Options.prototype.update;
			Scene_Options.prototype.update = function()
			{
				_Scene_Options_update.call(this);

				if (RG19.OpenPS5Activity())
				{
					if (DataManager.isAnySavefileExists())
					{
						SceneManager.push(Scene_Load);
					} else {
						SceneManager.push(Scene_Title);
					}
				}
			}

			var _Scene_Title_update = Scene_Title.prototype.update;
			Scene_Title.prototype.update = function()
			{
				_Scene_Title_update.call(this);

				if (RG19.OpenPS5Activity())
				{
					if (DataManager.isAnySavefileExists()) {
						this.commandContinue();
					} else {
						this.commandNewGame();
						RG19.OpenPS5Activity_End();
					}
				}
			}

			var _Scene_Title_commandNewGame = Scene_Title.prototype.commandNewGame;
			Scene_Title.prototype.commandNewGame = function()
			{
				RG19.StartStory();
				_Scene_Title_commandNewGame.call(this);
			};

			var _Scene_Load_onLoadSuccess = Scene_Load.prototype.onLoadSuccess;
			Scene_Load.prototype.onLoadSuccess = function()
			{
				RG19.StartStory();
				_Scene_Load_onLoadSuccess.call(this);
			};
		}
		// XBOX
		if (RG19.GetSystem() == "XBOXONE" || RG19.GetSystem() == "SERIESX")
		{

			Scene_Title.prototype.drawGamertag = function() 
			{
				var x = RG19.XboxStuffLocationX;
				var y = RG19.XboxStuffLocationY;
				var maxWidth = Graphics.width - x * 2;
				//the console engine will actually use the right gamertag here
				var text = "CoolGamerTag";
				this._gamertagSprite.bitmap.outlineColor = 'black';
				this._gamertagSprite.bitmap.outlineWidth = 8;
				this._gamertagSprite.bitmap.fontSize = 26;
				this._gamertagSprite.bitmap.drawText(text, x, y, maxWidth, 48, 'left');
				this._gamertagSprite.bitmap.drawText("Press Y to change profile", x, y+RG19.XboxStuffLineSpacing, maxWidth, 48, 'left');
			}

			RG19.Scene_Title_createForeground = Scene_Title.prototype.createForeground;
			Scene_Title.prototype.createForeground = function() 
			{
				RG19.Scene_Title_createForeground.call(this);
				this._gamertagSprite = new Sprite(new Bitmap(Graphics.width, Graphics.height));
				this.addChild(this._gamertagSprite);
				this.drawGamertag();
			};
			
			RG19.Scene_Title_update = Scene_Title.prototype.update;
			Scene_Title.prototype.update = function(sprite) 
			{
				RG19.Scene_Title_update.call(this);
				if(this.isBusy()) return;
				if(Input.isTriggered('menu')) {
					RG19.RequestAccountPicker();
				}
			}
		}
	}

	var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
	Game_Interpreter.prototype.pluginCommand = function(command, args)
	{
		_Game_Interpreter_pluginCommand.call(this, command, args);
		if (command === 'RG19')
		{
			switch (args[0]) {
				case 'StartStory':
					RG19.StartStory();
					break;
				case 'EndStory':
					RG19.EndStory();
					break;
			}
		}
	};


	var _ImageManager_loadBitmap = ImageManager.loadBitmap;
	ImageManager.loadBitmap = function(folder, filename, hue, smooth)
	{
		// Replace Japanese names
		if(false)
		{
			if (filename == "オプション") filename = "Options"; else
			if (filename == "クラフト") filename = "Craft"; else
			if (filename == "とじる") filename = "Quit"; else
			if (filename == "プロフィール") filename = "Profile"; else
			if (filename == "ポケット") filename = "Pockets"; else
			if (filename == "ロード") filename = "Load"; else
			if (filename == "装備") filename = "Equip";	
		}

		// Problematic name
		if (filename == "I_hey..._1[BUST]")
			filename = "I_hey____1[BUST]";


		return _ImageManager_loadBitmap.call(this, folder, filename, hue, smooth);
	};

	// Code to make the game boot on JP the 1st time
	var _ConfigManager_makeData = ConfigManager.makeData;
	ConfigManager.makeData = function()
	{
		var config = _ConfigManager_makeData.call(this);
		config.firstBoot = this.firstBoot;
		return config;
	};
	ConfigManager.firstBoot = true;

	var _ConfigManager_applyData = ConfigManager.applyData;
	ConfigManager.applyData = function(config)
	{
		_ConfigManager_applyData.apply(this, arguments);
		this.firstBoot = config['firstBoot'] != undefined ? !!config['firstBoot'] : true;
	};

	var _ConfigManager_getLanguage = ConfigManager.getLanguage;
	ConfigManager.getLanguage = function()
	{
		return "EN";
	};

	var _SceneManager_goto = SceneManager.goto;
	SceneManager.goto = function(sceneClass)
	{
		//console.memory_usage(true);
		console.run_gc();
		_SceneManager_goto.call(this, sceneClass);
	}

	// This is needed due to ISAT allocates stuff on every attack >.<!
	var _BattleManager_updateTurnEnd = BattleManager.updateTurnEnd;
	BattleManager.updateTurnEnd = function()
	{
		console.run_gc();
		_BattleManager_updateTurnEnd.call(this);
	}
	
	//var _Window_Message_removeShakingSprites = Window_Message.prototype.removeShakingSprites;
	//Window_Message.prototype.removeShakingSprites = function() {
	//	_Window_Message_removeShakingSprites.call(this);
	//	console.run_gc();
	//};
})();

console.log("RG19 loaded!");
console.log(process.mainModule.filename);
