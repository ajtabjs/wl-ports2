// Override default behaviour
BattleManager.displayStartMessages = function() {
// don't want 1 message per enemy so remove this bit
//	$gameTroop.enemyNames().forEach(function(name) {
//		$gameMessage.add(TextManager.emerge.format(name));
// don't need format to replace %1 with enemy name
// also let's set it up so it doesn't display empty messages
		if (!!TextManager.emerge) $gameMessage.add(TextManager.emerge);
//	});
	if (this._preemptive) {
		$gameMessage.add(TextManager.preemptive.format($gameParty.name()));
	} else if (this._surprise) {
		$gameMessage.add(TextManager.surprise.format($gameParty.name()));
	}
};