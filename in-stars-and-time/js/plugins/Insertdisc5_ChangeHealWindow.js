//if bonnie gone then it only shows the # of ppl in party (aka just sif) but otherwise -1 so bonnie doesnt appear
Window_MenuStatus.prototype.maxItems = function() {
    if ($gameSwitches.value(22)){
        return $gameParty.size();
    }
    else{
        return $gameParty.size();
    }
};

//only name and hp
Window_Base.prototype.drawActorSimpleStatus2 = function(actor, x, y, width) {
    var lineHeight = this.lineHeight();
    var x2 = x + 200;
    var width2 = Math.min(560, width - 180 - this.textPadding());
    this.drawActorName(actor, x+10, y + lineHeight * 1);
    //this.drawActorIcons(actor, x3, y + lineHeight * 1);
    this.drawActorHp(actor, x2, y + lineHeight * 1, width2);
};

//remove faces since they dont work super well
Window_MenuStatus.prototype.drawItem = function(index) {
    this.drawItemBackground(index);
    //this.drawItemImage(index);
    this.drawItemStatus(index);
};

//draw simplestatus2
Window_MenuStatus.prototype.drawItemStatus = function(index) {
    var actor = $gameParty.members()[index];
    var rect = this.itemRect(index);
    var x = rect.x;
    var y = rect.y;
    var width = rect.width - x - this.textPadding();
    this.drawActorSimpleStatus2(actor, x, y, width);
};