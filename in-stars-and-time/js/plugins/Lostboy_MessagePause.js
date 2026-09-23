
Window.prototype._refreshPauseSign = function() {
    var sx = 144;
    var sy = 96;
    var p = 24;
    this._windowPauseSignSprite.bitmap = this._windowskin;
    this._windowPauseSignSprite.anchor.x = 0.5;
    this._windowPauseSignSprite.anchor.y = 1;
    this._windowPauseSignSprite.move(this._width - 30, this._height - 15);
    this._windowPauseSignSprite.setFrame(sx, sy, p, p);
    this._windowPauseSignSprite.alpha = 0;
};

Window.prototype._updatePauseSign = function() {
    var sprite = this._windowPauseSignSprite;
    var x = Math.floor(this._animationCount / 10) % 2;
    var y = Math.floor(this._animationCount / 10 / 2) % 2;
    var sx = 144;
    var sy = 96;
    var p = 24;
    if (!this.pause) {
        sprite.alpha = 0;
    } else if (sprite.alpha < 1) {
        sprite.alpha = Math.min(sprite.alpha + 0.1, 1);
    }
    sprite.setFrame(sx+x*p, sy+y*p, p, p);
    sprite.visible = this.isOpen();
};