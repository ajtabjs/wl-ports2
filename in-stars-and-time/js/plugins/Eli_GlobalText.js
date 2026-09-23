//============================================================================
// Eli_GlobalText.js
//============================================================================

/*:
@plugindesc ♦5.0.1♦ You can use escape codes in every window!
@author Hakuen Studio

@help
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
If you like my work, please consider supporting me on Patreon!
Patreon      → https://www.patreon.com/hakuenstudio
Terms of Use → https://www.hakuenstudio.com/terms-of-use-5-0-0
Facebook     → https://www.facebook.com/hakuenstudio
Instagram    → https://www.instagram.com/hakuenstudio
Twitter      → https://twitter.com/hakuen_studio
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
==============================================================================
Features
==============================================================================

● Activate escape codes to be used in any window!

==============================================================================
How to use
==============================================================================

You can use Auto mode on plugin parameters, and all text will be converted 
automatically.

If you set to Manual mode, you have to choose a tag of your choice in the 
plugin parameters.

Then, just type the tag as the first letter in any text.

Example:
-Actor name
§\c[3]Harold

*NOTE¹: Not all codes can work outside the message box, such as waiting for 
frames or opening the gold window.

*NOTE²: Using escape codes in centralized texts, in horizontal windows 
(like the item category) ends up decentralizing them. Use Eli Message Actions
to centralize them with escape codes.

*NOTE³: There are some windows that I do not add the global text 
functionality because it messes with the text.
Window_Shop, Window_ItemList, Window_NumberInput, Window_SkillList.

*NOTE 4: In auto mode, you will need to manually assign a color for the
texts that uses SYSTEM COLORS on the Database > Terms. Like HP, MP, TP, etc...

============================================================================
Update Log
============================================================================

https://tinyurl.com/globalTextLog

============================================================================

@param auto
@text Mode
@type boolean
@on Auto
@off Manual
@desc If you set to Manual, you will have to put a tag on the first letter of any text.
@default false

@param tag
@text Tag
@type text
@desc The tag used to detect if the text has escape codes. Must be used as first letter.
@default §

*/

"use strict"

var Eli = Eli || {}
var Imported = Imported || {}
Imported.Eli_GlobalText = true

/* ========================================================================== */
/*                                   PLUGIN                                   */
/* ========================================================================== */
{

Eli.GlobalText = {

    version: 5.01,
    url: "https://hakuenstudio.itch.io/eli-super-text",
    parameters: {auto: false, tag: '§'},
    alias: {},
    regGlobalEscape: null,
    regIcon: /\\i/gi,

    initialize(){
        this.initParameters()
        this.initPluginCommands()
        this.regGlobalEscape = new RegExp(this.parameters.tag, "gi")
    },

    initParameters(){
        this.parameters = Eli.PluginManager.createParameters()
    },

    initPluginCommands(){
        const commands = []
        Eli.PluginManager.registerCommands(this, commands)
    },

    param(){
        return this.parameters
    },
}

const Plugin = Eli.GlobalText
const Alias = Eli.GlobalText.alias

Plugin.initialize()

/* ------------------------------ GAME MESSAGE ------------------------------ */
/* 
    Talvez isso seja inútil. Não lembro porque coloquei isso. 
    Talvez para converter escape codes de variáveis dentro de variáveis.
    Mas desabilitando isso, o Word Wrap do Yanfly funciona.
*/
{

Alias.Game_Message_add = Game_Message.prototype.add
Game_Message.prototype.add = function(text) {
    text = Eli.Utils.convertEscapeVariablesOnly(text)
    text = text.replace(Plugin.regGlobalEscape, '')
    Alias.Game_Message_add.call(this, text)
}

}

/* ------------------------------- WINDOW BASE ------------------------------ */
{

Alias.Window_Base_initialize = Window_Base.prototype.initialize
Window_Base.prototype.initialize = function(x, y, width, height){
    Alias.Window_Base_initialize.call(this, x, y, width, height)
    this._globalTag = Plugin.param().tag
}

Alias.Window_Base_drawText = Window_Base.prototype.drawText
Window_Base.prototype.drawText = function(text, x, y, maxWidth, align) {
    if(this.canDrawGlobalText(String(text))){
        text = String(text).replace(Plugin.regGlobalEscape, '')
        this.drawTextEx(text, x, y)
    }else{
        Alias.Window_Base_drawText.call(this, text, x, y, maxWidth, align)
    }
}

Alias.Window_Base_drawTextEx = Window_Base.prototype.drawTextEx
Window_Base.prototype.drawTextEx = function(text, x, y) {
    if(text){
        text = this.convertEscapeCharacters(text)
        text = text.replace(Plugin.regGlobalEscape, '')
    }

    return Alias.Window_Base_drawTextEx.call(this, text, x, y)
}

Window_Base.prototype.isWindow_ShopStatus = function(){
    return this instanceof Window_ShopStatus
}

Window_Base.prototype.isWindow_NumberInput = function(){
    return this instanceof Window_NumberInput
}

Window_Base.prototype.isWindow_ItemOrSkillList = function(){
    return this instanceof Window_ItemList || this instanceof Window_SkillList
}

Window_Base.prototype.isWindow_NameInput = function(){
    return this instanceof Window_NameInput
}

Window_Base.prototype.isValidWindowForGlobalText = function(){
    return  !this.isWindow_ShopStatus() && !this.isWindow_NumberInput() &&
            !this.isWindow_ItemOrSkillList() && !this.isWindow_NameInput()
}

Window_Base.prototype.canDrawGlobalText = function(text){
    const startWithGlobalTag = text.charAt(0) === this._globalTag
    
    return text && (startWithGlobalTag || Plugin.param().auto) && this.isValidWindowForGlobalText()
}

}

}