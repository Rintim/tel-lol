game.import("extension", (lib, game, ui, get, ai, _status) => {
	return {
		name: "英雄联盟扩展",
		content: () => { },
		precontent: data => {
			if (data.enable) {
				const NAME = "英雄联盟扩展"
				const ID = "lol";
				const PREFIX = "tel";

				// 添加势力
				{
					const GROUPS = {
						"ling": ["灵", [0, 191, 255, 1]],
						"xing": ["星", [255, 146, 68, 1]],
						"han": ["寒", "#27B4FF"],
						"nu": ["沙", "#D5AA00"],
						"ai": ["艾", "#9374C3"],
						"de": ["德", "#6262FF"],
						"gang": ["港", "#3C5447"],
						"you": "幽",
						"yue": ["约", [141, 216, 255, 1]],
						"nuo": ["诺", "#3C9448"],
						"mo": ["魔", "#3C6448"],
						"zu": ["祖", "#524A24"],
						"xu": "虚"
					};

					for (const name in GROUPS) {
						const usename = name.global ? name.name : `${PREFIX}_${ID}_${name.name || name}`;
						const item = GROUPS[name];
						let translate, translate2;
						if (Array.isArray(item)) {
							translate = item[0];
							translate2 = item[2] || translate;
							let style = document.createElement("style");
							let color1, color2, color3, color4;
							if (Array.isArray(item[1])) color1 = color2 = color3 = color4 = item[1];
							else if (typeof item[1] == "string") {
								if (item[1][0] == "#") {
									let c1 = parseInt(`0x${item[1].slice(1, 3)}`);
									let c2 = parseInt(`0x${item[1].slice(3, 5)}`);
									let c3 = parseInt(`0x${item[1].slice(5, 7)}`);
									color1 = color2 = color3 = color4 = [c1, c2, c3, 1];
								}
							}
							else ({ color1, color2, color3, color4 } = item[1]);
							style.innerHTML = [
								`.player.identity[data-color="${usename}"],`,
								`div[data-nature="${usename}"],`,
								`span[data-nature="${usename}"] {text-shadow: black 0 0 1px,rgba(${color1.join()}) 0 0 2px,rgba(${color2.join()}) 0 0 5px,rgba(${color3.join()}) 0 0 10px,rgba(${color4.join()}) 0 0 10px}`,
								`div[data-nature="${usename}m"],`,
								`span[data-nature="${usename}m"] {text-shadow: black 0 0 1px,rgba(${color1.join()}) 0 0 2px,rgba(${color2.join()}) 0 0 5px,rgba(${color3.join()}) 0 0 5px,rgba(${color4.join()}) 0 0 5px,black 0 0 1px;}`,
								`div[data-nature="${usename}mm"],`,
								`span[data-nature="${usename}mm"] {text-shadow: black 0 0 1px,rgba(${color1.join()}) 0 0 2px,rgba(${color2.join()}) 0 0 2px,rgba(${color3.join()}) 0 0 2px,rgba(${color4.join()}) 0 0 2px,black 0 0 1px;}`
							].join("");
							document.head.appendChild(style);
						}
						else translate = translate2 = item;
						lib.group.add(usename);
						lib.translate[usename] = translate;
						lib.translate[`${usename}2`] = translate2;
						lib.groupnature[usename] = item[3] || usename;
					}
				}

				game.N_playDieAudio = function (playerID) {
					if (lib.config.background_speak) {
						let rintim_characters = ["lol_darius", "tel_nlol_Nautilus", "tel_tlol_TahmKench", "tel_alol_Ahri"];
						if (rintim_characters.includes(playerID)) game.playAudio("..", "extension", "英雄联盟扩展", "res", "audio/die", lib.character[playerID][5])
						else game.playAudio("..", "extension", "英雄联盟扩展", playerID + ".mp3")
					}
				};
				game.N_playVictoryAudio = function (playerID) {
					if (lib.config.background_speak) {
						game.playAudio("..", "extension", "英雄联盟扩展", "lolkz_shengli.mp3")
					}
				};
				game.N_playCardAudio = function (cardname) {
					if (lib.config.background_speak) {
						game.playAudio("..", "extension", "英雄联盟扩展", cardname + ".mp3")
					}
				};
				if (lib.config.mode == "boss") {
					lib.boss.lol_boss_foyege = {
						minion: {
							"2": "lol_yuanling_male",
							"8": "lol_yuanling_female",
						},
					}
					lib.boss.lol_boss_modekaisa = {
						minion: {
							"2": "lol_yanmo",
							"8": "lol_yingmo",
						},
					}
				}

				// 更改函数
				{
					get.cards = function (num) {
						if (_status.waitingForCards) {
							ui.create.cards.apply(ui.create, _status.waitingForCards);
							delete _status.waitingForCards;
						}
						var list = [];
						var card = false;
						if (typeof num != 'number') num = 1;
						if (num == 0) { card = true; num = 1; }
						if (num < 0) num = 1;
						while (num--) {
							if (ui.cardPile.hasChildNodes() == false) {
								if (_status.maxShuffle != undefined) {
									if (_status.maxShuffle == 0) {
										if (_status.maxShuffleCheck) {
											game.over(_status.maxShuffleCheck());
										}
										else {
											game.over('平局');
										}
										return [];
									}
									_status.maxShuffle--;
								}
								game.shuffleNumber++;
								var cards = [], i;
								for (var i = 0; i < lib.onwash.length; i++) {
									if (lib.onwash[i]() == 'remove') {
										lib.onwash.splice(i--, 1);
									}
								}
								if (_status.discarded) {
									_status.discarded.length = 0;
								}
								for (i = 0; i < ui.discardPile.childNodes.length; i++) {
									var currentcard = ui.discardPile.childNodes[i];
									currentcard.vanishtag.length = 0;
									if (get.info(currentcard).vanish || currentcard.storage.vanish) {
										currentcard.remove();
										continue;
									}
									cards.push(currentcard);
								}
								cards.randomSort();
								for (var i = 0; i < cards.length; i++) {
									ui.cardPile.appendChild(cards[i]);
								}
								if (_status.event.trigger) _status.event.trigger('washCard');
							}
							if (ui.cardPile.hasChildNodes() == false) {
								game.players.forEach(current => {
									console.log(current);
									if (current.hasSkillTag("cardOver")) {
										console.log("ok");
										let cards = new Array;
										if (game.checkMod(current, _status.event, cards, false, "cardOver", current)) {
											console.log(cards);
											cards.randomSort();
											for (let i = 0; i < cards.length; ++i) {
												ui.cardPile.appendChild(cards[i]);
											}
										}
									}
								});
							}
							if (ui.cardPile.hasChildNodes() == false) {
								game.over('平局');
								return [];
							}
							var cardx = ui.cardPile.removeChild(ui.cardPile.firstChild);
							cardx.original = 'c';
							list.push(cardx);
						}
						game.updateRoundNumber();
						if (card) return list[0];
						return list;
					};

					lib.element.player.removeMark = function (i, num, log) {
						if (typeof num != 'number' || !num) num = 1;
						if (typeof this.storage[i] != 'number' || !this.storage[i]) return;
						if (num > this.storage[i]) num = this.storage[i];
						this.storage[i] -= num;
						if (log !== false) {
							var str = false;
							var info = get.info(i);
							if (info && info.intro && (info.intro.name || info.intro.name2)) str = info.intro.name2 || info.intro.name;
							else str = lib.translate[i];
							if (str) game.log(this, '移去了', get.cnNumber(num), '个', '#g【' + str + '】');
						}
						this.syncStorage(i);
						this[(this.storage[i] || (lib.skill[i] && lib.skill[i].mark)) ? 'markSkill' : 'unmarkSkill'](i);
						let evt = game.createEvent("removeMarkTrigger");
						evt.player = this;
						evt.markname = i;
						evt.num = num;
						evt.setContent("emptyEvent");
					};
				}

				// 增加新函数
				{
					lib.element.player.doAction = function (action, args) {
						let evt = game.createEvent("doAction", false);
						evt.player = this;
						evt.action = action;
						for (let name in args) {
							evt.set(name, args[name]);
						}
						evt.set("logSkill", true);
						evt["_args"] = args;
						evt.setContent("doAction");
					};
					lib.element.content.doAction = function (event, player) {
						"step 0"
						if (event.logSkill) {
							if (event.targets) player.logSkill(event.action, event.targets);
							else if (event.target) player.logSkill(event.action, event.target);
							else player.logSkill(event.action);
						}
						"step 1"
						let name = event.action;
						let info = lib.skill[name];
						let evt = game.createEvent(name);
						evt.player = player;
						for (let name in event._args) {
							evt.set(name, event._args[name]);
						}
						evt.setContent(info.content);
						"step 2"
						event.trigger("doActionTrigger");
					}
				}

				lib.init.js(`${lib.assetURL}extension/${NAME}/character`, "tel_lol");
				lib.init.js(`${lib.assetURL}extension/${NAME}/card`, "tel_lol");
				lib.config.all.characters.push("tel_lol");
				if (!lib.config.characters.contains("tel_lol")) lib.config.characters.push("tel_lol");
				lib.translate["tel_lol_character_config"] = NAME;
				lib.config.all.cards.push("tel_lol");
				if (!lib.config.cards.contains("tel_lol")) lib.config.cards.push("tel_lol");
				lib.translate["tel_lol_card_config"] = NAME;
			}
		},
		help: {},
		config: {
			aoenplus: {
				name: "奥恩加强",
				intro: "奥恩的技能【匠神】可以敲任何装备",
				// onclick: function () {
				// 	if (!lib.config.aoenplus) {
				// 		game.saveConfig("aoenplus", true);
				// 	}
				// 	else {
				// 		game.saveConfig("aoenplus");
				// 	}
				// }
			}
		},
		package: {
			character: {
				character: {},
				translate: {}
			},
			card: {
				card: {},
				translate: {},
				list: []
			},
			skill: {
				skill: {},
				translate: {}
			},
			intro: "无名杀-英雄联盟扩展交流群745450485",
			author: "灵徒<br>代码编写：<span style=\"background-image:-webkit-linear-gradient(left,aqua 0%,lime 5%,pink 10%,cyan 15%,deepSkyBlue 20%,mediumSlateBlue 25%,silver 30%,coral 35%,deepPink 40%,greenYellow 45%,wheat 50%,aqua 55%,lime 60%,pink 65%,cyan 70%,deepSkyBlue 75%,mediumSlateBlue 80%,silver 85%,coral 90%,deepPink 95%,greenYellow 100%);  -webkit-background-clip:text; -webkit-text-fill-color:transparent;text-shadow:none;\">千面猫，ansha，带火星的木条，子过，浪琴婊，夜凌，2HAlO₂·H₂Oฅฅ*，Show-K</span>",
			diskURL: "",
			forumURL: "",
			version: "1.1.37.2",
		},
		files: {
			character: [],
			card: [],
			skill: []
		}
	};
});