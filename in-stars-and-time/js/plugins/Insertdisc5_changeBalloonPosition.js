Sprite_Character.prototype.updateBalloon = function() {
    this.setupBalloon();
    if (this._balloonSprite) {
        this._balloonSprite.x = this.x; //x position of the character
        this._balloonSprite.y = this.y - 55; //y position of the character minus height of the character
        if (!this._balloonSprite.isPlaying()) {
            this.endBalloon();
        }
    }
};