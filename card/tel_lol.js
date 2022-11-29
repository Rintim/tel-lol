"use strict";
game.import("card", (lib, game, ui, get, ai, _status) => {
	/**
	 * @type {importCardConfig}
	 */
	const TEL_LOL = {
		card: {
			"lol_xinmy": {
				derivation: "lolkz_glfs",
				type: "equip",
				subtype: "equip1",
				distance: {
					attackFrom: -1,
				},
				ai: {
					basic: {
						equipValue: 1,
					},
				},
				skills: ["ludan12", "dhqiandan", "hhzhayao", "sgxiandan"],
				destroy: "lol_mingyun",
				fullskin: true,
			},
			"lol_mieshi": {
				type: "equip",
				subtype: "equip5",
				ai: {
					basic: {
						equipValue: 3,
					},
				},
				skills: ["lol_mieshi_skill"],
				enable: true,
				selectTarget: -1,
				filterTarget: function (card, player, target) {
					return target == player;
				},
				modTarget: true,
				allowMultiple: false,
				content: function () {
					if (cards.length && get.position(cards[0], true) == "o") target.equip(cards[0]);
				},
				toself: true,
				fullskin: true,
			},
			"lolkz_hudun": {
				vanish: true,
				derivation: "lolkz_seti",
				type: "delay",
				filterTarget: true,
				judge: function (card) {
					return 0
				},
				effect: function () {
				},
				ai: {
					basic: {
						order: 1,
						useful: 1,
						value: 4,
					},
					result: {
						target: 1,
					},
				},
				selectTarget: 1,
				enable: true,
				content: function () {
					target.addJudge(card, cards);
				},
				allowMultiple: false,
				fullskin: true,
				global: ["lolkz_hudun1", "lolkz_hudun1_1", "lolkz_hudun1_2", "lolkz_hudun1_3"],
			},
			"lol_zhiliao": {
				fullskin: true,
				type: "basic",
				enable: true,
				savable: true,
				filterTarget: function (card, player, target) {
					return target.hp < target.maxHp;
				},
				content: function () {
					target.recover();
				},
				ai: {
					basic: {
						useful: [7, 2],
						value: [7, 2],
					},
					order: 2.2,
					result: {
						target: 2,
					},
					tag: {
						recover: 1,
						save: 1,
					},
				},
			},
			"lol_shanxian": {
				audio: true,
				fullskin: true,
				type: "basic",
				notarget: true,
				global: ["lol_shanxian"],
				content: function () {
					var evt = event.getParent(3)._trigger;
					if (evt.lol_shanxian) {
						evt.cancel();
						player.storage.lol_shanxian2 = evt.player;
						player.addTempSkill("lol_shanxian2");
					}
				},
				ai: {
					useful: function () {
						return 6;
					},
					result: {
						player: 1,
					},
					value: 5,
				},
			},
			"lol_chengjie": {
				fullskin: true,
				type: "basic",
				enable: true,
				filterTarget: function (card, player, target) {
					return target != player;
				},
				content: function () {
					target.loseHp();
				},
				ai: {
					basic: {
						useful: [7, 2],
						value: [7, 2],
					},
					order: 2.2,
					result: {
						target: -2,
					},
				},
				selectTarget: 1,
			},
			"lol_qingxishu": {
				audio: true,
				fullskin: true,
				type: "basic",
				selectTarget: -1,
				enable: true,
				filterTarget: function (card, player, target) {
					return target == player;
				},
				modTarget: true,
				content: function () {
					var num = player.maxHp - player.countCards("h");
					if (num > 0) {
						player.draw(num);
					}
				},
				ai: {
					useful: function () {
						return 2;
					},
					value: 0,
				},
			},
			"lol_xingshen": {
				audio: true,
				fullskin: true,
				type: "delay",
				modTarget: function (card, player, target) {
					return lib.filter.judge(card, player, target);
				},
				enable: function (card, player) {
					return player.canAddJudge(card);
				},
				filterTarget: function (card, player, target) {
					return lib.filter.judge(card, player, target);
				},
				selectTarget: 1,
				judge: function (card) {
					if (get.suit(card) == "club") return -2;
					if (get.suit(card) == "diamond") return 1;
					return 0;
				},
				effect: function () {
					var card = cards[0];
					if (!card.storage.lol_xingshen) card.storage.lol_xingshen = 1;
					if (result.judge != 0) {
						player.popup("判定生效", "wood", false);
						if (result.suit == "diamond") {
							player.draw(card.storage.lol_xingshen);
							player.popup("洗具", "wood", false);
						}
						if (result.suit == "club") {
							player.loseHp(card.storage.lol_xingshen);
							player.popup("杯具", "fire", false);
						}
					} else {
						player.popup("判定失效", "fire", false);
						card.storage.lol_xingshen++;
						player.addJudgeNext(card);
					}
				},
				cancel: function () {
					player.addJudgeNext(card);
				},
				ai: {
					basic: {
						order: 1,
						useful: 1,
						value: 5,
					},
					result: {
						target: function (player, target) {
							return lib.card.shandian.ai.result.target(player, target);
						},
					},
				},
			},
			"lol_rumengyao": {
				audio: true,
				fullskin: true,
				type: "delay",
				modTarget: function (card, player, target) {
					return lib.filter.judge(card, player, target);
				},
				enable: function (card, player) {
					return player.canAddJudge(card);
				},
				filterTarget: function (card, player, target) {
					return (lib.filter.judge(card, player, target));
				},
				selectTarget: 1,
				judge: function (card) {
					if (get.suit(card) == "diamond") return 2;
					return 0;
				},
				effect: function () {
					if (result.suit == "diamond") {
						player.skip("phaseDiscard");
					}
				},
				ai: {
					basic: {
						order: 1,
						useful: 0,
						value: 0,
					},
					result: {
						target: 1,
					},
				},
				content: function () {
					target.addJudge(card, cards);
				},
			},
			"lol_mojin": {
				type: "equip",
				subtype: "equip5",
				ai: {
					basic: {
						equipValue: 3,
					},
				},
				skills: ["lol_xianxuemojin_skill", "lol_xianxuemojin_skillx"],
				enable: true,
				selectTarget: -1,
				filterTarget: function (card, player, target) {
					return target == player;
				},
				modTarget: true,
				allowMultiple: false,
				content: function () {
					if (cards.length && get.position(cards[0], true) == "o") target.equip(cards[0]);
				},
				toself: true,
				image: "ext:英雄联盟扩展/image/card/lol_mojin.png",
				fullskin: true,
			},
			"lol_zhongyashalou": {
				image: "ext:英雄联盟扩展/image/card/lol_zhongyashalou.png",
				type: "equip",
				subtype: "equip5",
				skills: ["lol_zhongya_skill"],
				fullskin: true,
			},
			"lol_zhongyabeilun": {
				image: "ext:英雄联盟扩展/image/card/lol_zhongyashalou.png",
				type: "equip",
				subtype: "equip5",
				skills: ["lol_rezhongya_skill"],
				fullskin: true,
			},
			"lol_kuangbaozhiren": {
				image: "ext:英雄联盟扩展/image/card/lol_kuangbaozhiren.png",
				type: "equip",
				subtype: "equip1",
				distance: {
					attackFrom: -1,
				},
				skills: ["lol_kuangbao_skill"],
				fullskin: true,
			},
			"lol_jushezhiya": {
				image: "ext:英雄联盟扩展/image/card/lol_jushezhiya.png",
				type: "equip",
				subtype: "equip1",
				distance: {
					attackFrom: -2,
				},
				skills: ["lol_jushe"],
				fullskin: true,
			},
			"lol_shoujizhe": {
				image: "ext:英雄联盟扩展/image/card/lol_shoujizhe.png",
				type: "equip",
				subtype: "equip1",
				distance: {
					attackFrom: -1,
				},
				skills: ["lol_shoujizhe_skill"],
				fullskin: true,
			},
			"lol_yinxiejian": {
				image: "ext:英雄联盟扩展/image/card/lol_yinxiejian.png",
				type: "equip",
				subtype: "equip1",
				distance: {
					attackFrom: -2,
				},
				skills: ["lol_yinxiejian_skill"],
				fullskin: true,
			},
			"lol_qixieren": {
				image: "ext:英雄联盟扩展/image/card/lol_qixieren.png",
				type: "equip",
				subtype: "equip1",
				distance: {
					attackFrom: -2,
				},
				skills: ["lol_qixie_skill"],
				fullskin: true,
			},
			"lol_luanna": {
				image: "ext:英雄联盟扩展/image/card/lol_luanna.png",
				type: "equip",
				subtype: "equip1",
				distance: {
					attackFrom: -3,
				},
				skills: ["lol_luanna_skill"],
				fullskin: true,
			},
			"lol_kuangfengzhili": {
				image: "ext:英雄联盟扩展/image/card/lol_kuangfengzhili.png",
				type: "equip",
				subtype: "equip1",
				distance: {
					attackFrom: -3,
				},
				skills: ["lol_kuangfeng_skill"],
				fullskin: true,
			},
			"lol_shouhutianshi": {
				image: "ext:英雄联盟扩展/image/card/lol_shouhutianshi.png",
				type: "equip",
				subtype: "equip5",
				skills: ["lol_shouhu"],
				fullskin: true,
			},
			"lol_jiushu": {
				image: "ext:英雄联盟扩展/image/card/lol_jiushu.png",
				type: "equip",
				subtype: "equip5",
				skills: ["lol_jiushu_skill"],
				fullskin: true,
			},
			"lol_kuangtukaijia": {
				image: "ext:英雄联盟扩展/image/card/lol_kuangtukaijia.png",
				type: "equip",
				subtype: "equip2",
				skills: [],
				onEquip: function () {
					player.gainMaxHp();
					player.recover();
				},
				onLose: function () {
					player.loseMaxHp();
				},
				fullskin: true,
			},
			"lol_kuangtuzhixin": {
				image: "ext:英雄联盟扩展/image/card/lol_kuangtuzhixin.png",
				type: "equip",
				subtype: "equip2",
				skills: ["lol_kuangtu"],
				onEquip: function () {
					player.gainMaxHp();
					player.recover();
				},
				onLose: function () {
					player.loseMaxHp();
				},
				fullskin: true,
			},
			"lol_zhenfenkaijia": {
				image: "ext:英雄联盟扩展/image/card/lol_zhenfenkaijia.png",
				type: "equip",
				subtype: "equip2",
				skills: ["lol_zhenfen"],
				fullskin: true,
			},
			"lol_jifendian": {
				image: "ext:英雄联盟扩展/image/card/lol_jifendian.png",
				type: "equip",
				subtype: "equip2",
				skills: ["lol_jifen"],
				fullskin: true,
			},
			"lol_qishizhishi": {
				image: "ext:英雄联盟扩展/image/card/lol_qishizhishi.png",
				type: "equip",
				subtype: "equip2",
				skills: ["lol_qishi", "lol_qishi3"],
				fullskin: true,
			},
			"lol_lvdun": {
				image: "ext:英雄联盟扩展/image/card/lol_lvdun.png",
				type: "equip",
				subtype: "equip2",
				skills: ["lol_lvdun", "lol_lvdun3"],
				fullskin: true,
			},
			"lol_ziranzhili": {
				image: "ext:英雄联盟扩展/image/card/lol_ziranzhili.png",
				type: "equip",
				subtype: "equip2",
				skills: ["lol_ziran"],
				fullskin: true,
			},
			"lol_lindongzhilin": {
				image: "ext:英雄联盟扩展/image/card/lol_lindongzhilin.png",
				type: "equip",
				subtype: "equip2",
				skills: ["lol_lindong"],
				fullskin: true,
			},
			"lol_jinjibeixin": {
				image: "ext:英雄联盟扩展/image/card/lol_jinjibeixin.png",
				type: "equip",
				subtype: "equip2",
				skills: ["lol_jinji"],
				fullskin: true,
			},
			"lol_jinjizhijia": {
				image: "ext:英雄联盟扩展/image/card/lol_jinjizhijia.png",
				type: "equip",
				subtype: "equip2",
				skills: ["lol_rejinji"],
				fullskin: true,
			},
			"lol_ludengdehuixiang": {
				image: "ext:英雄联盟扩展/image/card/lol_ludengdehuixiang.png",
				type: "equip",
				subtype: "equip5",
				skills: ["lol_ludeng"],
				fullskin: true,
			},
			"lol_ludengdejidang": {
				image: "ext:英雄联盟扩展/image/card/lol_ludengdejidang.png",
				type: "equip",
				subtype: "equip5",
				skills: ["lol_reludeng"],
				fullskin: true,
			},
			"lol_kuangzhanshijinjia": {
				image: "ext:英雄联盟扩展/image/card/lol_kuangzhanshijinjia.png",
				type: "equip",
				subtype: "equip4",
				distance: {
					globalFrom: -1,
				},
				skills: ["lol_kuangzhanshi"],
				fullskin: true,
			},
			"lol_minglangzhixue": {
				image: "ext:英雄联盟扩展/image/card/lol_minglangzhixue.png",
				type: "equip",
				subtype: "equip4",
				distance: {
					globalFrom: -1,
				},
				fullskin: true,
			},
			"lol_fashizhixue": {
				image: "ext:英雄联盟扩展/image/card/lol_fashizhixue.png",
				type: "equip",
				subtype: "equip4",
				distance: {
					globalFrom: -1,
				},
				fullskin: true,
			},
			"lol_qinglingzhixue": {
				image: "ext:英雄联盟扩展/image/card/lol_qinglingzhixue.png",
				type: "equip",
				subtype: "equip3",
				distance: {
					globalTo: 1,
				},
				fullskin: true,
			},
			"lol_shuiyinzhixue": {
				image: "ext:英雄联盟扩展/image/card/lol_shuiyinzhixue.png",
				type: "equip",
				subtype: "equip3",
				distance: {
					globalTo: 1,
				},
				skills: ["lol_shuiyin"],
				fullskin: true,
			},
			"lol_tiebanxie": {
				image: "ext:英雄联盟扩展/image/card/lol_tiebanxie.png",
				type: "equip",
				subtype: "equip3",
				distance: {
					globalTo: 1,
				},
				fullskin: true,
			},
		},
		skill: {},
		translate: {
			"lol_xinmy": "新命运",
			"ludan12": "12号鹿弹",
			dhqiandan: "大号铅弹",
			hhzhayao: "黑火炸药",
			sgxiandan: "双管霰弹",
			"sgxiandan_use": "双管霰弹",
			"lol_xinmy_info": "【12号鹿弹】<br/r>锁定·你的杀任何情况下只能指定攻击距离内的角色；你使用【杀】后，可以额外指定目标距离为一的角色。<br/r>【大号铅弹】<br/r>锁定·你的【杀】无视首个目标的防具；若你与首个目标距离为1，则伤害翻倍。<br/r>【黑火炸药】<br/r>锁定·当你使用【酒】后，你的【杀】均视为火【杀】。<br/r>【双管霞弹】<br/r>当你不因此法使用【杀】时，你使用的【杀】改为获得一枚“弹药”（至多2枚）；当你需要使用或打出【杀】时，你弃置一枚弹药视为使用或打出了该【杀】。",
			"lol_mieshi": "灭世者之帽",
			"lol_mieshi_info": "手牌数翻倍",
			"lolkz_hudun": "护盾",
			"lolkz_hudun_info": "你于判定阶段弃置此牌。当你受到伤害时，你可以弃置X张护盾，不足则全弃，然后取消此次受到的伤害。（X为你受到的伤害值）",
			"lolkz_huanpai": "换牌",
			"lolkz_huanpai_info": "此为卡牌大师技能专属卡牌，请勿操作",
			"lol_zhiliao": "治疗",
			"lol_zhiliao_info": "令一名角色回复一点体力",
			"lol_shanxian": "闪现",
			"lol_shanxian_info": "当你被指定为目标时，你可以使用此牌并取消之，然后本回合内你与其距离+1",
			"lol_chengjie": "惩戒",
			"lol_chengjie_info": "令一名其他角色失去一点体力",
			"lol_qingxishu": "清晰术",
			"lol_qingxishu_info": "使用此牌时将手牌补至体力上限",
			"lol_xingshen": "星神恩典",
			"lol_xingshen_info": "若为方片摸一张牌，若为梅花失去一点体力，可叠加",
			"lol_rumengyao": "入梦谣",
			"lol_rumengyao_info": "若为方片，跳过弃牌阶段",
			"lol_mojin": "鲜血魔井",
			"lol_mojin_info": "锁定·当你的【杀】造成伤害时，你弃置一张牌并获得x枚“血”{X为你造成的伤害}；当你濒死时，你将体力上限调整为“血”的数量并弃置所有“血”，然后你回复一点体力直到体力值等于体力上限，此过程中你每回复一点体力摸一张牌",
			"lol_zhongyashalou": "中亚沙漏",
			"lol_zhongyashalou_info": "轮次，当你受到伤害时，可以翻面取消之。",
			"lol_zhongyabeilun": "中亚悖论",
			"lol_zhongyabeilun_info": "当你受到伤害时，若你正面朝上，则你可以翻面并取消之",
			"lol_shouhutianshi": "守护天使",
			"lol_shouhutianshi_info": "锁定技，濒死时，将体力值回复至1，摸三张牌并弃置此装备",
			"lol_jiushu": "救赎",
			"lol_jiushu_info": "锁定技·当你进入濒死状态时，将体力值回复至上限，将手牌补至上限，然后弃置此装备",
			"lol_kuangbaozhiren": "狂暴之刃",
			"lol_kuangbaozhiren_info": "锁定技·每回合限一次，当你使用【杀】时，对目标额外结算一次",
			"lol_jushezhiya": "巨蛇之牙",
			"lol_jushezhiya_info": "锁定技·当你使用【杀】造成伤害后，弃置其所有的【护盾】和护甲",
			"lol_shoujizhe": "收集者",
			"lol_shoujizhe_info": "当你的【杀】指定唯一目标时，你可以取消之并弃置其一张牌，然后若其没有手牌，其受到1点伤害；若以此法令其进入濒死，其阵亡",
			"lol_yinxiejian": "饮血剑",
			"lol_yinxiejian_info": "锁定技·当你的【杀】造成非属性伤害时回复一点体力",
			"lol_qixieren": "泣血刃",
			"lol_qixieren_info": "锁定技·当你对一名角色使用的【杀】造成非属性伤害时，你回复一点体力，若体力值已满则改为获得等量屏障",
			"lol_luanna": "卢安娜的飓风",
			"lol_luanna_info": "你使用杀时可以指定与目标距离为1的额外一个目标",
			"lol_kuangfengzhili": "狂风之力",
			"lol_kuangfengzhili_info": "你使用的【杀】无距离限制，且可以指定攻击距离内至多2名其他角色为目标",
			"lol_kuangtukaijia": "狂徒铠甲",
			"lol_kuangtukaijia_info": "锁定技·此装备在防具区时，你拥有额外一点体力上限与体力值",
			"lol_kuangtuzhixin": "狂徒之心",
			"lol_kuangtuzhixin_info": "锁定技·此装备在防具区时，你拥有额外一点体力上限与体力值；回合结束时，若你的体力值没有减少，则回复一点体力",
			"lol_zhenfenkaijia": "振奋铠甲",
			"lol_zhenfenkaijia_info": "回复体力时摸等量牌",
			"lol_jifendian": "季分点",
			"lol_jifendian_info": "锁定技·当你回复体力时，回复量+1，然后你摸等量牌",
			"lol_ziranzhili": "自然之力",
			"lol_ziranzhili_info": "你免疫属性伤害",
			"lol_lindongzhilin": "凛冬之临",
			"lol_lindongzhilin_info": "锁定技·当你受到属性伤害时，你获得一枚【屏障】，然后免疫此伤害",
			"lol_qishizhishi": "骑士之誓",
			"lol_qishizhishi_info": "出牌阶段限一次，你可以选择一名角色，直到下回合出牌阶段开始，其受到伤害时伤害-1，然后你受到同伤害来源一点伤害.锁定技，你受到的伤害至多为1.",
			"lol_lvdun": "律顿",
			"lol_lvdun_info": "出牌阶段限一次，你可以选择一名角色，直到下回合出牌阶段开始，其受到伤害时伤害-1，然后你受到同伤害来源一点伤害，其造成伤害时你摸一张牌.锁定技，你受到的伤害至多为1.",
			"lol_jinjizhijia": "荆棘之甲",
			"lol_jinjizhijia_info": "当你受到伤害时，你对来源施加“重伤”，然后进行一次判定，若结果为：红色，你对其造成1点伤害；若结果为：黑色，你弃置其一张牌",
			"lol_jinjibeixin": "棘刺背心",
			"lol_jinjibeixin_info": "当你受到伤害时，你可进行一次判定，若结果为：红色，你对其造成1点伤害；若结果为：黑色，你弃置其一张牌",
			"lol_ludengdehuixiang": "卢登的回响",
			"lol_ludengdehuixiang_info": "锁定技·当你回合内首次造成属性伤害时，你摸一张牌",
			"lol_ludengdejidang": "卢登的激荡",
			"lol_ludengdejidang_info": "当你回合内首次造成属性伤害时，你摸一张牌，然后你可以对其距离为1的1名角色造成一点同属性伤害",
			"lol_kuangzhanshijinjia": "狂战士胫甲",
			"lol_kuangzhanshijinjia_info": "锁定技·出牌阶段内你的【杀】使用次数+1,你计算与其他角色的距离-1.",
			"lol_minglangzhixue": "明朗之靴",
			"lol_minglangzhixue_info": "锁定技·你计算与其他角色的距离-1",
			"lol_fashizhixue": "法师之靴",
			"lol_fashizhixue_info": "锁定技·你计算与其他角色的距离-1",
			"lol_qinglingzhixue": "轻灵之靴",
			"lol_qinglingzhixue_info": "锁定技，其他角色计算与你的距离+1",
			"lol_shuiyinzhixue": "水银之靴",
			"lol_shuiyinzhixue_info": "回合开始时，你可以弃置2张牌跳过判定阶段.锁定技，其他角色计算与你的距离+1",
			"lol_tiebanxie": "铁板鞋",
			"lol_tiebanxie_info": "锁定技，其他角色计算与你的距离+1",
		},
		list: [["heart", "1", "lol_zhiliao"], ["heart", "2", "lol_zhiliao"], ["heart", "3", "lol_zhiliao"], ["spade", "12", "lol_zhiliao"], ["spade", "13", "lol_chengjie"], ["spade", "12", "lol_chengjie"], ["diamond", "11", "lol_xingshen"], ["diamond", "10", "lol_xingshen"], ["diamond", "9", "lol_xingshen"], ["diamond", "7", "lol_rumengyao"], ["diamond", "6", "lol_rumengyao"], ["diamond", "5", "lol_rumengyao"], ["club", "13", "lol_mieshi"], ["club", "2", "lol_shanxian"], ["club", "1", "lol_shanxian"], ["club", "2", "lol_shanxian"], ["club", "3", "lol_shanxian"], ["spade", "8", "lol_zhiliao"], ["spade", "9", "lol_zhiliao"], ["spade", "10", "lol_zhiliao"], ["spade", "11", "lol_zhiliao"], ["spade", "12", "lol_zhiliao"], ["spade", "13", "lol_chengjie"], ["spade", "12", "lol_chengjie"], ["spade", "10", "lol_zhiliao"], ["spade", "11", "lol_zhiliao"], ["spade", "12", "lol_zhiliao"], ["spade", "13", "lol_chengjie"], ["spade", "12", "lol_chengjie"], ["spade", "9", "lol_zhiliao"], ["spade", "10", "lol_zhiliao"], ["spade", "11", "lol_zhiliao"], ["spade", "12", "lol_zhiliao"], ["spade", "13", "lol_chengjie"], ["spade", "12", "lol_chengjie"], ["diamond", "7", "lol_qingxishu"], ["club", "7", "lol_qingxishu"], ["heart", "7", "lol_qingxishu"], ["spade", "7", "lol_qingxishu"], ["heart", "7", "lol_shouhutianshi"], ["diamond", "11", "lol_zhongyashalou"], ["spade", "4", "lol_kuangbaozhiren"], ["spade", "9", "lol_jushezhiya"], ["spade", "13", "lol_shoujizhe"], ["club", "8", "lol_yinxiejian"], ["heart", "3", "lol_luanna"], ["spade", "8", "lol_kuangtukaijia"], ["club", "6", "lol_zhenfenkaijia"], ["heart", "1", "lol_ziranzhili"], ["diamond", "7", "lol_jinjibeixin"], ["heart", "5", "lol_ludengdehuixiang"], ["heart", "12", "lol_minglangzhixue"], ["spade", "13", "lol_fashizhixue"], ["club", "8", "lol_qinglingzhixue"], ["diamond", "11", "lol_shuiyinzhixue"], ["club", "12", "lol_tiebanxie"], ["diamond", "11", "lol_qishizhishi"]],
	};
	for (const i in TEL_LOL.card) {
		if (typeof TEL_LOL.card[i].image != "string") TEL_LOL.card[i].image = (`ext:英雄联盟扩展/image/card/${i}.png`);
	}
	return TEL_LOL;
});