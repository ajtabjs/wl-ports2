Sprite_Enemy.prototype.updateCollapse = function() {
    this.blendMode = Graphics.BLEND_ADD;
    this.setBlendColor([191, 191, 191, 191]);
    this.opacity *= this._effectDuration / (this._effectDuration + 1);
};