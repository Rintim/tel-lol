// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// This File is From Tel-LOLTeam
// Licensed under BSD-2-Caluse
// File: extension.js (Tel-LOLTeam/lol-extension/extension.js)
// Content:
// Copyright (c) 2022 Tel-LOLTeam All rights reserved
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

"use strict";

game.import("extension", (lib, game, ui, get, ai, _status) => ({
	name: "英雄联盟扩展",
	editable: false,
	content: () => {
		if (typeof game.shijianCreateProgress != "function") {
			game.shijianCreateProgress = (title, max, fileName, value) => {
				const parent = ui.create.div(ui.window, {
					textAlign: "center",
					width: "300px",
					height: "150px",
					left: "calc(50% - 150px)",
					top: "auto",
					bottom: "calc(50% - 75px)",
					zIndex: "10",
					boxShadow: "rgb(0 0 0 / 40 %) 0 0 0 1px, rgb(0 0 0 / 20 %) 0 3px 10px",
					backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))",
					borderRadius: "8px"
				});

				parent.className = "dialog";

				const container = ui.create.div(parent, {
					position: "absolute",
					top: "0",
					left: "0",
					width: "100%",
					height: "100%"
				});

				container.ontouchstart = ui.click.dialogtouchStart;
				container.ontouchmove = ui.click.touchScroll;
				container.style.WebkitOverflowScrolling = "touch";
				parent.ontouchstart = ui.click.dragtouchdialog;

				const caption = ui.create.div(container, "", title, {
					position: "relative",
					paddingTop: "8px",
					fontSize: "20px"
				});

				ui.create.node("br", container);

				const tip = ui.create.div(container, {
					position: "relative",
					paddingTop: "8px",
					fontSize: "20px",
					width: "100%"
				});

				const file = ui.create.node("span", tip, "", fileName);
				file.style.width = file.style.maxWidth = "100%";
				ui.create.node("br", tip);
				const index = ui.create.node("span", tip, "", String(value || "0"));
				ui.create.node("span", tip, "", "/");
				const maxSpan = ui.create.node("span", tip, "", String(max || "未知"));

				ui.create.node("br", container);

				const progress = ui.create.node("progress.zxgxProgress", container);
				progress.setAttribute("value", value || "0");
				progress.setAttribute("max", max);

				parent.getTitle = () => caption.innerText;
				parent.setTitle = (title) => caption.innerText = title;
				parent.getFileName = () => file.innerText;
				parent.setFileName = (name) => file.innerText = name;
				parent.getProgressValue = () => progress.value;
				parent.setProgressValue = (value) => progress.value = index.innerText = value;
				parent.getProgressMax = () => progress.max;
				parent.setProgressMax = (max) => progress.max = maxSpan.innerText = max;
				return parent;
			};
		}
		lib.arenaReady.push(() => {
			if (lib.extensionPack.英雄联盟扩展) {
				const address = "https://ghproxy.com/https://raw.githubusercontent.com/Show-K/tel-lol/master/";
				fetch(`${address}update.js?date=${(new Date()).getTime()}`)
					.then(response => {
						if (!response.ok) throw response;
						return response.text();
					})
					.then(text => {
						const data = eval(text);
						console.log(data);
						const localVersion = lib.extensionPack.英雄联盟扩展.version || "0";
						if (data.version == localVersion) return;
						else {
							/**
							 * @param { string } v1
							 * @param { string } v2
							 * @returns { boolean | "equal" }
							 */
							function compareVersion(v1 = "", v2 = "") {
								if (v1 === v2) return "equal";
								let version_1 = v1.split(".").map(item => Number(item) || 0);
								let version_2 = v2.split(".").map(item => Number(item) || 0);
								if (version_1.length == 1 && version_1[0] == 0) {
									if (version_2.length > 1 || version_2[0] > 0) return true;
								} else if (version_2.length == 1 && version_2[0] == 0) {
									return true;
								} else {
									for (let i = 0; i < version_1.length && i < version_2.length; i++) {
										version_1[i] = version_1[i] || 0;
										version_2[i] = version_2[i] || 0;
										if (version_2[i] > version_1[i]) return true;
										if (version_1[i] > version_2[i]) return false;
									}
								}
							};

							if (!compareVersion(localVersion, data.version)) return;
						}

						function myConfirm(message, callback) {
							if (navigator.notification && navigator.notification.confirm) {
								navigator.notification.confirm(message, index => {
									index == 1 && callback();
								}, ["确定", "取消"]);
							} else {
								window.confirm(message) && callback();
							}
						}

						myConfirm(`《英雄联盟扩展》检测到更新（${data.version}），是否更新？\n${data.changeLog}`, () => {
							/**
							 * @param { string } url 
							 */
							function download(url, success, error) {
								const path = "extension/英雄联盟扩展";
								if (window.FileTransfer) {
									function downloadFile() {
										let fileTransfer = new FileTransfer();
										fileTransfer.download(encodeURI(`${address}${url}?date=${(new Date()).getTime()}`), encodeURI(`${lib.assetURL}${path}/${url}`), success, error);
									}
									window.resolveLocalFileSystemURL(lib.assetURL,
										/**
										 * @param { DirectoryEntry } DirectoryEntry 
										 */
										DirectoryEntry => {
											DirectoryEntry.getDirectory(path, { create: false }, dir => {
												dir.getDirectory(url, { create: false }, () => {
													console.error(`${path}/${url}是文件夹`);
													success(true);
												}, downloadFile);
											}, downloadFile);
										}, downloadFile);
								} else {
									fetch(`${address}${url}?date=${(new Date()).getTime()}`)
										.then(response => response.arrayBuffer())
										.then(arrayBuffer => {
											game.ensureDirectory(path, () => {
												const fs = require("fs");
												const p = require("path");
												const filePath = p.join(__dirname, path, url);
												if (fs.existsSync(filePath)) {
													const stat = fs.statSync(filePath);
													if (stat.isDirectory()) {
														console.error(`${path}/${url}是个文件夹`);
														return success(true);
													}
												}
												fs.writeFile(filePath, Buffer.from(arrayBuffer), null, e => {
													if (e) error(e);
													else success();
												});
											});
										})
										.catch(response => error(new Error(response.statusText)));
								}
							}

							/**
							 * @param { string[] } files 
							 */
							function downloadList(files) {
								if (!Array.isArray(files) || files.length == 0) return;
								let i = 0;
								const progress = game.shijianCreateProgress("更新《英雄联盟扩展》", files.length, files[0], i);
								const success = skip => {
									if (!files[++i]) {
										progress.setProgressValue(files.length);
										progress.setFileName("下载完成");
										setTimeout(() => {
											progress.remove();
											setTimeout(() => {
												alert("《英雄联盟扩展》更新完成，将自动重启");
												game.reload();
											}, 100);
										}, 200);
										return;
									}
									progress.setProgressValue(i);
									progress.setFileName(files[i]);
									download(files[i], success, error);
								};
								const error = e => {
									console.log("下载失败", e);
									progress.setFileName(`重新下载: ${files[i]}`);
									download(files[i], success, error);
								};

								download(files[i], success, error);
							}

							/** @type { string[] } */
							const files = localVersion == data.oldversion ? data.updateFiles : data.allFiles;
							downloadList(files);
						});
					})
					.catch(e => {
						if (e.message == "Failed to fetch") alert("网络连接失败");
						else if (e instanceof Response) console.error(`英雄联盟扩展: ${e.statusText}`);
						else console.error("其他错误", e);
					});
			} else {
				console.error("lib.extensionPack.英雄联盟扩展不存在，无法在线更新");
			}
		});
		// 动态描述
		{
			let dynamicTranslates = {
				"tel@lol.skill_exploitSoul": (player) => {
					let info = "使命技，当一名其他角色受到伤害后，若其拥有【魂屑】，你令其失去一枚【魂屑】，然后你：获得一枚【魂屑】，观看其手牌并将其一张牌交给一名角色，回复一点体力。</br>";
					switch (player.storage["tel@lol.skill_exploitSoul"]) {
						case 0:
							return info + [
								"·成功：当你拥有6枚以上的【魂屑】时，你增加一点体力上限，然后获得【狂食】",
								"·失败：当你濒死时，你失去一点体力上限，将体力值回复至体力上限，查看所有人的身份牌，然后获得【视界】"
							].join("</br>");
						case 1:
							return info + "·<span class='greentext'>成功：当你拥有6枚以上的【魂屑】时，你增加一点体力上限，然后获得【狂食】</span>";
						case -1:
							return info + "·<span class='firetext'>失败：当你濒死时，你失去一点体力上限，将体力值回复至体力上限，查看所有人的身份牌，然后获得【视界】</span>"
					}
				},
				"tel@lol.skill_Balance": (player) =>
					`转换技，出牌阶段限一次，你可以弃置：${player.storage["tel@lol.skill_balance"] ? 
						"<span class='bluetext'>阳：一张红色手牌，然后从牌堆中获得一张黑色基本牌；</span>阴：一张黑色手牌，然后从牌堆中获得一张红色锦囊牌" 
						: "阳：一张红色手牌，然后从牌堆中获得一张黑色基本牌；<span class='bluetext'>阴：一张黑色手牌，然后从牌堆中获得一张红色锦囊牌</span>"}；
							当你于本回合使用以此法获得的牌时，你可以视为使用一张：${player.storage["tel@lol.skill_balance"] ?
								"<span class='bluetext'>阳：锦囊牌；</span>阴：基本牌。" : "阳：锦囊牌；<span class='bluetext'>阴：基本牌。</span>"}`
			}

			for (let name in dynamicTranslates) {
				lib.dynamicTranslate[name] = dynamicTranslates[name];
			}
		}
	},
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
					let rintim_characters = ["tel_dlol_Darius", "tel_nlol_Nautilus", "tel_tlol_TahmKench", "tel_alol_Ahri"];
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

			//
			{
				window.lolfun = new Object;
				const std2 = {
					expandExtPrefix(name, ...paths) {
						return `${(lib.device || lib.node) ? `ext:${name}/` : `db:extension-${name}:`}${paths.join("/")}`;
					},
					expandExtAudio(extname, audioname, time, ...paths) {
						return [`../../extension/${extname}/${paths.join("/")}/${audioname}`, time];
					}
				};
				for (const name in std2) {
					Object.defineProperty(window.lolfun, name, {
						value: std2[name],
						configurable: false,
						enumerable: false,
						writable: false
					});
				}
			}
			{
				window.lolTemplate = new Object;
				const template = {
					aiSha: {
						skillTagFilter: function (player) {
							return player.countCards('hes', { color: 'black' });
						},
						respondSha: true,
						yingbian: function (card, player, targets, viewer) {
							if (get.attitude(viewer, player) <= 0) return 0;
							var base = 0, hit = false;
							if (get.cardtag(card, 'yingbian_hit')) {
								hit = true;
								if (targets.filter(function (target) {
									return target.hasShan() && get.attitude(viewer, target) < 0 && get.damageEffect(target, player, viewer, get.nature(card)) > 0;
								})) base += 5;
							}
							if (get.cardtag(card, 'yingbian_all')) {
								if (game.hasPlayer(function (current) {
									return !targets.contains(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
								})) base += 5;
							}
							if (get.cardtag(card, 'yingbian_damage')) {
								if (targets.filter(function (target) {
									return get.attitude(player, target) < 0 && (hit || !target.mayHaveShan() || player.hasSkillTag('directHit_ai', true, {
										target: target,
										card: card,
									}, true)) && !target.hasSkillTag('filterDamage', null, {
										player: player,
										card: card,
										jiu: true,
									})
								})) base += 5;
							}
							return base;
						},
						canLink: function (player, target, card) {
							if (!target.isLinked() && !player.hasSkill('wutiesuolian_skill')) return false;
							if (target.mayHaveShan() && !player.hasSkillTag('directHit_ai', true, {
								target: target,
								card: card,
							}, true)) return false;
							if (player.hasSkill('jueqing') || player.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
							return true;
						},
						basic: {
							useful: [5, 3, 1],
							value: [5, 3, 1],
						},
						order: function (item, player) {
							if (player.hasSkillTag('presha', true, null, true)) return 10;
							if (lib.linked.contains(get.nature(item))) {
								if (game.hasPlayer(function (current) {
									return current != player && current.isLinked() && player.canUse(item, current, null, true) && get.effect(current, item, player, player) > 0 && lib.card.sha.ai.canLink(player, current, item);
								}) && game.countPlayer(function (current) {
									return current.isLinked() && get.damageEffect(current, player, player, get.nature(item)) > 0;
								}) > 1) return 3.1;
								return 3;
							}
							return 3.05;
						},
						result: {
							target: function (player, target, card, isLink) {
								var eff = function () {
									if (!isLink && player.hasSkill('jiu')) {
										if (!target.hasSkillTag('filterDamage', null, {
											player: player,
											card: card,
											jiu: true,
										})) {
											if (get.attitude(player, target) > 0) {
												return -7;
											}
											else {
												return -4;
											}
										}
										return -0.5;
									}
									return -1.5;
								}();
								if (!isLink && target.mayHaveShan() && !player.hasSkillTag('directHit_ai', true, {
									target: target,
									card: card,
								}, true)) return eff / 1.2;
								return eff;
							},
						},
						tag: {
							respond: 1,
							respondShan: 1,
							damage: function (card) {
								if (card.nature == 'poison') return;
								return 1;
							},
							natureDamage: function (card) {
								if (card.nature) return 1;
							},
							fireDamage: function (card, nature) {
								if (card.nature == 'fire') return 1;
							},
							thunderDamage: function (card, nature) {
								if (card.nature == 'thunder') return 1;
							},
							poisonDamage: function (card, nature) {
								if (card.nature == 'poison') return 1;
							},
						},
					}
				};
				for (const name in template) {
					Object.defineProperty(window.lolTemplate, name, {
						value: template[name],
						configurable: false,
						enumerable: false,
						writable: false
					});
				}
			}

			// 加载扩展
			{
				// 加载扩展角色
				// 保守起见先写好复用代码
				lib.init.js(lib.assetURL + `extension/${NAME}/src`, "character");
				lib.config.all.characters.push(`${PREFIX}_${ID}`);
				if (!lib.config.characters.includes(`${PREFIX}_${ID}`)) lib.config.characters.push(`${PREFIX}_${ID}`);
				lib.translate[`${PREFIX}_${ID}_character_config`] = NAME;

				// 加载扩展卡牌
				lib.init.js(lib.assetURL + `extension/${NAME}/src`, "card");
				lib.config.all.cards.push(`${PREFIX}_${ID}`);
				if (!lib.config.cards.includes(`${PREFIX}_${ID}`)) lib.config.cards.push(`${PREFIX}_${ID}`);
				lib.translate[`${PREFIX}_${ID}_card_config`] = NAME;
			}
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
		intro: "无名杀-英雄联盟扩展交流群745450485",
		author: "灵徒<br>代码编写：<span style=\"background-image:-webkit-linear-gradient(left,aqua 0%,lime 5%,pink 10%,cyan 15%,deepSkyBlue 20%,mediumSlateBlue 25%,silver 30%,coral 35%,deepPink 40%,greenYellow 45%,wheat 50%,aqua 55%,lime 60%,pink 65%,cyan 70%,deepSkyBlue 75%,mediumSlateBlue 80%,silver 85%,coral 90%,deepPink 95%,greenYellow 100%);  -webkit-background-clip:text; -webkit-text-fill-color:transparent;text-shadow:none;\">千面猫，ansha，带火星的木条，子过，浪琴婊，夜凌，Show-K，\u94dd\u5b9d</span>",
		diskURL: "",
		forumURL: "",
		version: "2.1.44.1",
	}
}));
