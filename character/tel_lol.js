"use strict";
game.import("character", (lib, game, ui, get, ai, _status) => {
	/**
	 * @type {importCharacterConfig}
	 */
	const TEL_LOL = {};
	if (lib.device || lib.node) {
		for (const i in TEL_LOL.character) {
			TEL_LOL.character[i][4].push("ext:大乱桌斗/image/character/" + i + ".png");
		}
	}
	else {
		for (const i in TEL_LOL.character) {
			TEL_LOL.character[i][4].push("db:extension-大乱桌斗:image/character/" + i + ".png");
		}
	}
	return TEL_LOL;
});