// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// This File is From Tel-LOLTeam
// Licensed under BSD-2-Caluse
// File: character.js (Tel-LOLTeam/lol-extension/src/character.js)
// Content:
// Copyright (c) 2022 Tel-LOLTeam All rights reserved
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// noinspection BadExpressionStatementJS

"use strict";


game.import("character", (lib, game, ui, get, ai, _status) => {
	/**
	 * @type {importCharacterConfig}
	 */
	const TEL_LOL = {
		name: "tel_lol",
		connect: true,
		character: {
			// To be continued
			"tel_ylol_yingmo": ["none", "tel_lol_mo", 6, ["lol_yingsha", "lol_heiying", "lol_anjie", "lol_juxi"], ["unseen"]],
			"tel_ylol_yanmo": ["none", "tel_lol_mo", 6, ["lol_zhishen", "lol_yanzai", "lol_zhuoshao", "lol_juxi"], ["unseen"]],

			"tel_nlol_Nasus": ["male", "shen", 3, ["tel_lol_fetchSoul", "lol_shigu"], [window.lolfun.expandExtPrefix("英雄联盟扩展", "res", "image/character", "nasus.png")]],

			"lol_aoen": ["male", "shen", 4, ["lol_yanxi", "lol_jiangshen"], []],
			"lol_yi": ["male", "tel_lol_ai", 3, ["lol_wuxing", "lol_wuji", "lol_wudi"], []],
			"lol_yatuokesi": ["male", "shen", "3/6", ["lol_damie", "lol_dc_cisi"], []],
			"lol_woliber": ["male", "tel_lol_han", 4, ["lol_jinglei", "lol_tiansheng", "lol_pili", "lol_cedian"], []],
			"lol_taidamier": ["male", "tel_lol_han", 4, ["lol_manli", "lol_buqu"], []],
			"lol_youmi": ["female", "tel_lol_yue", 2, ["lol_yifu", "lol_feidan", "lol_modian", "lol_mizhang"], []],
			"lolkz_bulong": ["male", "tel_lol_han", 4, ["lol_jiandun", "lol_tingshen"], []],
			"lol_boss_foyege": ["male", "tel_lol_you", 5, ["lol_pobai", "lol_boss_guanhun", "lol_jueming", "lol_boss_youzhou"], ["boss", "bossallowed", "unseen", "forbidai"]],
			"lol_foyege": ["male", "tel_lol_you", "3/4", ["lol_pobai", "lol_guanhun", "lol_jueming", "lol_youzhou"], ["zhu"]],
			"lol_yuanling_male": ["male", "tel_lol_you", "2", ["lol_zhouyuan"], ["unseen", "forbidai"]],
			"lol_yuanling_female": ["female", "tel_lol_you", "2", ["lol_zhouyuan"], ["unseen", "forbidai"]],
			"lolkz_ateruisi": ["male", "tel_lol_ling", 2, ["lolkz_xingyun", "lolkz_shizhi", "lolkz_guanxing", "lolkz_shenyou", "shuangmianwujiang"], ["des:代码编写：<span style=\"background-image:-webkit-linear-gradient(top,aqua 0%,lime 5%,pink 10%,cyan 15%,deepSkyBlue 20%,mediumSlateBlue 25%,silver 30%,coral 35%,deepPink 40%,greenYellow 45%,wheat 50%,aqua 55%,lime 60%,pink 65%,cyan 70%,deepSkyBlue 75%,mediumSlateBlue 80%,silver 85%,coral 90%,deepPink 95%,greenYellow 100%);  -webkit-background-clip:text; -webkit-text-fill-color:transparent;text-shadow:none;\">千面猫</span><br>武将简介：<br>曾经被战争星灵附体的阿特瑞斯，在他体内那股天界力量被弑杀的时候，以凡人的身份活了下来，即便是那裂空摘星的一击，也无法让他屈服。不久以后，他学会了拥抱自己凡性的力量，以及凡性之中顽强的韧劲。如今的阿特瑞斯作为重生的潘森，反抗神性。他坚不可摧的意志在战场上化为火焰，注入那些曾经属于星灵的武具中。"]],
			"lolkz_panshen": ["male", "tel_lol_xing", 2, ["lolkz_bumie", "lolkz_wushuang", "lolkz_zhanjue", "lolkz_shennu", "shuangmianwujiang"], ["unseen", "des:代码编写：千面猫"]],
			"lolkz_gulajiasi": ["male", "tel_lol_han", 4, ["lolkz_mingding", "lolkz_jiecheng"], ["des:代码编写：<span style=\"background-image:-webkit-linear-gradient(top,aqua 0%,lime 5%,pink 10%,cyan 15%,deepSkyBlue 20%,mediumSlateBlue 25%,silver 30%,coral 35%,deepPink 40%,greenYellow 45%,wheat 50%,aqua 55%,lime 60%,pink 65%,cyan 70%,deepSkyBlue 75%,mediumSlateBlue 80%,silver 85%,coral 90%,deepPink 95%,greenYellow 100%);  -webkit-background-clip:text; -webkit-text-fill-color:transparent;text-shadow:none;\">浪琴婊</span><br>武将简介：<br>豪爽而且威严的古拉加斯是一位身宽体胖、吵闹喧哗的酿酒大师，只为找到最完美的那一口麦酒。他从未知的地方前来，在弗雷尔卓德纯洁的荒原上寻找稀有的酿酒原料，尝试着各种不同的酿制配方。他总是酩酊大醉而且冲动鲁莽，他挑起的斗殴事件堪称传奇，经常造成一整夜的狂欢和殃及池鱼的破坏。只要古拉加斯在某地现身，接踵而至的往往是饮酒和闹事——就按这个顺序。"]],
			"lolkz_jiakesi": ["male", "tel_lol_nu", 4, ["lolkz_jiaoxie", "lolkz_zongshi", "lolkz_baibin"], ["des:代码编写：<span style=\"background-image:-webkit-linear-gradient(top,aqua 0%,lime 5%,pink 10%,cyan 15%,deepSkyBlue 20%,mediumSlateBlue 25%,silver 30%,coral 35%,deepPink 40%,greenYellow 45%,wheat 50%,aqua 55%,lime 60%,pink 65%,cyan 70%,deepSkyBlue 75%,mediumSlateBlue 80%,silver 85%,coral 90%,deepPink 95%,greenYellow 100%);  -webkit-background-clip:text; -webkit-text-fill-color:transparent;text-shadow:none;\">浪琴婊</span><br>武将简介：<br>贾克斯是符文之地最伟大的武器大师，也是考阿利的唯一幸存者——他们是一群誓死保卫艾卡西亚的守护者。但当虚空被释放出来对抗恕瑞玛帝国的飞升之团，艾卡西亚遭到了摧毁，让贾克斯失去了故乡和前进的目标。他回收了“艾卡西亚最后的光”，作为他有朝一日击败虚空的希望象征，如今他遍及全世界，寻找足够强大的战士，与他共同对抗即将到来的黑暗。"]],
			"lolkz_luxian": ["male", "tel_lol_de", 3, ["lolkz_shuangqiang", "lolkz_zhuiming"], ["des:代码编写：<span style=\"background-image:-webkit-linear-gradient(top,aqua 0%,lime 5%,pink 10%,cyan 15%,deepSkyBlue 20%,mediumSlateBlue 25%,silver 30%,coral 35%,deepPink 40%,greenYellow 45%,wheat 50%,aqua 55%,lime 60%,pink 65%,cyan 70%,deepSkyBlue 75%,mediumSlateBlue 80%,silver 85%,coral 90%,deepPink 95%,greenYellow 100%);  -webkit-background-clip:text; -webkit-text-fill-color:transparent;text-shadow:none;\">浪琴婊</span><br>武将简介：<br>卢锡安，一名光明哨兵，一个狩猎不死亡灵的残酷猎手，使用一双圣物手枪进行无情的追踪与杀灭。当怨灵锤石夺走他妻子的生命后，卢锡安踏上了复仇之路。但即便她已重获新生，他的怒火也没有平息。无情而又固执的卢锡安将不惜一切代价，保护生者，对抗黑雾中那亡故已久的恐怖。"]],
			"lolkz_seti": ["male", "tel_lol_ai", 4, ["lolkz_qiangshou", "lolkz_hongquan"], ["des:代码编写：<span style=\"background-image:-webkit-linear-gradient(top,aqua 0%,lime 5%,pink 10%,cyan 15%,deepSkyBlue 20%,mediumSlateBlue 25%,silver 30%,coral 35%,deepPink 40%,greenYellow 45%,wheat 50%,aqua 55%,lime 60%,pink 65%,cyan 70%,deepSkyBlue 75%,mediumSlateBlue 80%,silver 85%,coral 90%,deepPink 95%,greenYellow 100%);  -webkit-background-clip:text; -webkit-text-fill-color:transparent;text-shadow:none;\">浪琴婊</span><br>武将简介：<br>在与诺克萨斯的战争结束之后，艾欧尼亚的地下王国日渐兴起，瑟提在其中脱颖而出，成为了一方霸主。虽然他一开始只是纳沃利的搏击场里的无名小卒，但他有着一身蛮力，而且极其耐打，很快就名声鹊起。等到当地的搏击手尽数被他击败之后，瑟提靠着一腔勇武，掌控了自己曾经浴血奋战的搏击场。"]],
			"lolkz_airuilike": ["female", "tel_lol_ai", 4, ["lolkz_renwu", "lolkz_poju", "lolkz_gongwu"], ["zhu", "des:代码编写：<span style=\"background-image:-webkit-linear-gradient(top,aqua 0%,lime 5%,pink 10%,cyan 15%,deepSkyBlue 20%,mediumSlateBlue 25%,silver 30%,coral 35%,deepPink 40%,greenYellow 45%,wheat 50%,aqua 55%,lime 60%,pink 65%,cyan 70%,deepSkyBlue 75%,mediumSlateBlue 80%,silver 85%,coral 90%,deepPink 95%,greenYellow 100%);  -webkit-background-clip:text; -webkit-text-fill-color:transparent;text-shadow:none;\">浪琴婊</span><br>武将简介：<br>诺克萨斯对艾欧尼亚的占领催生了许多英雄，但没有谁像纳沃利的艾瑞莉娅一般令人意外。她将家乡的古老舞艺化为战技，以精心修习的优雅身姿操控着致命的刀丛。在她证明了自己的战斗实力后，被众人推举为反抗军的领袖和首脑，为了守卫家园而奋斗至今。"]],
			"lolkz_kasading": ["male", "tel_lol_ling", 3, ["lolkz_qiefa", "lolkz_lueren"], []],
			"lolkz_cuisite": ["male", "tel_lol_gang", 3, ["lolkz_xingyun0", "lolkz_zashu", "lolkz_haodu"], ["des:崔斯特是一名声名狼藉的纸牌高手和诈骗惯犯，世界上任何有人烟的地方都有他施展魅力和赌艺的足迹，让那些富人和痴人既羡慕又嫉恨。他很少会认真起来干一件事，总是用一抹轻蔑的微笑和一副漫不经心的随性面对每一天。无论面对什么情况，崔斯特的袖子里永远都会藏着一张王牌。"]],
			"lolkz_gailun": ["male", "tel_lol_de", 4, ["lolkz_jianren", "lolkz_caijue"], ["des:身为一位自豪而且高贵的士兵，盖伦奋战在无畏先锋的最前沿。他深受战友们的爱戴，也受到敌人们的尊敬——同样重要地，他还是冕卫家族的名门之后，肩负着守卫德玛西亚及其理念的重任。他身披抵御魔法的重甲，手持阔剑，时刻准备着用正义的钢铁风暴在战场上正面迎战一切操纵魔法的狂人。"]],
			"lolkz_zhake": ["male", "tel_lol_zu", 4, ["lolkz_fensheng", "lolkz_zaigou"], ["des:一滩泄漏的毒液，顺着炼金科技设施的裂缝流进了祖安的地沟区，在深处一个与世隔绝的坑洞里积成了一洼。出身虽然如此低微，但扎克却从一团蒙昧的黏液长成了一个有思想的实体，栖息在城里的管道中，偶尔露面，帮助那些无助的人，或是修缮祖安的各种公共设施。"]],
			"lolkz_beierweisi": ["female", "tel_lol_xu", 3, ["lolkz_rongzhu", "lolkz_suomian", "lolkz_jinhuang"], ["zhu", "des:一位夜魅般的女皇吞噬了整座城市，城市的原材料已然化为她的养分——她就是卑尔维斯 ，符文大地的终结，同时也是那些骇人惊悚的异形造物之开端。地上世界亘久流传的历史、知识和记忆驱使著她不知足地吞噬一切挡在她面前的事物，藉此试图满足自身对于新鲜情感与经验的无尽慾望。然而区区一个世界已无法满足她的慾望，她的目光逐渐转而盯向了虚空的祖先……"]],
			"lol_sake": ["male", "tel_lol_mo", 1, ["dz_yxlm_moou", "dz_yxlm_jingsong", "dz_yxlm_beici"], ["hiddenSkill", "des:很久以前有人为一个孤独的小王子制作了一个玩物，一只附有魔法的提线人偶，它就是如今那个以杀人和破坏取乐的萨科。由于黑魔法的腐化，再加上痛失爱主，曾经友善的人偶如今只能在折磨灵魂制造苦痛的时候才能感到愉悦。小孩子的玩具和简单的戏法在他手中都有了致命的效果。而且，他觉得自己的血腥“游戏”滑稽至极——如果有谁在死寂的夜里听到了阴森的窃笑，或许那就是恶魔小丑看中了他们，作为自己新的玩物。"]],
			"lol_delaiwen": ["male", "tel_lol_nuo", 3, ["dz_yxlm_lifu", "dz_yxlm_kaidao"], ["des:在诺克萨斯，有一种战士被称为“清算人”。他们在竞技场里互相厮杀，以鲜血作为赌注进行力量的考验，不过没有任何人能像德莱文那样受人追捧。曾经参过军的他，发现竞技场的观众们尤为喜爱他的耀武扬威和刻意表演，更不要提他每一记飞斧溅出的大片鲜血。这种狂傲的完美带来的赞叹令他上瘾，因此德莱文发誓要不惜代价打败任何对手，以此确保自己的名字在帝国之中永世传唱。"]],
			"lol_modekaisa": ["male", "tel_lol_you", 4, ["dz_yxlm_yeyun", "dz_yxlm_mingqi", "dz_yxlm_lunhui"], ["des:两度被杀，三度重生。莫德凯撒是一位来自远古纪元的残酷军阀，他使用死灵巫术将无数灵魂禁锢在永恒的奴役中。现在几乎无人记得他早期的那些征服战争，也无人知道他有多强大的力量，但也有一些古老的灵魂认得他，而他们一直都在担心有一天他会回来，同时统治生者和死者。"]],
			"lol_boss_modekaisa": ["male", "tel_lol_you", 6, ["dz_yxlm_yeyun", "dz_yxlm_mingqi", "dz_yxlm_boss_lunhui"], ["des:两度被杀，三度重生。莫德凯撒是一位来自远古纪元的残酷军阀，他使用死灵巫术将无数灵魂禁锢在永恒的奴役中。现在几乎无人记得他早期的那些征服战争，也无人知道他有多强大的力量，但也有一些古老的灵魂认得他，而他们一直都在担心有一天他会回来，同时统治生者和死者。", "boss", "bossallowed", "unseen"]],
			"lol_paike": ["male", "tel_lol_gang", 3, ["dz_yxlm_zhuixiong", "dz_yxlm_langhui", "dz_yxlm_enchou"], ["hiddenSkill", "des:在比尔吉沃特的屠宰码头，颇有名气的鱼叉手派克葬身在一条巨大的琢珥鱼腹内……然而，他却回来了。他在家乡的阴街陋巷中徘徊着，用超自然的手段干脆残忍地解决那些鱼肉他人的恶棍——一座因捕猎怪物而自豪的城市如今发觉自己却成了狩猎的目标。"]],
			"lol_ruiwen": ["female", "tel_lol_nuo", 4, ["lol_yongjin", "lol_zhuren"], ["des:代码编写:夜凌<br>一度担任诺克萨斯军队剑士长的锐雯，曾通过自己信念的力量和野蛮的行事风格在军中不断晋升，因此获得了一把传奇的符文之刃和自己的战团作为奖赏——然而在艾欧尼亚的前线上，锐雯对祖国的信仰遭到了考验，并最终粉碎。她切断了与帝国的一切关联，在分崩离析的世界中找寻自己的归宿，即使纷飞的谣言传说着诺克萨斯已经重铸。如今，锁链加身的她被迫回到诺克萨斯，即将在曾经的祖国接受审判……"]],
			"lol_jinkesi": ["female", "tel_lol_zu", 3, ["lol_jiaoxiang"], ["des:“暴走的炸药就是女孩子最好的伙伴！”<br>神经狂躁、冲动任性、劣迹斑斑……金克丝出身自祖安，生来就爱不计后果地大搞破坏。她就是一座人形自走军火库，所经之处必定会留下夺目的火光和震耳的爆炸。金克丝最讨厌无聊，所以不管她去到哪里，混乱和骚动就会如期而至，这就是她留下的“到此一游”。"]],
			"lol_jin": ["male", "tel_lol_ai", 3, ["lol_diyu", "lol_xiemu"], ["des:作为一名心思缜密的癫狂杀手，烬坚信谋杀是一门艺术。他曾在艾欧尼亚的监狱中服刑，但却因为执政议会里涌动着的暗流而得到释放，成为了权术斗争所利用的刺客。烬将手中的枪当成画笔，尽情地挥洒他所追求的残忍艺术，让受害者肝胆俱裂，令旁观者震悚难平。他在自己制作的阴森剧目里肆意取乐，让“恐怖”二字有了最合适不过的信使。"]],
			"lol_boss_cuishi": ["male", "tel_lol_you", 4, ["lol_qianhun", "lol_guibian", "lol_bossSkill_cuishi"], ["des:暴虐又狡猾的锤石是一个来自暗影岛的亡灵，野心勃勃、不知疲倦。他曾经是无数奥秘的看守，在一种超越生死的力量下骨肉瓦解，而现在他则使用自己独创的钻心痛苦缓慢地折磨并击溃其他人，以此作为自己存在下去的手段。被他迫害的人需要承受远超死亡的痛苦，因为锤石会让他们的灵魂也饱尝剧痛，将他们的灵魂囚禁在自己的灯笼中，经受永世的折磨。“心灵都是我的玩具。”~ 锤石", "boss", "bossallowed", "unseen"]],
			"lol_cuishi": ["male", "tel_lol_you", 3, ["lol_qianhun", "lol_guibian"], ["des:暴虐又狡猾的锤石是一个来自暗影岛的亡灵，野心勃勃、不知疲倦。他曾经是无数奥秘的看守，在一种超越生死的力量下骨肉瓦解，而现在他则使用自己独创的钻心痛苦缓慢地折磨并击溃其他人，以此作为自己存在下去的手段。被他迫害的人需要承受远超死亡的痛苦，因为锤石会让他们的灵魂也饱尝剧痛，将他们的灵魂囚禁在自己的灯笼中，经受永世的折磨。“心灵都是我的玩具。”~ 锤石"]],
			"lol_kaier": ["female", "shen", 3, ["lol_jiangfa", "lol_qingsuan", "lol_dengshen"], []],
			"lol_suoer": ["male", "shen", 3, ["lol_xingqiong", "lol_xingxian", "lol_xingluo"], []],
			"lol_zuoyi": ["female", "shen", 3, ["lol_zhaixing", "lol_feixing"], ["des:调皮捣蛋、异想天开而且变化莫测，佐伊就是这一切的现实化身。作为巨神族的宇宙信使，她的出现就是惊天巨变的先兆。她甚至无需任何行为，只是单纯地出现在某个地方，就足以扭曲周围的奥术数学法则，从而扰乱现实的物理定律。有的时候还会带来浩劫与灾难，虽然她本身并无半点恶意。或许这就是为什么她对待自己的职责总是那么的漫不经心，给了她充足的时间用来玩游戏、捉弄凡人，或者自娱自乐。与佐伊的邂逅可能会给人带来欢乐与激励，但她的现身往往没这么简单，甚至常常意味着极大的危险。"]],


			tel_nlol_Nautilus: ["male", "tel_lol_gang", 8, ["tel_lol_fuchen"], [window.lolfun.expandExtPrefix("英雄联盟扩展", "res", "image/character", "nautilus.png")], "nautilus"],
			"tel_tlol_TahmKench": ["male", "tel_lol_gang", 8, ["tel_lol_tunna"], [window.lolfun.expandExtPrefix("英雄联盟扩展", "res", "image/character", "tahm_kench.png")], "tahm_kench"],
			"tel_alol_Ahri": ["female", "tel_lol_ai", 3, ["tel_lol_monsflame", "tel_lol_gotSoul"], [window.lolfun.expandExtPrefix("英雄联盟扩展", "res", "image/character", "ahri.jpg")], "ahri"],

			"tel@lol.character_Darius": ["male", "tel_lol_nuo", 4, ["tel@lol.skill_killKing", "tel_lol_qunlang"], [window.lolfun.expandExtPrefix("英雄联盟扩展", "res", "image/character", "darius.png")]],
			"tel@lol.character_Fiora": ["female", "tel_lol_de", 3, ["tel@lol.skill_Riposte", "tel@lol.skill_Challenge", "tel@lol.skill_Lunge"], [window.lolfun.expandExtPrefix("英雄联盟扩展", "res", "image/character", "fiora.jpg")]],
			"tel@lol.character_Graves": ["male", "tel_lol_gang", 3, ["tel@lol.skill_addBullet", "tel@lol.skill_tel@lol.skill_gravesFate"], [window.lolfun.expandExtPrefix("英雄联盟扩展", "res", "image/character", "graves.jpg")]],
			"tel@lol.character_Karma": ["female", "tel_lol_ai", 3, ["tel@lol.skill_Balance", "tel@lol.skill_Enlighten", "tel@lol.skill_PassTorch"], ["zhu", window.lolfun.expandExtPrefix("英雄联盟扩展", "res", "image/character", "karma.jpg")]],
			"tel@lol.character_Sylas": ["male", "tel_lol_de", 3, ["tel@lol.skill_Hijack", "tel@lol.skill_Robbery"], ["forbidai", window.lolfun.expandExtPrefix("英雄联盟扩展", "res", "image/character", "sylas.jpg")]],
			"tel@lol.character_Swain": ["male", "tel_lol_nuo", 4, ["tel@lol.skill_swain", "tel@lol.skill_crowGroup", "tel@lol.skill_exploitSoul", "tel@lol.skill_decentralization"], [window.lolfun.expandExtPrefix("英雄联盟扩展", "res", "image/character", "swain.jpg")]],
			"tel@lol.character_Yasuo": ["male", "tel_lol_ai", 3, ["tel@lol.skill_yasuotheUnforgiven", "tel@lol.skill_sweepingBlade", "tel@lol.skill_lastBreath"], [window.lolfun.expandExtPrefix("英雄联盟扩展", "res", "image/character", "yasuo.jpg")]],
			"tel@lol.character_Yone": ["male", "tel_lol_ai", 3, ["tel@lol.skill_mortalSteel", "tel@lol.skill_spiritCleave", "tel@lol.skill_fateSealed"], [window.lolfun.expandExtPrefix("英雄联盟扩展", "res", "image/character", "yone.jpg")]],
			"tel@lol.character_Zed": ["male", "tel_lol_ai", 2, ["tel@lol.skill.zed", "tel@lol.skill_sechell", "tel@lol.skill_ghokians"], [window.lolfun.expandExtPrefix("英雄联盟扩展", "res", "image/character", "zed.jpg"), "die:ext:英雄联盟扩展/res/audio/die/zed.mp3"]],
			"tel@lol.character_Zed_shadow": ["male", "tel_lol_ai", 2, ["tel@lol.skill_shadowkill", "tel@lol.skill_soulkill", "tel@lol.skill_hideshadow"], [window.lolfun.expandExtPrefix("英雄联盟扩展", "res", "image/character", "zed_shadow.jpg"), "die:ext:英雄联盟扩展/res/audio/die/zed_shadow.mp3", "unseen", "forbidai"]]
		},
		characterIntro: {
			"tel_nlol_Nasus": "阿兹尔是上古时期恕瑞玛的一位凡人皇帝，一位站在不朽神话巅峰的自豪之人。但他的狂妄引来了旁人的背叛，在最伟大胜利降临的那一刻将他杀害。而现在，数千年后，他重获新生并成为了力量无边的飞升者。阿兹尔的城市已经从黄沙之下崛起，他要让恕瑞玛恢复曾经的荣光。",

			"lol_aoen": "“我说完了。”<p>~ 奥恩<p>奥恩是弗雷尔卓德的一位半神，主掌着锻造和工艺。他在名为炉乡的火山下的溶洞中凿出了一座雄伟的工坊，独自一人在里头干活。他摆弄着熔岩沸腾的坩埚，提炼矿石，打造出无与伦比的精良物件。当其他神灵——尤其是沃利贝尔，在大地上行走并且介入了凡间的事务时，奥恩就会出面，将这些鲁莽的家伙劝回各自的位置上。要么是用手里可靠的锤子，要么就是群山的烈火。<p><div onclick=\"alert(\"执笔：俺杀\\nQQ：981385461\")\" style=\"cursor:help\"><img src=\"https://qlogo2.store.qq.com/qzone/981385461/981385461/100?1629822900\" width=64px></div>",
			"lol_yi": "最锋利的剑的刀锋也无法与一颗和平的心的平静相匹敌。<p>~ 易<p>易大师锤炼身体、磨砺心智，直至身心合一。尽管他将暴力作为不得已的选择，但他优雅迅猛的剑法总是让这一手段显得尤为快捷。作为无极之道最后的门徒，易大师致力于这个门派的传承，用七度洞悉目镜搜寻着最有资格的人，寻找潜在的新弟子。<p><div onclick=\"alert(\"执笔：俺杀\\nQQ：981385461\")\" style=\"cursor:help\"><img src=\"https://qlogo2.store.qq.com/qzone/981385461/981385461/100?1629822900\" width=64px></div>",
			"lol_yatuokesi": "“我必须连同希望一起毁坏……”<p>~ 亚托克斯<p>亚托克斯曾是恕瑞玛抗击虚空时的伟大战士。但是，他和他的同胞却有可能变成符文之地更大的威胁。最终，他们败给了凡人的狡诈巫术，自身的精魂被锁在了武器之内。数百年的监禁之后，亚托克斯头一个挣脱出来，腐蚀并转化那些胆敢染指的蠢人。现在，他将夺来的血肉模仿着自己曾经的形象粗暴地重塑，渴望着迟来许久的末世复仇。<p><div onclick=\"alert(\"执笔：俺杀\\nQQ：981385461\")\" style=\"cursor:help\"><img src=\"https://qlogo2.store.qq.com/qzone/981385461/981385461/100?1629822900\" width=64px></div>",
			"lol_woliber": "“他们已经忘记了古道。古道没有忘记他们。”<p>~ 沃利贝尔<p>对于那些敬畏旧神的人，沃利贝尔是风暴的实体化身。他充满怪力、野性和倔强的坚毅，早在凡人行走于弗雷尔卓德的冻土苔原之前，他就已经存在。这片土地由他和他的半神同胞们共同创造，是他要拼死保护的东西。人类的文明以及随之而来的软弱让他积怨已久，如今他为了旧习古道而战——要让这片土地回归野性，让鲜血畅流无阻。他渴望迎战任何反对者，亮出他的尖牙、利爪和雷霆般的压制力。<p><div onclick=\"alert(\"执笔：俺杀\\nQQ：981385461\")\" style=\"cursor:help\"><img src=\"https://qlogo2.store.qq.com/qzone/981385461/981385461/100?1629822900\" width=64px></div>",
			"lol_taidamier": "桀骜不羁和无尽的愤怒驱使着泰达米尔在弗雷尔卓德所向披靡。他曾公开挑战北方最伟大的战士，让自己为未来更黑暗的时日做好准备。这位愤怒的野蛮人一直都在为自己被灭绝的氏族寻求复仇，不过最近他与阿瓦洛萨部族的战母艾希达成了联姻。他非人的力量与毅力是众人皆知的传奇，而且也为他和他的新盟友带来了无数次奇迹般的胜利。<p> ~ “怒气，即是我的武器。”<p><div onclick=\"alert(\"执笔：俺杀\\nQQ：981385461\")\" style=\"cursor:help\"><img src=\"https://qlogo2.store.qq.com/qzone/981385461/981385461/100?1629822900\" width=64px></div>",
			"lol_youmi": "作为一只来自班德尔城的魔法猫咪，悠米曾是一名约德尔魔女诺拉的宠物。而当主人神秘消失以后，悠米就成为了《门扉魔典》的守护者，这是诺拉留下的一本有灵性的书。悠米带着魔典一起穿越书页中的传送门，共同寻找诺拉。渴望被宠爱的悠米在她的旅途中寻找着友善的同伴，为同伴们提供闪光护盾和坚决的意志作为保护。虽然魔典竭尽全力让她把注意力留在最初的任务上，但悠米经常会被世俗的安逸所吸引，比如打盹和吃鱼。但安逸过后，她总是会回归自己的任务，找寻自己的朋友。<p>  “猫是暮光与把戏，狗只会捡棍子和蹭树皮！魔典也只是老树。”<p>  ~ 悠米<p><div onclick=\"alert(\"执笔：俺杀\\nQQ：981385461\")\" style=\"cursor:help\"><img src=\"https://qlogo2.store.qq.com/qzone/981385461/981385461/100?1629822900\" width=64px></div>",
			"lol_foyege": "一个失落已久的王国，一位千年以前的国王——佛耶戈为了让亡妻死而复生，触发了一场被后世称为“破败之咒”的魔法灾难，自己也不幸殒命。如今的佛耶戈已经变成了一个强大的亡魂怨灵，依然执着地迷恋着几百年前死去的王后。他号称破败之王，控制着夺命的蚀魂夜，在符文之地上不懈地搜寻着，希望有朝一日能将她追回。与此同时，无穷尽的黑雾从他早已支离破碎的残忍心脏中涌出，扫除他面前的一切阻碍。<p>“任何代价，一概不论。一切暴行，但求有功。为她，我必当如此。”<p>~ 佛耶戈<p><div onclick=\"alert(\"执笔：俺杀\\nQQ：981385461\")\" style=\"cursor:help\"><img src=\"https://qlogo2.store.qq.com/qzone/981385461/981385461/100?1629822900\" width=64px></div>",
			"lolkz_bulong": "拥有大块肌肉和更大颗心脏的布隆，是一位受人爱戴的弗雷尔卓德冰裔英雄。凝霜港以北的任何一家蜜酒坊里都有人会致敬他传奇般的强壮，讲述他的事迹，例如在一夜之间扫平一整片橡树森林，还有用拳头把一整座山打成碎石子。一扇附有魔法的秘库大门被他拿在手中当做盾牌，布隆是游荡在在北方的冻土上快乐的保护者，帮助所有危难之中的人，一步步迈向他的梦想：一个和平安定的弗雷尔卓德。<p>“今天我们彼此为敌，而明天我们可能会并肩作战”<p>~ 布隆",
			"lol_yuanling_male": "只是一个被诅咒的可怜的悲惨灵魂……",
			"lol_yuanling_female": "只是一个被诅咒的可怜的悲惨灵魂……",
			"lol_yingmo": "<div onclick=\"alert(\"执笔：俺杀\\nQQ：981385461\")\" style=\"cursor:help\"><img src=\"https://qlogo2.store.qq.com/qzone/981385461/981385461/100?1629822900\" width=64px></div>",
			"lol_yanmo": "<div onclick=\"alert(\"执笔：俺杀\\nQQ：981385461\")\" style=\"cursor:help\"><img src=\"https://qlogo2.store.qq.com/qzone/981385461/981385461/100?1629822900\" width=64px></div>",

			"tel_alol_Ahri": "des:天生就与精神领域的魔法存在连接的阿狸，是一名狐狸模样的瓦斯塔亚，在世界上寻找着自己所属的位置。进入凡人社会以后，她成为了一名充满悔意和同情心的掠食者，她喜欢操纵猎物的情绪，然后再吸食他们的生命精魄——每吞噬一个灵魂，都伴着他们生前的记忆片段与领悟洞见。",

			"tel@lol.character_Darius": "“历史只记得胜利者。顺应诺克萨斯，你将名垂千古。”</br>提到诺克萨斯力量的象征，帝国上下没有人能比德莱厄斯这名久经沙场的战士更加适合。他从无名小卒逐渐成长为诺克萨斯之手，劈开了无数敌人的身躯 —— 其中也不乏诺克萨斯自己人。他从不怀疑自己执行的公义，也从不会在举起战斧后迟疑。作为崔法利军团指挥官，德莱厄斯的任何对手都不用指望他手下留情。",
			"tel@lol.character_Fiora": "“我取你性命皆因荣誉之故。虽你并无荣誉可言，依然理当受死。”菲奥娜是全瓦洛兰最可怕的决斗家。她以雷厉风行、巧腕明政闻名于世，同样著名的还有她舞弄自己佩剑的极速。菲奥娜出生在德玛西亚的劳伦特家族，在一场险些令家族灭亡的丑闻风波过后，她从父亲的手中接管了家业。如今她致力于重振家族荣耀，让劳伦特这个名字重回德玛西亚名望贵族之列。",
			"tel@lol.character_Graves": "“我们只谋财，不害命……都老实点，不用你逞英雄。”马尔科姆•格雷福斯是有名的佣兵、赌徒和窃贼，凡是他到过的城邦或帝国，都在通缉悬赏他的人头。虽然他脾气暴躁，但却讲究黑道的义气，他的双管霰弹枪“命运”就经常用来纠正背信弃义之事。几年前他和老搭档崔斯特•菲特冰释前嫌，如今二人一同在比尔吉沃特的地下黑道纷争中再次如鱼得水。",
			"tel@lol.character_Karma": "“我会和艾欧尼亚一起改变。”要说哪位英雄能代表艾欧尼亚的精神传统，没有谁比卡尔玛更合适。她是一个古代灵魂在当代的化身，经历过无数次转世，每次获得新生都会继承以前的全部记忆，同时也被赐予常人无法理解的力量。她在最近一次遭遇危难之时倾尽全力引领他的人民，但她知道，要获得和平与和谐，就必须付出重大代价——既是对她自己，也是对她深爱的土地。",
			"tel@lol.character_Sylas": "“我不是叛逆。我是真正的德玛西亚人。”在小城边沟镇长大的塞拉斯，如今却成了德玛西亚雄都的黑暗面的代表人物。当他还是个男孩的时候，人人避之唯恐不及的搜魔人发现他拥有感知法师的能力，便将他控制起来，利用这种能力来对付塞拉斯的同类。逃出生天之后的塞拉斯现在是一个坚定的抗命者，他要借助法师的力量摧毁自己曾经侍奉过的王国…...遭到放逐而前来追随他的法师也与日俱增。",
			"tel@lol.character_Yasuo": "亚索是一个百折不屈的艾欧尼亚人，也是一名身手敏捷的御风剑客。这位生性自负的年轻人，被误认为杀害长老的凶手——由于无法证明自己的清白，他出于自卫而杀死了自己的哥哥。虽然长老死亡的真相已然大白，亚索还是无法原谅自己的所作所为。他在家园的土地上流浪，只有疾风指引着他的剑刃。",
			"tel@lol.character_Yone": "“它们眼中的我，只有面具。我眼中的它们，只有惶恐。”生前，他是永恩，是亚索同母异父的哥哥，是故乡剑术道场的知名弟子。但当他死在弟弟手下以后，却发现自己被精神领域中的恶毒灵体所侵扰，不得不用它自己的刀剑将它弑杀。如今，被诅咒的永恩戴上了它的恶魔面具，开始了不懈的追猎，他要猎尽所有同种的恶魔，从而查清自己究竟成为了什么。"
		},
		characterTitle: {
			"lol_aoen": "#r山隐之焰",
			"lol_yi": "#g无极剑圣",
			"lol_yatuokesi": "#r暗裔剑魔",
			"lol_woliber": "#b不灭狂雷",
			"lol_taidamier": "#g蛮族之王",
			"lol_youmi": "#g魔法猫咪",
			"lol_foyege": "#b破败之王",
			"lol_boss_foyege": "#b破败之王",
			"lol_yuanling_male": "永恒意志",
			"lol_yuanling_female": "失落之歌",
			"lolkz_bulong": "大地之心",
			"lolkz_kasading": "虚空行者",
			"lolkz_ateruisi": "#r不屈之枪",
			"lolkz_panshen": "#r战争星灵",
			"lolkz_gulajiasi": "#r酒桶",
			"lolkz_jiakesi": "#r武器大师",
			"lolkz_luxian": "#r圣枪游侠",
			"lolkz_seti": "#r腕豪",
			"lolkz_airuilike": "#r刀锋舞者",
			"lolkz_cuisite": "#r卡牌大师",
			"lolkz_yasuo": "r疾风剑豪",
			"lolkz_gailun": "r德玛西亚之力",
			"lolkz_zhake": "#g生化魔人",
			"lolkz_beierweisi": "虚空女皇",
			"lol_jinkesi": "暴走萝莉",
			"lol_jin": "戏命师",
			"lol_cuishi": "魂锁典狱长",
			"lol_boss_cuishi": "魂锁典狱长",

			"tel@lol.character_Fiora": "无双剑姬",
			"tel@lol.character_Graves": "法外狂徒",
			"tel@lol.character_Karma": "天启者",
			"tel@lol.character_Sylas": "解脱者"
		},
		skill: {
			_ndieaudio: {
				trigger: {
					player: "dieBegin",
				},
				priority: 2,
				forced: true,
				content: function () {
					game.N_playDieAudio(trigger.player.name)
				}
			},
			_ndieauvictory: {
				trigger: {
					global: "dieBegin",
				},
				priority: 2,
				forced: true,
				filter: function (event, player) {
					if (player.name != "lolkz_ateruisi" && player.name != "lolkz_panshen") return false;
					return !game.hasPlayer(function (current) {
						return current != event.player && player.getEnemies().contains(current)
					})
				},
				content: function () {
					game.N_playVictoryAudio(trigger.player.name)
				}
			},
			_nplayCardAudio: {
				trigger: {
					player: "useCardBegin",
				},
				priority: 2,
				direct: true,
				filter: function (event, player) {
					return event.card.name.indexOf("lol_") == 0;
				},
				content: function () {
					game.N_playCardAudio(trigger.card.name);
				}
			},

			// Mark
			"tel_lol_foxfire": {
				mark: true,
				marktext: "火",
				intro: {
					name: "狐火",
					content: "mark"
				}
			},

			"tel@lol.mark_bullet": {
				mark: true,
				marktext: "弹",
				intro: {
					name: "弹药",
					content: "mark"
				}
			},

			"tel@lol.mark_soulkill": {
				mark: true,
				marktext: "灭",
				intro: {
					name: "灭魂",
					content: "mark"
				}
			},

			"tel@lol.mark.soulpiece": {
				mark: true,
				marktext: "屑",
				intro: {
					name: "魂屑",
					content: "mark"
				}
			},

			"tel@lol.mark_windKill": {
				mark: true,
				marktext: "风",
				intro: {
					name: "踏风",
					content: "mark"
				}
			},
			// Effects
			"tel_lol_nishui": {
				audio: false,
				charlotte: true,
				mod: {
					cardEnabled2: (card, _player, result) => get.itemtype(card) == card ? false : result
				},
				mark: true,
				marktext: "溺",
				intro: {
					name: "溺水",
					content: "当前回合无法使用或打出牌"
				}
			},
			"tel_lol_xuanyun": {
				audio: false,
				trigger: {
					global: "useCard"
				},
				charlotte: true,
				silent: true,
				init(player, skill) {
					player.addSkillBlocker(skill);
				},
				onremove(player, skill) {
					player.removeSkillBlocker(skill);
				},
				filter: (event, player, _name) => event.player != player,
				skillBlocker: (skill, player) => !lib.skill[skill].charlotte && !get.is.locked(skill, player),
				content(trigger, player) {
					trigger.directHit.add(player);
				},
				mark: true,
				marktext: "眩",
				intro: {
					name: "眩晕",
					content: (_storage, player, _skill) => (list => list.length ?
						`失效技能：${get.translation(list)}` :
						"无失效技能")(player.getSkills(null, false, false)
							.filter(skill => lib.skill.fengyin.skillBlocker(skill, player)))
				},
			},
			"tel_lol_charmure_buff": {
				audio: false,
				trigger: {
					player: "useCard"
				},
				charlotte: true,
				silent: true,
				onremove: true,
				init(player, skill) {
					player.storage[skill] = new Array;
				},
				content(trigger, player) {
					trigger.directHit.addArray(player.storage[event.name]);
				},
				mark: true,
				marktext: "魅",
				intro: {
					name: "魅惑",
					content: "$无法响应你使用的牌"
				}
			},
			"tel_lol_charmure_debuff": {
				charlotte: true,
				onremove: true,
				init(player, skill) {
					player.storage[skill] = new Array;
				},
				mod: {
					playerEnabled: (_card, player, target, result) => player != target && player.storage["tel_lol_charmure_debuff"].includes(target) ? false : result
				},
				mark: true,
				marktext: "迷",
				intro: {
					name: "魅惑",
					content: "你无法对$使用牌"
				}
			},
			// Action
			"tel_lol_charmure": {
				content(player, target) {
					"step 0"
					let name = get.translation(player);
					target.chooseCard("he", true, `${name}对你发动了【魅惑】，请将一张牌交给${name}`)
						.set("prompt2", `本回合内你无法对${name}使用牌，且无法响应${name}使用的牌`)
						.set("ai", card => 6 - get.value(card));
					"step 1"
					target.give(result.cards, player, true);
					if (!player.hasSkill("tel_lol_charmure_buff")) player.addTempSkill("tel_lol_charmure_buff");
					if (!target.hasSkill("tel_lol_charmure_debuff")) target.addTempSkill("tel_lol_charmure_debuff");
					player.storage["tel_lol_charmure_buff"].push(target);
					target.storage["tel_lol_charmure_debuff"].push(player);
				}
			},
			//
			"lol_yingsha": {
			},
			"lol_heiying": {
			},
			"lol_anjie": {
			},
			"lol_juxi": {
			},
			"lol_zhishen": {
			},
			"lol_yanzai": {
			},
			"lol_zhuoshao": {
			},
			"lol_bossSkill_cuishi": {
				mode: ["boss"],
				group: ["lol_bossSkill_cuishi_1", "lol_bossSkill_cuishi_2", "lol_bossSkill_cuishi_3"],
				subSkill: {
					"1": {
						trigger: {
							player: "phaseDrawBegin2",
						},
						frequent: true,
						filter: function (event, player) {
							return !event.numFixed;
						},
						content: function () {
							trigger.num += 2;
						},
					},
					"2": {
						trigger: {
							player: "phaseJieshuBegin",
						},
						frequent: true,
						preHidden: true,
						content: function () {
							player.draw(2);
						},
					},
					"3": {
						trigger: {
							global: "dieAfter",
						},
						filter: function (event, player) {
							return event.source && event.source === player
						},
						frequent: true,
						preHidden: true,
						content: function () {
							player.gainMaxHp();
							player.recover();
						},
					},
				},
			},
			// Nasus
			// fetchSoul: 汲魂
			"tel_lol_fetchSoul": {
				audio: "ext:英雄联盟扩展/res/audio/skill:4",
				locked: true,
				group: ["tel_lol_fetchSoul_die", "tel_lol_fetchSoul_addDamage"],
				intro: {
					name: "汲魂",
					content: "本局游戏使用【杀】造成的伤害+#",
				}
			},
			"tel_lol_fetchSoul_die": {
				audio: "tel_lol_fetchSoul",
				trigger: {
					global: "dieAfter",
				},
				locked: true,
				forced: true,
				sourceSkill: "tel_lol_fetchSoul",
				content(trigger, player) {
					"step 0"
					{
						player.gainMaxHp();
						player.addMark("tel_lol_fetchSoul", 1, false);
					}
					"step 1"
					if (trigger.player.hasSkill("lol_kuwei")) player.removeSkill("lol_lunhui");
				}
			},
			"tel_lol_fetchSoul_addDamage": {
				audio: "ext:英雄联盟扩展/res/audio/skill:2",
				trigger: {
					source: "damageBegin1",
				},
				locked: true,
				forced: true,
				sourceSkill: "tel_lol_fetchSoul",
				filter: (event, player) => event.card && event.card.name === "sha" && player.countMark("tel_lol_fetchSoul") > 0,
				content: function (trigger, player) {
					game.log(player, "对", trigger.player, "造成的伤害+", player.countMark("tel_lol_fetchSoul"));
					trigger.num += player.countMark("tel_lol_fetchSoul");
				}
			},

			"lol_shigu": {
				audio: "ext:英雄联盟扩展:4",
				init: function (player) {
					if (!player.storage.lol_shigu) player.storage.lol_shigu = true;
				},
				enable: "phaseUse",
				filterTarget: function (card, player, target) {
					return true;
				},
				filter: function (event, player) {
					return player.countCards("h") > 0 && player.storage.lol_shigu == true;
				},
				skillAnimation: true,
				filterCard: true,
				selectCard: -1,
				discard: false,
				lose: false,
				delay: false,
				content: function () {
					player.discard(cards);
					player.storage.lol_shigu = false;
					target.addSkill("lol_kuwei");
					player.addSkill("lol_kuwei_remove");
					player.addSkill("lol_lunhui");
					target.markSkillCharacter("lol_kuwei", player, "枯萎", "对" + get.translation(player) + "造成伤害时，取消之；当你成为" + get.translation(player) + "的目标时，你不能响应，然后移除此技能。");
					target.storage.lol_kuwei = player;
				},
			},
			"lol_lunhui": {
				mark: true,
				marktext: "回",
				intro: {
					name: "轮回",
					content: "limited",
				},
				audio: "ext:英雄联盟扩展:4",
				trigger: {
					player: "dieBegin",
				},
				skillAnimation: true,
				forced: true,
				init(player) {
					player.storage.lol_shigu = false;
				},
				filter: (_event, player) => !player.storage.lol_shigu,
				content: function () {
					"step 0"
					trigger.cancel();
					//player.storage.lunhui=false;
					player.awakenSkill("lol_lunhui");
					player.storage.lol_shigu = true;
					"step 1"
					player.link(false);
					player.turnOver(false);
					"step 2"
					var num = player.maxHp - player.hp;
					if (num > 0) player.recover(num);
					"step 3"
					player.draw(4);
					event.players = game.filterPlayer(function (current) {
						return current.hasSkill("lol_kuwei");
					}).sortBySeat();
					for (var i of event.players) i.removeSkill("lol_kuwei");
				},
			},

			"lol_kuwei": {
				audio: "ext:英雄联盟扩展:4",
				trigger: {
					source: "damageBegin",
				},
				filter: function (event, player) {
					return event.player == player.storage.lol_kuwei;
				},
				forced: true,
				charlotte: true,
				content: function () {
					trigger.cancel();
				},
				subSkill: {
					remove: {
						audio: "ext:英雄联盟扩展:2",
						trigger: {
							player: "useCardToPlayered",
						},
						forced: true,
						charlotte: true,
						filter: function (event, player) {
							return event.target.hasSkill("lol_kuwei");
						},
						logTarget: function (event, player) {
							return event.target;
						},
						content: function () {
							"step 0"
							trigger.nowuxie = true;
							trigger.directHit.addArray(trigger.targets);
							trigger.target.removeSkill("lol_kuwei");
							trigger.target.unmarkSkill("lol_kuwei");
							"step 1"
							if (!game.hasPlayer(function (current) {
								return current.hasSkill("lol_kuwei");
							})) player.removeSkill("lol_lunhui");
						},
						sub: true,
					},
				},
			},
			"lol_yanxi": {
				locked: true,
				group: ["lol_yanxi_fire", "lol_yanxi_useCard", "lol_yanxi_damage"],
				subSkill: {
					fire: {
						audio: "ext:英雄联盟扩展:4",
						trigger: {
							player: "damageBefore",
						},
						filter: function (event, player) {
							if (event.nature && event.nature == "fire") return true;
						},
						forced: true,
						content: function () {
							trigger.cancel();
						},
						ai: {
							nofire: true,
							effect: {
								target: function (card, player, target, current) {
									if (get.tag(card, "natureDamage")) return "zerotarget";
								},
							},
						},
						sub: true,
					},
					useCard: {
						trigger: {
							player: "useCardToPlayered",
						},
						direct: true,
						content: function () {
							for (var i of trigger.targets) {
								if (i === player) continue;
								if (!i.hasSkill("lol_yisun")) i.addSkill("lol_yisun");
							}
						},
						sub: true,
					},
					damage: {
						audio: "ext:英雄联盟扩展:4",
						trigger: {
							source: "damageBegin1",
						},
						forced: true,
						logTarget: "target",
						filter: function (event, player) {
							return event.player.hasSkill("lol_yisun");
						},
						content: function () {
							"step 0"
							if (!trigger.nature || trigger.nature !== "fire") trigger.nature = "fire";
							"step 1"
							trigger.player.removeSkill("lol_yisun");
							player.draw();
							"step 2"
							if (!trigger.player.countCards("h") && trigger.parent.name !== "_lianhuan" && trigger.parent.name != "_lianhuan2") {
								trigger.num++;
							}
						},
						sub: true,
					},
				},
			},
			"lol_yisun": {
				mark: true,
				nopop: true,
				init: function (player) {
					game.log(player, "获得了", "【易损】");
				},
				intro: {
					content: "锁定技，奥恩对你造成的伤害改为火焰伤害，移除“易损”摸一张牌，若你没有手牌则伤害+1",
				},
			},
			"lol_jiangshen": {
				recipes: {
					qinggang: "qibaodao",
					zhuge: "rewrite_zhuge",
					zhuque: "wuxinghelingshan",
					bagua: "rewrite_bagua",
					renwang: "rewrite_renwang",
					tengjia: "rewrite_tengjia",
					lanyinjia: "rewrite_lanyinjia",
					"lol_qishizhishi": "lol_lvdun",
					"lol_ludengdehuixiang": "lol_ludengdejidang",
					"lol_zhongyashalou": "lol_zhongyabeilun",
					"lol_shouhutianshi": "lol_jiushu",
					"lol_jinjibeixin": "lol_jinjizhijia",
					"lol_luanna": "lol_kuangfengzhili",
					"lol_kuangtukaijia": "lol_kuangtuzhixin",
					"lol_zhenfengkaijia": "lol_jifendian",
					"lol_ziranzhili": "lol_lindongzhilin",
					"lol_yinxiejian": "lol_qixieren",
				},
				enable: "phaseUse",
				usable: 1,
				filterTarget: true,
				filterCard: true,
				position: "hes",
				content: function () {
					"step 0"
					player.chooseControlList(["令" + get.translation(target) + "获得一张游戏内任意装备的同名虚拟牌（弃置时移出游戏）", "弃置" + get.translation(target) + "一张牌，若为装备牌则视为你使用一张不能被抵消的【铁索连环】，然后对其造成1点伤害"], function () {
						return _status.event.att > 0 ? 0 : 1;
					}).set("att", get.attitude(player, target));
					"step 1"
					switch (result.index) {
						case 0:
							player.useSkill("lol_jiangshen_equip", [target]);
							break;
						case 1:
							player.useSkill("lol_jiangshen_discard", [target]);
							break;
					}
				},
				ai: {
					order: 9,
					result: {
						target: function (player, target) {
							var att = get.attitude(player, target);
							if (att > 0) return 2;
							return -3;
						},
					},
				},
				global: ["lol_jiangshen_global"],
				group: ["lol_jiangshen_direct"],
				subSkill: {
					direct: {
						trigger: {
							player: "useCardToPlayered",
						},
						direct: true,
						filter: function (event, player) {
							return event.getParent().getParent()._lol_jiangshen == true;
						},
						content: function () {
							trigger.getParent().directHit.addArray(game.players);
						},
						sub: true,
					},
					equip: {
						audio: "ext:英雄联盟扩展:5",
						content: function () {
							"step 0"
							var list = [];
							if (lib.config.extension_英雄联盟扩展_aoenplus == false) {
								for (const i of game.players) {
									for (const j of i.getCards("e")) {
										if (!list.contains(j.name)) list.push(j.name);
									}
								}
								for (let i = 0; i < ui.cardPile.childElementCount; i++) {
									if (get.type(ui.cardPile.childNodes[i], "trick") == "equip" && !list.contains(ui.cardPile.childNodes[i].name)) {
										list.push(ui.cardPile.childNodes[i].name);
									}
								}
								for (let i = 0; i < ui.discardPile.childElementCount; i++) {
									if (get.type(ui.discardPile.childNodes[i], "trick") == "equip" && !list.contains(ui.discardPile.childNodes[i].name)) {
										list.push(ui.discardPile.childNodes[i].name);
									}
								}
							} else list = get.typeCard("equip");
							if (list.length) {
								var dialog = ui.create.dialog("匠神：令" + get.translation(event.target) + "获得一张游戏内任意装备的同名虚拟牌（弃置时移出游戏）", [list, "vcard"], "hidden");
								player.chooseButton(dialog, true).set("ai", function (button) {
									return get.effect(_status.event.current, {
										name: button.link[2],
										isCard: true
									}, player, player);
								}).set("current", event.target);
							} else {
								event.finish();
							}
							"step 1"
							if (result.bool) {
								var card = game.createCard(result.links[0][2]);
								card._destroy = true;
								event.target.equip(card);
								game.getFileList("extension/英雄联盟扩展", function (_, files) {
									var list = [[], []], i;
									for (i of files) {
										if (i.indexOf(event.target.name1 + "_lol_aoen") == 0) list[0].push(i.slice(0, i.lastIndexOf(".")));
										if (i.indexOf(event.target.name2 + "_lol_aoen") == 0) list[1].push(i.slice(0, i.lastIndexOf(".")));
									}
									;
									if (list[0].length) game.playAudio("..", "extension", "英雄联盟扩展", list[0].randomGet());
									if (list[1].length) game.playAudio("..", "extension", "英雄联盟扩展", list[1].randomGet());
								});
							}
						},
						sub: true,
					},
					discard: {
						audio: "ext:英雄联盟扩展:6",
						content: function () {
							"step 0"
							if (event.target.countDiscardableCards(player, "hej")) {
								player.discardPlayerCard(event.target, "hej", false, 1);
							} else event.finish();
							"step 1"
							if (result.bool) {
								if (get.type(result.cards[0], "trick") == "equip") {
									var next = player.chooseUseTarget({
										name: "tiesuo",
										isCard: true
									}, true)._lol_jiangshen = true;
									event.target.damage(1, player);
								}
							}
						},
						sub: true,
					},
					global: {
						audio: "ext:英雄联盟扩展:6",
						enable: "phaseUse",
						usable: 1,
						discard: false,
						lose: false,
						delay: false,
						line: true,
						direct: true,
						clearTime: true,
						position: "hes",
						prepare: function (cards, player, targets) {
							targets[0].logSkill("lol_jiangshen");
						},
						prompt: function () {
							var player = _status.event.player;
							var list = game.filterPlayer(function (target) {
								return target != player && target.hasZhuSkill("lol_jiangshen", player);
							});
							var str = "将一张牌交给" + get.translation(list);
							if (list.length > 1) str += "中的一人";
							str += "然后强化你的装备，若强化失败，则你摸两张牌并弃置该装备牌";
							return str;
						},
						filter: function (event, player) {
							if (!player.countCards("hes")) return false;
							return game.hasPlayer(function (target) {
								return target != player && target.hasSkill("lol_jiangshen", player) && !target.hasSkill("lol_jiangshen_global2");
							});
						},
						filterCard: true,
						log: false,
						visible: true,
						filterTarget: function (card, player, target) {
							return target != player && target.hasSkill("lol_jiangshen", player) && !target.hasSkill("lol_jiangshen_global2");
						},
						content: function () {
							"step 0"
							target.gain(cards, player, "giveAuto");
							"step 1"
							player.chooseCard("e", true, 1, "选择强化一张装备");
							"step 2"
							if (result.bool && result.cards && result.cards.length) {
								var card = result.cards[0];
								if (lib.skill.lol_jiangshen.recipes.contains(card.name)) {
									game.log(card, "强化成功！");
									game.playAudio("..", "extension", "lol_jiangshen_global_succeed", Math.floor(Math.random() * 6 + 1));
									player.removeEquipTrigger(card);
									game.addVideo("skill", player, ["lol_jiangshen", [true, get.cardInfo(card)]]);
									game.broadcastAll(function (card) {
										card.init([card.suit, card.number, "rewrite_" + card.name]);
									}, card);
									var info = get.info(card);
									if (info.skills) {
										for (var i of info.skills) {
											player.addSkillTrigger(i);
										}
									}
								} else {
									game.log(card, "强化失败……");
									game.playAudio("..", "extension", "lol_jiangshen_global_failed", Math.floor(Math.random() * 6 + 1));
									player.discard(card);
									player.draw(2);
								}
							}
							"step 3"
							target.addTempSkill("lol_jiangshen_global2", "phaseUseEnd");
						},
						ai: {
							expose: 0.3,
							order: 10,
							result: {
								target: 1,
								player: function (card, player, target) {
									if (player.countCards("e")) return 1;
									return -1
								},
							},
						},
						sub: true,
					},
					"global2": {
						sub: true,
					},
				},
			},
			"lol_damie": {
				locked: true,
				direct: true,
				init: function (player) {
					player.storage.lol_damie = 0;
					player.markSkill("lol_damie");
				},
				marktext: "血",
				intro: {
					content: "mark",
				},
				trigger: {
					source: "damageBegin",
				},
				content: function () {
					if (!player.storage.lol_damie) {
						player.storage.lol_damie = trigger.num;
					} else {
						player.storage.lol_damie += trigger.num;
					}
					player.update();
				},
				group: "lol_damie_dying",
				subSkill: {
					dying: {
						audio: "ext:英雄联盟扩展:4",
						trigger: {
							player: ["dying", "lol_dc_cisi_killAfter"],
						},
						locked: true,
						direct: true,
						content: function () {
							"step 0"
							if (trigger.name == "dying") player.logSkill("lol_damie_dying");
							//game.log(player.storage.lol_damie);
							if (player.isLinked()) player.link();
							player.maxHp = player.hp > 1 ? player.hp : 1;
							"step 1"
							player.addSkill("lol_damie_phase");
							if (player.storage.lol_damie > 0) {
								player.maxHp++
								player.recover();
								player.draw();
								player.storage.lol_damie--;
								player.update();
								event.goto(1);
							} else if (player.hp < 1) {
								event.finish();
							}
						},
						sub: true,
					},
					phase: {
						trigger: {
							global: "phaseUseEnd",
						},
						locked: true,
						forced: true,
						filter: function (event, player) {
							return player.hp > 0;
						},
						content: function () {
							player.storage.lol_damie = 0;
							player.update();
							game.log(player, "进行了一个额外的出牌阶段");
							game.updateRoundNumber();
							var next = player.phaseUse();
							event.next.remove(next);
							trigger.next.push(next);
							player.removeSkill("lol_damie_phase");
						},
						sub: true,
					},
				},
			},
			"lol_dc_cisi": {
				audio: "ext:英雄联盟扩展:4",
				trigger: {
					player: "useCardToPlayered",
				},
				filter: function (event, player) {
					return event.card.name == "sha";
				},
				forced: true,
				logTarget: "target",
				content: function () {
					trigger.target.addTempSkill("lol_unrecover");
				},
				group: ["lol_dc_cisi_kill", "lol_dc_cisi_sha", "lol_dc_cisi_shamiss", "lol_dc_cisi_re"],
				subSkill: {
					kill: {
						audio: "ext:英雄联盟扩展:4",
						trigger: {
							source: "dieAfter",
						},
						forced: true,
						content: function () {
							//player.draw(5);
						},
						sub: true,
					},
					sha: {
						init: function (player) {
							if (!player.storage.lol_dc_cisi_sha) player.storage.lol_dc_cisi_sha = true;
						},
						trigger: {
							player: "useCardAfter",
						},
						direct: true,
						filter: function (event, player) {
							return event.card.name == "sha";
						},
						content: function () {
							if (player.storage.lol_dc_cisi_sha == true) {
								player.gain(trigger.cards, "gain2");
								if (!player.hasSkill("lol_dc_cisi_shabuff")) player.addSkill("lol_dc_cisi_shabuff");
								player.storage.lol_dc_cisi_shabuff++;
							} else player.storage.lol_dc_cisi_sha = true
						},
						sub: true,
					},
					shamiss: {
						trigger: {
							player: "shaMiss",
						},
						forced: true,
						content: function () {
							player.storage.lol_dc_cisi_sha = false;
							//player.removeSkill("lol_dc_cisi_shabuff");
						},
						sub: true,
					},
					shabuff: {
						init: function (player) {
							if (!player.storage.lol_dc_cisi_shabuff) player.storage.lol_dc_cisi_shabuff = 0;
						},
						mod: {
							cardUsable: function (card, player, num) {
								if (card.name == "sha") return num + player.storage.lol_dc_cisi_shabuff;
							},
							globalFrom: function (from, to, distance) {
								return distance - from.storage.lol_dc_cisi_shabuff;
							},
							selectTarget: function (card, player, range) {
								if (card.name == "sha") {
									range[0] += player.storage.lol_dc_cisi_shabuff;
									range[1] += player.storage.lol_dc_cisi_shabuff;
								}
							},
						},
						sub: true,
					},
					re: {
						trigger: {
							global: "phaseEnd",
						},
						direct: true,
						priority: -1,
						content: function () {
							player.storage.lol_dc_cisi_shabuff = 0;
							player.removeSkill("lol_dc_cisi_shabuff");
						},
						sub: true,
					},
				},
			},
			"lol_unrecover": {
				audio: "ext:英雄联盟扩展:4",
				trigger: {
					player: "recoverBegin",
				},
				mark: true,
				intro: {
					content: "回复量-1",
				},
				forced: true,
				content: function () {
					trigger.num--;
				},
			},
			"lol_wuxing": {
				audio: "ext:英雄联盟扩展:true",
				enable: "phaseUse",
				usable: 1,
				content: function () {
					player.loseHp();
					player.addTempSkill("lol_wuxing_2");
					game.countPlayer(function (current) {
						if (current != player) {
							player.line(current, "green");
							current.addSkill("lol_wuxing_3");
						}
					});
					game.countPlayer(function (current) {
						if (current != player && !current.hasSkill("baiban")) {
							player.line(current, "green");
							current.addSkill("baiban");
						}
					});
					player.getStat().card.sha = 0;
					var evt = _status.event.getParent("phaseUse");
					if (evt && evt.name == "phaseUse") {
						var next = game.createEvent("lol_wuxing_clear");
						_status.event.next.remove(next);
						evt.after.push(next);
						next.player = player;
						next.setContent(function () {
							game.countPlayer(function (current) {
								if (current != player) {
									player.line(current, "green");
									current.removeSkill("lol_wuxing_3");
								}
							});
							game.countPlayer(function (current) {
								if (current != player) {
									player.line(current, "green");
									current.removeSkill("baiban");
								}
							});
						});
					}
				},
				ai: {
					order: 5,
					result: {
						player: function (player, target) {
							if (player.hp == 1) return 0;
							var num = 0;
							for (var i = 0; i < player.countCards("h"); i++) {
								if (get.tag(player.getCards("h")[i], "damage")) num++;
							}
							if (num > target.hp) return 1;
							return 0;
						},
					},
				},
				subSkill: {
					"2": {
						mod: {
							selectTarget: function (card, player, range) {
								if (card.name == "sha" && range[1] != -1) range[1] = Infinity;
							},
						},
						init: function (player) {
							game.countPlayer(function (current) {
								if (current != player) current.storage.lol_wuxing_damage = 0;
							});
						},
						onremove: function (player) {
							game.countPlayer(function (current) {
								if (current != player) delete current.storage.lol_wuxing_damage;
							});
						},
						trigger: {
							source: "damageBefore",
							player: "useCardToPlayered",
						},
						locked: false,
						forced: true,
						content: function () {
							if (event.triggername == "useCardToPlayered") {
								var targets = game.filterPlayer();
								targets.remove(player);
								for (var i = 0; i < targets.length; i++) {
									trigger.getParent().directHit.add(targets[i]);
								}
							} else {
								var evt = _status.event.getParent("phaseUse");
								if (evt && evt.name == "phaseUse") {
									trigger.cancel();
									trigger.player.storage.lol_wuxing_damage += trigger.num;
									player.addTempSkill("lol_wuxing_4", {
										player: "phaseDiscardBegin"
									});
								}
							}
						},
						ai: {
							"directHit_ai": true,
						},
						sub: true,
					},
					"3": {
						mark: true,
						marktext: "停",
						mod: {
							"cardEnabled2": function (card) {
								if (get.position(card) == "h") return false;
							},
							cardDiscardable: function (card, player) {
								if (get.position(card) == "h") return false;
							},
						},
						intro: {
							content: "不能使用或打出或弃置手牌",
						},
						sub: true,
					},
					"4": {
						onremove: function (player) {
							player.removeSkill("lol_wuxing_2");
						},
						trigger: {
							player: "phaseDiscardBefore",
						},
						filter: function (event, player) {
							return game.countPlayer(function (current) {
								return current.storage.lol_wuxing_damage > 0;
							}) > 0;
						},
						forced: true,
						content: function () {
							"step 0"
							var targets = game.filterPlayer(function (current) {
								return current.storage.lol_wuxing_damage > 0;
							});
							player.line(targets, "fire");
							event.targets = targets;
							event.num = 0;
							"step 1"
							if (event.targets && event.num < event.targets.length) {
								event.targets[event.num].damage(event.targets[event.num].storage.lol_wuxing_damage);
								event.num++;
								event.redo();
							}
						},
						sub: true,
					},
				},
			},
			"lol_wuji": {
				audio: "ext:英雄联盟扩展:2",
				locked: true,
				group: ["lol_wuji_sha", "lol_wuji_sha"],
				subSkill: {
					sha: {
						audio: "ext:英雄联盟扩展:2",
						enable: ["chooseToUse", "chooseToRespond"],
						filter: function (event, player) {
							return player.isEmpty(1) && event.num > 0;
						},
						filterCard: {
							name: "shan",
						},
						viewAs: {
							name: "sha",
						},
						viewAsFilter: function (player) {
							if (!player.countCards("hs", "shan")) return false;
						},
						position: "hs",
						prompt: "将一张闪当杀使用或打出",
						check: function () {
							return 1
						},
						sub: true,
						ai: {
							yingbian: function (card, player, targets, viewer) {
								if (get.attitude(viewer, player) <= 0) return 0;
								var base = 0,
									hit = false;
								if (get.cardtag(card, "yingbian_hit")) {
									hit = true;
									if (targets.filter(function (target) {
										return target.hasShan() && get.attitude(viewer, target) < 0 && get.damageEffect(target, player, viewer, get.nature(card)) > 0;
									})) base += 5;
								}
								if (get.cardtag(card, "yingbian_all")) {
									if (game.hasPlayer(function (current) {
										return !targets.contains(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
									})) base += 5;
								}
								if (get.cardtag(card, "yingbian_damage")) {
									if (targets.filter(function (target) {
										return get.attitude(player, target) < 0 && (hit || !target.mayHaveShan() || player.hasSkillTag("directHit_ai", true, {
											target: target,
											card: card,
										}, true)) && !target.hasSkillTag("filterDamage", null, {
											player: player,
											card: card,
											jiu: true,
										})
									})) base += 5;
								}
								return base;
							},
							canLink: function (player, target, card) {
								if (!target.isLinked() && !player.hasSkill("wutiesuolian_skill")) return false;
								if (target.mayHaveShan() && !player.hasSkillTag("directHit_ai", true, {
									target: target,
									card: card,
								}, true)) return false;
								if (player.hasSkill("jueqing") || player.hasSkill("gangzhi") || target.hasSkill("gangzhi")) return false;
								return true;
							},
							basic: {
								useful: [5, 3, 1],
								value: [5, 3, 1],
							},
							order: function (item, player) {
								if (player.hasSkillTag("presha", true, null, true)) return 10;
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
										if (!isLink && player.hasSkill("jiu")) {
											if (!target.hasSkillTag("filterDamage", null, {
												player: player,
												card: card,
												jiu: true,
											})) {
												if (get.attitude(player, target) > 0) {
													return -7;
												} else {
													return -4;
												}
											}
											return -0.5;
										}
										return -1.5;
									}();
									if (!isLink && target.mayHaveShan() && !player.hasSkillTag("directHit_ai", true, {
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
									if (card.nature == "poison") return;
									return 1;
								},
								natureDamage: function (card) {
									if (card.nature) return 1;
								},
								fireDamage: function (card, nature) {
									if (card.nature == "fire") return 1;
								},
								thunderDamage: function (card, nature) {
									if (card.nature == "thunder") return 1;
								},
								poisonDamage: function (card, nature) {
									if (card.nature == "poison") return 1;
								},
							},
						},
					},
				},
			},
			"lol_wudi": {
				audio: "ext:英雄联盟扩展:3",
				trigger: {
					global: "die",
				},
				locked: true,
				forced: true,
				filter: function (event, player) {
					return event.source && event.source == player;
				},
				content: function () {
					"step 1"
					player.recover();
					if (!player.storage.lol_wudi) {
						player.storage.lol_wudi = 1;
					} else player.storage.lol_wudi++;
					player.draw(player.storage.lol_wudi);
					"step 2"
					player.phaseUse();
				},
				group: ["lol_wudi_phaseDrawAfter"],
				subSkill: {
					phaseDrawAfter: {
						trigger: {
							player: "phaseDrawAfter",
						},
						forced: true,
						filter: function (event, player) {
							return player.storage.lol_wudi;
						},
						content: function () {
							if (player.getStat().card.sha) {
								player.getStat().card.sha--;
							} else player.getStat().card.sha = -1;
							player.phaseUse();
						},
						sub: true,
					},
				},
			},
			"dz_yxlm_beici": {
				audio: "ext:英雄联盟扩展:2",
				trigger: {
					source: "damageBegin1",
				},
				forced: true,
				filter: function (event, player) {
					return event.player.maxHp < Math.floor(player.maxHp / 2) || (event.player.storage.dz_yxlm_kongju && event.player.storage.dz_yxlm_kongju.contains(player));
				},
				content: function () {
					trigger.num++
				},
			},
			"dz_yxlm_jingsong": {
				audio: "ext:英雄联盟扩展:2",
				trigger: {
					player: "showCharacterAfter",
				},
				hiddenSkill: true,
				forced: true,
				filter: function (event, player) {
					if (!event.toShow) return false;
					for (var i of event.toShow) {
						var info = lib.character[i];
						if (info && info[3] && info[3].contains("dz_yxlm_jingsong")) return true;
					}
					;
					return false;
				},
				logTarget: function (trigger, player) {
					return game.filterPlayer(function (c) {
						return player.inRange(c);
					});
				},
				content: function () {
					game.filterPlayer(function (c) {
						if (player.inRange(c)) {
							c.addTempSkill("dz_yxlm_kongju");
							c.storage.dz_yxlm_kongju.add(player);
						}
						;
					});
				},
				group: "dz_yxlm_jingsong_damage",
				subSkill: {
					damage: {
						audio: "ext:英雄联盟扩展:2",
						trigger: {
							player: "damageBegin4",
						},
						filter: function (event, player) {
							return player.countCards("h");
						},
						check: function (event, player) {
							return player.countCards("h") <= 3;
						},
						content: function () {
							var hs = player.getCards("h");
							if (hs.length) player.discard(hs);
							trigger.cancel();
							lib.skill.dz_yxlm_enchou.hideCharacter(player.name1, player);
							if (player.name2) lib.skill.dz_yxlm_enchou.hideCharacter(player.name2, player);
						},
						sub: true,
					},
				},
			},
			"dz_yxlm_kongju": {
				init: function (player, skill) {
					if (!player.storage[skill]) player.storage[skill] = [];
				},
				onremove: true,
				charlotte: true,
				mod: {
					playerEnabled: function (card, player, target, now) {
						if (player.storage.dz_yxlm_kongju && player.storage.dz_yxlm_kongju.contains(target)) return false;
					},
					cardSavable: function (card, player, target, now) {
						if (player.storage.dz_yxlm_kongju && player.storage.dz_yxlm_kongju.contains(target)) return false;
					},
				},
				mark: true,
				marktext: "惧",
				intro: {
					name: "恐惧",
					content: "不能对$使用牌",
				},
			},
			"dz_yxlm_moou": {
				audio: "ext:英雄联盟扩展:4",
				trigger: {
					player: "dying",
				},
				init: function (player) {
					if (game.online) return;
					player.maxHp = 1;
					if (lib.skill.dz_yxlm_moou_init.filter(null, player)) {
						var next = game.createEvent("dz_yxlm_moou_init_choose", false);
						next.player = player;
						next.setContent(lib.skill.dz_yxlm_moou_init.content);
					}
					;
				},
				filter: function (event, player) {
					return player.storage.dz_yxlm_moou && player.storage.dz_yxlm_moou.isAlive();
				},
				logTarget: function (trigger, player) {
					return player.storage.dz_yxlm_moou;
				},
				forced: true,
				onremove: true,
				content: function () {
					"step 0"
					var target = player.storage.dz_yxlm_moou;
					var list = ["选项一", "选项二"],
						choiceList = [
							"与" + get.translation(player) + "交换身份牌然后你死亡”",
							"你将武将牌替换为“恶魔小丑·萨科”",
						];
					event.target = target;
					target.chooseControl(list).set("choiceList", choiceList).set("ai", function () {
						return "选项二";
					});
					"step 1"
					if (result.control == "选项一") {
						game.broadcastAll(function (player, target, shown, zhu) {
							var identity = player.identity;
							player.identity = target.identity;
							if (zhu && (zhu == player || zhu == target)) {
								if (zhu == player) game.zhu = target;
								else game.zhu = player;
							}
							;
							if (shown || player == game.me) {
								player.setIdentity();
							}
							target.identity = identity;
						}, player, target, target.identityShown, game.zhu);
						if (player.hp < 1) player.recover(1 - player.hp);
						target.die();
					} else {
						var list = [];
						if (target.name1) {
							list.add(target.name1);
							target.reinit(target.name1, "dz_yxlm_sake", false);
						}
						;
						if (target.name2) {
							list.add(target.name2);
							target.reinit(target.name2, "dz_yxlm_sake", false);
						}
						;
						if (_status.characterlist) {
							_status.characterlist.addArray(list);
						}
						;
						delete player.storage.dz_yxlm_moou;
					}
					;
					"step 2"
					event.trigger("dz_yxlm_moou_choose");
				},
				group: ["dz_yxlm_moou_init", "dz_yxlm_moou_MaxHp"],
				subSkill: {
					MaxHp: {
						trigger: {
							player: ["loseMaxHpBegin", "gainMaxHpBegin"],
							global: "phaseBefore",
						},
						direct: true,
						content: function () {
							player.maxHp = 1;
							if (trigger.name != "phase") trigger.cancel();
						},
						sub: true,
					},
					init: {
						trigger: {
							global: ["die", "dz_yxlm_moou_choose"],
						},
						filter: function (event, player) {
							if (!game.hasPlayer(function (c) {
								return ![c.name1, c.name2].contains("dz_yxlm_sake") && c != player;
							})) return false;
							return !player.storage.dz_yxlm_moou || !game.hasPlayer(function (c) {
								return c == player.storage.dz_yxlm_moou && ![c.name1, c.name2].contains("dz_yxlm_sake");
							});
						},
						forced: true,
						content: function () {
							"step 0"
							delete player.storage.dz_yxlm_moou;
							player.chooseTarget("选择一名不为“恶魔小丑”的其他角色令其成为你的“魔偶”", true, function (card, player, target) {
								return target != player && ![target.name1, target.name2].contains("dz_yxlm_sake");
							});
							"step 1"
							if (result.targets) {
								player.logSkill("dz_yxlm_moou");
								var target = result.targets[0];
								player.storage.dz_yxlm_moou = target;
							}
							;
						},
						sub: true,
					},
				},
			},
			"dz_yxlm_enchou_gainAudio": {
				name: "",
				audio: "ext:英雄联盟扩展:6",
				trigger: {
					global: "gainEnd",
				},
				forced: true,
				filter: function (event, player) {
					return event.getParent().name == "dz_yxlm_enchou_buff" && event.getParent().player == player;
				},
				content: function () {
				},
			},
			"dz_yxlm_enchou": {
				enable: "phaseUse",
				audio: "ext:英雄联盟扩展:6",
				skillAnimation: true,
				animationColor: "thunder",
				limited: true,
				unique: true,
				filterTarget: function (card, player, target) {
					return target != player;
				},
				hideCharacter: function (name, player) {
					var info = lib.character[name];
					if (!info) return;
					if (player.name1 != name && player.name2 != name) return;
					var skills = info[3].slice(0);
					if (name == player.name1) {
						if (player.classList.contains(_status.video ? "unseen_v" : "unseen")) return;
						player.classList.add(_status.video ? "unseen_v" : "unseen");
						player.name = "unknown";
						if (!player.node.name_seat && !_status.video) {
							player.node.name_seat = ui.create.div(".name.name_seat", get.verticalStr(get.translation(player.name)), player);
							player.node.name_seat.dataset.nature = get.groupnature(player.group);
						}
						;
						player.sex = "male";
					} else {
						if (player.classList.contains(_status.video ? "unseen2_v" : "unseen2")) return;
						player.classList.add(_status.video ? "unseen2_v" : "unseen2");
					}
					;
					if (!player.hiddenSkills) player.hiddenSkills = [];
					game.log(game.me.hiddenSkills);
					player.removeSkill(skills);
					player.hiddenSkills.addArray(skills);
					player.storage.nohp = true;
					player.addSkill("g_hidden_ai");
					player.storage.rawHp = player.hp;
					player.storage.rawMaxHp = player.maxHp;
					player.hp = 1;
					player.maxHp = 1;
					player.node.hp.hide();
					player.update();
				},
				content: function () {
					"step 0"
					player.awakenSkill("dz_yxlm_enchou");
					player.addTempSkill("dz_yxlm_enchou_buff");
					"step 1"
					target.damage("nocard");
					"step 2"
					player.removeSkill("dz_yxlm_enchou_buff");
				},
				group: "dz_yxlm_enchou_gainAudio",
				subSkill: {
					buff: {
						trigger: {
							global: "dyingBegin",
						},
						forced: true,
						charlotte: true,
						direct: true,
						filter: function (event, player) {
							return event.reason && event.reason.getParent().name == "dz_yxlm_enchou";
						},
						content: function () {
							"step 0"
							if (trigger.player.countCards("h")) player.draw(trigger.player.countCards("h"));
							else event.goto(5);
							trigger.player.die(trigger.reason).source = trigger.source;
							trigger.untrigger();
							trigger._triggered = null;
							player.restoreSkill("dz_yxlm_enchou");
							event.given_map = {};
							"step 1"
							var cards = result;
							event.cards = cards;
							"step 2"
							player.chooseCardTarget({
								filterCard: function (card) {
									return _status.event.cards.contains(card);
								},
								filterTarget: lib.filter.notMe,
								selectCard: [1, cards.length],
								cards: event.cards,
								prompt: "恩仇",
								prompt2: "你可以将本次获得的牌交给其他角色",
								ai1: function (card) {
									if (!ui.selected.cards.length) return 1;
									return 0;
								},
								ai2: function (target) {
									return -get.attitude(_status.event.player, target);
								},
							});
							"step 3"
							if (result.bool) {
								event.given = true;
								var res = result.cards,
									target = result.targets[0].playerid;
								player.addGaintag(res, "du_given");
								cards.removeArray(res);
								if (!event.given_map[target]) event.given_map[target] = [];
								event.given_map[target].addArray(res);
								if (cards.length) event.goto(2);
							} else if (!event.given) {
								event.goto(5);
							}
							"step 4"
							var logs = [];
							for (var i in event.given_map) {
								var source = (_status.connectMode ? lib.playerOL : game.playerMap)[i];
								logs.push(source);
								source.gain(event.given_map[i], player, "give");
							}
							;
							"step 5"
							var name = player.name1;
							var info1 = lib.character[player.name1];
							if (player.name2 && (!info || !info[3] || !info[3].contains("dz_yxlm_enchou"))) {
								var info = lib.character[player.name2];
								if (info && info[3] && info[3].contains("dz_yxlm_enchou")) name = player.name2;
							}
							;
							lib.skill.dz_yxlm_enchou.hideCharacter(name, player);
						},
						sub: true,
					},
				},
				mark: true,
				intro: {
					content: "limited",
				},
				init: function (player, skill) {
					player.storage[skill] = false;
				},
			},
			"dz_yxlm_langhui": {
				trigger: {
					player: "showCharacterAfter",
				},
				audio: "dz_yxlm_zhuixiong_loseHp",
				hiddenSkill: true,
				forced: true,
				filter: function (event, player) {
					if (!event.toShow) return false;
					for (var i of event.toShow) {
						var info = lib.character[i];
						if (info && info[3] && info[3].contains("dz_yxlm_langhui")) return true;
					}
					;
					return false;
				},
				logTarget: function (trigger, player) {
					var num = Infinity;
					game.hasPlayer(function (c) {
						if (player.storage.dz_yxlm_zhuixiong.contains(c) && get.distance(player, c) < num) num = get.distance(player, c);
					});
					var list = game.filterPlayer(function (c) {
						return player.storage.dz_yxlm_zhuixiong.contains(c) && get.distance(player, c) == num;
					});
					return list;
				},
				content: function () {
					var num = Infinity;
					game.hasPlayer(function (c) {
						if (player.storage.dz_yxlm_zhuixiong.contains(c) && get.distance(player, c) < num) num = get.distance(player, c);
					});
					var list = game.filterPlayer(function (c) {
						return player.storage.dz_yxlm_zhuixiong.contains(c) && get.distance(player, c) == num;
					});
					if (list.length) {
						for (var i of list) {
							i.turnOver();
						}
						;
					}
					;
				},
				group: "dz_yxlm_langhui_damage",
				mod: {
					globalFrom: function (from, to) {
						if (to.isTurnedOver()) return -Infinity;
					},
				},
				subSkill: {
					damage: {
						trigger: {
							source: "damageBegin1",
						},
						filter: function (event, player) {
							return event.player.isTurnedOver();
						},
						forced: true,
						logTarget: "player",
						content: function () {
							trigger.num *= 2;
						},
						sub: true,
					},
				},
			},
			"dz_yxlm_zhuixiong": {
				trigger: {
					player: "damageBegin4",
				},
				audio: "ext:英雄联盟扩展:6",
				forced: true,
				onremove: true,
				filter: function (event, player) {
					return event.source && event.source != player && !player.storage.dz_yxlm_zhuixiong.contains(event.source);
				},
				init: function (player, skill) {
					if (!player.storage[skill]) player.storage[skill] = [];
					if (game.online) return;
					if (!_status.currentPhase) return;
					if (player.storage.dz_yxlm_zhuixiong.length == 0) {
						var next = game.createEvent("dz_yxlm_zhuixiong_choose", false);
						next.player = player;
						next.setContent(lib.skill.dz_yxlm_zhuixiong.content2);
					}
					;
				},
				logTarget: "source",
				content: function () {
					player.storage.dz_yxlm_zhuixiong.add(trigger.source);
					player.markSkill("dz_yxlm_zhuixiong");
				},
				"content2": function () {
					var target = _status.currentPhase;
					if (_status.currentPhase == player) target = _status.currentPhase.next;
					player.logSkill("dz_yxlm_zhuixiong", target);
					player.storage.dz_yxlm_zhuixiong.add(target);
					player.markSkill("dz_yxlm_zhuixiong");
				},
				intro: {
					content: "凶手列表：$",
				},
				group: ["dz_yxlm_zhuixiong_die", "dz_yxlm_zhuixiong_die2", "dz_yxlm_zhuixiong_loseHp"],
				subSkill: {
					loseHp: {
						trigger: {
							source: "damageBegin2",
						},
						forced: true,
						audio: "ext:英雄联盟扩展:6",
						filter: function (event, player) {
							return player.storage.dz_yxlm_zhuixiong.contains(event.player);
						},
						logTarget: "player",
						content: function () {
							trigger.player.turnOver();
						},
						sub: true,
					},
					die: {
						trigger: {
							global: "die",
						},
						audio: "dz_yxlm_zhuixiong",
						forced: true,
						filter: function (event, player) {
							return player.storage.dz_yxlm_zhuixiong.contains(event.player) && event.source && event.source != player && !player.storage.dz_yxlm_zhuixiong.contains(event.source);
						},
						logTarget: "source",
						content: function () {
							player.storage[event.name].add(trigger.source);
							player.markSkill("dz_yxlm_zhuixiong");
						},
						sub: true,
					},
					"die2": {
						trigger: {
							global: "dieAfter",
						},
						direct: true,
						content: function () {
							"step 0"
							if (player.storage.dz_yxlm_zhuixiong.contains(trigger.player)) {
								player.storage.dz_yxlm_zhuixiong.remove(trigger.player);
							}
							if (player.storage.dz_yxlm_zhuixiong.length <= 0) {
								player.unmarkSkill("dz_yxlm_zhuixiong");
								if (_status.currentPhase) {
									var next = game.createEvent("dz_yxlm_zhuixiong_choose", false);
									next.player = player;
									next.setContent(lib.skill.dz_yxlm_zhuixiong.content2);
								}
							}
						},
						sub: true
					}
				}
			},
			"dz_yxlm_lunhui_After": {
				trigger: {
					player: "dz_yxlm_lunhuiAfter",
				},
				charlotte: true,
				forced: true,
				forceDie: true,
				audio: "ext:英雄联盟扩展:3",
				content: function () {
					player.removeSkill(event.name);
				},
			},
			"dz_yxlm_lunhui": {
				enable: "phaseUse",
				audio: "ext:英雄联盟扩展:3",
				skillAnimation: true,
				animationColor: "thunder",
				usable: 1,
				unique: true,
				filterTarget: function (card, player, target) {
					return target != player;
				},
				content: function () {
					"step 0"
					player.awakenSkill("dz_yxlm_lunhui");
					player.addTempSkill("dz_yxlm_lunhui_After");
					event.forceDie = true;
					event.list = game.filterPlayer(function (c) {
						if (c != player && c != target) c.out("dz_yxlm_lunhui");
						return true;
					}).slice(0);
					"step 1"
					target.loseMaxHp();
					target.disableEquip("equip1");
					target.disableEquip("equip2");
					target.disableEquip("equip3");
					target.disableEquip("equip4");
					target.disableEquip("equip5");
					player.gainMaxHp();
					"step 2"
					_status.dz_yxlm_lunhui = event;
					player.addTempSkill("dz_yxlm_lunhui_buff");
					target.addTempSkill("dz_yxlm_lunhui_buff");
					event.current = player;
					event.Stop = 0;
					"step 3"
					if (player.hasSkill("dz_yxlm_lunhui_buff") && target.hasSkill("dz_yxlm_lunhui_buff")) {
						game.log(event.current, "的特殊回合开始！");
						event.trigger("phaseBegin");
						var card = get.cards()[0];
						event.Stop++;
						event.current.showCards(card);
						if (event.current.hasUseTarget(card)) event.current.chooseUseTarget(card, true);
						else {
							event.current.$throw(card);
							game.cardsDiscard(card);
						}
						;
						if (event.Stop <= 500) {
							event.trigger("phaseEnd");
							event.redo();
							if (event.current == player) event.current = target;
							else event.current = player;
						} else player.chat("吾与汝已大战五百回合，来日方长我们改日再战！</br>（已触发防止无限循环！）");
					}
					;
					"step 4"
					if (event.list.length) {
						for (var i of event.list) i.in("dz_yxlm_lunhui");
					}
					;
				},
				subSkill: {
					buff: {
						trigger: {
							player: "dying",
						},
						forced: true,
						direct: true,
						charlotte: true,
						firstDo: true,
						filter: function (event, player) {
							return _status.dz_yxlm_lunhui && (_status.dz_yxlm_lunhui.player == player || _status.dz_yxlm_lunhui.target == player);
						},
						content: function () {
							_status.dz_yxlm_lunhui.player.removeSkill("dz_yxlm_lunhui_buff");
							_status.dz_yxlm_lunhui.target.removeSkill("dz_yxlm_lunhui_buff");
							if (player == _status.dz_yxlm_lunhui.player) {
								var target = _status.dz_yxlm_lunhui.target;
								player.loseMaxHp();
								target.gainMaxHp();
								target.enableEquip("equip1");
								target.enableEquip("equip2");
								target.enableEquip("equip3");
								target.enableEquip("equip4");
								target.enableEquip("equip5");
							}
							;
							delete _status.dz_yxlm_lunhui;
						},
						sub: true,
					},
				},
				ai: {
					order: 3,
					result: {
						target: -15,
					},
				},
				mark: true,
				intro: {
					content: "limited",
				},
				init: function (player, skill) {
					player.storage[skill] = false;
				},
			},
			"dz_yxlm_boss_lunhui": {
				enable: "phaseUse",
				audio: "dz_yxlm_lunhui",
				skillAnimation: true,
				animationColor: "thunder",
				usable: 1,
				unique: true,
				filterTarget: function (card, player, target) {
					return target != player;
				},
				content: function () {
					"step 0"
					player.awakenSkill("dz_yxlm_boss_lunhui");
					player.addTempSkill("dz_yxlm_boss_lunhui_After");
					event.forceDie = true;
					event.list = game.filterPlayer(function (c) {
						if (c != player && c != target) c.out("dz_yxlm_boss_lunhui");
						return true;
					}).slice(0);
					"step 1"
					target.loseMaxHp();
					target.disableEquip("equip1");
					target.disableEquip("equip2");
					target.disableEquip("equip3");
					target.disableEquip("equip4");
					target.disableEquip("equip5");
					player.gainMaxHp();
					"step 2"
					_status.dz_yxlm_boss_lunhui = event;
					player.addTempSkill("dz_yxlm_boss_lunhui_buff");
					target.addTempSkill("dz_yxlm_boss_lunhui_buff");
					event.current = player;
					event.Stop = 0;
					"step 3"
					if (player.hasSkill("dz_yxlm_boss_lunhui_buff") && target.hasSkill("dz_yxlm_boss_lunhui_buff")) {
						game.log(event.current, "的特殊回合开始！");
						event.trigger("phaseBegin");
						var card = get.cards()[0];
						event.Stop++;
						event.current.showCards(card);
						if (event.current.hasUseTarget(card)) event.current.chooseUseTarget(card, true);
						else {
							event.current.$throw(card);
							game.cardsDiscard(card);
						}
						;
						if (event.Stop <= 500) {
							event.trigger("phaseEnd");
							event.redo();
							if (event.current == player) event.current = target;
							else event.current = player;
						} else player.chat("吾与汝已大战五百回合，来日方长我们改日再战！</br>（已触发防止无限循环！）");
					}
					;
					"step 4"
					if (event.list.length) {
						for (var i of event.list) i.in("dz_yxlm_boss_lunhui");
					}
					;
				},
				subSkill: {
					buff: {
						trigger: {
							player: "dying",
						},
						forced: true,
						direct: true,
						charlotte: true,
						firstdo: true,
						filter: function (event, player) {
							return _status.dz_yxlm_boss_lunhui && (_status.dz_yxlm_boss_lunhui.player == player || _status.dz_yxlm_boss_lunhui.target == player);
						},
						content: function () {
							_status.dz_yxlm_boss_lunhui.player.removeSkill("dz_yxlm_boss_lunhui_buff");
							_status.dz_yxlm_boss_lunhui.target.removeSkill("dz_yxlm_boss_lunhui_buff");
							if (player == _status.dz_yxlm_boss_lunhui.player) {
								var target = _status.dz_yxlm_boss_lunhui.target;
								player.loseMaxHp();
								target.gainMaxHp();
								target.enableEquip("equip1");
								target.enableEquip("equip2");
								target.enableEquip("equip3");
								target.enableEquip("equip4");
								target.enableEquip("equip5");
							}
							;
							delete _status.dz_yxlm_boss_lunhui;
						},
						sub: true,
					},
				},
				ai: {
					order: 3,
					result: {
						target: -15,
					},
				},
				mark: true,
				intro: {
					content: "limited",
				},
				init: function (player, skill) {
					player.storage[skill] = false;
				},
			},
			"dz_yxlm_mingqi": {
				trigger: {
					player: "damageEnd",
				},
				audio: "ext:英雄联盟扩展:3",
				init: function (player) {
					game.addGlobalSkill("lolkz_hudun1");
					game.addGlobalSkill("lolkz_hudun1_1");
					game.addGlobalSkill("lolkz_hudun1_2");
					game.addGlobalSkill("lolkz_hudun1_3");
				},
				filter: function (event, player) {
					return event.card && event.cards.filterInD("od").length > 0;
				},
				intro: {
					content: "cards",
					onunmark: function (storage, player) {
						if (storage && storage.length) {
							player.$throw(storage, 1000);
							game.cardsDiscard(storage);
							game.log(storage, "被置入了弃牌堆");
							storage.length = 0;
						}
					},
				},
				forced: true,
				content: function () {
					var cards = trigger.cards.filterInD("od");
					player.$gain2(cards);
					if (!player.storage.dz_yxlm_mingqi) player.storage.dz_yxlm_mingqi = [];
					player.storage.dz_yxlm_mingqi.addArray(cards);
					game.cardsGotoSpecial(cards);
					player.markSkill("dz_yxlm_mingqi");
				},
				group: ["dz_yxlm_mingqi_dun", "dz_yxlm_mingqi_discard"],
				subSkill: {
					discard: {
						trigger: {
							global: "phaseEnd",
						},
						audio: "dz_yxlm_mingqi",
						filter: function (e, p) {
							return p.countCards("j");
						},
						forced: true,
						content: function () {
							player.discard(player.getCards("j"));
							player.recover();
						},
						sub: true,
					},
					dun: {
						trigger: {
							player: ["damageBegin4", "phaseBegin"],
						},
						audio: "dz_yxlm_mingqi",
						filter: function (event, player) {
							return player.storage.dz_yxlm_mingqi && player.storage.dz_yxlm_mingqi.length > 0;
						},
						forced: true,
						content: function () {
							"step 0"
							var count = player.storage.dz_yxlm_mingqi.length;
							if (trigger.name == "damage") {
								player.$throw(player.storage.dz_yxlm_mingqi, 1000);
								game.cardsDiscard(player.storage.dz_yxlm_mingqi);
							} else {
								player.gain(player.storage.dz_yxlm_mingqi, "gain2", "fromStorage");
								event.finish();
							}
							;
							player.storage.dz_yxlm_mingqi = [];
							player.unmarkSkill("dz_yxlm_mingqi");
							event.count = count;
							"step 1"
							event.count--;
							var i = game.createCard("lolkz_hudun", [lib.suit].randomGet());
							player.addJudge(i);
							if (event.count) event.redo();
						},
						sub: true,
					},
				},
			},
			"dz_yxlm_yeyun": {
				trigger: {
					source: "damageBegin1",
				},
				audio: "ext:英雄联盟扩展:3",
				filter: function (event, player) {
					return event.card && event.getParent().name == event.card.name && event.getParent(2).targets && event.getParent(2).targets.length == 1 && player.countCards("h") > event.player.countCards("h");
				},
				forced: true,
				logTarget: "player",
				content: function () {
					trigger.num++;
				},
			},
			"dz_yxlm_kaidao": {
				marktext: "崇",
				intro: {
					name: "崇拜",
					content: "mark",
				},
				audio: "ext:英雄联盟扩展:4",
				trigger: {
					player: ["useCard", "shaMiss"],
				},
				forced: true,
				filter: function (event, player, name) {
					if (name == "useCard") return event.card.name == "sha";
					else return player.countMark("dz_yxlm_kaidao");
				},
				content: function () {
					if (event.triggername == "useCard") player.addMark("dz_yxlm_kaidao");
					else {
						var num = Math.ceil(player.countMark("dz_yxlm_kaidao") / 2);
						player.removeMark("dz_yxlm_kaidao", num);
					}
					;
				},
				group: "dz_yxlm_kaidao_die",
				subSkill: {
					phase: {
						trigger: {
							player: "phaseEnd",
						},
						forced: true,
						charlotte: true,
						audio: "dz_yxlm_kaidao",
						content: function () {
							player.insertPhase();
						},
						sub: true,
					},
					die: {
						trigger: {
							source: "die",
						},
						audio: "dz_yxlm_kaidao",
						forced: true,
						content: function () {
							var num = player.countMark("dz_yxlm_kaidao");
							if (num) {
								player.removeMark("dz_yxlm_kaidao", num);
								player.draw(num);
							}
							;
							player.addTempSkill("dz_yxlm_kaidao_phase");
						},
						sub: true,
					},
				},
			},
			"dz_yxlm_lifu": {
				enable: "phaseUse",
				usable: 1,
				audio: "ext:英雄联盟扩展:4",
				content: function () {
					if (!player.storage.dz_yxlm_lifu_buff) player.storage.dz_yxlm_lifu_buff = 0;
					player.storage.dz_yxlm_lifu_buff++;
					player.addTempSkill("dz_yxlm_lifu_buff");
					player.syncStorage("dz_yxlm_lifu_buff");
				},
				subSkill: {
					buff: {
						trigger: {
							player: ["useCard", "useCardAfter"],
						},
						filter: function (event, player, name) {
							if (name == "useCard") return event.card.name == "sha" && player.storage.dz_yxlm_lifu_buff;
							else return event.card.name == "sha";
						},
						audio: "dz_yxlm_lifu",
						charlotte: true,
						firstDo: true,
						forced: true,
						onremove: true,
						content: function () {
							if (event.triggername == "useCard") {
								if (!trigger.baseDamage) trigger.baseDamage = 1;
								trigger.baseDamage += player.storage.dz_yxlm_lifu_buff;
								game.log(trigger.card, "的伤害基数", "#y+" + player.storage.dz_yxlm_lifu_buff);
							} else {
								var bool = player.getHistory("sourceDamage", function (evt) {
									return evt.card == trigger.card;
								}).length > 0;
								if (bool) {
									player.draw();
									player.getStat().skill.dz_yxlm_lifu = 0;
								} else {
									event.getParent("phaseUse").skipped = true;
								}
								;
							}
							;
						},
						mod: {
							cardUsable: function (card, player, num) {
								if (card.name == "sha" && player.storage.dz_yxlm_lifu_buff) return num + player.storage.dz_yxlm_lifu_buff;
							},
						},
						mark: true,
						marktext: "利",
						intro: {
							content: "本回合内【杀】的伤害基数+#；使用【杀】的次数上限+#",
						},
						sub: true,
					},
				},
				ai: {
					order: function () {
						return get.order({
							name: "sha"
						}) + 0.3;
					},
					result: {
						player: 2,
					},
				},
			},
			"lol_jiandun": {
				audio: "ext:英雄联盟扩展:2",
				trigger: {
					player: "phaseEnd",
				},
				forced: true,
				content: function () {
					var card = event.cards = get.cards(1);
					player.storage.lol_jiandun1 = card;
					player.storage.lol_jiandun = get.number(card[0]);
					player.showCards(card);
					player.addSkill("lol_jiandun1");
					game.cardsGotoSpecial(card);
					player.$give(1, player, false);
					game.log("坚盾的点数是：" + player.storage.lol_jiandun);
				},
			},
			"lol_jiandun1": {
				group: "lol_jiandun2",
				mark: true,
				marktext: "盾",
				intro: {
					name: "坚盾",
					content: "cards",
					onunmark: function (storage, player) {
						var storage = player.storage.lol_jiandun1;
						if (storage && storage.length) {
							player.$throw(storage[0], 1000);
							game.cardsDiscard(storage[0]);
							game.log(storage[0], "被置入了弃牌堆");
						}
						delete player.storage.lol_jiandun1;
					},
				},
				audio: "ext:英雄联盟扩展:2",
				trigger: {
					target: "useCardToBefore",
				},
				forced: true,
				priority: 15,
				filter: function (event, player) {
					//if(!event.target) return false;
					return get.number(event.card) < player.storage.lol_jiandun;
				},
				content: function () {
					game.log("事件的点数是：" + get.number(trigger.card));
					game.log("坚盾的点数是：" + player.storage.lol_jiandun);
					trigger.cancel();
					player.draw()
				},
			},
			"lol_jiandun2": {
				audio: "ext:英雄联盟扩展:2",
				trigger: {
					player: "phaseBegin",
				},
				forced: true,
				content: function () {
					// player.$draw(player.storage.lol_jiandun1.length);
					// player.gain(player.storage.lol_jiandun1, "fromStorage");
					delete player.storage.lol_jiandun1;
					player.removeSkill("lol_jiandun1");
				},
			},
			"lol_tingshen": {
				audio: "ext:英雄联盟扩展:2",
				trigger: {
					global: "useCardToTarget",
				},
				filter: function (event, player) {
					if (player == event.target || player == event.player || event.player == event.target) return false;
					if (!player.countCards("he")) return false;
					if (!event.target) return false;
					if (get.distance(player, event.target) > 1) return false;
					return true;
				},
				check: function (event, player) {
					var save = false;
					if (get.attitude(player, event.target) > 2) {
						if (event.card.name == "sha") {
							if (player.countCards("h", "shan") || player.getEquip(2) ||
								event.target.hp == 1 || player.hp > event.target.hp + 1) {
								if (!event.target.countCards("h", "shan") || event.target.countCards("h") < player.countCards("h")) {
									save = true;
								}
							}
						} else if (event.card.name == "juedou" && event.target.hp == 1) {
							save = true;
						} else if (event.card.name == "shunshou" &&
							get.attitude(player, event.player) < 0 &&
							get.attitude(event.player, event.target) < 0) {
							save = true;
						}
					}
					return save;
				},
				content: function () {
					"step 0"
					var save = false;
					if (get.attitude(player, trigger.target) > 2) {
						if (trigger.card.name == "sha") {
							if (player.countCards("h", "shan") || player.getEquip(2) ||
								trigger.target.hp == 1 || player.hp > trigger.target.hp + 1) {
								if (!trigger.target.countCards("h", "shan") || trigger.target.countCards("h") < player.countCards("h")) {
									save = true;
								}
							}
						} else if (trigger.card.name == "juedou" && trigger.target.hp == 1) {
							save = true;
						} else if (trigger.card.name == "shunshou" &&
							get.attitude(player, trigger.player) < 0 &&
							get.attitude(trigger.player, trigger.target) < 0) {
							save = true;
						}
					}
					var next = player.chooseToDiscard("he", "弃置一张牌，将此牌的目标（" + get.translation(trigger.target) + "）转移至你", true);
					next.logSkill = ["lol_tingshen", trigger.target];
					next.set("ai", function (card) {
						if (_status.event.aisave) {
							return 7 - get.value(card);
						}
						return 0;
					});
					next.set("aisave", save);
					"step 1"
					if (result.bool) {
						trigger.getParent().targets.remove(trigger.target);
						trigger.getParent().triggeredTargets2.remove(trigger.target);
						trigger.getParent().targets.push(player);
						trigger.untrigger();
						trigger.player.line(player);
					}
				},
				ai: {
					threaten: 1.1,
				},
			},
			"lol_pobai": {
				marktext: "破败",
				intro: {
					name: "破败",
					content: "mark",
				},
				audio: "ext:英雄联盟扩展:4",
				group: ["lol_pobai_useCard", "lol_pobai_damage"],
				subSkill: {
					useCard: {
						audio: "lol_pobai",
						trigger: {
							player: "useCardToPlayered",
						},
						locked: true,
						forced: true,
						logTarget: "target",
						filter: function (event, player) {
							return event.targets.length == 1 && !event.target.hasSkill("lol_pobai");
						},
						content: function () {
							trigger.targets[0].addMark("lol_pobai", 1, true);
							trigger.targets[0].markSkill("lol_pobai");
						},
						sub: true,
					},
					damage: {
						audio: "lol_pobai",
						trigger: {
							source: "damageEnd",
						},
						locked: true,
						forced: true,
						logTarget: "player",
						filter: function (event, player) {
							return event.player.hasMark("lol_pobai");
						},
						content: function () {
							player.recover();
							trigger.player.removeMark("lol_pobai", 1, true);
							if (trigger.player.countMark("lol_pobai") == 0) trigger.player.unmarkSkill("lol_pobai");
						},
						sub: true,
					},
				},
			},
			"lol_guanhun": {
				group: ["lol_guanhun_re"],
				audio: "ext:英雄联盟扩展:3",
				trigger: {
					global: "die",
				},
				filter: function (event, player) {
					return event.player.hasMark("lol_pobai");
				},
				skillAnimation: true,
				animationColor: "wood",
				locked: true,
				content: function () {
					"step 0"
					event.trigger("lol_guanhun");
					"step 1"
					player.reinit(get.name(player), get.name(trigger.player));
					"step 2"
					game.broadcastAll(function (target1, target2) {
						game.swapSeat(player, trigger.player);
					}, player, trigger.player);
					"step 3"
					for (var i = 1; i < 6; i++) {
						player.enableEquip("equip" + i);
					}
					"step 4"
					var skills = trigger.player.getSkills(null, false);
					for (var i = 0; i < skills.length; i++) {
						if (lib.skill[skills[i]].zhuSkill) continue;
						if (lib.skill[skills[i]].limited) continue;
						player.addTempSkill(skills[i], {
							player: ["lol_guanhun", "lol_jueming"]
						});
						player.popup(skills[i]);
						//game.log(player, "获得了技能", "#g【" + get.translation(skills[i]) + "】");
					}
					var skills2 = [];
					skills2.addArray(lib.character["lol_foyege"][3]);
					for (var i = 0; i < skills2.length; i++) {
						player.addSkill(skills2[i]);
					}
					"step 5"
					player.recover();
					player.phase();
				},
				subSkill: {
					re: {
						trigger: {
							player: "lol_juemingBegin",
							global: "dieBegin",
						},
						forced: true,
						filter: function (event, player) {
							return get.name(player) != "lol_foyege";
						},
						content: function () {
							player.reinit(get.name(player), "lol_foyege");
						},
						sub: true,
					},
				},
			},
			"lol_boss_guanhun": {
				group: ["lol_guanhun_re"],
				audio: "ext:英雄联盟扩展:3",
				trigger: {
					global: "die",
				},
				filter: function (event, player) {
					return event.player.hasMark("lol_pobai");
				},
				skillAnimation: true,
				animationColor: "wood",
				locked: true,
				content: function () {
					"step 0"
					event.trigger("lol_guanhun");
					"step 1"
					player.reinit(get.name(player), get.name(trigger.player));
					"step 2"
					game.broadcastAll(function (target1, target2) {
						game.swapSeat(player, trigger.player);
					}, player, trigger.player);
					"step 3"
					for (var i = 1; i < 6; i++) {
						player.enableEquip("equip" + i);
					}
					"step 4"
					var skills = trigger.player.getSkills(null, false);
					for (var i = 0; i < skills.length; i++) {
						if (lib.skill[skills[i]].zhuSkill) continue;
						if (lib.skill[skills[i]].limited) continue;
						player.addTempSkill(skills[i], {
							player: ["lol_guanhun", "lol_jueming"]
						});
						player.popup(skills[i]);
						//game.log(player, "获得了技能", "#g【" + get.translation(skills[i]) + "】");
					}
					var skills2 = [];
					skills2.addArray(lib.character["lol_boss_foyege"][3]);
					for (var i = 0; i < skills2.length; i++) {
						player.addSkill(skills2[i]);
					}
					"step 5"
					player.recover();
					player.phase();
				},
				subSkill: {
					re: {
						trigger: {
							player: "lol_juemingBegin",
							global: "dieBegin",
						},
						forced: true,
						filter: function (event, player) {
							return get.name(player) != "lol_boss_foyege";
						},
						content: function () {
							player.reinit(get.name(player), "lol_boss_foyege");
						},
						sub: true,
					},
				},
			},
			"lol_jueming": {
				audio: "ext:英雄联盟扩展:3",
				init: function () {
					for (var i = 1; i < 6; i++) {
						lib.card["equip" + i] = {}
					}
				},
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					return player.storage.disableEquip != undefined && player.storage.disableEquip.length < 5;
				},
				filterTarget: true,
				content: function () {
					"step 0"
					event.trigger("lol_jueming");
					"step 1"
					var cards = [];
					for (var i = 1; i < 6; i++) {
						cards.push(game.createCard("equip" + i));
					}
					player.chooseCardButton(get.prompt("lol_jueming"), cards, [1, 5], false).set("ai", function (button) {
						var num = ui.selected.buttons.length;
						var player = _status.event.player;
						return player.hp - num > 1;
					}).set("filterButton", function (button) {
						var player = _status.event.player;
						return !player.isDisabled(button.link.name);
					});
					"step 2"
					if (result.bool) {
						var cards = result.links;
						for (var i = 0; i < cards.length; i++) {
							player.disableEquip(cards[i].name);
						}
						player.loseHp(cards.length);
						target.addMark("lol_pobai", 1, true);
						target.markSkill("lol_pobai");
					}
					"step 3"
					target.damage(player.countDisabled(), player);
				},
				ai: {
					order: 1,
					result: {
						target: -1,
					},
				},
			},
			"lol_youzhou": {
				audio: "ext:英雄联盟扩展:4",
				zhuSkill: true,
				locked: true,
				trigger: {
					global: "dieAfter",
				},
				forced: true,
				logTarget: "player",
				filter: function (event, player) {
					if (!player.hasZhuSkill("lol_youzhou")) return false;
					if (event.player.group != "lolyou") return false;
					if (event.player.hasSkill("lol_youzhou")) return false;
					if (["lol_yuanling_female", "lol_yuanling_male"].contains(event.player.name1)) return false;
					return true;
				},
				content: function () {
					"step 0"
					if (trigger.player.sex == "female") {
						trigger.player.init("lol_yuanling_female");
					} else {
						trigger.player.init("lol_yuanling_male");
					}
					"step 1"
					trigger.player.revive(trigger.player.maxHp);
				},
			},
			"lol_boss_zhouyuan": {
				audio: "ext:英雄联盟扩展:true",
				locked: true,
				unique: true,
				trigger: {
					player: "damage",
					source: "damage",
				},
				direct: true,
				filter: function (event, player) {
					return game.hasPlayer(function (current) {
						return current.name1 == "lol_boss_foyege" || current.name2 == "lol_boss_foyege"
					})
				},
				content: function () {
					var zhu = game.findPlayer(function (current) {
						return current.name1 == "lol_boss_foyege" || current.name2 == "lol_boss_foyege"
					});
					zhu.recover();
				},
				mod: {
					cardEnabled: function (card, player) {
						if (["tao", "jiu"].contains(card.name)) {
							return false;
						}
					},
				},
			},
			"lolkz_xingyun": {
				intro: {
					name: "战意",
					content: "当前有#个标记",
				},
				marktext: "战",
				subSkill: {
					jiadamage: {
						audio: "lolkz_xingyun",
						trigger: {
							source: ["damageBegin"],
						},
						check: function (event, player) {
							return get.attitude(player, event.player) < 0;
						},
						filter: function (event, player, name) {
							return player.countMark("lolkz_xingyun") > 2;
						},
						content: function () {
							trigger.num++;
							player.removeMark("lolkz_xingyun", 3);
							game.log(player, "令造成的伤害+1");

						},
						sub: true,
						prompt: function (event, player) {
							return "星陨：是否弃置3枚“战意”令你对" + get.translation(event.player) + "造成的伤害+1？";
						},
					},
				},
				group: "lolkz_xingyun_jiadamage",
				trigger: {
					player: ["damageAfter", "compare"],
					source: ["damage"],
					target: "compare",
				},
				audio: "ext:英雄联盟扩展:2",
				filter: function (event, player, name) {
					if (event.name == "damage") return event.num > 0;
					if (name == "compare") return !event.iwhile && player.hasMark("lolkz_xingyun");
					return false;
				},
				forced: true,
				content: function () {
					var name = event.triggername;
					if (trigger.name == "damage") player.addMark("lolkz_xingyun", trigger.num);
					else {
						var num = player.countMark("lolkz_xingyun")
						game.log(player, "的判定牌点数+", num)
						if (player == trigger.player) {
							trigger.num1 += num;
							// if(trigger.num1>13) trigger.num1=13;
						} else {
							trigger.num2 += num;
							//  if(trigger.num2>13) trigger.num2=13;
						}
					}
				},
			},
			"lolkz_shizhi": {
				ai: {
					order: 10,
					result: {
						target: function (player, target) {
							if (!player.countCards("h", function (card) {
								return card.number + player.countMark("lolkz_xingyun") > 9;
							})) return 0;
							return -1;
						},
					},
				},
				group: "lolkz_shizhi_respond",
				subSkill: {
					respond: {
						audio: "ext:英雄联盟扩展:2",
						trigger: {
							player: "chooseToRespondBegin",
						},
						"prompt2": function (event, player) {
							return "你可与" + get.translation(event.source) + "拼点，若你赢，视为你打出了杀";
						},
						filter: function (event, player) {
							if (event.responded) return false;
							if (!event.source) return false;
							if (!player.canCompare(event.source)) return false;
							if (!player.countCards("h")) return false;
							if (!event.filterCard || !event.filterCard({
								name: "sha"
							}, player, event)) return false;
							if (!lib.filter.cardRespondable({
								name: "sha"
							}, player, event)) return false;
							return _status.currentPhase == player;
						},
						check: function (event, player) {
							return get.attitude(player, event.source) < 0;
						},
						content: function () {
							"step 0"
							player.chooseToCompare(trigger.source);
							"step 1"
							if (result.bool) {
								trigger.untrigger();
								trigger.set("responded", true);
								trigger.result = {
									bool: true,
									card: {
										name: "sha",
										isCard: true
									}
								}
								// game.log(player,"打出了","#y"+"杀")
							}
						},
						sub: true,
					},
				},
				enable: "phaseUse",
				audio: "ext:英雄联盟扩展:2",
				filterTarget: function (card, player, target) {
					return player.canCompare(target);
				},
				filter: function (event, player) {
					return player.countCards("h") > 0;
				},
				content: function () {
					"step 0"
					player.chooseToCompare(target);
					"step 1"
					if (result.bool) player.useCard({
						name: "sha",
						isCard: true
					}, target, false);
					else target.useCard({
						name: "juedou",
						isCard: true
					}, "nowuxie", player, "noai");
				},
			},
			"lolkz_guanxing": {
				ai: {
					order: 10,
					result: {
						target: function (player, target) {
							if (player.hp < 2) return 0;
							return -1;
						},
					},
				},
				enable: "phaseUse",
				usable: 1,
				filterTarget: true,
				audio: "ext:英雄联盟扩展:2",
				content: function () {
					player.loseHp();
					target.addTempSkill("lolkz_guanxing_a");
					target.storage.guanxing0 = 3;
					target.storage.guanxing = [];
					target.storage.guanxing2 = [];
					var list = target.getCards("e");
					for (var i = 0; i < list.length; i++) {
						var info = get.info(list[i]);
						if (info.skills) {
							target.storage.guanxing.push(info.skills);
							target.storage.guanxing2.push(list[i].name);
						}
					}
					target.disableSkill("lolkz_guanxing_a", target.storage.guanxing);
				},
				group: "lolkz_guanxing_draw",
				subSkill: {
					draw: {
						trigger: {
							player: ["useCardToPlayered", "chooseToCompareBegin"],
						},
						filter: function (event, player) {
							return event.target.hasSkill("lolkz_guanxing_a") && event.target.storage.guanxing0 &&
								event.target.storage.guanxing0 > 0;
						},
						forced: true,
						audio: "lolkz_guanxing",
						content: function () {
							player.draw();
							trigger.target.storage.guanxing0--
						},
						sub: true,
					},
					a: {
						init: function (player, skill) {
							player.storage.guanxing = [];
							player.storage.guanxing2 = [];
						},
						onremove: function (player, skill) {
							player.enableSkill(skill);
							delete player.storage.guanxing;
							delete player.storage.guanxing2;
							delete player.storage.guanxing0;
						},
						mark: true,
						marktext: "贯",
						intro: {
							name: "贯星",
							content: function (storage, player, skill) {
								var es = player.storage.guanxing2
								if (es.length) {
									var str = "失效装备：";
									for (var i = 0; i < es.length; i++) {
										str += get.translation(es[i]) + "、";

									}
									return str.slice(0, str.length - 1);
								}
							},
						},
						sub: true,
					},
				},
			},
			"lolkz_shenyou": {
				trigger: {
					player: "dying",
				},
				forced: true,
				audio: "ext:英雄联盟扩展:4",
				content: function () {
					player.turnOver();
				},
			},
			"lolkz_bumie": {
				audio: "ext:英雄联盟扩展:4",
				mod: {
					maxHandcard: function (player, num) {
						var nu = game.countPlayer(function (current) {
							return current.isDamaged();
						});
						return num + nu;
					},
				},
				trigger: {
					player: ["damageAfter", "turnOverAfter", "lolkz_wushuangBefore", "lolkz_zhanjueBegin", "lolkz_shennuBegin", "lolkz_shennuAfter"],
					source: ["damageAfter", "damageBegin"],
				},
				filter: function (event, player, name) {
					if (event.name == "damage" && name != "damageBegin") return event.num > 0;
					if (name == "damageBegin") return player.isDamaged()
					if (name == "turnOverAfter") return true;
					if (name == "lolkz_shennuAfter") return player.countMark("lolkz_xingyun") <= 0;
					return player.countMark("lolkz_xingyun") > 0;
				},
				forced: true,
				content: function () {
					var name = event.triggername
					if (trigger.name == "damage" && name != "damageBegin") player.addMark("lolkz_xingyun", trigger.num)
					else if (name == "damageBegin") {
						trigger.num += player.getDamagedHp();
						game.log(player, "造成的伤害+", get.translation(player.getDamagedHp()))
					} else if (name == "turnOverAfter") player.addMark("lolkz_xingyun", 3);
					else {
						if (name != "lolkz_shennuAfter") player.removeMark("lolkz_xingyun", 1);
						if (!player.hasMark("lolkz_xingyun")) player.turnOver();
					}
				},
			},
			"lolkz_zhanjue": {
				audio: "ext:英雄联盟扩展:4",
				trigger: {
					player: "dying",
					source: "dying",
				},
				filter: (event, player) => !(player.hasSkill("lolkz_bumie") && !player.hasMark("lolkz_xingyun")),
				forced: true,
				content(player) {
					player.draw(3);
				},
			},
			"lolkz_shennu": {
				audio: "ext:英雄联盟扩展:2",
				trigger: {
					player: "phaseAfter",
				},
				unique: true,
				filter: function (event, player) {
					if (player.hasSkill("lolkz_bumie") && !player.hasMark("lolkz_xingyun")) return false;
					return true;
				},
				content: function () {
					"step 0"
					event.players = get.players(player);
					event.players.remove(player);
					"step 1"
					if (event.players.length) {
						event.players.shift().damage();
						event.redo();
					}
					"step 2"
					player.damage()
					"step 3"

					player.removeMark("lolkz_xingyun", player.countMark("lolkz_xingyun"))
				},
			},
			shuangmianwujiang: {
				trigger: {
					player: "turnOverAfter",
				},
				direct: true,
				silent: true,
				unique: true,
				fixed: true,
				content: function () {
					if (player.hasSkill("lolkz_shenyou")) player.reinit("lolkz_ateruisi", "lolkz_panshen", false);
					else player.reinit("lolkz_panshen", "lolkz_ateruisi", false);
				},
				forced: true,
				popup: false,
			},
			"lolkz_mingding": {
				enable: "phaseUse",
				audio: "ext:英雄联盟扩展:2",
				selectTarget: 1,
				filterTarget: function (event, player, target) {
					return !target.hasSkill("lolkz_mingding_1") && target != player && target.countCards("h")
				},
				filter: function (event, player) {
					return player.countCards("h")
				},
				content: function () {
					"step 0"
					player.chooseToCompare(target);
					"step 1"
					if (result.bool) {
						player.useCard({
							name: "jiu"
						}, player, false)
					} else {
						target.useCard({
							name: "jiu"
						}, target, false)
						target.addTempSkill("lolkz_mingding_1")
					}
				},
				ai: {
					order: 10,
					result: {
						target: -1,
					},
				},
				subSkill: {
					"1": {
						trigger: {
							player: "useCard",
						},
						direct: true,
						popup: false,
						forced: true,
						filter: function (event, player) {
							return event.card && event.card.name == "sha"
						},
						content: function () {
							player.removeSkill("lolkz_mingding_1")
						},
						sub: true,
					},
				},
			},
			"lolkz_jiecheng": {
				trigger: {
					player: ["useCard", "useCardAfter"],
				},
				forced: true,
				audio: "ext:英雄联盟扩展:2",
				filter: function (event, player) {
					if (player.node.jiu && event.card && event.card.name == "jiu" && !player.storage.nojiu) return true
					if (player.storage.nojiu == true && event.card && event.card.name == "sha") return true
					return false
				},
				content: function () {
					if (trigger.card.name == "jiu") {
						player.draw()
						player.storage.nojiu = true
					}
					if (trigger.card.name == "sha") {
						player.recover()
						player.storage.nojiu = false
					}
				},
				group: "lolkz_jiecheng_1",
				subSkill: {
					"1": {
						trigger: {
							player: "phaseAfter",
						},
						forced: true,
						audio: "ext:英雄联盟扩展:2",
						filter: function (event, player) {
							return player.storage.nojiu == true
						},
						content: function () {
							player.recover()
							player.storage.nojiu = false
						},
						sub: true,
					},
				},
			},
			"lolkz_jiaoxie": {
				audio: "ext:英雄联盟扩展:4",
				trigger: {
					target: "useCardToBefore",
				},
				usable: 1,
				forced: true,
				filter: function (event, player) {
					return event.card && event.card.name == "sha"
				},
				content: function () {
					trigger.player.addTempSkill("lolkz_jiaoxie_1");
				},
				subSkill: {
					"1": {
						mark: true,
						marktext: "缴",
						intro: {
							name: "被缴械",
							content: "本回合无法再使用【杀】",
						},
						mod: {
							cardEnabled: function (card) {
								if (card.name == "sha") return false
							},
						},
						trigger: {
							player: "damageEnd",
						},
						filter: function (event, player) {
							return event.card && event.card.name == "sha"
						},
						direct: true,
						content: function () {
							player.removeSkill("lolkz_jiaoxie_1");
						},
						sub: true,
					},
				},
			},
			"lolkz_baibin": {
				audio: "lolkz_zongshi",
				enable: "phaseUse",
				filter: function (event, player) {
					if (game.hasPlayer(function (current) {
						return current.getEquip(1)
					}) && !player.hasSkill("lolkz_baibin_2")) return true
					return false
				},
				direct: true,
				content: function () {
					"step 0"
					var next = player.chooseTarget(2, function (card, player, target) {
						var t = ui.selected.targets[0];
						if (t) return !target.getEquip(1)
						return target.getEquip(1)
					});
					next.set("ai", function (target) {
						var player = _status.event.player;
						var att = get.attitude(player, target);
						var sel = ui.selected.targets.length
						if (sel == 1) return !player.getEquip(1) && player == target ? 100 : att > 0
						return !player.getEquip(1) && player == target ? att < 0 : 100
					});
					next.set("multitarget", true);
					next.set("targetprompt", _status.event.targetprompt || ["被移走", "移动目标"]);
					next.set("prompt", event.prompt || "移动一张武器牌");
					if (event.prompt2) next.set("prompt2", event.prompt2);
					if (event.forced) next.set("forced", true);
					"step 1"
					event.result = result;
					if (result.bool) {
						player.line2(result.targets, "green");
						event.targets = result.targets;
					} else {
						event.finish();
					}
					"step 2"
					game.delay();
					"step 3"
					if (targets.length == 2) {
						player.logSkill("lolkz_baibin")
						player.addTempSkill("lolkz_baibin_2")
						event.targets[1].equip(event.targets[0].getEquip(1))
						var link = event.targets[0].getEquip(1)
						event.targets[0].$give(link, event.targets[1], false);
						game.log(event.targets[0], "的", link, "被移动给了", event.targets[1])
						event.result.card = link;
						event.result.position = get.position(link);
						if (event.targets[1] == player) {
							event.link = link
							player.chooseBool("###【百兵】###是否弃置" + get.translation(link)).ai = function () {
								return true;
							};
						} else event.finish()
					} else event.finish()
					"step 4"
					if (result.bool) {
						player.discard(event.link)
					}
				},
				ai: {
					order: 10,
					result: {
						player: function (player, target) {
							if (game.hasPlayer(function (current) {
								return (get.attitude(player, current) < 0 || current == player) && current.getEquip(1)
							}) && game.hasPlayer(function (current) {
								return get.attitude(player, current) > 0 && !current.getEquip(1)
							})) return 2
						},
					},
				},
				subSkill: {
					"1": {
						trigger: {
							source: "damageEnd",
						},
						forced: true,
						popup: false,
						filter: function (event, player) {
							return event.card && event.card.lolkz_baibin == true && event.player.isAlive() && event.getParent(3).name == "lolkz_baibin";
						},
						content: function () {
							player.recover()
						},
						sub: true,
					},
					"2": {
						forced: true,
						sub: true,
					},
				},
			},
			"lolkz_zongshi": {
				audio: "ext:英雄联盟扩展:2",
				trigger: {
					player: "loseAfter",
					global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
				},
				forced: true,
				filter: function (event, player) {
					var evt = event.getl(player);
					return evt && evt.player == player && evt.es && evt.es.length > 0;
				},
				content: function () {
					"step 0"
					event.count = trigger.getl(player).es.length;
					"step 1"
					event.count--;
					var card = trigger.getl(player).es[event.count];
					switch (get.subtype(card)) {
						case "equip1": {
							if (lib.skill[card.name + "_skill"]) {
								player.addTempSkill(card.name + "_skill", {
									player: "shaAfter"
								});
							} else if (card.name == "lol_jushezhiya") {
								player.addTempSkill("lol_jushe", {
									player: "shaAfter"
								});
								player.addTempSkill("lol_jushe2", {
									player: "shaAfter"
								});
							}
							player.chooseUseTarget(true, "【宗师】视为使用一张无距离限制的【杀】（可触发" + get.translation(card) + "技能）", {
								name: "sha"
							}, false, "nodistance");
							return;
						}
						case "equip2": {
							player.chooseTarget("【宗师】对一名角色造成一点伤害").set("ai", function (target) {
								return -get.attitude(_status.event.player, target);
							});
							event.goto(3);
							return;
						}
						case "equip5": {
							player.recover();
							event.goto(2);
							return;
						}
						default: {
							player.draw();
							event.goto(2);
							return;
						}
					}
					"step 2"
					if (event.count > 0) {
						player.logSkill("lolkz_zongshi");
						event.goto(1);
					}
					event.finish();
					"step 3"
					if (result.bool) {
						player.line(result.targets[0]);
						result.targets[0].damage();
						event.goto(2);
					}
				},
				ai: {
					noe: true,
					reverseEquip: true,
					effect: {
						target: function (card, player, target, current) {
							if (get.type(card) == "equip" && !get.cardtag(card, "gifts")) return [1, 3];
						},
					},
				},
			},
			"lolkz_shuangqiang": {
				audio: "ext:英雄联盟扩展:2",
				trigger: {
					player: "useCardToTargeted",
				},
				direct: true,
				filter: function (event, player) {
					return event.card && event.card.name == "sha" && player.countCards("he")
				},
				content: function () {
					"step 0"
					var zi = "###【双枪】###是否弃置一张牌，令" + get.translation(trigger.card) + "可额外指定一个目标或将" + get.translation(trigger.card) + "置于牌堆顶。"
					if (!trigger.cards.length) zi = "###【双枪】###是否弃置一张牌，令" + get.translation(trigger.card) + "可额外指定一个目标。"
					player.chooseToDiscard(zi).set("ai", function (card) {
						var num = game.filterPlayer(function (current) {
							return current != player && get.attitude(player, current) < 0;
						});
						if (num.length < 2 && !trigger.cards.length) return 0
						return 10 - get.value(card);
					})
					"step 1"
					if (result.bool) {
						player.logSkill("lolkz_shuangqiang")
						var list = ["为" + get.translation(trigger.card) + "额外指定一个目标", "将" + get.translation(trigger.card) + "置于牌堆顶"];
						if (!trigger.cards.length) list = ["为" + get.translation(trigger.card) + "额外指定一个目标"]
						player.chooseControl().set("choiceList", list).set("ai", function () {
							event.num = game.filterPlayer(function (current) {
								return current != player && get.attitude(player, current) < 0;
							});
							if (event.num.length < 2 && trigger.cards.length) return 1
							return 0
						});
					} else event.finish()
					"step 2"
					if (result.index == 0) event.goto(4)
					if (result.index == 1) {
						event.cards = trigger.cards.filterInD();
						if (event.cards.length > 1) {
							player.chooseButton(true, event.cards.length, ["按顺序将卡牌置于牌堆顶（先选择的在上）", event.cards]).set("ai", function (button) {
								var value = get.value(button.link);
								if (_status.event.reverse) return value;
								return -value;
							}).set("reverse", ((_status.currentPhase && _status.currentPhase.next) ? get.attitude(player, _status.currentPhase.next) > 0 : false))
						}
					}
					"step 3"
					let cards = [];
					if (result.bool && result.links && result.links.length) cards = result.links.slice(0);
					while (cards.length) {
						var card = cards.pop();
						if (get.position(card, true) == "o") {
							card.fix();
							ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
							game.log(player, "将", card, "置于牌堆顶");
						}
					}
					game.updateRoundNumber();
					event.finish()
					"step 4"
					player.chooseTarget("为" + get.translation(trigger.card) + "额外指定一个目标", function (card, player, target) {
						var trigger = _status.event;
						if (player == target) return false
						return lib.filter.targetEnabled2(trigger.card, _status.event.player, target);
					}).set("ai", function (target) {
						var trigger = _status.event.getTrigger();
						var player = _status.event.player;
						return get.effect(target, trigger.card, player, player);
					}).set("targets", trigger.targets).set("card", trigger.card);
					"step 5"
					if (result.bool) {
						player.line(result.targets[0], "red");
						trigger.getParent().targets = trigger.getParent().targets.concat(result.targets[0]);
						trigger.getParent().triggeredTargets4 = trigger.getParent().triggeredTargets4.concat(result.targets[0]);
					}
				},
				ai: {
					threaten: 1.1,
					expose: 0.25,
				},
			},
			"lolkz_zhuiming": {
				audio: "ext:英雄联盟扩展:2",
				trigger: {
					player: "loseAfter",
					global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter"],
				},
				filter: function (event, player) {
					if (player.countCards("h")) return false;
					var evt = event.getl(player);
					return evt && evt.player == player && evt.hs && evt.hs.length > 0;
				},
				content: function () {
					"step 0"
					event.cards = get.cards();
					if (event.cards.length) {
						player.chooseCardButton("【追命】", true, event.cards)
					}
					"step 1"
					if (result.bool) {
						event.card = result.links[0];
						if (!game.findPlayer(function (target) {
							return player.canUse(event.card, target);
						})) {
							player.gain(event.card, "draw2");
							var evt = event.getParent("phaseUse");
							if (evt) evt.skipped = true;
							event.finish();
						}
					}
					"step 2"
					if (game.findPlayer(function (target) {
						return player.canUse(event.card, target);
					})) {
						player.chooseUseTarget("是否使用" + get.translation(event.card) + "，点取消你获得" + get.translation(event.card), event.card);
					}
					"step 3"
					if (!result.bool) {
						player.gain(event.card, "draw2");
						var evt = event.getParent("phaseUse");
						if (evt) evt.skipped = true;
					}
					if (player.countCards("h") == 0) {
						event.goto(0)
					}
				},
				ai: {
					threaten: 0.8,
					effect: {
						target: function (card) {
							if (card.name == "guohe" || card.name == "liuxinghuoyu") return 0.5;
						},
					},
					noh: true,
					skillTagFilter: function (player, tag) {
						if (tag == "noh") {
							if (player.countCards("h") != 1) return false;
						}
					},
				},
			},
			"lolkz_qiangshou": {
				"init2": function (player) {
					game.broadcastAll(function (player) {
						player._lolkz_qiangshou_mark = player.mark("○", {
							name: "强手",
							content: "你使用牌对你攻击距离内的角色造成时，此伤害+1",
						});
					}, player);
				},
				onremove: function (player) {
					game.broadcastAll(function (player) {
						if (player._lolkz_qiangshou_mark) {
							player._lolkz_qiangshou_mark.delete();
							delete player._lolkz_qiangshou_mark;
						}
					}, player);
				},
				trigger: {
					source: "damageBegin",
				},
				audio: "ext:英雄联盟扩展:3",
				forced: true,
				filter: function (event, player) {
					return event.card && player.inRange(event.player) && player._lolkz_qiangshou_mark.name == "○"
				},
				content: function () {
					trigger.num++
				},
				group: ["lolkz_qiangshou_1", "lolkz_qiangshou_2"],
				subSkill: {
					"1": {
						trigger: {
							player: "useCardToPlayered",
						},
						forced: true,
						audio: "lolkz_qiangshou",
						filter: function (event, player) {
							return event.card && event.target != player && (get.type(event.card) == "trick" || get.type(event.card) == "basic" && !["shan", "tao", "jiu", "du"].contains(event.card.name)) && player._lolkz_qiangshou_mark.name == "●";
						},
						content: function () {
							trigger.getParent().directHit.add(trigger.target);
						},
						sub: true,
					},
					"2": {
						trigger: {
							player: "useCardAfter",
						},
						priority: 20,
						forced: true,
						audio: "lolkz_qiangshou",
						filter: function (event, player) {
							return event.card && player._lolkz_qiangshou_mark
						},
						content: function () {
							if (player._lolkz_qiangshou_mark.name == "●") {
								game.broadcastAll(function (player) {
									player._lolkz_qiangshou_mark.name = "○";
									player._lolkz_qiangshou_mark.firstChild.innerHTML = "○"; //阴
									player._lolkz_qiangshou_mark.info.content = "你使用牌对你攻击距离内的角色造成时，此伤害+1";
								}, player)
							} else {
								game.broadcastAll(function (player) {
									player._lolkz_qiangshou_mark.name = "●";
									player._lolkz_qiangshou_mark.firstChild.innerHTML = "●"; //阳
									player._lolkz_qiangshou_mark.info.content = "你对距离为1的角色使用牌时，其不可响应你使用的牌";
								}, player);
							}
						},
						sub: true,
					},
				},
			},
			"lolkz_hongquan": {
				audio: "ext:英雄联盟扩展:2",
				trigger: {
					player: "damageEnd",
				},
				frequent: true,
				filter: function (event, player) {
					return event.num > 0
				},
				content: function () {
					"step 0"
					game.addGlobalSkill("lolkz_hudun1");
					game.addGlobalSkill("lolkz_hudun1_1");
					game.addGlobalSkill("lolkz_hudun1_2");
					game.addGlobalSkill("lolkz_hudun1_3");
					event.count = trigger.num;
					"step 1"
					event.count--
					var i = game.createCard("lolkz_hudun", [lib.suit].randomGet());
					player.addJudge(i);
					if (!player.storage.hongquanshi) player.storage.hongquanshi = []
					player.storage.hongquanshi.push(i)
					"step 2"
					if (event.count) event.goto(1)
					"step 3"
					if (trigger.source) {
						player.chooseControl("确定", "cancel2").set("prompt", "是否弃置所有护盾，令伤害来源失去等量的体力值").set("ai", function () {
							if (trigger.source != player && get.attitude(player, event.source) < 0) return "确定"
							return "cancel2"
						})
					} else event.finish()
					"step 4"
					if (result.control == "cancel2") event.finish()
					player.storage.hudunzhi = 0;
					"step 5"
					player.discard(player.getJudge("lolkz_hudun"))
					player.storage.hudunzhi++
					"step 6"
					if (player.countCards("j") > 0 && player.hasJudge("lolkz_hudun")) event.goto(5)
					else trigger.source.loseHp(player.storage.hudunzhi)
				},
				ai: {
					result: {
						player: 1,
					},
				},
			},
			"lolkz_hudun1": {
				trigger: {
					player: "damageBegin4",
				},
				filter: function (event, player) {
					return event.num > 0 && player.countCards("j") > 0 && player.hasJudge("lolkz_hudun");
				},
				locked: true,
				forced: true,
				content: function () {
					"step 0"
					event.count = trigger.num;
					"step 1"
					event.count--
					player.discard(player.getJudge("lolkz_hudun"))
					"step 2"
					if (event.count) event.goto(1)
					else trigger.cancel()
				},
				ai: {
					effect: {
						target: function (card, player, target) {
							if (target.hp < 3 && target.hasJudge("lolkz_hudun")) return 1
						},
					},
				},
				subSkill: {
					"1": {
						trigger: {
							player: "phaseJudgeBegin",
						},
						forced: true,
						popup: false,
						priority: 20,
						filter: function (event, player) {
							return player.countCards("j") > 0 && player.hasJudge("lolkz_hudun");
						},
						content: function () {
							"step 0"
							player.discard(player.getJudge("lolkz_hudun"));
							"step 1"
							if (player.countCards("j") > 0 && player.hasJudge("lolkz_hudun")) event.goto(0)
						},
						sub: true,
					},
					"2": {
						trigger: {
							global: ["cardsDiscardEnd", "loseEnd"],
						},
						filter: function (event, player) {
							for (var i = 0; i < event.cards.length; i++) {
								if (player.storage.hongquanshi && player.storage.hongquanshi.contains(event.cards[i]) && get.position(event.cards[i], true) == "d") {
									return true;
								}
							}
							return false;
						},
						forced: true,
						popup: false,
						priority: 20,
						content: function () {
							var cards = [];
							for (var i = 0; i < trigger.cards.length; i++) {
								if (player.storage.hongquanshi && player.storage.hongquanshi.contains(trigger.cards[i]) && get.position(trigger.cards[i]) == "d") {
									cards.push(trigger.cards[i]);
									player.storage.hongquanshi.remove(trigger.cards[i])
								}
							}
							if (cards.length) {
								game.cardsGotoSpecial(cards);

							}
						},
						sub: true,
					},
					"3": {
						trigger: {
							player: "loseAfter",
							global: ["addJudgeAfter", "gainAfter", "loseAsyncAfter"],
						},
						forced: true,
						popup: false,
						priority: 20,
						filter: function (event, player) {
							var evt = event.getl(player);
							return evt && evt.player == player && evt.js && evt.js.length > 0;
						},
						content: function () {
							if (trigger.cards[0].name == "lolkz_hudun" && get.position(trigger.cards[0], true) == "d") game.cardsGotoSpecial(trigger.cards[0]);
						},
						sub: true,
					},
				},
			},
			"lolkz_renwu": {
				audio: "ext:英雄联盟扩展:13",
				enable: "phaseUse",
				init: function (player) {
					player.storage.lolkz_renwu = [];
				},
				filterTarget: function (card, player, target) {
					return player.canUse("sha", target);
				},
				filter: function (event, player) {
					return player.countCards("he") > 0 && lib.filter.cardUsable({
						name: "sha"
					}, player)
				},
				position: "he",
				filterCard: true,
				selectCard: 1,
				discard: false,
				lose: true,
				check: function (card) {
					var player = _status.event.player;
					var next = player.getNext();
					var att = get.attitude(player, next);
					if (att > 0) {
						var js = next.getCards("j");
						if (js.length) return get.judge(js[0]) + 10 - get.value(card);
						return 9 - get.value(card)
					}
					return 6 - get.value(card);
				},
				prepare: "throw",
				loseTo: "cardPile",
				visible: true,
				insert: true,
				content: function () {
					player.lose(cards[0], ui.special, "toStorage");
					player.storage.lolkz_renwu.push(cards[0]);
					player.syncStorage("lolkz_renwu");
					player.markSkill("lolkz_renwu");
					game.log(player, "将", cards[0], "置于武将牌上");
					player.useCard({
						name: "sha",
						isCard: true
					}, targets).card.lolkz_renwu = true;
				},
				intro: {
					content: "cards",
					onunmark: function (storage, player) {
						if (storage && storage.length) {
							player.$throw(storage, 1000);
							game.cardsDiscard(storage);
							game.log(storage, "被置入了弃牌堆");
							storage.length = 0;
						}
					},
				},
				ai: {
					order: 1,
					result: {
						player: 1,
					},
				},
				group: ["lolkz_renwu_1", "lolkz_renwu_2"],
				subSkill: {
					"1": {
						trigger: {
							source: "damageBefore",
						},
						forced: true,
						popup: false,
						filter: function (event, player) {
							return event.card && event.card.lolkz_renwu == true && event.player.isAlive() && event.getParent(3).name == "lolkz_renwu";
						},
						content: function () {
							player.getStat().card.sha--
						},
						sub: true,
					},
					"2": {
						trigger: {
							player: "shaMiss",
						},
						audio: "lolkz_renwu",
						forced: true,
						popup: false,
						filter: function (event, player) {
							return event.card && event.card.name == "sha" && player.storage.lolkz_renwu.length
						},
						content: function () {
							"step 0"
							player.chooseCardButton("###【刃舞】###可以获得武将牌上的一张牌", player.storage.lolkz_renwu);
							"step 1"
							if (result.bool) {
								player.$throw(result.links);
								var card = result.links[0];
								player.gain(card);
								player.storage.lolkz_renwu.remove(card);
								if (!player.storage.lolkz_renwu.length) {
									player.unmarkSkill("lolkz_renwu");
								} else {
									player.markSkill("lolkz_renwu");
								}
								player.syncStorage("lolkz_renwu");
							}
						},
						sub: true,
					},
				},
			},
			"lolkz_poju": {
				mod: {
					targetInRange: function (card, player, target) {
						if (target.hasSkill("lolkz_poju_1")) return true;
					},
				},
				trigger: {
					player: "phaseAfter",
				},
				audio: "ext:英雄联盟扩展:2",
				filter: function (event, player) {
					if (!game.hasPlayer(function (current) {
						return current != player && !current.hasSkill("lolkz_poju_1")
					})) return false
					return player.storage.lolkz_renwu.length
				},
				content: function () {
					"step 0"
					event.num = player.storage.lolkz_renwu.length
					player.unmarkSkill("lolkz_renwu");
					player.chooseTarget("###【破矩】###选择最多" + get.translation(event.num) + "名角色获得“失衡”效果", [1, event.num], function (card, player, target) {
						return player != target && !target.hasSkill("lolkz_poju_1")
					}).set("ai", function (target) {
						return -get.attitude(_status.event.player, target);
					});
					"step 1"
					if (result.bool) {
						var r = result.targets
						for (var i = 0; i < r.length; i++) {
							player.line(r[i], "red");
							r[i].addSkill("lolkz_poju_1")
						}
					}
				},
				group: "lolkz_poju_2",
				subSkill: {
					"1": {
						forced: true,
						direct: true,
						popup: false,
						mark: true,
						marktext: "失",
						intro: {
							name: "失衡",
							content: "已被刀锋舞者锁定",
						},
						trigger: {
							global: "phaseEnd",
						},
						audio: "ext:英雄联盟扩展:2",
						filter: function (event, player) {
							return event.player.hasSkill("lolkz_poju")
						},
						content: function () {
							player.removeSkill("lolkz_poju_1")
						},
						sub: true,
					},
					"2": {
						trigger: {
							player: "useCardToPlayered",
						},
						forced: true,
						filter: function (event, player) {
							return event.target.hasSkill("lolkz_poju_1")
						},
						content: function () {
							trigger.getParent().directHit.add(trigger.target);
						},
						sub: true,
					},
				},
			},
			"lolkz_gongwu": {
				audio: "ext:英雄联盟扩展:2",
				unique: true,
				zhuSkill: true,
				forced: true,
				marktext: "共",
				intro: {
					name: "共舞",
					content: "已指定了#次目标",
				},
				trigger: {
					player: "useCardToBegin",
				},
				filter: function (event, player) {
					return !player.hasSkill("lolkz_gongwu_1") && player.identity == "zhu"
				},
				content: function () {
					"step 0"
					player.addMark("lolkz_gongwu", 1)
					if (player.countMark("lolkz_gongwu") > 3) {
						game.countPlayer(function (current) {
							if (current.group == "lolai") {
								current.draw()
							}
						});
						player.removeMark("lolkz_gongwu", player.countMark("lolkz_gongwu"))
						player.addTempSkill("lolkz_gongwu_1")
					}
				},
				subSkill: {
					"1": {
						forced: true,
						sub: true,
					},
				},
			},
			"lolkz_qiefa": {
				audio: "ext:英雄联盟扩展:2",
				group: "lolkz_qiefa1",
				trigger: {
					player: "useCardToPlayered",
				},
				filter: function (event, player) {
					return event.card.name == "sha";
				},
				forced: true,
				logTarget: "target",
				content: function () {
					trigger.target.addTempSkill("lolkz_chenmo");
					player.discardPlayerCard("h", true, trigger.target);
					var i = game.createCard("lolkz_hudun", [lib.suit].randomGet());
					player.addJudge(i);
				},
			},
			"lolkz_qiefa1": {
				audio: "ext:英雄联盟扩展:2",
				trigger: {
					source: "damageBefore",
				},
				forced: true,
				filter: function (event, player) {
					return event.player.maxHp < player.maxHp;
				},
				check: function () {
					return false;
				},
				content: function () {
					trigger.cancel();
					trigger.player.loseHp(trigger.num);
				},
				ai: {
					jueqing: true,
				},
			},
			"lolkz_chenmo": {
				init: function (player, skill) {
					var skills = player.getSkills(true, false);
					for (var i = 0; i < skills.length; i++) {
						if (lib.skill[skills[i]].charlotte) {
							skills.splice(i--, 1);
						}
					}
					player.disableSkill(skill, skills);
				},
				onremove: function (player, skill) {
					player.enableSkill(skill);
				},
				locked: true,
				mark: true,
				intro: {
					content: function (storage, player, skill) {
						var list = [];
						for (var i in player.disabledSkills) {
							if (player.disabledSkills[i].contains(skill)) {
								list.push(i)
							}
						}
						if (list.length) {
							var str = "失效技能：";
							for (var i = 0; i < list.length; i++) {
								if (lib.translate[list[i] + "_info"]) {
									str += get.translation(list[i]) + "、";
								}
							}
							return str.slice(0, str.length - 1);
						}
					},
				},
			},
			"lolkz_lueren": {
				init: function (player) {
					game.addGlobalSkill("lolkz_hudun1");
					game.addGlobalSkill("lolkz_hudun1_1");
					game.addGlobalSkill("lolkz_hudun1_2");
					game.addGlobalSkill("lolkz_hudun1_3");
				},
				audio: "ext:英雄联盟扩展:2",
				trigger: {
					source: "damageBegin",
				},
				content: function () {
					"step 0"
					event.count = trigger.player.hp;
					"step 1"
					event.count--
					var i = game.createCard("lolkz_hudun", [lib.suit].randomGet());
					trigger.player.addJudge(i);
					"step 2"
					if (event.count) event.goto(1);
					"step 3"
					event.num = trigger.player.maxHp - 1;
					var hp_num = trigger.player.hp - 1;
					trigger.player.loseMaxHp(event.num, true);
					trigger.player.addSkill("lolkz_lueren1");
					trigger.player.addSkill("lolkz_lueren2");
				},
				ai: {
					jueqing: true,
				},
			},
			"lolkz_lueren1": {
				audio: "lolkz_lueren",
				trigger: {
					global: "phaseAfter",
				},
				forced: true,
				charlotte: true,
				content: function () {
					"step 0"
					var num = player.countCards("j", "lolkz_hudun") - 1;
					if (num > 0) {
						player.gainMaxHp(num);
						player.recover(num);
					}
					"step 1"
					if (!player.hasSkill("lolkz_lueren2")) player.loseMaxHp();
					player.removeSkill("lolkz_lueren1");
					player.removeSkill("lolkz_lueren2");
				},
			},
			"lolkz_lueren2": {
				audio: "lolkz_lueren",
				charlotte: true,
				trigger: {
					player: "dying",
				},
				forced: true,
				content: function () {
					player.removeSkill("lolkz_lueren2");
				},
			},
			"lolkz_xingyun0": {
				audio: "ext:英雄联盟扩展:2",
				trigger: {
					player: "judge",
				},
				filter: function (event, player) {
					return event.judgestr != "幸运";
				},
				content: function () {
					"step 0"
					event.color = get.color(trigger.player.judging[0]);
					"step 1"
					player.judge();
					"step 2"
					if (result.color == event.color) {
						event.card = result.card;
						player.chooseBool("是否再次判定？").ai = function (event, player) {
							return true;
						};
					} else {
						trigger.player.judging[0] = result.card;
						event.finish();
					}
					"step 3"
					if (result.bool) {
						event.goto(1);
					} else {
						trigger.player.judging[0] = event.card;
					}
				},
			},
			"lolkz_zashu": {
				audio: "ext:英雄联盟扩展:2",
				forced: true,
				trigger: {
					player: "judgeEnd",
				},
				frequent: function (event) {
					if (event.result.card.name == "du") return false;
					//if(get.mode()=="guozhan") return false;
					return true;
				},
				check: function (event) {
					if (event.result.card.name == "du") return false;
					return true;
				},
				filter: function (event, player) {
					return get.position(event.result.card, true) == "o";
				},
				content: function () {
					player.gain(trigger.result.card, "gain2");
				},
			},
			"lolkz_haodu": {
				audio: "ext:英雄联盟扩展:2",
				group: ["lolkz_haodu_link"],
				enable: "phaseUse",
				usable: 1,
				filterTarget: function (card, player, target) {
					return target != player;
				},
				selectTarget: [1, Infinity],
				multitarget: true,
				multiline: true,
				content: function () {
					"step 0"
					event.num = 0;
					player.storage.lolkz_haodu_link = targets.length + 1;
					"step 1"
					player.addTempSkill("lolkz_haodu_target", "phaseUseEnd");
					player.chooseCard("he", true, "将一张牌置于牌堆顶");
					"step 2"
					if (result && result.cards) {
						event.card = result.cards[0];
						player.lose(result.cards, ui.special);
						game.broadcastAll(function (player) {
							var cardx = ui.create.card();
							cardx.classList.add("infohidden");
							cardx.classList.add("infoflip");
							player.$throw(cardx, 1000, "nobroadcast");
						}, player);
					} else {
						event.card = null;
					}
					"step 3"
					if (event.card) {
						event.card.fix();
						ui.cardPile.insertBefore(event.card, ui.cardPile.firstChild);
						game.updateRoundNumber();
						game.log(player, "将一张牌置于牌堆顶");
					}
					"step 4"
					targets[event.num].addTempSkill("lolkz_haodu_target", "phaseUseEnd");
					targets[event.num].chooseCard("he", true, "将一张牌置于牌堆顶");
					"step 5"
					if (result && result.cards) {
						event.card = result.cards[0];
						targets[event.num].lose(result.cards, ui.special);
						game.broadcastAll(function (player) {
							var cardx = ui.create.card();
							cardx.classList.add("infohidden");
							cardx.classList.add("infoflip");
							player.$throw(cardx, 1000, "nobroadcast");
						}, targets[event.num]);
					} else {
						event.card = null;
					}
					"step 6"
					if (event.card) {
						event.card.fix();
						ui.cardPile.insertBefore(event.card, ui.cardPile.firstChild);
						game.updateRoundNumber();
						game.log(targets[event.num], "将一张牌置于牌堆顶");
					}
					event.num++;
					"step 7"
					if (event.num != targets.length) {
						event.goto(4);
					}
					"step 8"
					player.useSkill("lolkz_haodu_link");
					//player.useCard({name: "lolkz_huanpai"}, player, false)
				},
			},
			"lolkz_haodu_link": {
				audio: "ext:英雄联盟扩展:1",
				forced: true,
				mark: true,
				content: function () {
					"step 0"
					player.chooseTarget(get.prompt2("选择一名角色令其进行{选择角色数}次判定"), function (card, player, target) {
						return target.hasSkill("lolkz_haodu_target");
					}).set("targets", targets).ai = function (target) {
						if (target.hp == 1) return 5;
						return 2;
					}
					"step 1"
					if (result.bool) {
						event.target = result.targets[0];
						event.num = 1;
						event.rn = 0;
						event.bn = 0;
					}
					"step 2"
					if (event.target.isAlive()) event.target.judge();
					"step 3"
					switch (result.suit) {
						case "heart":
							event.target.recover(event.bn);
							event.rn++;
							break;
						case "diamond":
							event.target.draw(event.bn);
							event.rn++;
							break;
						case "club":
							event.target.chooseToDiscard("he", event.rn, true);
							event.bn++;
							break;
						case "spade":
							event.target.loseHp(event.rn);
							event.bn++;
							break;
					}
					"step 4"
					if (event.num == player.storage.lolkz_haodu_link) {
						player.unmarkSkill("lolkz_haodu_link")
						event.finish();
					} else {
						event.num++;
						event.goto(2)
					}
				},
			},
			"lolkz_haodu_target": {
			},
			"lolkz_caijue": {
				audio: "ext:英雄联盟扩展:7",
				forced: true,
				shaRelated: true,
				trigger: {
					player: "useCardToPlayered",
				},
				check: function (event, player) {
					return get.attitude(player, event.target) < 0;
				},
				filter: function (event, player) {
					return event.card.name == "sha";
				},
				logTarget: "target",
				content: function () {
					"step 0"
					for (var mark in player.marks) {
						var num = player.countMark(mark);
						player.removeMark(mark, num);
						player.draw(num)
					}
					"step 1"
					for (var item in player.storage) {
						if (typeof (item) != "boolean") {
							player.unmarkSkill(item)
						}
					}
					"step 2"
					player.discard(player.getCards("j"));
					"step 3"
					trigger.target.addTempSkill("lolkz_chenmo");
					"step 4"
					var suit = get.suit(trigger.cards.slice(0).filterInD());
					var target = trigger.target;
					var num = target.countCards("h", "shan");
					target.chooseToDiscard("请弃置一张" + get.translation(suit) + "牌，否则不能使用闪抵消此杀", "he", function (card) {
						return get.suit(card) == _status.event.suit;
					}).set("ai", function (card) {
						var num = _status.event.num;
						if (num == 0) return 0;
						if (card.name == "shan") return num > 1 ? 2 : 0;
						return 8 - get.value(card);
					}).set("num", num).set("suit", suit);
					"step 5"
					if (!result.bool) {
						trigger.getParent().directHit.add(trigger.target);
					}
				},
			},
			"lolkz_jianren": {
				audio: "ext:英雄联盟扩展:1",
				trigger: {
					player: "phaseUseEnd",
				},
				filter: function (event, player) {
					return player.countCards("h", {
						type: "trick"
					}) > 0 || player.countCards("he", {
						subtype: "equip3"
					}) > 0 || player.countCards("he", {
						subtype: "equip4"
					}) > 0;
				},
				content: function () {
					player.discard(player.getCards("h", {
						type: "trick"
					}))
					player.discard(player.getCards("he", {
						subtype: "equip3"
					}))
					player.discard(player.getCards("he", {
						subtype: "equip4"
					}))
					player.addTempSkill("lolkz_jianren_token", {
						player: "phaseZhunbeiBegin"
					})
				},
			},
			"lolkz_jianren_token": {
				audio: "ext:英雄联盟扩展:1",
				group: ["lolkz_jianren_token1"],
				trigger: {
					player: "damageBegin3",
				},
				filter: function () {
					return false;
				},
				forced: true,
				content: function () {
					trigger.num--;
				},
			},
			"lolkz_jianren_token1": {
				audio: "ext:英雄联盟扩展:1",
				forced: true,
				trigger: {
					global: "phaseJieshuBegin",
				},
				filter: function (event, player) {
					if (player == _status.currentPhase) return false;
					return player.getHistory("damage").length == 0;
				},
				content: function () {
					player.recover();
				},
			},
			"lol_mieshi_skill": {
				equipSkill: true,
				mod: {
					maxHandcardFinal: function (player, num) {
						return num * 2;
					},
				},
			},
			"lol_yifu": {
				trigger: {
					global: "gameStart",
					player: "enterGame",
				},
				audio: "ext:英雄联盟扩展:4",
				direct: true,
				locked: true,
				content: function () {
					"step 0"
					player.chooseTarget(get.prompt("lol_yifu"), "选择一名角色，其增加一点体力上限，你将势力改为其势力", function (card, player, target) {
						return target != player;
					}, 1, true).set("ai", function (target) {
						return get.attitude(_status.event.player, target);
					});
					"step 1"
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("lol_yifu", target);
						target.gainMaxHp();
						player.group = target.group;
						player.storage.lol_yifu = target;
						target.markSkillCharacter("lol_yifu", player, "依附", "<li>悠米不能成为其他角色的目标；<li>你于摸牌阶段摸牌时，悠米摸一张牌；<li>悠米回复体力时，你回复一点体力；<li>悠米造成的伤害和使用的牌，除【装备】【桃】【酒】之外，来源均视为你；<li>悠米的体力变化时，你摸一张牌");
					}
					"step 2"
					event.trigger("lol_yifu");
				},
				mod: {
					targetEnabled: function (card, player, target) {
						if (target != player && target.storage.lol_yifu != undefined && target.storage.lol_yifu.isAlive() && target != target.storage.lol_yifu) {
							return false;
						}
					},
				},
				group: ["lol_yifu_draw", "lol_yifu_recover", "lol_yifu_damageUseCard", "lol_yifu_die"],
				subSkill: {
					draw: {
						audio: "ext:英雄联盟扩展:4",
						trigger: {
							global: "gainEnd",
						},
						forced: true,
						filter: function (event, player) {
							return player.storage.lol_yifu && player.storage.lol_yifu == event.player && event.getParent("phaseDraw").player == event.player;
						},
						content: function () {
							"step 0"
							var next = player.chooseButton();
							next.set("createDialog", ["【依附】选择一张牌获得之", trigger.cards]);
							next.set("ai", function (button) {
								if (_status.event.att) return get.buttonValue(button);
								return 0;
							});
							"step 1"
							if (result.bool) {
								player.gain(result.links[0], "gain2");
							}
						},
						sub: true,
					},
					recover: {
						audio: "ext:英雄联盟扩展:4",
						trigger: {
							player: "recoverEnd",
						},
						direct: true,
						filter: function (event, player) {
							return player.storage.lol_yifu != undefined;
						},
						content: function () {
							var targetx = player.storage.lol_yifu;
							player.logSkill("lol_yifu_recover", targetx);
							targetx.recover();
						},
						sub: true,
					},
					damageUseCard: {
						audio: "ext:英雄联盟扩展:8",
						trigger: {
							source: "damageBegin",
							player: "useCardBegin",
						},
						direct: true,
						filter: function (event, player) {
							if (event.name == "useCard") {
								if (get.type(event.card) == "equip") return false;
								if (event.card.name == "tao") return false;
								if (event.card.name == "jiu") return false;
								if (event.card.name == "du") return false;
							}
							return player.storage.lol_yifu != undefined;
						},
						content: function () {
							var targetx = player.storage.lol_yifu;
							player.logSkill("lol_yifu_damageUseCard", targetx);
							if (trigger.name == "damage") {
								trigger.source = targetx;
							} else {
								trigger.player = targetx;
							}
						},
						sub: true,
					},
					changeHp: {
						trigger: {
							player: "changeHp",
						},
						direct: true,
						filter: function (event, player) {
							return player.storage.lol_yifu != undefined;
						},
						content: function () {
							var targetx = player.storage.lol_yifu;
							player.logSkill("lol_yifu_changeHp", targetx);
							targetx.draw();
						},
						sub: true,
					},
					die: {
						audio: "ext:英雄联盟扩展:2",
						trigger: {
							global: "die",
						},
						direct: true,
						filter: function (event, player) {
							return player.storage.lol_yifu && player.storage.lol_yifu == event.player;
						},
						content: function () {
							player.logSkill("lol_yifu_die", trigger.player);
							player.storage.lol_yifu = null;
						},
						sub: true,
					},
				},
			},
			"lol_feidan": {
				audio: "ext:英雄联盟扩展:2",
				enable: ["chooseToUse"],
				filter: function (event, player) {
					return !player.getStat().skill.lol_feidan;
				},
				filterCard: function () {
					return false
				},
				selectCard: -1,
				viewAs: {
					name: "sha",
					"lol_feidan": true,
				},
				precontent: function () {
					player.getStat().skill.lol_feidan = 1;
					player.loseHp();
				},
				prompt: "失去一点体力视为使用一张无视距离的【杀】",
				mod: {
					targetInRange: function (card, player, target) {
						if (card.name == "sha" && card.lol_feidan) return true;
					},
				},
				group: ["lol_feidan_sha"],
				subSkill: {
					sha: {
						audio: "ext:英雄联盟扩展:2",
						trigger: {
							global: "shaBegin",
						},
						prompt: "取消结算并回复一点体力",
						filter: function (event, player) {
							return event.card.lol_feidan || false;
						},
						check: function (event, player) {
							return true;
						},
						content: function () {
							trigger.cancel();
							player.recover();
						},
						sub: true,
					},
				},
				ai: {
					yingbian: function (card, player, targets, viewer) {
						if (get.attitude(viewer, player) <= 0) return 0;
						var base = 0,
							hit = false;
						if (get.cardtag(card, "yingbian_hit")) {
							hit = true;
							if (targets.filter(function (target) {
								return target.hasShan() && get.attitude(viewer, target) < 0 && get.damageEffect(target, player, viewer, get.nature(card)) > 0;
							})) base += 5;
						}
						if (get.cardtag(card, "yingbian_all")) {
							if (game.hasPlayer(function (current) {
								return !targets.contains(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
							})) base += 5;
						}
						if (get.cardtag(card, "yingbian_damage")) {
							if (targets.filter(function (target) {
								return get.attitude(player, target) < 0 && (hit || !target.mayHaveShan() || player.hasSkillTag("directHit_ai", true, {
									target: target,
									card: card,
								}, true)) && !target.hasSkillTag("filterDamage", null, {
									player: player,
									card: card,
									jiu: true,
								})
							})) base += 5;
						}
						return base;
					},
					canLink: function (player, target, card) {
						if (!target.isLinked() && !player.hasSkill("wutiesuolian_skill")) return false;
						if (target.mayHaveShan() && !player.hasSkillTag("directHit_ai", true, {
							target: target,
							card: card,
						}, true)) return false;
						if (player.hasSkill("jueqing") || target.hasSkill("gangzhi") || target.hasSkill("gangzhi")) return false;
						return true;
					},
					basic: {
						useful: [5, 1],
						value: [5, 1],
					},
					order: function (item, player) {
						if (player.hasSkillTag("presha", true, null, true)) return 10;
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
								if (!isLink && player.hasSkill("jiu")) {
									if (!target.hasSkillTag("filterDamage", null, {
										player: player,
										card: card,
										jiu: true,
									})) {
										if (get.attitude(player, target) > 0) {
											return -7;
										} else {
											return -4;
										}
									}
									return -0.5;
								}
								return -1.5;
							}();
							if (!isLink && target.mayHaveShan() && !player.hasSkillTag("directHit_ai", true, {
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
							if (card.nature == "poison") return;
							return 1;
						},
						natureDamage: function (card) {
							if (card.nature) return 1;
						},
						fireDamage: function (card, nature) {
							if (card.nature == "fire") return 1;
						},
						thunderDamage: function (card, nature) {
							if (card.nature == "thunder") return 1;
						},
						poisonDamage: function (card, nature) {
							if (card.nature == "poison") return 1;
						},
					},
				},
			},
			"lol_modian": {
				audio: "ext:英雄联盟扩展:2",
				trigger: {
					player: ["lol_yifu", "equipAfter", "loseAfter"],
				},
				direct: true,
				locked: true,
				init: function (player) {
					player.addTempSkill("lol_mieshi_skill", {
						player: "die"
					});
				},
				filter: function (event, player) {
					if (player.storage.lol_yifu == undefined) return false;
					return true;
				},
				content: function () {
					"step 0"
					var targetx = player.storage.lol_yifu;
					var next = game.createEvent("lol_modian");
					next.player = targetx;
					next.setContent("emptyEvent");
					next.trigger("lol_modian");
					"step 1"
					if (!player.hasSkill("lol_mieshi_skill")) player.addTempSkill("lol_mieshi_skill", {
						player: "die"
					});
					"step 2"
					var targetx = player.storage.lol_yifu;
					var equips = player.getCards("e", function (card) {
						return get.subtype(card) == "equip5"
					});
					targetx.addTempSkill("lol_mieshi_skill", {
						player: "lol_modian"
					});
					for (var i = 0; i < equips.length; i++) {
						var skills = lib.card[equips[i].name].skills || [];
						for (var j = 0; j < skills.length; j++) {
							targetx.addTempSkill(skills[j], {
								player: "lol_modian"
							});
						}
					}
				},
				mod: {
					cardEnabled: function (card, player) {
						if (get.subtype(card) == "equip3" || get.subtype(card) == "equip4") {
							return false;
						}
					},
				},
			},
			"lol_mizhang": {
				init: function (player) {
					player.storage.lol_mizhang = false;
				},
				trigger: {
					global: "phaseBefore",
				},
				mark: true,
				intro: {
					content: "limited",
				},
				delay: false,
				skillAnimation: true,
				animationColor: "orange",
				unique: true,
				limited: true,
				filter: function (event, player) {
					return event.player == player || (player.storage.lol_yifu && player.storage.lol_yifu == event.player);
				},
				check: function (event, player) {
					return player.hp < 2;
				},
				content: function () {
					"step 0"
					player.awakenSkill("lol_mizhang");
					player.storage.lol_mizhang = true;
					"step 1"
					event.targets = game.players.concat().remove(player);
					event.gainNum = 0;
					event.loseNum = 0;
					"step 2"
					if (event.targets.length) {
						event.current = event.targets.pop();
						player.gainPlayerCard("hej", event.current, false);
					} else {
						event.goto(4);
					}
					"step 3"
					if (result.bool) {
						event.gainNum++;
					}
					event.goto(2);
					"step 4"
					player.chooseToDiscard("he", [1, player.countCards("he")], false);
					"step 5"
					if (result.bool) {
						event.loseNum = result.cards.length;
					}
					"step 6"
					if (event.loseNum > event.gainNum) {
						event.goto(7);
					} else if (event.loseNum < event.gainNum) {
						event.goto(9);
					} else event.finish();
					"step 7"
					var num = event.loseNum - event.gainNum;
					player.chooseTarget("秘章：对至多" + num + "名角色各造成1点伤害", [1, num], false).ai = function (target) {
						return get.damageEffect(target, _status.event.player, _status.event.player);
					};
					"step 8"
					if (result.bool) {
						for (var i = 0; i < result.targets.length; i++) {
							result.targets[i].damage(player);
						}
					}
					event.finish();
					"step 9"
					var num = event.gainNum - event.loseNum;
					player.chooseCard("秘章：将" + num + "张牌交给“依附”角色", "he", num, true);
					"step 10"
					if (result.bool) {
						if (player.storage.lol_yifu && player.storage.lol_yifu.isAlive()) {
							player.storage.lol_yifu.gain(result.cards, player, "giveAuto");
						}
					}
				},
			},
			"lol_manli": {
				audio: "ext:英雄联盟扩展:6",
				group: ["lol_manli_changeHp", "lol_manli_compare", "lol_manli_sha", "lol_manli_miss"],
				subSkill: {
					changeHp: {
						trigger: {
							player: "changeHp",
						},
						direct: true,
						init: function (player) {
							player.storage.lol_manli_changeHp = 0;
						},
						onremove: function (player) {
							delete player.storage.lol_manli_changeHp;
						},
						intro: {
							content: "你的牌点数+#",
						},
						content: function () {
							if (player.isDamaged()) {
								if (player.storage.lol_manli_changeHp == 0) {
									player.markSkill("lol_manli_changeHp");
								}
							} else {
								if (player.storage.lol_manli_changeHp > 0) {
									player.unmarkSkill("lol_manli_changeHp");
								}
							}
							//player.storage.lol_manli_changeHp=player.getDamagedHp()*2;
							player.storage.lol_manli_changeHp = (player.maxHp - player.hp) * 2;
							player.updateMarks();
						},
						sub: true,
					},
					compare: {
						trigger: {
							player: "compare",
							target: "compare",
						},
						filter: function (event, player) {
							if (event.iwhile) return false;
							return player.storage.lol_manli_changeHp > 0;
						},
						direct: true,
						content: function () {
							player.logSkill("lol_manli");
							var damaged = player.storage.lol_manli_changeHp;
							game.log(player, "拼点牌点数+", "#y" + damaged);
							if (player == trigger.player) {
								trigger.num1 = damaged;
							} else {
								trigger.num2 = damaged;
							}
						},
						sub: true,
					},
					sha: {
						shaRelated: true,
						trigger: {
							player: "useCardToPlayered",
						},
						direct: true,
						filter: function (event, player) {
							if (event.card.name != "sha") return false;
							var number = get.number(event.cards[0]) || 0;
							var damaged = player.storage.lol_manli_changeHp;
							var length = event.target.countCards("h");
							return (number + damaged > length * 2);
						},
						content: function () {
							player.logSkill("lol_manli");
							var map = trigger.customArgs;
							var id = trigger.target.playerid;
							if (!map[id]) map[id] = {};
							if (!map[id].extraDamage) map[id].extraDamage = 0;
							map[id].extraDamage++;
						},
						sub: true,
					},
					miss: {
						trigger: {
							player: "shaMiss",
						},
						direct: true,
						filter: function (event, player) {
							var number1 = get.number(event.cards[0]) || 0;
							var damaged = player.storage.lol_manli_changeHp;
							var number2 = get.number(event.responded.cards[0]) || 0;
							return event.target.isAlive() && (number1 + damaged > number2);
						},
						content: function () {
							player.logSkill("lol_manli", trigger.targets);
							trigger.untrigger();
							trigger.trigger("shaHit");
							trigger._result.bool = false;
							trigger._result.result = null;
						},
						sub: true,
					},
				},
			},
			"lol_buqu": {
				audio: "ext:英雄联盟扩展:true",
				trigger: {
					player: "dying",
				},
				forced: true,
				filter: function (event, player) {
					return true;
					return event.type == "dying" && player.isDying() && event.dying == player
				},
				content: function () {
					"step 0"
					event.card = get.cards()[0];
					if (player.storage.lol_buqu == undefined) player.storage.lol_buqu = [];
					player.storage.lol_buqu.push(event.card);
					player.syncStorage("lol_buqu");
					game.cardsGotoSpecial(event.card);
					player.showCards(player.storage.lol_buqu, "不屈")
					player.markSkill("lol_buqu");
					"step 1"
					for (var i = 0; i < player.storage.lol_buqu.length - 1; i++) {
						if (get.suit(event.card) && get.suit(event.card) == get.suit(player.storage.lol_buqu[i])) {
							event.finish();
							break;
						}
						;
					}
					"step 2"
					trigger.cancel();
					_status.dying.remove(player);
				},
				ai: {
					save: true,
					mingzhi: true,
					skillTagFilter: function (player, tag, target) {
						if (player != target) return false;
					},
				},
				intro: {
					content: "cards",
					onunmark: function (storage, player) {
						if (storage && storage.length) {
							player.$throw(storage, 1000);
							game.cardsDiscard(storage);
							delete player.storage.lol_buqu;
						}
					},
				},
				group: ["lol_buqu_recover"],
				subSkill: {
					recover: {
						trigger: {
							player: "recoverEnd",
						},
						direct: true,
						filter: function (event, player) {
							return event.num > 0 && player.storage.lol_buqu && player.storage.lol_buqu.length > 0;
						},
						content: function () {
							"step 0"
							player.logSkill("lol_buqu");
							"step 1"
							var num = Math.min(trigger.num, player.storage.lol_buqu.length);
							var cards = player.storage.lol_buqu.randomGets(num);
							player.$throw(cards, 1000);
							game.cardsDiscard(cards);
							for (var i = 0; i < num; i++) {
								player.storage.lol_buqu.remove(cards[i]);
							}
							"step 2"
							if (!player.storage.lol_buqu.length) {
								player.unmarkSkill("lol_buqu");
							}
						},
						sub: true,
					},
				},
			},
			"lol_shanxian": {
				cardSkill: true,
				trigger: {
					target: "useCardToBefore",
				},
				forced: true,
				popup: false,
				filter: function (event, player) {
					if (event.player == player) return false;
					if (event.getParent().directHit.contains(player)) return false;
					var num = player.countCards("h", "lol_shanxian");
					return num > 0;
				},
				content: function () {
					"step 0"
					player.chooseToUse("是否对" + get.translation(trigger.card) + "使用【闪现】？").set("ai1", function (card) {
						return _status.event.bool;
					}).set("bool", -get.effect(player, trigger.card, trigger.player, player)).set("respondTo", [trigger.player, trigger.card]).set("filterCard", function (card, player) {
						if (get.name(card) != "lol_shanxian") return false;
						return lib.filter.cardEnabled(card, player, "forceEnable");
					});
					trigger.lol_shanxian = true;
					"step 1"
					delete trigger.lol_shanxian;
				},
			},
			"lol_shanxian2": {
				mark: true,
				intro: {
					content: "与$距离+1",
				},
				mod: {
					globalTo: function (from, to, current) {
						if (to.storage.lol_shanxian2 && to.storage.lol_shanxian2 == from) return current + 1;
					},
				},
			},
			"lol_jinglei": {
				audio: "ext:英雄联盟扩展:6",
				init: function (player) {
					player.storage.lol_jinglei = false;
				},
				intro: {
					content: "当你使用牌时，你弃置“狂雷”令此牌不能被响应",
				},
				trigger: {
					global: "judgeEnd",
				},
				forced: true,
				locked: true,
				filter: function (event, player) {
					return !player.storage.lol_jinglei;
				},
				content: function () {
					player.storage.lol_jinglei = true;
					player.markSkill("lol_jinglei");
				},
				group: ["lol_jinglei_useCard"],
				subSkill: {
					useCard: {
						trigger: {
							player: "useCard",
						},
						prompt: "当你使用牌时，你弃置“狂雷”令此牌不能被响应",
						check: function (event, player) {
							return get.type(event.card) != "equip";
						},
						direct: true,
						filter: function (event, player) {
							return player.storage.lol_jinglei;
						},
						content: function () {
							"step 0"
							trigger.nowuxie = true;
							trigger.directHit.addArray(game.players);
							"step 1"
							player.storage.lol_jinglei = false;
							player.unmarkSkill("lol_jinglei");
						},
						sub: true,
					},
				},
				mod: {
					cardUsable: function (card, player) {
						if (player.countCards("j")) {
							return true
						}
					},
					globalFrom: function (from, to, distance) {
						if (to.countCards("j")) return 1;
					},
				},
			},
			"lol_tiansheng": {
				audio: "ext:英雄联盟扩展:6",
				trigger: {
					global: "lol_tiansheng",
				},
				forced: true,
				locked: true,
				logTarget: "player",
				content: function () {
					"step 0"
					player.addSkill("lol_tiansheng_shaMiss");
					player.chooseToUse({
						preTarget: trigger.player,
						prompt: "是否发动【天声】，对" + get.translation(trigger.player) + "使用一张【杀】？",
						filterCard: function (card, player) {
							return get.name(card) == "sha" && lib.filter.filterCard.apply(this, arguments);
						},
						filterTarget: function (card, player, target) {
							return target == _status.event.preTarget //&&lib.filter.filterTarget.apply(this,arguments);
						},
						addCount: false,
					});
					"step 1"
					if (result.bool) {
						if (player.hasSkill("lol_tiansheng_shaMiss")) {
							player.removeSkill("lol_tiansheng_shaMiss");
							event.finish();
						} else {
							trigger.triggerx.cancel();
							player.logSkill("lol_tiansheng");
							player.addJudge(trigger.card, trigger.cards);
						}
					} else {
						player.removeSkill("lol_tiansheng_shaMiss");
						event.finish();
					}
				},
				group: ["lol_tiansheng_useCard", "lol_tiansheng_judge"],
				subSkill: {
					useCard: {
						trigger: {
							global: "useCardBegin",
						},
						direct: true,
						filter: function (event, player) {
							if (event.player == player) return false;
							return ["shandian", "fulei"].contains(event.card.name);
						},
						content: function () {
							event.player = trigger.player;
							event.card = trigger.card;
							event.cards = trigger.cards;
							event.triggerx = trigger;
							event.trigger("lol_tiansheng");
						},
						sub: true,
					},
					judge: {
						trigger: {
							global: "judgeBegin",
						},
						direct: true,
						filter: function (event, player) {
							if (event.player == player) return false;
							return ["shandian", "fulei"].contains(event.card.name);
						},
						content: function () {
							event.player = trigger.player;
							event.card = trigger.card;
							event.cards = trigger.cards;
							event.triggerx = trigger;
							event.trigger("lol_tiansheng");
						},
						sub: true,
					},
					shaMiss: {
						trigger: {
							player: "shaAfter",
						},
						direct: true,
						content: function () {
							player.removeSkill("lol_tiansheng_shaMiss");
						},
						sub: true,
					},
				},
			},
			"lol_pili": {
				audio: "ext:英雄联盟扩展:7",
				trigger: {
					player: "useCardToPlayer",
				},
				direct: true,
				locked: true,
				filter: function (event, player) {
					return event.card.name == "sha"
				},
				content: function () {
					"step 0"
					event.list = [];
					for (var i = 0; i < game.players.length; i++) {
						if (trigger.getParent().targets.contains(game.players[i])) continue;
						if (!game.players[i].inRangeOf(player)) continue;
						event.list.push(game.players[i]);
					}
					if (event.list.length) {
						event.list.sort();
						player.logSkill("lol_pili", event.list);
					} else {
						event.finish();
					}
					"step 1"
					if (event.list.length) {
						event.current = event.list.pop();
					} else event.finish();
					"step 2"
					if (event.current.isLinked()) {
						event.current.chooseCard("e", "1.    成为此【杀】的目标；2.    弃置一张【武器】或【防具】", function (card) {
							if (get.position(card) == "e") {
								return ["equip1", "equip2"].contains(get.subtype(card));
							}
							return true;
						});
					} else {
						event.current.chooseCard("he", "1.    成为此【杀】的目标；2.    弃置一张【武器】或【防具】；3.    弃置一张手牌并横置自己", function (card) {
							if (get.position(card) == "e") {
								return ["equip1", "equip2"].contains(get.subtype(card));
							}
							return true;
						});
					}
					"step 3"
					if (result.bool) {
						event.current.discard(result.cards[0]);
						if (get.position(result.cards[0]) == "h") {
							event.current.link(true);
						}
					} else {
						trigger.getParent().targets.push(event.current);
					}
					"step 4"
					event.goto(1);
				},
			},
			"lol_cedian": {
				audio: "ext:英雄联盟扩展:6",
				trigger: {
					player: "damageEnd",
				},
				filter: function (event, player) {
					return event.nature && (event.nature == "thunder" || event.nature == "fire");
				},
				forced: true,
				locked: true,
				content: function () {
					if (trigger.nature == "thunder") {
						player.recover();
						player.changeHujia(trigger.num);
					} else {
						var card = game.createCard("fulei");
						player.line(trigger.source);
						trigger.source.addJudge(card);
						player.gain(get.cardPile(function (card) {
							return get.name(card) == "sha";
						}), "gain2");
					}
				},
			},
			"lol_dame": {
				audio: "ext:英雄联盟扩展:3",
				limited: true,
				skillAnimation: "epic",
				animationColor: "thunder",
				trigger: {
					player: "phaseBegin",
				},
				check: function (event, player) {
					return player.countCards("h") + player.getDamagedHp() > 6
				},
				content: function () {
					"step 0"
					player.awakenSkill("lol_dame");
					player.draw(player.getDamagedHp());
					"step 1"
					player.addTempSkill("lol_damedane");
				},
				mark: true,
				intro: {
					content: "limited",
				},
				init: function (player, skill) {
					player.storage[skill] = false;
				},
			},
			"lol_cisi": {
				locked: true,
				forced: true,
				init: function (player) {
					player.equip(game.createCard("lol_mojin"))
				},
				group: ["lol_cisi_useCard", "lol_cisi_die"],
			},
			"lol_damedane": {
				trigger: {
					player: "useCard",
				},
				forced: true,
				content: function () {
					"step 0"
					trigger.nowuxie = true;
					trigger.directHit.addArray(game.players);
					"step 1"
					player.loseHp();
				},
				mod: {
					targetInRange: function (card, player, target) {
						return true;
					},
				},
				group: ["lol_damedane_damage"],
				subSkill: {
					damage: {
						trigger: {
							source: "damageSource",
						},
						forced: true,
						content: function () {
							player.recover();
						},
						sub: true,
					},
				},
			},
			"lol_cisi_useCard": {
				audio: "ext:英雄联盟扩展:4",
				trigger: {
					player: "useCard",
				},
				filter: function (event, player) {
					return (event.card.name == "sha" || event.card.name == "juedou") && !player.hasSkill("lol_cisi_useCard_damage");
				},
				forced: true,
				content: function () {
					player.loseHp();
					player.addTempSkill("lol_cisi_useCard_damage");
				},
				subSkill: {
					damage: {
						trigger: {
							source: "damageBegin1",
						},
						filter: function (event, player) {
							return event.card && event.card.name == "sha" || event.card.name == "juedou"
						},
						forced: true,
						content: function () {
							"step 1"
							trigger.num++;
							"step 2"
							if (trigger.card.name == "sha") {
								trigger.player.addTempSkill("lol_cisi_useCard_notao");
							}
						},
						sub: true,
					},
					notao: {
						mod: {
							cardEnabled: function (card, player) {
								if (card.name == "tao") return false
							},
							cardUsable: function (card, player) {
								if (card.name == "tao") return false
							},
							cardRespondable: function (card, player) {
								if (card.name == "tao") return false
							},
							cardSavable: function (card, player) {
								if (card.name == "tao") return false
							},
						},
						sub: true,
					},
				},
			},
			"lol_cisi_die": {
				audio: "ext:英雄联盟扩展:1",
				trigger: {
					global: "dyingAfter",
				},
				filter: function (event, player) {
					return event.player != player && event.source && event.source == player
				},
				forced: true,
				content: function () {
					"step 0"
					player.enableSkill("lol_dame_awake", "lol_dame");
					player.awakenedSkills.remove("lol_dame");
					"step 1"
					player.phase();
				},
			},
			"lol_xianxuemojin_skill": {
				locked: true,
				direct: true,
				init: function (player) {
					player.markSkill("lol_xianxuemojin_skill");
					player.storage.lol_xianxuemojin_skill = 0;
				},
				marktext: "血",
				intro: {
					content: "mark",
				},
				trigger: {
					source: "damageEnd",
				},
				content: function () {
					"step 0"
					player.chooseToDiscard("鲜血魔井：锁定·当你的【杀】造成伤害时，你弃置一张牌并获得x枚“血”{X为你造成的伤害}", 1, "he", false);
					"step 1"
					if (result.bool) {
						if (!player.storage.lol_xianxuemojin_skill) {
							player.storage.lol_xianxuemojin_skill = trigger.num;
						} else {
							player.storage.lol_xianxuemojin_skill += trigger.num;
						}
						player.update();
					}
				},
			},
			"lol_xianxuemojin_skillx": {
				audio: "ext:英雄联盟扩展:5",
				locked: true,
				direct: true,
				enable: "chooseToUse",
				filter: function (event, player) {
					if (event.type == "dying") {
						if (player != event.dying) return false;
						return player.storage.lol_xianxuemojin_skill > 0;
					}
					return false;
				},
				content: function () {
					"step 0"
					player.maxHp = player.storage.lol_xianxuemojin_skill;
					player.storage.lol_xianxuemojin_skill = 0;
					player.update();
					"step 1"
					if (player.hp < player.maxHp) {
						player.recover();
						player.draw();
					} else event.finish();
					"step 2"
					event.goto(1);
				},
				ai: {
					order: 1,
					skillTagFilter: function (player, arg, target) {
						if (player != target || !player.storage.lol_xianxuemojin_skill) return false;
					},
					save: true,
					result: {
						player: 1,
					},
				},
			},
			"fenlu1": {
				mark: true,
				intro: {
					content: "斩",
				},
			},
			"fenlu2": {
				trigger: {
					player: "phaseDiscardAfter",
				},
				forced: true,
				filter: function (event, player) {
					if (player.countCards("h") >= 1) return true;
					return false;
				},
				content: function () {

					"step 0"
					player.chooseToDiscard(1, true)


					var num = game.countPlayer(function (current) {
						if ((current.hasSkill("fenlu1") && current != player)) return true;
					});


					player.chooseTarget([0, num], get.prompt("fenlu2"), function (card, player, target) {

						return player.canUse({
							name: "sha",
							nature: "fire" || "thunder"
						}, target, false) && target.hasSkill("fenlu1")
					}).ai = function (target) {
						return get.effect(target, {
							name: "sha",
							nature: "fire" || "thunder"
						}, player);
					}


					"step 1"


					if (result.bool) {

						player.logSkill("fenlu2");
						player.useCard({
							name: "sha",
							nature: "fire"
						}, result.targets);
					}


				},
			},
			"fenlu3": {
				trigger: {
					player: "phaseDiscardAfter",
				},
				forced: true,
				filter: function (event, player) {
					if (player.countCards("h") >= 1) return true;
					return false;
				},
				content: function () {

					"step 0"
					player.chooseToDiscard(1, true)


					var num = game.countPlayer(function (current) {
						if ((current.hasSkill("fenlu1") && current != player)) return true;
					});


					player.chooseTarget([0, num], get.prompt("fenlu2"), function (card, player, target) {

						return player.canUse({
							name: "sha",
							nature: "fire" || "thunder"
						}, target, false) && target.hasSkill("fenlu1")
					}).ai = function (target) {
						return get.effect(target, {
							name: "sha",
							nature: "fire" || "thunder"
						}, player);
					}


					"step 1"


					if (result.bool) {

						player.logSkill("fenlu2");
						player.useCard({
							name: "sha",
							nature: "thunder"
						}, result.targets);
					}
				},
			},
			"fenlu4": {
				audio: "ext:英雄联盟扩展:2",
				trigger: {
					player: "phaseDiscardEnd",
				},
				filter: function (event, player) {
					return player.hasSkill("fenlu1")
				},
				content: function () {
					"step 0"
					player.chooseControl("使用火杀", "使用雷杀")
					"step 1"
					if (result.control == "使用火杀") {
						player.addTempSkill("fenlu2");
					} else {
						player.addTempSkill("fenlu3");
					}
				},
			},
			"lolkz_fenlu": {
				audio: "ext:英雄联盟扩展:1",
				group: ["fenlu4"],
				trigger: {
					source: "damageEnd",
				},
				frequent: true,
				check: function (event, player) {
					return get.attitude(player, event.target) <= 0;
				},
				filter: function (event, player) {
					return event.card.name == "sha"
				},
				content: function () {
					if (trigger.player != player) {
						trigger.player.addTempSkill("fenlu1", {
							player: "phaseAfter"
						});
						player.addTempSkill("fenlu1", {
							player: "phaseAfter"
						});
					}

				},
			},
			"lol_zhongya_skill": {
				audio: "ext:英雄联盟扩展/卡牌音效:1",
				trigger: {
					player: "damageBegin1",
				},
				filter: function (event, player) {
					return event.num > 0 && !player.hasSkill("lol_zhongya_skill2")
				},
				content: function () {
					player.addTempSkill("lol_zhongya_skill2", "roundStart")
					player.turnOver()
					trigger.cancel()
				},
			},
			"lol_rezhongya_skill": {
				audio: "ext:英雄联盟扩展/卡牌音效:1",
				trigger: {
					player: "damageBegin1",
				},
				filter: function (event, player) {
					return event.num > 0 && !player.isTurnedOver()
				},
				content: function () {
					player.addTempSkill("lol_zhongya_skill2", "roundStart")
					player.turnOver()
					trigger.cancel()
				},
			},
			"lol_zhongya_skill2": {
			},
			"lol_kuangbao_skill": {
				audio: "ext:英雄联盟扩展/卡牌音效:1",
				trigger: {
					player: "useCardToTargeted",
				},
				filter: function (event, player) {
					return (event.card.name == "sha" && event.targets.length == 1 && !player.hasSkill("lol_kuangbao_skill2"));
				},
				content: function () {
					player.addTempSkill("lol_kuangbao_skill2")
					trigger.getParent().targets = trigger.getParent().targets.concat(trigger.targets);
					trigger.getParent().triggeredTargets4 = trigger.getParent().triggeredTargets4.concat(trigger.targets);
				},
			},
			"lol_kuangbao_skill2": {
			},
			"lol_jushe": {
				audio: "ext:英雄联盟扩展/卡牌音效:1",
				trigger: {
					source: "damageAfter",
				},
				forced: true,
				filter: function (event, player) {
					return event.card.name == "sha" && (event.player.countCards("j", function (card) {
						return card.name == "lolkz_hudun"
					}) > 0 || event.player.hujia > 0);
				},
				content: function () {
					trigger.player.discard(trigger.target.getCards("j", function (card) {
						return card.name == "lolkz_hudun"
					}));
					trigger.player.hujia = 0;
					player.update()
				},
			},
			"lol_jushe2": {
				trigger: {
					source: "damageAfter",
				},
				forced: true,
				content: function () {
					if (!trigger.player.hasSkill("lol_jushe3")) {
						trigger.player.addSkill("lol_jushe3")
					}
					trigger.player.addMark("lol_jushe3")
				},
			},
			"lol_jushe3": {
				mark: true,
				forced: true,
				onremove: true,
				marktext: "减",
				trigger: {
					player: "phaseDrawBegin2",
				},
				filter: function (event, player) {
					return !event.numFixed && event.num > 0;
				},
				content: function () {
					var num = player.countMark("lol_jushe3")
					trigger.num -= num;
					player.removeSkill("lol_jushe3")
				},
			},
			"lol_shoujizhe_skill": {
				audio: "ext:英雄联盟扩展/卡牌音效:1",
				trigger: {
					player: "useCardToPlayered",
				},
				filter: function (event, player) {
					return event.targets.length == 1 && event.card.name == "sha";
				},
				content: function () {
					"step 0"
					event.target = trigger.targets[0]
					trigger.getParent().excluded.add(event.target);
					if (event.target.countCards("he") > 0) {
						player.discardPlayerCard(event.target, "he", true);
					}
					"step 1"
					if (event.target.countCards("h") == 0) {
						event.target.addSkill("lol_shoujizhe_skill2")
						event.target.damage()
					}
					"step 2"
					if (event.target.hasSkill("lol_shoujizhe_skill2")) event.target.removeSkill("lol_shoujizhe_skill2")
				},
			},
			"lol_shoujizhe_skill2": {
				trigger: {
					player: "dying",
				},
				forced: true,
				content: function () {
					player.die()
				},
			},
			"lol_yinxiejian_skill": {
				audio: "ext:英雄联盟扩展/卡牌音效:1",
				trigger: {
					source: "damageAfter",
				},
				forced: true,
				filter: function (event, player) {
					return event.card.name == "sha" && !event.nature
				},
				content: function () {
					player.recover();
				},
			},
			"lol_qixie_skill": {
				audio: "ext:英雄联盟扩展/卡牌音效:1",
				trigger: {
					source: "damageAfter",
				},
				forced: true,
				filter: function (event, player) {
					return event.card.name == "sha" && !event.nature
				},
				content: function () {
					if (player.isDamaged) {
						player.recover();
					} else {
						var i = game.createCard("lolkz_hudun", [lib.suit].randomGet());
						player.addJudge(i);
					}

				},
			},
			"lol_luanna_skill": {
				audio: "ext:英雄联盟扩展/卡牌音效:1",
				trigger: {
					player: "useCard2",
				},
				filter: function (event, player) {
					if (event.card.name != "sha") return false;
					return game.hasPlayer(function (current) {
						return !event.targets.contains(current) && get.distance(player, current) <= 1 && player.canUse(event.card, current);
					});
				},
				direct: true,
				content: function () {
					"step 0"
					player.chooseTarget("为" + get.translation(trigger.card) + "增加一个目标", function (card, player, target) {
						return !_status.event.sourcex.contains(target) && get.distance(player, target) <= 1 && player.canUse(_status.event.card, target);
					}).set("sourcex", trigger.targets).set("ai", function (target) {
						var player = _status.event.player;
						return get.effect(target, _status.event.card, player, player);
					}).set("card", trigger.card);
					"step 1"
					if (result.bool) {
						if (!event.isMine() && !event.isOnline()) game.delayx();
						event.target = result.targets[0];
					} else {
						event.finish();
					}
					"step 2"
					player.logSkill("lol_luanna_skill", event.target);
					trigger.targets.push(event.target);
				},
				ai: {
					effect: {
						player: function (card, player, target, current, isLink) {
							if (!isLink && card.name == "sha") {
								if (player._duanbingtmp) return;
								player._duanbingtmp = true;
								if (get.effect(target, card, player, player) <= 0) {
									delete player._duanbingtmp;
									return;
								}
								if (game.hasPlayer(function (current) {
									return current != target && get.distance(player, current) <= 1 &&
										player.canUse(card, current) && get.effect(current, card, player, player) > 0;
								})) {
									delete player._duanbingtmp;
									return [1, 1];
								}
								delete player._duanbingtmp;
							}
						},
					},
				},
			},
			"lol_kuangfeng_skill": {
				audio: "ext:英雄联盟扩展/卡牌音效:1",
				trigger: {
					player: "useCard2",
				},
				filter: function (event, player) {
					if (event.card.name != "sha") return false;
					return game.hasPlayer(function (current) {
						return !event.targets.contains(current) && get.distance(player, current) <= 1 && player.canUse(event.card, current);
					});
				},
				direct: true,
				content: function () {
					"step 0"
					player.chooseTarget("为" + get.translation(trigger.card) + "增加至多2个目标", [1, 2], function (card, player, target) {
						return !_status.event.sourcex.contains(target) && target.inRange(player) && player.canUse(_status.event.card, target);
					}).set("sourcex", trigger.targets).set("ai", function (target) {
						var player = _status.event.player;
						return get.effect(target, _status.event.card, player, player);
					}).set("card", trigger.card);
					"step 1"
					if (result.bool) {
						if (!event.isMine() && !event.isOnline()) game.delayx();
						event.target = result.targets[0];
					} else {
						event.finish();
					}
					"step 2"
					player.logSkill("lol_kuangfeng_skill", event.target);
					trigger.targets.push(event.target);
				},
				ai: {
					effect: {
						player: function (card, player, target, current, isLink) {
							if (!isLink && card.name == "sha") {
								if (player._duanbingtmp) return;
								player._duanbingtmp = true;
								if (get.effect(target, card, player, player) <= 0) {
									delete player._duanbingtmp;
									return;
								}
								if (game.hasPlayer(function (current) {
									return current != target && get.distance(player, current) <= 1 &&
										player.canUse(card, current) && get.effect(current, card, player, player) > 0;
								})) {
									delete player._duanbingtmp;
									return [1, 1];
								}
								delete player._duanbingtmp;
							}
						},
					},
				},
			},
			"lol_shouhu": {
				trigger: {
					player: "dying",
				},
				audio: "ext:英雄联盟扩展/卡牌音效:1",
				forced: true,
				content: function () {
					var num = 1 - player.hp;
					player.recover(num);
					player.draw(3);
					var e2 = player.getEquip("lol_shouhutianshi");
					if (e2) {
						player.discard(e2);
					}
				},
			},
			"lol_jiushu_skill": {
				audio: "ext:英雄联盟扩展/卡牌音效:1",
				trigger: {
					player: "dying",
				},
				forced: true,
				content: function () {
					var num = player.maxHp - player.hp;
					player.recover(num);
					var num0 = player.maxHp - player.countCards("h");
					player.draw(num0)
					var e2 = player.getEquip("lol_jiushu");
					if (e2) {
						player.discard(e2);
					}
				},
			},
			"lol_kuangtu": {
				forced: true,
				trigger: {
					player: ["phaseJieshuBegin"],
				},
				audio: "ext:英雄联盟扩展/卡牌音效:1",
				filter: function (event, player) {
					return (player.getHistory("damage").length + player.getHistory("loseHp").length) == 0;
				},
				content: function () {
					player.recover();
				},
			},
			"lol_zhenfen": {
				audio: "ext:英雄联盟扩展/卡牌音效:1",
				forced: true,
				trigger: {
					player: "recoverAfter",
				},
				content: function () {
					player.draw(trigger.num);
				},
			},
			"lol_jifen": {
				forced: true,
				trigger: {
					player: "recoverBegin",
				},
				content: function () {
					trigger.num++
					player.draw(trigger.num);
				},
			},
			"lol_qishi": {
				audio: "ext:英雄联盟扩展/res/audio/card:1",
				enable: "phaseUse",
				usable: 1,
				filterTarget: function (card, player, target) {
					return player != target;
				},
				content: function () {
					player.storage.lol_qishi2 = [];
					player.storage.lol_qishi2.push(target);
					player.addTempSkill("lol_qishi2", {
						player: "phaseUseBegin"
					})
					player.markSkill("lol_qishi2");
				},
			},
			"lol_lvdun": {
				enable: "phaseUse",
				usable: 1,
				filterTarget: function (card, player, target) {
					return player != target;
				},
				content: function () {
					player.storage.lol_lvdun2 = [];
					player.storage.lol_lvdun2.push(target);
					player.addTempSkill("lol_lvdun2", {
						player: "phaseUseBegin"
					})
					player.markSkill("lol_lvdun2");
				},
			},
			"lol_qishi2": {
				audio: false,
				charlotte: true,
				silent: true,
				trigger: {
					global: "damageBegin1",
				},
				marktext: "骑",
				intro: {
					name: "骑士之誓",
					content: "当$受到伤害时，其受到伤害时伤害-1，然后你受到同伤害来源一点伤害",
				},
				filter: function (event, player) {
					return event.num > 0 && player.storage.lol_qishi2.contains(event.player);
				},
				content: function () {
					trigger.num--;
					player.damage(1, trigger.source);
				},
			},
			"lol_lvdun2": {
				forced: true,
				trigger: {
					global: "damageBegin1",
				},
				marktext: "律",
				intro: {
					name: "律顿",
					content: "当$受到伤害时，其受到伤害时伤害-1，然后你受到同伤害来源一点伤害",
				},
				filter: function (event, player) {
					return event.num > 0 && (player.storage.lol_lvdun2.contains(event.player) || player.storage.lol_lvdun2.contains(event.source));
				},
				content: function () {
					if (player.storage.lol_lvdun2.contains(trigger.player)) {
						trigger.num--;
						player.damage(1, trigger.source);
					}
					if (player.storage.lol_lvdun2.contains(trigger.source)) {
						player.draw()
					}
				},
			},
			"lol_qishi3": {
				equipSkill: true,
				trigger: {
					player: "damageBegin4",
				},
				forced: true,
				audio: "lol_qishi",
				filter: function (event, player) {
					if (event.num <= 1) return false;
					if (player.hasSkillTag("unequip2")) return false;
					if (event.source && event.source.hasSkillTag("unequip", false, {
						name: event.card ? event.card.name : null,
						target: player,
						card: event.card
					})) return false;
					return true;
				},
				content: function () {
					trigger.num = 1;
				},
				ai: {
					filterDamage: true,
					skillTagFilter: function (player, tag, arg) {
						if (player.hasSkillTag("unequip2")) return false;
						if (arg && arg.player) {
							if (arg.player.hasSkillTag("unequip", false, {
								name: arg.card ? arg.card.name : null,
								target: player,
								card: arg.card,
							})) return false;
							if (arg.player.hasSkillTag("unequip_ai", false, {
								name: arg.card ? arg.card.name : null,
								target: player,
								card: arg.card,
							})) return false;
							if (arg.player.hasSkillTag("jueqing", false, player)) return false;
						}
					},
				},
			},
			"lol_ziran": {
				audio: "ext:英雄联盟扩展/卡牌音效:1",
				trigger: {
					player: "damageBegin4",
				},
				forced: true,
				filter: function (event, player) {
					return event.nature
				},
				content: function () {
					trigger.cancel();
				},
				ai: {
					nofire: true,
					nothunder: true,
				},
			},
			"lol_lindong": {
				audio: "ext:英雄联盟扩展/卡牌音效:1",
				trigger: {
					player: "damageBegin4",
				},
				forced: true,
				filter: function (event, player) {
					return event.nature
				},
				content: function () {
					trigger.cancel();
					var i = game.createCard("lolkz_hudun", [lib.suit].randomGet());
					player.addJudge(i);
				},
				ai: {
					nofire: true,
					nothunder: true,
				},
			},
			"lol_jinji": {
				audio: "ext:英雄联盟扩展/卡牌音效:1",
				trigger: {
					player: "damageEnd",
				},
				filter: function (event, player) {
					return (event.source != undefined && event.num > 0);
				},
				check: function (event, player) {
					return (get.attitude(player, event.source) <= 0);
				},
				logTarget: "source",
				preHidden: true,
				content: function () {
					"step 0"
					event.num = trigger.num;
					"step 1"
					player.judge(function (card) {
						if (get.color(card) == "red") return 1;
						return 0;
					});
					"step 2"
					if (result.color == "black") {
						if (trigger.source.countCards("he")) {
							player.discardPlayerCard(trigger.source, "he", true);
						}
					} else if (trigger.source.isIn()) {
						trigger.source.damage();
					}
					event.num--;
					if (event.num > 0) {
						player.chooseBool(get.prompt2("reganglie"));
					} else {
						event.finish();
					}
					"step 3"
					if (result.bool) {
						player.logSkill("lol_jinji", trigger.source);
						event.goto(1);
					}
				},
				ai: {
					"maixie_defend": true,
					expose: 0.4,
				},
			},
			"lol_rejinji": {
				trigger: {
					player: "damageEnd",
				},
				audio: "ext:英雄联盟扩展/卡牌音效:1",
				filter: function (event, player) {
					return (event.source != undefined && event.num > 0);
				},
				check: function (event, player) {
					return (get.attitude(player, event.source) <= 0);
				},
				logTarget: "source",
				preHidden: true,
				content: function () {
					"step 0"
					event.num = trigger.num;
					trigger.source.addTempSkill("lol_unrecover")
					"step 1"
					player.judge(function (card) {
						if (get.color(card) == "red") return 1;
						return 0;
					});
					"step 2"
					if (result.color == "black") {
						if (trigger.source.countCards("he")) {
							player.discardPlayerCard(trigger.source, "he", true);
						}
					} else if (trigger.source.isIn()) {
						trigger.source.damage();
					}
					event.num--;
					if (event.num > 0) {
						player.chooseBool(get.prompt2("reganglie"));
					} else {
						event.finish();
					}
					"step 3"
					if (result.bool) {
						player.logSkill("lol_rejinji", trigger.source);
						event.goto(1);
					}
				},
				ai: {
					"maixie_defend": true,
					expose: 0.4,
				},
			},
			"lol_ludeng": {
				trigger: {
					source: "damageAfter",
				},
				audio: "ext:英雄联盟扩展/卡牌音效:1",
				filter: function (event, player) {
					return event.nature && !player.hasSkill("lol_ludeng2")
				},
				forced: true,
				content: function () {
					player.draw();
					player.addTempSkill("lol_ludeng2")
				},
			},
			"lol_reludeng": {
				trigger: {
					source: "damageAfter",
				},
				audio: "ext:英雄联盟扩展/卡牌音效:1",
				filter: function (event, player) {
					return event.nature && !player.hasSkill("lol_ludeng2")
				},
				forced: true,
				content: function () {
					"step 0"
					player.draw();
					player.addTempSkill("lol_ludeng2")
					player.chooseTarget(function (card, player, target) {
						return !_status.event.sourcex.contains(target) && get.distance(player, target) <= 1;
					}).set("sourcex", trigger.targets).set("ai", function (target) {
						var player = _status.event.player;
						return -get.attitude(player, target);
					})
					"step 1"
					if (result.targets) {
						result.targets[0].damage(1, trigger.nature)
					}
				},
			},
			"lol_ludeng2": {
			},
			"lol_kuangzhanshi": {
				mod: {
					cardUsable: function (card, player, num) {
						if (card.name == "sha") return num + 1;
					},
				},
			},
			"lol_shuiyin": {
				trigger: {
					player: "phaseJudgeBefore",
				},
				filter: function (event, player) {
					return player.countCards("he") > 1;
				},
				direct: true,
				frequent: true,
				content: function () {
					"step 0"
					if (player.countCards("j") == 0 && !event.isOnline() && (!event.isMine() || !lib.config.autoskilllist.contains("qiaobian1"))) {
						event.finish();
					} else {
						let next = player.chooseToDiscard(2, "he", "弃置2张手牌并跳过判定阶段");
						next.set("ai", get.unuseful2);
					}
					"step 1"
					if (result.bool) {
						trigger.cancel();
					}
				},
			},
			"lol_yongjin": {
				audio: "ext:英雄联盟扩展/锐雯:5",
				group: "lol_yongjin_1",
				trigger: {
					player: "useCard",
				},
				filter: function (event, player) {
					return event.card.name == "sha"
				},
				content: function () {
					"step 0"
					if (!player.hasSkill("lol_yongjin2")) player.addTempSkill("lol_yongjin2")
					player.storage.lol_yongjin++
					player.chooseTarget(function (card, player, target) {
						return player.canCompare(target) && get.distance(player, target) <= 1
					})
					"step 1"
					if (result.targets) {
						event.target = result.targets[0]
						player.chooseToCompare(event.target)
					} else {
						event.finish()
					}
					"step 2"
					if (result.bool) {
						event.target.damage()
					} else {
						player.storage.lol_yongjin_1++
					}
				},
				subSkill: {
					"1": {
						init: function (player) {
							player.storage.lol_yongjin_1 = 0
						},
						trigger: {
							global: "phaseAfter",
						},
						forced: true,
						silent: true,
						content: function () {
							player.storage.lol_yongjin_1 = 0
							player.storage.lol_yongjin = 0
						},
						sub: true,
						popup: false,
					},
				},
			},
			"lol_yongjin2": {
				mod: {
					globalFrom: function (from, to, current, storage) {
						return current - Math.max(0, from.storage.lol_yongjin)
					},
					cardUsable: function (card, player, num, storage) {
						if (card.name == "sha") return num + player.storage.lol_yongjin_1
					},
				},
				init: function (player) {
					player.storage.lol_yongjin = 0
				},
			},
			"lol_zhuren": {
				group: ["lol_zhuren_1", "lol_zhuren_2", "lol_zhuren_3"],
				derivation: ["lol_zheyi", "lol_duanjian"],
				forced: true,
				dutySkill: true,
				init: function (player) {
					player.addMark("lol_zhuren_3", 1)
				},
				subSkill: {
					"1": {
						trigger: {
							target: ["chooseToCompareAfter"],
						},
						direct: true,
						filter: function (event, player) {
							if (event.target != player) return false
							if (event.preserve) return false
							return [event.card1, event.card2].filter(function (card) {
								return get.position(card, true) == "o"
							}).length > 0 && event.num1 <= event.num2
						},
						content: function () {
							player.addMark("lol_zhuren_3", 1)
							game.playAudio("..", "extension", "英雄联盟扩展", "锐雯", ["hddj1.mp3", "hddj2.mp3", "hddj3.mp3", "hddj4.mp3"].randomGet());
							if (player.countMark("lol_zhuren_3") >= 4) {
								player.awakenSkill("lol_zhuren")
								game.playAudio("..", "extension", "英雄联盟扩展", "锐雯", ["smcg1.mp3", "smcg2.mp3", "smcg3.mp3", "smcg4.mp3"].randomGet());
								game.log(player, "使命成功");
								player.addSkillLog("lol_zheyi")
								player.removeMark("lol_zhuren_3", 99)
							}
						},
						sub: true,
					},
					"2": {
						trigger: {
							player: ["chooseToCompareAfter"],
						},
						direct: true,
						audio: "hanzhan",
						filter: function (event, player) {
							if (event.preserve) return false;
							return [event.card1, event.card2].filter(function (card) {
								return get.position(card, true) == "o";
							}).length > 0 && event.num1 > event.num2
						},
						content: function () {
							player.addMark("lol_zhuren_3", 1)
							game.playAudio("..", "extension", "英雄联盟扩展", "锐雯", ["hddj1.mp3", "hddj2.mp3", "hddj3.mp3", "hddj4.mp3"].randomGet());
							if (player.countMark("lol_zhuren_3") >= 4) {
								player.awakenSkill("lol_zhuren")
								game.playAudio("..", "extension", "英雄联盟扩展", "锐雯", ["smcg1.mp3", "smcg2.mp3", "smcg3.mp3", "smcg4.mp3"].randomGet());
								game.log(player, "使命成功");
								player.addSkillLog("lol_zheyi")
								player.removeMark("lol_zhuren_3", 99)
							}
						},
						sub: true,
					},
					"3": {
						trigger: {
							player: "dying",
						},
						direct: true,
						filter: function (event, player) {
							return !player.awakenedSkills.contains("lol_zhuren")
						},
						mark: true,
						marktext: "断剑",
						intro: {
							"name2": "断剑",
							content: "mark",
						},
						content: function () {
							"step 0"
							player.loseMaxHp()
							player.changeGroup("lolai");
							player.removeSkill("lol_zhuren")
							game.playAudio("..", "extension", "英雄联盟扩展", "锐雯", ["smsb1.mp3", "smsb2.mp3", "smsb3.mp3", "smsb4.mp3"].randomGet());
							game.log(player, "使命失败");
							// player.addSkill("lol_zhuren_3")
							num = player.countMark("lol_zhuren_3")
							player.chooseTarget(get.prompt("lol_zhuren"), [1, num], function (card, player, target) {
								return target.isAlive()
							}).set("ai", function (target) {
								var player = _status.event.player;
								if (target == player) return 2;
								if (get.attitude(player, target) <= 0) {
									return 1
								}
								return 0.5;
							})
							"step 1"
							if (result.bool) {
								for (var i = 0; i < result.targets.length; i++) {
									result.targets[i].damage()
								}
							}
							player.removeSkill("lol_yongjin")
							player.addSkillLog("lol_duanjian")
							player.addSkill("lol_zhuren2")
						},
						sub: true,
					},
				},
			},
			"lol_zhuren2": {
				group: ["lol_zhuren2_1", "lol_zhuren2_2"],
				derivation: ["lol_zheyi", "lol_duanjian"],
				forced: true,
				dutySkill: true,
				subSkill: {
					"1": {
						trigger: {
							target: ["chooseToCompareAfter"],
						},
						direct: true,
						filter: function (event, player) {
							if (event.target != player) return false
							if (event.preserve) return false
							return [event.card1, event.card2].filter(function (card) {
								return get.position(card, true) == "o"
							}).length > 0 && event.num1 <= event.num2
						},
						content: function () {
							player.addMark("lol_zhuren_3", 1)
							game.playAudio("..", "extension", "英雄联盟扩展", "锐雯", ["hddj1.mp3", "hddj2.mp3", "hddj3.mp3", "hddj4.mp3"].randomGet());
							if (player.countMark("lol_zhuren_3") >= 4) {
								player.awakenSkill("lol_zhuren2")
								game.playAudio("..", "extension", "英雄联盟扩展", "锐雯", ["smcg1.mp3", "smcg2.mp3", "smcg3.mp3", "smcg4.mp3"].randomGet());
								game.log(player, "使命成功");
								player.addSkillLog("lol_zheyi")
								player.addSkillLog("lol_yongjin")
								player.removeMark("lol_zhuren_3", 99)
							}
						},
						sub: true,
					},
					"2": {
						trigger: {
							player: ["chooseToCompareAfter"],
						},
						direct: true,
						audio: "hanzhan",
						filter: function (event, player) {
							if (event.preserve) return false;
							return [event.card1, event.card2].filter(function (card) {
								return get.position(card, true) == "o";
							}).length > 0 && event.num1 > event.num2
						},
						content: function () {
							player.addMark("lol_zhuren_3", 1)
							game.playAudio("..", "extension", "英雄联盟扩展", "锐雯", ["hddj1.mp3", "hddj2.mp3", "hddj3.mp3", "hddj4.mp3"].randomGet());
							if (player.countMark("lol_zhuren_3") >= 4) {
								player.awakenSkill("lol_zhuren2")
								game.playAudio("..", "extension", "英雄联盟扩展", "锐雯", ["smcg1.mp3", "smcg2.mp3", "smcg3.mp3", "smcg4.mp3"].randomGet());
								game.log(player, "使命成功");
								player.addSkillLog("lol_zheyi")
								player.removeMark("lol_zhuren_3", 99)
							}
						},
						sub: true,
					},
				},
			},
			"lol_zheyi": {
				mod: {
					selectTarget: function (card, player, range) {
						num = player.maxHp - player.hp
						if (range[1] == -1) return;
						if (card.name == "sha") range[1] += num
					},
				},
				trigger: {
					player: "damageBegin2",
				},
				forced: true,
				content: function () {
					if (player.num("h") > 0) {
						trigger.cancel()
						player.loseHp(trigger.num)
					} else {
						player.draw(player.maxHp)
					}
				},
			},
			"lol_duanjian": {
				group: "lol_duanjian_3",
				filter: function (event, player) {
					return player.countMark("lol_zhuren_3") > 0
				},
				enable: "phaseUse",
				usable: 1,
				content: function () {
					"step 0"
					game.playAudio("..", "extension", "英雄联盟扩展", "锐雯", ["qzdj1.mp3", "qzdj2.mp3", "qzdj3.mp3", "qzdj4.mp3"].randomGet());
					player.removeMark("lol_zhuren_3")
					"step 1"
					player.logSkill("lol_yongjin")
					if (!player.hasSkill("lol_yongjin2")) player.addTempSkill("lol_yongjin2")
					player.storage.lol_yongjin++
					player.chooseTarget(function (card, player, target) {
						return player.canCompare(target) && get.distance(player, target) <= 1
					})
					"step 2"
					if (result.targets) {
						event.target = result.targets[0]
						player.chooseToCompare(event.target)
					} else {
						event.finish()
					}
					"step 3"
					if (result.bool) {
						event.target.damage()
					} else {
						player.storage.lol_yongjin_1++
					}
				},
				subSkill: {
					"1": {
						trigger: {
							target: "useCardToPlayered",
						},
						filter: function (event, player) {
							return event.player.num("h") > 0 && event.target.num("h") > 0 && player.canCompare(event.player)
						},
						content: function () {
							"step 0"
							player.chooseToCompare(trigger.player)
							"step 1"
							if (result.bool) {
								var list = [];
								storage = player.getStorage("lol_duanjian_2");
								if (!storage.contains("sha")) {
									list.push(["基本", "", "sha"]);

									for (var i of lib.inpile_nature) {

										list.push(["基本", "", "sha", i]);

									}
								}
								if (lib.filter.cardUsable({
									name: "tao"
								}, player, event.getParent("chooseToUse")) && !storage.contains("tao") && game.hasPlayer(function (current) {
									return player.canUse("tao", current);
								})) {
									list.push(["基本", "", "tao"]);
								}
								if (lib.filter.cardUsable({
									name: "jiu"
								}, player, event.getParent("chooseToUse")) && !storage.contains("jiu") && game.hasPlayer(function (current) {
									return player.canUse("jiu", current);
								})) {
									list.push(["基本", "", "jiu"]);
								}
								if (list.length) {
									player.chooseButton(["是否视为使用一张基本牌？", [list, "vcard"]]).set("ai", function (button) {
										var player = _status.event.player;
										var card = {
											name: button.link[2],
											nature: button.link[3]
										};
										if (card.name == "tao") {
											if (player.hp == 1 || (player.hp == 2 && !player.hasShan()) || player.needsToDiscard()) {
												return 5;
											}
											return 1;
										}
										if (card.name == "sha") {

											if (game.hasPlayer(function (current) {
												return player.canUse(card, current) && get.effect(current, card, player, player) > 0
											})) {
												if (card.nature == "fire") return 2.95;
												if (card.nature == "thunder" || card.nature == "ice") return 2.92;
												return 2.9;
											}
											return 0;
										}
										if (card.name == "jiu") {
											return 0.5;
										}
										return 0;
									});
								} else {
									event.finish();
								}

							}

							"step 2"
							if (result && result.bool && result.links[0]) {
								var card = {
									name: result.links[0][2],
									nature: result.links[0][3]
								};
								player.chooseUseTarget(card, true);
								if (!player.storage.lol_duanjian_2) player.storage.lol_duanjian_2 = [];
								player.storage.lol_duanjian_2.add(links.card.name);

								player.addTempSkill("lol_duanjian_2")
							}
						},
						sub: true,
					},
					"2": {
						onremove: true,
						sun: true,
						sub: true,
					},
					"3": {
						trigger: {
							player: ["chooseToCompareAfter", "compareMultipleAfter"],
							target: ["chooseToCompareAfter", "compareMultipleAfter"],
						},
						forced: true,
						filter: function (event, player) {
							if (event.preserve) return false;
							if (player == event.player) {
								if (event.num1 > event.num2) {
									return !get.owner(event.card1);
								} else {
									return !get.owner(event.card2);
								}
							} else {
								if (event.num1 < event.num2) {
									return !get.owner(event.card2);
								} else {
									return !get.owner(event.card1);
								}
							}
						},
						content: function () {
							player.draw()
						},
						sub: true,
					},
				},
			},
			"lolkz_fensheng": {
				group: ["lolkz_fensheng_a", "lolkz_fensheng_b"],
				audio: "ext:英雄联盟扩展/扎克:2",
				trigger: {
					player: "damageAfter",
				},
				filter: function (event, player) {
					return player.maxHp > 0 && event.source;
				},
				check: function (event, player) {
					if (player.hp == player.maxHp) return false;
					return (get.attitude(player, event.source) <= 0);
				},
				content: function () {
					player.loseMaxHp();
					trigger.source.addMark("lolkz_fensheng_xibao")
				},
				subSkill: {
					a: {
						trigger: {
							source: "damageAfter",
						},
						audio: "lolkz_fenshen",
						check: function (event, player) {
							return player.maxHp > 1;
						},
						content: function () {
							"step 0"
							{
								player.loseMaxHp();
								let current = trigger.player.previous;
								current.addMark("lolkz_fensheng_xibao");
							}
							"step 1"
							{
								let current = trigger.player.next;
								current.addMark("lolkz_fensheng_xibao");
							}
						},
						sub: true,
					},
					b: {
						trigger: {
							player: "damageBegin4",
						},
						audio: "lolkz_fenshen",
						filter: function (event, player) {
							return player.maxHp > 0;
						},
						direct: true,
						content: function () {
							"step 0"
							var list = ["cancel2"];
							for (var i = 1; i <= trigger.num; i++) {
								list.push(i);
							}
							player.chooseControl(list).set("prompt", "选择失去任意体力上限并减少等量伤害")
							"step 1"
							if (result.control != "cancel2") {
								player.logSkill("lolkz_fensheng")
								player.loseMaxHp(result.control);
								trigger.num -= result.control
							}
						},
						sub: true,
					},
				},
			},
			"lolkz_fensheng_xibao": {
				mark: true,
				marktext: "细胞",
				intro: {
					name: "细胞",
					content: "mark",
				},
			},
			"lolkz_zaigou": {
				audio: "ext:英雄联盟扩展/扎克:2",
				group: ["lolkz_zaigou_dying", "lolkz_zaigou_draw"],
				trigger: {
					player: "useCardToPlayered",
					target: "useCardToTargeted",
				},
				mod: {
					cardUsableTarget: function (card, player, target) {
						if (target.hasMark("lolkz_fensheng_xibao")) return true;
					},
					globalFrom: function (from, to) {
						if (to.hasMark("lolkz_fensheng_xibao")) return -Infinity;
					},
				},
				filter: function (event, player) {
					if (event.target == player) return event.player.countMark("lolkz_fensheng_xibao") > 0;
					else return event.target.countMark("lolkz_fensheng_xibao") > 0;
				},
				forced: true,
				content: function () {
					player.link(true)
					if (trigger.target == player) {
						var num = trigger.player.countMark("lolkz_fensheng_xibao");
						trigger.player.removeMark("lolkz_fensheng_xibao", num);
						player.gainMaxHp(num);
						player.recover(num);
					} else {
						var num = trigger.target.countMark("lolkz_fensheng_xibao");
						trigger.target.removeMark("lolkz_fensheng_xibao", num);
						player.gainMaxHp(num);
						player.recover(num);
						if (trigger.card.name == "sha") {
							trigger.player.getStat().card.sha--;
						}
					}
				},
				subSkill: {
					dying: {
						audio: "ext:英雄联盟扩展/扎克:2",
						trigger: {
							player: "dying",
						},
						forced: true,
						filter: function (event, player) {
							return game.hasPlayer(function (current) {
								return current.countMark("lolkz_fensheng_xibao") > 0;
							})
						},
						content: function () {
							"step 0"
							var num = 0;
							var players = game.filterPlayer(function (current) {
								return current.countMark("lolkz_fensheng_xibao") > 0;
							})
							for (var i of players) {
								var num0 = i.countMark("lolkz_fensheng_xibao") > 0;
								i.removeMark("lolkz_fensheng_xibao", num0);
								num += num0;
							}
							var num1 = num - player.maxHp
							player.gainMaxHp(num1);
							"step 1"
							player.recover(player.maxHp - player.hp);
						},
						sub: true,
					},
					draw: {
						audio: "lolkz_zaigou",
						trigger: {
							player: ["loseMaxHpAfter", "gainMaxHpAfter"],
						},
						forced: true,
						filter: function (event, player) {
							return event.num > 0 && player.isAlive()
						},
						content: function () {
							player.draw(trigger.num)
						},
						sub: true,
					},
				},
			},
			"lolkz_rongzhu": {
				audio: "ext:英雄联盟扩展/卑尔维斯:4",
				trigger: {
					player: "loseAfter",
				},
				filter: function (event, player) {
					if (event.type != "discard") return false;
					return true;
				},
				forced: true,
				content: function () {
					"step 0"
					var cards = trigger.cards2;
					player.loseToSpecial(cards, "lolkz_rongzhu");
					"step 1"
					player.markSkill("lolkz_rongzhu");
					"step 2"
					var num = 0;
					var players = game.filterPlayer(function (current) {
						return current.getExpansions("lolkz_rongzhu2") && current.getExpansions("lolkz_rongzhu2").length > 0
					})
					for (var i of players) {
						var num0 = i.getExpansions("lolkz_rongzhu2").length;
						num += num0;
					}
					player.maxHp = 3 + num;
					player.update();
				},
				marktext: "鱼",
				intro: {
					mark: function (dialog, storage, player) {
						dialog.addAuto(player.getCards("s", function (card) {
							return card.hasGaintag("lolkz_rongzhu");
						}));
					},
					markcount: function (storage, player) {
						return player.getCards("s", function (card) {
							return card.hasGaintag("lolkz_rongzhu");
						}).length;
					},
					onunmark: function (storage, player) {
						var cards = player.getCards("s", function (card) {
							return card.hasGaintag("lolkz_rongzhu");
						});
						if (cards.length) {
							player.lose(cards, ui.discardPile);
							player.$throw(cards, 1000);
							game.log(cards, "进入了弃牌堆");
						}
					},
				},
				mod: {
					aiOrder: function (player, card, num) {
						if (get.itemtype(card) == "card" && card.hasGaintag("lolkz_rongzhu")) return num + 0.5;
					},
				},
				group: "lolkz_rongzhu_use",
				subSkill: {
					use: {
						trigger: {
							global: "die",
						},
						forced: true,
						forceDie: true,
						content: function () {
							var num = 0;
							var players = game.filterPlayer(function (current) {
								return current.getExpansions("lolkz_rongzhu2") && current.getExpansions("lolkz_rongzhu2").length > 0
							})
							for (var i of players) {
								var num0 = i.getExpansions("lolkz_rongzhu2").length;
								num += num0;
							}
							player.maxHp = 3 + num;
							player.update();
						},
						sub: true,
					},
				},
			},
			"lolkz_rongzhu2": {
				trigger: {
					player: "changeHp",
				},
				mark: true,
				intro: {
					markcount: "expansion",
					mark: function (dialog, storage, player) {
						var cards = player.getExpansions("lolkz_rongzhu2");
						if (player.isUnderControl(true)) dialog.addAuto(cards);
						else return "共有" + get.cnNumber(cards.length) + "张牌,真实生命值" + player.storage.trueHP;
					},
				},
				nopop: true,
				popup: false,
				forced: true,
				content: function () {
					"step 0"
					player.storage.trueHP += trigger.num;
					if (player.storage.trueHP <= 0) {
						game.log(player, "濒死");
						_status.dying.unshift(player);
						game.broadcast(function (list) {
							_status.dying = list;
						}, _status.dying);
						event.trigger("dying");
					} else {
						event.finish()
					}
					"step 1"
					if (player.storage.trueHP > 0) {
						_status.dying.remove(player);
						game.broadcast(function (list) {
							_status.dying = list;
						}, _status.dying);
						event.finish();
					} else if (!event.skipTao) {
						var next = game.createEvent("_save");
						var start = false;
						var starts = [_status.currentPhase, event.source, event.player, game.me, game.players[0]];
						for (var i = 0; i < starts.length; i++) {
							if (get.itemtype(starts[i]) == "player") {
								start = starts[i];
								break;
							}
						}
						next.player = start;
						next._trigger = event;
						next.triggername = "_save";
						next.forceDie = true;
						next.setContent(lib.skill._save.content);
					}
					"step 2"
					_status.dying.remove(player);
					game.broadcast(function (list) {
						_status.dying = list;
					}, _status.dying);
					if (player.storage.trueHP <= 0) player.die(trigger.source);
				},
			},
			"lolkz_rongzhu3": {
				lastDo: true,
				charlotte: true,
				forceDie: true,
				forced: true,
				silent: true,
				onremove: function (player) {
					if (player == game.me) {
						if (!game.notMe) game.swapPlayerAuto(player._trueMe)
						else delete game.notMe;
						if (_status.auto) ui.click.auto();
					}
					delete player._trueMe;
				},
				popup: false,
			},
			"lolkz_suomian": {
				audio: "ext:英雄联盟扩展/卑尔维斯:4",
				trigger: {
					global: ["damageAfter", "loseHpAfter"],
				},
				filter: function (event, player) {
					return event.player != player && player.inRange(event.player) && player.countCards("s", function (card) {
						return card.hasGaintag("lolkz_rongzhu");
					}) > 0;
				},
				direct: true,
				content: function () {
					"step 0"
					player.chooseCard("s", function (card) {
						return card.hasGaintag("lolkz_rongzhu");
					}).set("prompt", "选择一张牌置于" + get.translation(trigger.player) + "武将牌上")
					"step 1"
					if (result.cards) {
						if (!trigger.player.hasSkill("lolkz_rongzhu2")) trigger.player.addSkill("lolkz_rongzhu2");
						trigger.player.addToExpansion(result.cards, "gain2").gaintag.add("lolkz_rongzhu2");
					} else {
						event.finish();
					}
					"step 2"
					if (!trigger.player.storage.trueHP && trigger.player.storage.trueHP != 0) {
						trigger.player.storage.trueHP = trigger.player.hp;
					}
					"step 3"
					trigger.player.hp = trigger.player.getExpansions("lolkz_rongzhu2").length + trigger.player.storage.trueHP;
					trigger.player.update();
					"step 4"
					var num = 0;
					var players = game.filterPlayer(function (current) {
						return current.getExpansions("lolkz_rongzhu2") && current.getExpansions("lolkz_rongzhu2").length > 0
					})
					for (var i of players) {
						var num0 = i.getExpansions("lolkz_rongzhu2").length;
						num += num0;
					}
					player.maxHp = 3 + num;
					player.update();
					"step 5"
					if (trigger.player.getExpansions("lolkz_rongzhu2").length == trigger.player.maxHp) {
						player.logSkill("lolkz_suomian_kk")
						trigger.player.addSkill("lolkz_rongzhu3");
						trigger.player._trueMe = player;
						game.addGlobalSkill("autoswap");
						if (trigger.player == game.me) {
							game.notMe = true;
							if (!_status.auto) ui.click.auto();
						}
					} else {
						if (trigger.player.hasSkill("lolkz_rongzhu3")) trigger.player.removeSkill("lolkz_rongzhu3");
					}
				},
				group: "lolkz_suomian_d",
				subSkill: {
					d: {
						trigger: {
							player: "damageBegin1",
						},
						direct: true,
						filter: function (event, player) {
							return game.hasPlayer(function (current) {
								return current.getExpansions("lolkz_rongzhu2").length >= event.num;
							})
						},
						content: function () {
							"step 0"
							player.chooseTarget(function (card, player, target) {
								return target.getExpansions("lolkz_rongzhu2").length >= trigger.num;
							}).set("prompt", "选择一个目标将此伤害转移给他")
							"step 1"
							if (result.targets) {
								event.target = result.targets[0];
								trigger.player = event.target;
								event.target.chooseControl("摸牌", "免疫伤害").set("ai", function () {
									if (event.target.hasSkillTag("maixie")) return "摸牌";
									return "免疫伤害"
								}).set("prompt", "免疫此次伤害或摸等量的牌")
							} else {
								event.finish();
							}
							"step 2"
							if (result.control == "摸牌") {
								event.target.draw(trigger.num)
							} else {
								trigger.cancel();
							}
							"step 3"
							var cards = event.target.getExpansions("lolkz_rongzhu2");
							var dialog = ui.create.dialog("", "hidden");
							dialog.add([cards, "vcard"]);
							event.target.chooseButton(dialog, trigger.num, true);
							"step 4"
							event.cards = result.links;
							event.target.loseToDiscardpile(event.cards);
							"step 5"
							var num = 0;
							var players = game.filterPlayer(function (current) {
								return current.getExpansions("lolkz_rongzhu2") && current.getExpansions("lolkz_rongzhu2").length > 0
							})
							for (var i of players) {
								var num0 = i.getExpansions("lolkz_rongzhu2").length;
								num += num0;
							}
							player.maxHp = 3 + num;
							player.update();
						},
						sub: true,
					},
				},
			},
			"lolkz_suomian_kk": {
				audio: "ext:英雄联盟扩展/卑尔维斯:4",
			},
			"lolkz_jinhuang": {
				trigger: {
					global: ["gainMaxHpAfter", "loseMaxHpAfter"],
				},
				audio: "ext:英雄联盟扩展/卑尔维斯:5",
				filter: function (event, player) {
					return event.player.group == "lolxu" && event.player != player
				},
				content: function () {
					"step 0"
					vent.cards = get.cards(trigger.num);
					game.cardsGotoOrdering(event.cards);
					event.videoId = lib.status.videoId++;
					game.broadcastAll(function (player, id, cards) {
						var str;
						if (player == game.me && !_status.auto) {
							str = "";
						} else {
							str = "";
						}
						var dialog = ui.create.dialog(str, cards);
						dialog.videoId = id;
					}, player, event.videoId, event.cards);
					event.time = get.utc();
					game.addVideo("showCards", player, ["", get.cardsInfo(event.cards)]);
					game.addVideo("delay", null, 2);
					"step 1"
					var next = player.chooseButton([0, 5], true);
					next.set("dialog", event.videoId);
					next.set("filterButton", function (button) {
						for (var i = 0; i < ui.selected.buttons.length; i++) {
							if (get.suit(ui.selected.buttons[i].link) == get.suit(button.link)) return false;
						}
						return true;
					});
					next.set("ai", function (button) {
						return get.value(button.link, _status.event.player);
					});
					"step 2"
					if (result.bool && result.links) {
						event.cards2 = result.links;
					} else {
						event.finish();
					}
					var time = 1000 - (get.utc() - event.time);
					if (time > 0) {
						game.delay(0, time);
					}
					"step 3"
					game.broadcastAll("closeDialog", event.videoId);
					var cards2 = event.cards2;
					player.loseToSpecial(cards2, "lolkz_rongzhu");
					"step 4"
					var num = player.countCards("s", function (card) {
						return card.hasGaintag("lolkz_rongzhu");
					});
					var players = game.filterPlayer(function (current) {
						return current.getExpansions("lolkz_rongzhu2") && current.getExpansions("lolkz_rongzhu2").length > 0
					})
					for (var i of players) {
						var num0 = i.getExpansions("lolkz_rongzhu2").length;
						num += num0;
					}
					player.maxHp = 3 + num;
					player.update();
				},
			},
			"lol_jiaoxiang": {
				mark: true,
				marktext: "交响",
				intro: {
					content: function (event, player) {
						var str = "当前技能效果：";
						if (player.hasSkill("lol_pengpeng")) str += "砰砰<br>锁定：<br>你的【杀】无距离、距离限制，当你使用【杀】指定一个目标时，你摸一张牌然后直至出牌阶段结束时你的攻击距离+1。<br>主动：<br>你可以将此效果切换至其他效果。";
						if (player.hasSkill("lol_honghong")) str += "轰轰<br>锁定：<br>你的【<font color=#ff0033>火杀</font>】伤害+其已损体力值；<br>主动：<br>你可以弃置所有手牌，然后指定至多X名角色，依次弃置其各一张牌并视为对这些角色使用一张【<font color=#ff0033>火杀</font>】（X为你以此法弃置牌数）然后将此效果切换至「砰砰」。";
						if (player.hasSkill("lol_zizi")) str += "滋滋<br><br>你的【<font color=#0000CD>雷杀</font>】不能被响应或抵消；<br>主动：<br>你可以视为对一名角色使用一张无视距离的【<font color=#0000CD>雷杀</font>】，然后：<br>①若其在你的攻击范围内，你摸Y张牌；<br>②若其不在你的攻击范围内，你弃置Y张牌（不足则全弃）；<br>（Y为你至目标距离与你攻击范围的差值）然后你将此效果切换至「砰砰」。";
						return str;
					},
				},
				group: "lol_jiaoxiang_enable",
				subSkill: {
					enable: {
						audio: "ext:英雄联盟扩展/金克丝:6",
						enable: "phaseUse",
						usable: 1,
						filter: function (event, player) {
							return !player.hasSkill("lol_pengpeng2")
						},
						content: function () {
							"step 0"
							var list = [];
							if (!player.hasSkill("lol_pengpeng")) list.add("砰砰");
							if (!player.hasSkill("lol_zizi")) list.add("滋滋");
							if (!player.hasSkill("lol_honghong")) list.add("轰轰");
							player.chooseControl(list).set("dialog", ["请选择要替换的效果"]).set("ai", function () {
								if (player.countCards("h") < 3) return 1;
								return 0
							});
							"step 1"
							player.addTempSkill("lol_pengpeng2")
							if (result.control == "轰轰") {
								player.popup("轰轰");
								player.removeSkill("lol_pengpeng");
								player.removeSkill("lol_zizi");
								player.addSkill("lol_honghong");
							} else if (result.control == "滋滋") {
								player.popup("滋滋");
								player.removeSkill("lol_pengpeng");
								player.removeSkill("lol_honghong");
								player.addSkill("lol_zizi");
							} else {
								player.popup("砰砰");
								player.removeSkill("lol_zizi");
								player.removeSkill("lol_honghong");
								player.addSkill("lol_pengpeng");
							}
							"step 2"
							if (player.hasSkill("lol_honghong") && player.countCards("h") > 0) {
								player.logSkill("lol_honghong_enable");
								player.chooseTarget("选择至多" + player.countCards("h") + "名角色发动技能【轰轰】", [1, player.countCards("h")], function (card, player, target) {
									return target != player
								})
							} else if (player.hasSkill("lol_zizi")) {
								player.logSkill("lol_zizi_enable");
								player.chooseTarget("选择一名角色视为对其使用【雷杀】", 1, function (card, player, target) {
									return target != player
								})
							} else {
								event.finish()
							}
							"step 3"
							if (player.hasSkill("lol_honghong") && result.targets) {
								var cards = player.getCards("h");
								player.discard(cards);
								game.log(player, "", "#g【" + get.translation(result.targets) + "】");
								event.targets = result.targets
							} else if (player.hasSkill("lol_zizi") && result.targets) {
								player.useCard({
									name: "sha",
									nature: "thunder"
								}, result.targets[0], false);
								event.target = result.targets[0]
							} else {
								event.finish()
							}
							"step 4"
							if (player.hasSkill("lol_honghong")) {
								for (i = 0; i < event.targets.length; i++) {
									player.discardPlayerCard(true, event.targets[i], "he");
								}
							} else if (player.hasSkill("lol_zizi")) {
								if (player.inRange(event.target)) {
									var num = player.getAttackRange() - get.distance(player, event.target);
									player.draw(num)
								} else {
									var num = get.distance(player, event.target) - player.getAttackRange();
									player.chooseToDiscard("he", num, true);
								}
							}
							"step 5"
							if (player.hasSkill("lol_honghong")) {
								player.useCard({
									name: "sha",
									nature: "fire"
								}, event.targets, false);
							}
						},
						sub: true,
					},
				},
			},
			"lol_pengpeng": {
				marktext: "砰砰",
				intro: {
					content: "",
				},
				mod: {
					cardUsable: function (card, player, num) {
						if (card.name == "sha") return Infinity;
					},
					targetInRange: function (card) {
						if (card.name == "sha") return true;
					},
				},
				forced: true,
				charlotte: true,
				audio: "ext:英雄联盟扩展/金克丝:6",
				shaRelated: true,
				trigger: {
					player: "useCardToPlayered",
				},
				check: function (event, player) {
					return get.attitude(player, event.target) <= 0;
				},
				filter: function (event, player) {
					return event.card.name == "sha";
				},
				preHidden: true,
				content: function () {
					player.draw();
					player.addSkill("lol_pengpeng_effect");
					player.addMark("lol_pengpeng_effect", 1, false);
				},
				subSkill: {
					effect: {
						direct: true,
						charlotte: true,
						onremove: true,
						mod: {
							attackRange: function (player, num) {
								return num + player.countMark("lol_pengpeng_effect");
							},
						},
						marktext: "砰砰",
						intro: {
							content: "攻击范围+#",
						},
						trigger: {
							global: "phaseUseEnd",
						},
						content: function () {
							player.removeMark("lol_pengpeng_effect", Infinity, false);
							player.removeSkill("lol_pengpeng_effect");
						},
						sub: true,
					},
				},
			},
			"lol_pengpeng2": {
			},
			"lol_honghong": {
				marktext: "轰轰",
				intro: {
					content: "",
				},
				direct: true,
				trigger: {
					source: "damageBegin1",
				},
				shaRelated: true,
				forced: true,
				charlotte: true,
				filter: function (event, player) {
					return event.cards && event.card.name == "sha" && event.card.nature == "fire";
				},
				content: function () {
					trigger.num += trigger.player.getDamagedHp();
				},
				subSkill: {
					enable: {
						audio: "ext:英雄联盟扩展/金克丝:6",
						marktext: "轰轰",
						intro: {
							content: "",
						},
						enable: "phaseUse",
						usable: 1,
						filterTarget: function (card, player, target) {
							return target != player;
						},
						filter: function (event, player) {
							return player.countCards("h") && !player.hasSkill("lol_pengpeng2");
						},
						selectTarget: function (card, player, target) {
							return [1, _status.event.player.countCards("h")];
						},
						content: function () {
							"step 0"
							var cards = player.getCards("h");
							player.discard(cards);
							game.log(player, "", "#g【" + get.translation(targets) + "】");
							"step 1"
							for (i = 0; i < targets.length; i++) {
								player.discardPlayerCard(true, targets[i], "he");
							}
							"step 2"
							player.useCard({
								name: "sha",
								nature: "fire"
							}, targets, false);
							player.addTempSkill("lol_honghong_over");
						},
						multitarget: true,
						multiline: true,
						sub: true,
					},
					over: {
						marktext: "轰轰",
						intro: {
							content: "",
						},
						forced: true,
						direct: true,
						trigger: {
							player: "useCardAfter",
						},
						content: function () {
							"step 0"
							player.removeSkill("lol_honghong");
							player.chooseControl("砰砰", "滋滋").set("dialog", ["请选择要替换的效果"]).set("ai", function () {
								if (player.countCards("h") < 3) return 1;
								return 0
							});
							"step 1"
							player.addTempSkill("lol_pengpeng2")
							if (result.control == "砰砰") {
								player.popup("砰砰");
								player.removeSkill("lol_honghong");
								player.addSkill("lol_pengpeng");
							} else {
								player.popup("滋滋");
								player.removeSkill("lol_honghong");
								player.addSkill("lol_zizi");
							}
						},
						sub: true,
					},
				},
			},
			"lol_zizi": {
				marktext: "滋滋",
				intro: {
					content: "",
				},
				direct: true,
				trigger: {
					player: "useCardToPlayered",
				},
				shaRelated: true,
				forced: true,
				charlotte: true,
				logTarget: "target",
				filter: function (event, player) {
					return event.cards && event.card.name == "sha" && event.card.nature == "thunder";
				},
				preHidden: true,
				content: function () {
					trigger.getParent().directHit.push(trigger.target);
				},
				subSkill: {
					enable: {
						audio: "ext:英雄联盟扩展/金克丝:6",
						marktext: "滋滋",
						intro: {
							content: "",
						},
						enable: "phaseUse",
						usable: 1,
						filterTarget: function (card, player, target) {
							return target != player;
						},
						filter: function (event, player) {
							return !player.hasSkill("lol_pengpeng2");
						},
						selectTarget: 1,
						content: function () {
							"step 0"
							player.useCard({
								name: "sha",
								nature: "thunder"
							}, target, false);
							"step 1"
							if (player.inRange(target)) {
								var num = player.getAttackRange() - get.distance(player, target);
								player.draw(num)
							} else {
								var num = get.distance(player, target) - player.getAttackRange();
								player.chooseToDiscard("he", num, true);
							}
							"step 2"
							player.chooseControl("砰砰", "轰轰").set("dialog", ["请选择要替换的效果"]).set("ai", function () {
								if (player.countCards("h") < 3) return 1;
								return 0
							});
							"step 3"
							player.addTempSkill("lol_pengpeng2")
							if (result.control == "轰轰") {
								player.popup("轰轰");
								player.removeSkill("lol_zizi");
								player.addSkill("lol_honghong");
							} else {
								player.popup("砰砰");
								player.removeSkill("lol_pengpeng");
								player.addSkill("lol_honghong");
							}
						},
						sub: true,
					},
				},
			},
			"lol_diyu": {
				trigger: {
					player: "phaseUseBegin",
				},
				forced: true,
				audio: "ext:英雄联盟扩展:2",
				content: function () {
					"step 0"
					player.storage.lol_diyu = 0
					let cards = player.getCards("h")
					player.showCards(cards)
					"step 1"
					player.chooseCardButton("选择一张牌使用", player.getCards("h"), 1, true).set("ai", function (button) {
						var player = _status.event.player;
						var card = button.link;
						if (get.value(card) < 0) return -1;
						if (!game.hasPlayer(function (current) {
							return get.effect(current, card, player, player) > 0;
						})) return -1;
						return get.order(card);
					}).set("filterButton", function (button) {
						var player = _status.event.player;
						var card = button.link;
						return game.hasPlayer(function (current) {
							return player.canUse(card, current, false);
						});
					});
					"step 2"
					if (result.bool) {
						player.storage.lol_diyu++
						if (player.storage.lol_diyu == 4) player.addTempSkill("lol_diyu_use")
						player.chooseUseTarget(result.links[0], "nodistance", true);

					} else event.finish();
					"step 3"
					if (player.countCards("h", function (card) {
						return game.hasPlayer(function (current) {
							return player.canUse(card, current, false);
						});
					}) > 0 && player.storage.lol_diyu < 4) event.goto(1);
					"step 4"
					game.playAudio("..", "extension", "英雄联盟扩展", "over.mp3");
					trigger.cancel();
				},
				subSkill: {
					use: {
						trigger: {
							player: "useCard",
						},
						silent: true,
						filter: function (event, player) {
							return player.storage.lol_diyu == 4
						},
						content: function () {
							trigger.directHit.addArray(game.players)
							player.removeSkill("lol_diyu_use")
						},
						sub: true,
						forced: true,
						popup: false,
					},
				},
			},
			"lol_xiemu": {
				trigger: {
					player: ["phaseDrawBegin", "phaseBegin"],
				},
				audio: "ext:英雄联盟扩展:2",
				forced: true,
				filter: function (event, player) {
					if (event.name == "phaseDraw") return !event.numFixed;
					return true
				},
				content: function () {
					if (event.triggername == "phaseDrawBegin") trigger.num = 4
					else player.storage.lol_xiemu_damage = []
				},
				group: ["lol_xiemu_damage"],
				subSkill: {
					draw: {
						trigger: {
							player: "loseAfter",
							global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
						},
						forced: true,
						filter: function (event, player) {
							if (event.name == "gain" && event.player == player) return player.countCards("h") > 4;
							var evt = event.getl(player);
							if (!evt || !evt.hs || evt.hs.length == 0 || player.countCards("h") >= 4) return false;
							var evt = event;
							for (var i = 0; i < 4; i++) {
								return true;
							}
							return false;
						},
						content: function () {
							var num = 4 - player.countCards("h");
							if (num > 0) player.draw(num);
							else player.chooseToDiscard("h", true, -num);
						},
						sub: true,
					},
					damage: {
						trigger: {
							player: "useCard",
						},
						forced: true,
						silent: true,
						filter: function (event, player) {
							let suit = get.suit(event.card)
							if (player.getStorage("lol_xiemu_damage").contains(suit)) return false
							return _status.currentPhase == player
						},
						content: function () {
							"step 0"
							if (!player.storage.lol_xiemu_damage) player.storage.lol_xiemu_damage = []
							let suit = get.suit(trigger.card)
							if (!player.getStorage("lol_xiemu_damage").contains(suit)) player.storage.lol_xiemu_damage.add(suit)
							else event.finish()
							"step 1"
							if (player.storage.lol_xiemu_damage && player.storage.lol_xiemu_damage.length && player.storage.lol_xiemu_damage.length == 1) {
								game.playAudio("..", "extension", "英雄联盟扩展", "damage_1.mp3");
								if (!trigger.baseDamage) trigger.baseDamage = 1;
								trigger.baseDamage += 1
							}
							if (player.storage.lol_xiemu_damage && player.storage.lol_xiemu_damage.length && player.storage.lol_xiemu_damage.length == 2) {
								game.playAudio("..", "extension", "英雄联盟扩展", "damage_2.mp3");
								if (!trigger.baseDamage) trigger.baseDamage = 1;
								trigger.baseDamage += 1
							}
							if (player.storage.lol_xiemu_damage && player.storage.lol_xiemu_damage.length && player.storage.lol_xiemu_damage.length == 3) {
								game.playAudio("..", "extension", "英雄联盟扩展", "damage_3.mp3");
								if (!trigger.baseDamage) trigger.baseDamage = 1;
								trigger.baseDamage += 1
							}
							if (player.storage.lol_xiemu_damage && player.storage.lol_xiemu_damage.length && player.storage.lol_xiemu_damage.length == 4) {
								if (!trigger.baseDamage) trigger.baseDamage = 1;
								trigger.baseDamage += 1
								game.playAudio("..", "extension", "英雄联盟扩展", "damage_4.mp3");
								player.draw(4)
							}
						},
						sub: true,
						popup: false,
					},
				},
			},
			"lol_qianhun": {
				mark: true,
				onremove: true,
				intro: {
					content: "可声明牌名：$",
				},
				init: function (player) {
					let list = []
					for (var i of lib.inpile) {
						if (player.hasUseTarget(i) && get.type2(i) != "equip" && get.type(i) != "delay") {
							list.push(i);
						}
					}
					player.storage.lol_qianhun = list
				},
				audio: "ext:英雄联盟扩展:3",
				enable: "phaseUse",
				filter: function (event, player) {
					return player.countCards("hes") > 0
				},
				filterTarget: function (card, player, target) {
					return player != target;
				},
				filterCard: true,
				selectTarget: function (card, player, storage) {
					return [1, 3]
				},
				discard: false,
				multiline: true,
				multitarget: true,
				usable: true,
				content: function () {
					"step 0"
					i = 0
					event.card = cards;
					"step 1"
					let list1 = player.getStorage("lol_qianhun");
					if (list1.length) {
						let dialog = [get.prompt("lol_qianhun")]
						dialog.push("<div class=\"text center\">牵魂</div>");
						dialog.push([list1, "vcard"]);
						targets[i].chooseButton(dialog)
					} else {
						if (targets[i].num("he")) targets[i].chooseToDiscard(true, "he")
						event.goto(3)
					}
					"step 2"
					if (result.bool) {
						name = result.links[0][2];
						targets[i].say(get.translation(targets[i]) + "声明了" + get.translation(name))
						player.useCard({
							name: name
						}, targets[i]).animate = false;
						player.storage.lol_qianhun.remove(name)
					}
					"step 3"
					if (i < targets.length - 1) {
						i++
						event.goto(1)
					}
					"step 4"
					player.showCards(event.card)
					event.card = cards[0]
					if (get.type2(event.card) != "equip" && player.hasUseTarget(event.card) && get.type(event.card) != "delay") {
						if (!player.getStorage("lol_qianhun").contains(event.card.name)) {
							player.markAuto("lol_qianhun", [event.card.name])
						}
					}

				},
				ai: {
					order: 7.2,
					result: {
						target: function (player, target) {
							return -1
						},
					},
				},
			},
			"lol_guibian": {
				audio: "ext:英雄联盟扩展:3",
				trigger: {
					global: "useCardToTargeted",
				},
				check: function (event, player) {
					if (get.itemtype(event.cards) != "cards") return false
					if (event.player == player) return false;
					return get.attitude(player, event.player) < 0 || get.tag(event.card, "damage")
				},
				filter: function (event, player) {
					if (player.storage.lol_guibian && player.storage.lol_guibian.contains(event.cards[0])) return false
					return player.num("h") > 0 && event.card.isCard && event.target == player
				},
				content: function () {
					"step 0"
					player.chooseCard("h").set("prompt", "用一张手牌替换" + get.translation(trigger.card)).set("ai", function (card) {
						if (get.tag(card, "damage")) return -1.5
						if (card.name == "shan" || card.name == "tao") return 2
						return 4 - get.value(card);
					});
					"step 1"
					if (result.bool) {

						if (get.itemtype(trigger.cards) == "cards" && get.position(trigger.cards[0], true) == "o") {
							player.gain(trigger.cards, "gain2");
						}
						trigger.targets.remove(player)
						player.storage.lol_guibian = []
						event.card = result.cards[0]
						player.storage.lol_guibian.push(result.cards[0])
						event.card1 = trigger.cards[0]
						if (player.hasUseTarget(event.card) || trigger.player.hasUseTarget(event.card) || trigger.player.canUse(event.card, player)) trigger.player.useCard(event.card, player)
						else player.lose(event.card, ui.discardPile);
						if (get.type2(event.card) != "equip" && player.hasUseTarget(event.card) && get.type(event.card) != "delay") {
							if (!player.getStorage("lol_qianhun").contains(event.card.name)) {
								player.markAuto("lol_qianhun", [event.card.name])
							}
						}
						if (get.type2(event.card1) != "equip" && player.hasUseTarget(event.card1) && get.type(event.card1) != "delay") {
							if (!player.getStorage("lol_qianhun").contains(event.card1.name)) {
								player.markAuto("lol_qianhun", [event.card1.name])
							}
						}
					}
					"step 2"
					player.storage.lol_guibian = []


				},
			},
			"lol_zhaixing": {
				audio: "ext:英雄联盟扩展:4",
				forced: true,
				trigger: {
					global: "useCardToAfter",
				},
				filter: function (event, player) {
					return !event.player.getExpansions("lol_zhaixing_cardx").length && get.type(event.card) == "trick" && event.card.name != "wuxie" && get.itemtype(event.cards) == "cards" && get.position(event.cards[0], true) == "o";
				},
				logTarget: "player",
				content: function () {
					"step 0"
					trigger.player.addToExpansion(trigger.cards, "gain2").gaintag.add("lol_zhaixing_cardx");
					"step 1"
					var cards = trigger.player.getExpansions("lol_zhaixing_cardx");
					if (trigger.player.canAddJudge("lol_xingshen") && player.countCards("he")) {
						player.chooseCard("he", "是否将一张牌当做【星神恩典】置于其判定区？").set("ai", function (card) {
							var player = _status.event.player, trigger = _status.event.getTrigger();
							var att = get.attitude(player, trigger.player);
							if (cards.length > 1) return 0;
							if (-att && get.suit(cards[0]) == "club") return 4 - get.value(card);
							if (att && get.suit(cards[0]) == "diamond") return 6 - get.value(card);
							return 0;
						})
					} else event.finish();
					"step 2"
					if (result.bool) {
						player.line(trigger.player);
						player.$give(result.bool, trigger.player, false);
						trigger.player.addJudge("lol_xingshen", result.cards);
					}
				},
				group: "lol_zhaixing_judge",
				subSkill: {
					judge: {
						audio: "lol_zhaixing",
						forced: true,
						trigger: {
							global: "judgeBefore",
						},
						filter: function (event, player) {
							return !event.directresult && event.player.getExpansions("lol_zhaixing_cardx").length;
						},
						logTarget: "player",
						content: function () {
							var cards = [trigger.player.getExpansions("lol_zhaixing_cardx")[0]];
							trigger.directresult = cards[0];
						},
						sub: true,
					},
				},
			},
			"lol_zhaixing_cardx": {
				marktext: "星",
				intro: {
					markcount: "expansion",
					content: "expansion",
				},
			},
			"lol_feixing": {
				audio: "ext:英雄联盟扩展:4",
				enable: "phaseUse",
				filter: function (event, player) {
					return game.hasPlayer(current => current.getExpansions("lol_zhaixing_cardx").length);
				},
				filterTarget: function (card, player, target) {
					if (ui.selected.targets.length) return true;
					return target.getExpansions("lol_zhaixing_cardx").length;
				},
				selectTarget: [1, 2],
				multitarget: true,
				multiline: true,
				targetprompt: ["移去“星”", "获得“星”"],
				prompt: "出牌阶段，你可以移动场上一枚“流星”至一名角色的手牌中（只选择一名角色则由该角色获得）",
				content: function () {
					"step 0"
					if (targets.length == 2) {
						event.ToLose = targets[0];
						event.ToGain = targets[1];
					} else {
						event.ToLose = event.ToGain = targets[0];
					}
					"step 1"
					var cards = event.ToLose.getExpansions("lol_zhaixing_cardx");
					if (cards.length == 1) event._result = { bool: true, links: cards };
					else {
						player.chooseButton(["请选择要移动的“星”", cards], true).set("ai", function (button) {
							return 5 - get.value(button.link);
						})
					}
					"step 2"
					if (result.bool) {
						event.ToGain.gain(result.links[0], event.ToLose, "giveAuto");
					}
					"step 3"
					if (event.ToGain != player) {
						player.line(event.ToGain);
						if (event.ToGain == event.ToLose) {
							var damageNum = game.countPlayer() - 1;
							if (!event.ToGain.hasJudge("lol_xingshen")) damageNum /= 2;
							event.ToGain.damage(Math.ceil(damageNum));
						} else {
							var num1 = 0, num2 = 0, current = event.ToLose.getNext();
							while (current != event.ToGain) {
								num1++;
								current = current.getNext();
							}
							current = current.getNext();
							while (current != event.ToLose) {
								num2++;
								current = current.getNext();
							}
							var damageNum = Math.max(num1, num2);
							if (!event.ToGain.hasJudge("lol_xingshen")) damageNum /= 2;
							event.ToGain.damage(Math.ceil(damageNum));
						}
					} else {
						var audioList = ["lol_feixing_self1", "lol_feixing_self2", "lol_feixing_self3", "lol_feixing_self4"]
						game.playAudio("..", "extension", "英雄联盟扩展", audioList.randomGet());
					}
					"step 4"
					if (event.ToGain.hasJudge("lol_xingshen")) {
						player.chooseControl("draw_card", "lose_hp").set("prompt", "【飞星】令" + get.translation(event.ToGain) + "执行【星神恩典】中的一项效果").set("ai", function () {
							if (-get.attitude(player, event.ToGain)) return "lose_hp";
							return "draw_card";
						})
					} else event.finish();
					"step 5"
					var card = event.ToGain.getJudge("lol_xingshen"), num;
					if (!card.storage.lol_xingxian) num = 1;
					else num = card.storage.lol_xingxian;
					event.ToGain.discard(card);
					switch (result.control) {
						case "draw_card":
							event.ToGain.draw(num);
							break;
						case "lose_hp":
							event.ToGain.loseHp(num);
							break;
					}
				},
				ai: {
					order: 10.5,
					threaten: 1.6,
					result: {
						target: function (player, target) {
							var num = target.countCards("h");
							var att = get.attitude(player, target);
							if (ui.selected.targets.length == 0) {
								if (att > 0) return -1;
								var players = game.filterPlayer();
								for (var i = 0; i < players.length; i++) {
									var num2 = players[i].countCards("h");
									var att2 = get.attitude(player, players[i]);
									if (att2 >= 0 && num2 < num) return -1;
								}
								return 0;
							} else {
								return 1;
							}
						},
						player: 0.1,
					},
				},
			},

			// Darius
			// 除王
			"tel@lol.skill_killKing": {
				audio: window.lolfun.expandExtAudio("英雄联盟扩展", "kill_king", 3, "res/audio", "skill"),
				locked: true,
				forced: true,
				group: ["tel@lol.skill_killKing.damage", "tel@lol.skill_killKing.die"]
			},
			"tel@lol.skill_killKing.damage": {
				audio: "tel@lol.skill_killKing",
				trigger: {
					player: "useCardToTargeted"
				},
				locked: true,
				forced: true,
				sourceSkill: "tel@lol.skill_killKing",
				filter(event, player, _name) {
					if (event.parent.chuwang && event.parent.chuwang.length) return true
					if (event.card.name != "sha") return false
					let result = new Array;
					// 检索主公技
					if (event.target.skills.some(skill => lib.skill[skill] && lib.skill[skill].zhuSkill && event.target.hasZhuSkill(skill))) result.push(target => {
						target.addTempSkill("tel@lol.skill_killKing.ban");
					});
					// 检索装备区
					let cards = event.target.getCards("e");
					if (cards.length) ((cards, event) => {
						result.push(target => {
							target.gain(cards, "gain2");
							event.directHit.push(target);
						})
					})(cards, event);
					// 查看体力值
					if (event.target.hp < player.hp) (player => {
						result.push(target => {
							player.chooseDrawRecover(true);
						})
					})(player);
					event.parent.chuwang = result;
					return result.length > 0
				},
				content(trigger, player) {
					trigger.parent.chuwang.forEach(fun => {
						fun(trigger.target);
					});
					game.log(trigger.card, "造成的伤害+", trigger.parent.chuwang.length);
					trigger.parent.baseDamage += trigger.parent.chuwang.length;
				}
			},
			"tel@lol.skill_killKing.ban": {
				audio: false,
				charlotte: true,
				sourceSkill: "tel@lol.skill_killKing",
				init(player, skill) {
					player.addSkillBlocker(skill);
				},
				onremove(player, skill) {
					player.removeSkillBlocker(skill);
				},
				skillBlocker: (skill, _player) => !lib.skill[skill] || (!lib.skill[skill].charlotte && lib.skill[skill].zhuSkill),
				mark: true,
				intro: {
					content(storage, player, skill) {
						let list = player.getSkills(null, false, false).filter(skill => lib.skill["tel@lol.skill_killKing.ban"].skillBlocker(skill, player));
						return list.length ? `失效技能：${get.translation(list)}` : "无失效技能";
					}
				}
			},
			"tel@lol.skill_killKing.die": {
				audio: window.lolfun.expandExtAudio("英雄联盟扩展", "kill_king", 3, "res/audio", "skill/extra"),
				trigger: {
					source: "dying"
				},
				locked: true,
				forced: true,
				sourceSkill: "tel@lol.skill_killKing",
				filter(event, _player, _name) {
					if (!event.reason) return false
					let evt = event.reason.getParent("useCard");
					return evt.chuwang && evt.chuwang.length > 0;
				},
				content(trigger, player) {
					let evt = trigger.player.die(trigger);
					let next = game.createEvent("tel@lol.skill_killKing.dieAfter", false);
					next.set("player", player);
					next.set("cards", trigger.reason.cards);
					next.setContent(lib.skill["tel@lol.skill_killKing.die"].contentx);
					_status.event.next.remove(next);
					evt.after.push(next);
					trigger.finish();
				},
				contentx(player) {
					player.logSkill("tel@lol.skill_killKing.die");
					player.gain(event.cards, "gain2");
					if (!player.hasSkill("tel@lol.skill_killKing.mod")) player.addTempSkill("tel@lol.skill_killKing.mod");
					player.addMark("tel@lol.skill_killKing.mod", 1, false);
				}
			},
			"tel@lol.skill_killKing.mod": {
				audio: "tel@lol.skill_killKing.die",
				trigger: {
					source: "damageBegin1"
				},
				locked: true,
				forced: true,
				sourceSkill: "tel@lol.skill_killKing.die",
				init(player, skill) {
					player.storage[skill] = 0;
				},
				onremove: true,
				filter: (event, player) => event.card && event.card.name == "sha" && player.countMark("tel@lol.skill_killKing.mod") > 0,
				content(trigger, player) {
					game.log(player, "对", trigger.player, "造成的伤害+", player.countMark("tel@lol.skill_killKing.mod"));
					trigger.num += player.countMark("tel@lol.skill_killKing.mod");
				},
				mod: {
					cardUsable: (card, player, num) => num ? num + player.countMark("tel@lol.skill_killKing.mod") * Number(card.name == "sha") : num
				},
				mark: true,
				intro: {
					name: "除王",
					content: "本回合使用【杀】的次数+#且造成的伤害+#"
				}
			},

			"tel_lol_qunlang": {
				audio: "ext:英雄联盟扩展/res/audio/skill:3",
				locked: true,
				forced: true,
				zhuSkill: true,
				init(player, skill) {
					player.storage[skill] = new Array;
				},
				group: ["tel_lol_qunlang_count", "tel_lol_qunlang_draw"]
			},
			"tel_lol_qunlang_count": {
				audio: "tel_lol_qunlang",
				trigger: {
					global: "die"
				},
				charlotte: true,
				silent: true,
				forceDie: true,
				zhuSkill: true,
				sourceSkill: "tel_lol_qunlang",
				filter: (event, player, _name) => player.hasZhuSkill("tel_lol_qunlang") && player.storage["tel_lol_qunlang"].includes(event.player.group),
				content(trigger, player) {
					player.storage["tel_lol_qunlang"].push(trigger.player.group);
				}
			},
			"tel_lol_qunlang_draw": {
				audio: "tel_lol_qunlang",
				trigger: {
					global: "dieAfter"
				},
				locked: true,
				forced: true,
				zhuSkill: true,
				filter: (event, player, _name) => player.hasZhuSkill("tel_lol_qunlang") && event.source.group == "dz_yxlm_nuo",
				content() {
					game.asyncDraw(game.players.filter(current => current.group == "dz_yxlm_nuo"), player.storage["tel_lol_qunlang"])
				}
			},
			// Nautilus
			"tel_lol_fuchen": {
				audio: "ext:英雄联盟扩展/res/audio/skill:3",
				locked: true,
				forced: true,
				derivation: ["tel_lol_fuchen_luanliu", "tel_lol_fuchen_tandi"],
				group: ["tel_lol_fuchen_init", "tel_lol_fuchen_count", "tel_lol_fuchen_damage"]
			},
			"tel_lol_fuchen_init": {
				audio: "tel_lol_fuchen",
				trigger: {
					global: "gameStart"
				},
				locked: true,
				forced: true,
				sourceSkill: "tel_lol_fuchen",
				content() {
					player.storage["tel_lol_fuchen"] = {
						num: ui.cardPile.childElementCount,
						state: 0,
					};
					game.createEvent("tel_lol_fuchen_init", false).set("player", player).setContent(() => {
						game.playAudio("..", "extension", "英雄联盟扩展", "res", "audio/skill", "extra", "tel_lol_fuchen_enterLuanliu");
						player.popup("tel_lol_fuchen_luanliu");
					});
					player.addAdditionalSkill("tel_lol_fuchen", ["tel_lol_fuchen_luanliu"]);
				}
			},
			"tel_lol_fuchen_count": {
				audio: "tel_lol_fuchen",
				locked: true,
				sourceSkill: "tel_lol_fuchen",
				init(player, skill) {
					let fun = function (player, game, ui, fun) {
						if (!get.is.blocked("tel_lol_fuchen", player) && player.storage["tel_lol_fuchen"] && player.storage["tel_lol_fuchen"].num) {
							switch (player.storage["tel_lol_fuchen"].state) {
								case 0: // 处于“乱流”状态
									if (ui.cardPile.childElementCount < player.storage["tel_lol_fuchen"].num / 2) {
										game.createEvent("tel_lol_fuchen_count", false).set("player", player).set("fun", fun).setContent(() => {
											player.logSkill("tel_lol_fuchen_count");
											player.storage["tel_lol_fuchen"].state = 1;
											player.addAdditionalSkill("tel_lol_fuchen", ["tel_lol_fuchen_tandi"]);
											player.popup("tel_lol_fuchen_tandi");
											game.playAudio("../extension", "英雄联盟扩展", "res", "audio/skill", "extra", "tel_lol_fuchen_enterTandi");
											setTimeout(_status.event.fun, 1, player, game, ui, _status.event.fun);
										})
										return;
									}
									break;
								case 1: // 处于“探底”状态
									if (ui.cardPile.childElementCount >= player.storage["tel_lol_fuchen"].num / 2) {
										game.createEvent("tel_lol_fuchen_count", false).set("player", player).set("fun", fun).setContent(() => {
											player.logSkill("tel_lol_fuchen_count");
											player.storage["tel_lol_fuchen"].state = 0;
											player.addAdditionalSkill("tel_lol_fuchen", ["tel_lol_fuchen_luanliu"]);
											player.popup("tel_lol_fuchen_luanliu");
											game.playAudio("../extension", "英雄联盟扩展", "res", "audio/skill", "extra", "tel_lol_fuchen_enterLuanliu");
											setTimeout(_status.event.fun, 1, player, game, ui, _status.event.fun);
										})
										return;
									}
									break;
								default:
									break;
							}
						}
						setTimeout(fun, 1, player, game, ui, fun);
					}
					setTimeout(fun, 1, player, game, ui, fun);
				}
			},
			"tel_lol_fuchen_damage": {
				audio: "tel_lol_fuchen",
				trigger: {
					player: "damageEnd"
				},
				locked: true,
				forced: true,
				sourceSkill: "tel_lol_fuchen",
				filter: (event, ..._args) => event.num > 0,
				content(player) {
					let cards = get.cards(player.hp);
					player.$throw(cards);
					game.cardsDiscard(cards);
					game.log(player, "将", cards, "置入弃牌堆");
				}
			},
			"tel_lol_fuchen_luanliu": {
				audio: "ext:英雄联盟扩展/res/audio/skill:3",
				locked: true,
				forced: true,
				group: ["tel_lol_fuchen_luanliu_discard", "tel_lol_fuchen_luanliu_damage"]
			},
			"tel_lol_fuchen_luanliu_discard": {
				audio: "tel_lol_fuchen_luanliu",
				trigger: {
					player: "loseEnd",
				},
				locked: true,
				forced: true,
				sourceSkill: "tel_lol_fuchen_luanliu",
				filter: event => event.hs.concat(event.es).length > 0,
				content(event, trigger, player) {
					"step 0"
					event.num = trigger.hs.concat(trigger.es).length;
					"step 1"
					{
						let cards = get.cards(1);
						player.$throw(cards);
						game.cardsDiscard(cards);
						game.log(player, "将", cards, "置入弃牌堆");
					}
					"step 2"
					if (--event.num > 0) {
						player.logSkill(event.name);
						event.goto(0);
					}
				}
			},
			"tel_lol_fuchen_luanliu_damage": {
				audio: "tel_lol_fuchen_luanliu",
				trigger: {
					source: "damageSource"
				},
				locked: true,
				forced: true,
				sourceSkill: "tel_lol_fuchen_luanliu",
				logTarget: "player",
				filter: event => event.player.isAlive() && !event.player.hasSkill("tel_lol_nishui"),
				content(trigger) {
					trigger.player.addTempSkill("tel_lol_nishui");
				}
			},
			"tel_lol_fuchen_tandi": {
				audio: "ext:英雄联盟扩展/res/audio/skill:3",
				locked: true,
				forced: true,
				group: ["tel_lol_fuchen_tandi_useCard", "tel_lol_fuchen_tandi_damage"]
			},
			"tel_lol_fuchen_tandi_useCard": {
				audio: "tel_lol_fuchen_tandi",
				trigger: {
					player: "useCard"
				},
				locked: true,
				forced: true,
				sourceSkill: "tel_lol_fuchen_tandi",
				filter: event => event.card && ["basic", "trick"].includes(get.type(event.card)),
				content(trigger, player) {
					trigger.directHit.addArray(game.players);
					trigger.nowuxie = true;
					game.players.filter(current => !current.isOut() && player.inRange(current) && !trigger.targets.includes(current)).forEach(current => {
						trigger.targets.push(current);
						player.line(current);
					});
				}
			},
			"tel_lol_fuchen_tandi_damage": {
				audio: "tel_lol_fuchen_tandi",
				trigger: {
					source: "damageSource"
				},
				locked: true,
				forced: true,
				sourceSkill: "tel_lol_fuchen_tandi",
				logTarget: "player",
				filter: event => event.player.isAlive() && !event.player.hasSkill("tel_lol_xuanyun"),
				content(trigger) {
					trigger.player.addTempSkill("tel_lol_xuanyun");
				}
			},

			// Tahm Kench
			// 吞纳
			"tel_lol_tunna": {
				audio: "ext:英雄联盟扩展/res/audio/skill:3",
				locked: true,
				init(player, skill) {
					player.storage[skill] = 1;
				},
				group: ["tel_lol_tunna_unable", "tel_lol_tunna_gain", "tel_lol_tunna_draw", "tel_lol_tunna_die"]
			},
			"tel_lol_tunna_unable": {
				locked: true,
				sourceSkill: "tel_lol_tunna",
				mod: {
					playerEnabled: (card, player, target, result) => (player != target && (info => info && info.selectTarget && info.selectTarget != -1)(get.info(card))) ? false : result,
					cardSavable: (card, player, target, result) => (player != target && (info => info && info.selectTarget && info.selectTarget != -1)(get.info(card))) ? false : result
				}
			},
			"tel_lol_tunna_gain": {
				audio: "tel_lol_tunna",
				trigger: {
					global: "discardEnd"
				},
				locked: true,
				forced: true,
				sourceSkill: "tel_lol_tunna",
				filter: (event, _player, _name) => (event.cardxs = event.cards.filter(card => get.position(card) == "d"), event.cardxs.length > 0),
				content(trigger, player) {
					player.gain(trigger.cardxs, "gain2");
				}
			},
			"tel_lol_tunna_draw": {
				audio: "tel_lol_tunna",
				trigger: {
					global: ["phaseBegin", "phaseEnd"]
				},
				locked: true,
				forced: true,
				sourceSkill: "tel_lol_tunna",
				content(event, player) {
					player.draw(player.storage["tel_lol_tunna"]);
					player.draw(player.storage["tel_lol_tunna"]).bottom = true;
					if (event.triggername == "phaseEnd") player.storage["tel_lol_tunna"] *= 2;
				}
			},
			"tel_lol_tunna_die": {
				audio: "ext:英雄联盟扩展/res/audio/skill:3",
				trigger: {
					global: "washCard"
				},
				locked: true,
				forced: true,
				sourceSkill: "tel_lol_tunna",
				content() { },
				mod: {
					cardOver(player, event, result, _bool) {
						player.logSkill("tel_lol_tunna");
						let evt = player.die();
						event.next.remove(evt);
						event.after.push(evt);
						let cards = player.getCards("hej");
						for (let i = 0; i < cards.length; ++i) {
							result.push(cards[i]);
						}
						return true;
					}
				},
				ai: {
					cardOver: true
				}
			},

			// 贪欲
			"tel_lol_tanyu": {
				audio: "ext:英雄联盟扩展/res/audio/skill:3",
				derivation: "tel_lol_tanyu_qiyue",
				global: "tel_lol_tanyu_toqiyue"
			},
			"tel_lol_tanyu_toqiyue": {
				audio: "tel_lol_tanyu",
				enable: "phaseUse",
				filter: (_event, player) => !player.hasSkill("tel_lol_tanyu_qiyue") && game.players.some(current => current != player && current.hasSkill("tel_lol_tanyu")),
				filterTarget: (_card, player, target) => player != target && target.hasSkill("tel_lol_tanyu"),
				selectTarget: 1,
				skillAnimation: true,
				animationColor: "fire",
				content() {
					player.storage["tel_lol_tanyu_qiyue"] = {
						time: 1,
						target
					}
					target.line(player);
					player.addSkill("tel_lol_tanyu_qiyue");
				},
				ai: {
					result: {
						player: (..._args) => Math.round(Math.random()),
						target: (..._args) => Math.round(Math.random()) * Math.sign(Math.random() - Math.ramdom())
					}
				}
			},
			"tel_lol_tanyu_qiyue": {
				audio: "ext:英雄联盟扩展/res/audio/skill/extra:3",
				trigger: {
					player: "phaseUseBegin"
				},
				locked: true,
				forced: true,
				onremove: true,
				filter: (_event, player) => player.storage["tel_lol_tanyu_qiyue"].target.isAlive(),
				content(event, player) {
					"step 0"
					event.num = player.storage[event.name].time * game.phaseNumber;
					if (player.countCards("he") < event.num) {
						event._result = {
							control: "选项一"
						}
					}
					else {
						let name = get.translation(player.storage[event.name].target);
						player.chooseControl().set("choiceList", [`失去一点体力上限并获得${name}${get.cnNumber(event.num)}张牌`, `弃置${get.cnNumber(event.num)}张牌`])
					}
					"step 1"
					++player.storage[event.name].time;
					switch (result.control) {
						case "选项一":
							player.loseMaxHp();
							break;
						case "选项二":
							player.chooseToDiscard(event.num, "he", true);
							event.finish();
					}
					"step 2"
					if (player.maxHp > 1) {
						player.line(player.storage[event.name].target);
						if (player.storage[event.name].target.countCards("he") > event.num) {
							player.gainPlayerCard(player.storage[event.name].target, event.num, "he", true);
						}
						else player.gain(player.storage[event.name].target.getCards("he"), "give");
					}
					else {
						player.die(player.storage[event.name].target);
					}
				}
			},

			// 等待重构
			lol_jiangfa: {
				audio: 'ext:' + _status.extension + ':3',
				derivation: ['lol_jiangfa_zui', 'lol_jiangfa_shu'],
				trigger: {
					global: ['damageSource', 'loseBefore']
				},
				filter: function (event, player, name) {
					if (event.name == 'lose') return (event.type == 'discard' || event.type == 'use') && event.cards.filterInD('he').some(function (card) {
						return card.hasGaintag('lol_jiangfa_zui') || card.hasGaintag('lol_jiangfa_shu');
					});
					return player.countCards('he') && event.source != player && !event.all_excluded;
				},
				init: function (player, skill) {
					for (var i of get.players(false)) {
						var node = ui.create.div(i, {
							left: '10px',
							width: '20%',
							bottom: '5px',
							textAlign: 'left',
							zIndex: 20
						});
						i.node[skill + '_text'] = node;
					};
					window[skill + '_textUpdate'] = setInterval(function () {
						for (var i of get.players(false)) {
							if (i.node[skill + '_text']) {
								var num = i.countCards('he', function (card) {
									return card.hasGaintag('lol_jiangfa_zui');
								});
								i.node[skill + '_text'].innerHTML = !num ? '' : get.translation('lol_jiangfa_zui') + '*' + num;
							};
						};
					}, 500);
				},
				direct: true,
				content: function () {
					'step 0'
					if (trigger.name == 'lose') {
						for (var i of trigger.cards) {
							if (i.hasGaintag('lol_jiangfa_zui')) {
								if (trigger.type == 'use') {
									var next = trigger.player.chooseToDiscard('he', true);
									_status.event.next.remove(next);
									trigger.after.push(next);
								} else trigger.player.loseHp();
								player.logSkill(event.name + '_zui_', trigger.player);
							};
							if (i.hasGaintag('lol_jiangfa_shu')) {
								if (trigger.type == 'use') trigger.player.draw('nodelay');
								else trigger.player.recover();
								player.logSkill(event.name + '_shu_', trigger.player);
							};
						};
						return;
					};
					player.chooseCard('###' + get.prompt(event.name, trigger.source) + '###' + get.skillInfoTranslation(event.name), 'he');
					'step 1'
					if (result.cards && result.cards.length) {
						trigger.source.gain(result.cards, player, 'giveAuto')
						event.name = result.cards[0].name
					} else {
						event.finish()
					}
					'step 2'
					trigger.source.removeGaintag('lol_jiangfa_shu', trigger.source.getCards('he', event.name));
					trigger.source.addGaintag(trigger.source.getCards('he', event.name), 'lol_jiangfa_zui');
					player.logSkill(event.name, trigger.source);
				},
				subSkill: {
					zui_: {
						audio: 'ext:' + _status.extension + ':3',
					},
					shu_: {
						audio: 'ext:' + _status.extension + ':3',
					},
				},
			},
			lol_qingsuan: {
				audio: 'ext:' + _status.extension + ':3',
				trigger: {
					global: 'phaseJieshuBegin'
				},
				filter: function (event, player) {
					return event.player != player && !event.player.lol_qingsuan && event.player.getStat().damage;
				},
				logTarget: 'player',
				content: function () {
					var cards = trigger.player.getCards('he', function (card) {
						return card.hasGaintag('lol_jiangfa_zui');
					});
					trigger.player.discard(cards);
					trigger.player.draw(cards.length, 'nodelay');
					trigger.player.lol_qingsuan = true;
				},
			},
			lol_dengshen: {
				audio: 'ext:' + _status.extension + ':4',
				get derivation() {
					if (lib.skill.lol_dengshen) return Object.keys(lib.skill.lol_dengshen.subSkill).map(key => 'lol_dengshen_' + key);
					return [];
				},
				trigger: {
					global: ['loseAfter', 'loseBegin']
				},
				filter: function (event, player, name) {
					if (name == 'loseBegin') {
						if (get.itemtype(event.cards) == 'cards' && event.cards.some(function (card) {
							return card.hasGaintag('lol_jiangfa_zui');
						})) event._lol_dengshen_hasZui = true;
						return;
					};
					return event._lol_dengshen_hasZui && !event.player.hasCard(function (card) {
						return card.hasGaintag('lol_jiangfa_zui');
					}, 'he');
				},
				skillAnimation: true,
				animationColor: 'orange',
				forced: true,
				content: function () {
					var info = get.info(event.name),
						list = ((info && info.subSkill && Object.keys(info.subSkill)) || []).map(key => event.name + '_' + key).filter(function (key) {
							return key != event.name + '_chaoran' && !player.hasSkill(key);
						});
					player.line(trigger.player, 'green');
					var last = player.loseMaxHp(),
						next = game.createEvent(
							event.name + '_afterLoseAddSkill',
							false,
							last
						);
					last.next.remove(next);
					last.after.push(next);
					next.player = player;
					next.skill = event.name;
					next.setContent(function () {
						if (player.maxHp == 1) {
							player.removeSkill(skill, true);
							player.addSkillLog(skill + '_chaoran');
						};
					});
					if (list.length) {
						event.skill = list.randomGet();
						player.addSkillLog(event.skill);
					};
				},
				subSkill: {
					xinghuo: {
						audio: 'ext:' + _status.extension + ':3',
						trigger: {
							player: 'useCard2',
							global: 'damageEnd'
						},
						forced: true,
						filter: function (event, player) {
							if (event.name == 'damage') return event.player.hasCard(function (card) {
								return card.hasGaintag('lol_jiangfa_zui');
							}, 'he');
							return get.itemtype(event.targets) == 'players' && event.targets.some(function (key) {
								return key.hasCard(function (card) {
									return card.hasGaintag('lol_jiangfa_zui');
								}, 'he');
							});
						},
						logTarget: function (event) {
							if (event.name == 'damage') return event.player;
						},
						content: function () {
							'step 0'
							if (trigger.name == 'damage') {
								if (trigger.player.hasCard(function (card) {
									return card.hasGaintag('lol_jiangfa_zui');
								}, 'he')) player.chooseCardButton(true, '弃置' + get.translation(trigger.player) + '一张“罪”', trigger.player.getCards('he', function (card) {
									return card.hasGaintag('lol_jiangfa_zui');
								}));
								return;
							};
							var targets = trigger.targets.filter(function (key) {
								return key.hasCard(function (card) {
									return card.hasGaintag('lol_jiangfa_zui');
								}, 'he');
							}),
								next = game.createEvent(event.name + '_recoverSkill', false, trigger),
								i;
							trigger.directHit = trigger.directHit.concat(targets);
							lib.skill[event.name + '_clearSkill'] = {
								mark: true,
								skillBlocker: function () {
									return true
								},
								init: function (player, skill) {
									player.addSkillBlocker(skill);
								},
								onremove: function (player, skill) {
									player.removeSkillBlocker(skill);
								},
								intro: {
									name: '星火',
									content: function (storage, player, skill) {
										var list = player.getSkills(null, false, false).filter(function (i) {
											return i != skill && lib.skill[skill].skillBlocker(i, player);
										});
										if (list.length) return '失效技能：' + get.translation(list);
										return '无失效技能';
									},
								},
								sub: true
							};
							lib.translate[event.name + '_clearSkill_bg'] = '封';
							for (i of targets) i.addTempSkill(event.name + '_clearSkill');
							trigger.next.remove(next);
							trigger.after.push(next);
							next.targets = targets;
							next.skill = event.name;
							next.setContent(function () {
								if (Array.isArray(targets)) {
									for (i of targets) i.removeSkill(skill + '_clearSkill', true);
								};
							});
							'step 1'
							if (result.links) trigger.player.discard(result.links);
						},
					},
					jiushu: {
						audio: 'ext:' + _status.extension + ':3',
						enable: 'phaseUse',
						usable: 1,
						filterTarget: function (card, player, target) {
							var prompt = function (target) {
								var zui = target.hasCard(function (card) {
									return card.hasGaintag('lol_jiangfa_zui');
								}, 'he'),
									shu = target.hasCard(function (card) {
										return card.hasGaintag('lol_jiangfa_shu');
									}, 'he'),
									str1 = get.translation('lol_jiangfa_zui');
								let str2 = get.translation('lol_jiangfa_shu');
								if (zui && shu) return str1 + '|' + str2;
								if (zui) return str1;
								if (shu) return str2;
							};
							for (var i of game.players) {
								if (!i.node.prompt && typeof prompt(i) == 'string') i.prompt(prompt(i));
							};
							return get.itemtype(target) == 'player' && (target.hasCard(function (card) {
								return card.hasGaintag('lol_jiangfa_zui');
							}, 'he') || target.hasCard(function (card) {
								return card.hasGaintag('lol_jiangfa_shu');
							}, 'he'));
						},
						direct: true,
						content: function () {
							'step 0'
							var zui = target.hasCard(function (card) {
								return card.hasGaintag('lol_jiangfa_zui');
							}, 'he'),
								shu = target.hasCard(function (card) {
									return card.hasGaintag('lol_jiangfa_shu');
								}, 'he');
							if (zui && shu) player.chooseControl('罪→赎', '赎→罪').set('prompt', '【' + get.translation(event.name) + '】<br>将“罪”改为“赎”或将“赎”改为“罪”');
							else if (zui) event._result = {
								index: 0
							};
							else if (shu) event._result = {
								index: 1
							};
							'step 1'
							if (result.index > -1) {
								var zui = target.getCards('he', function (card) {
									return card.hasGaintag('lol_jiangfa_zui');
								}),
									shu = target.getCards('he', function (card) {
										return card.hasGaintag('lol_jiangfa_shu');
									});
								if (result.index == 0) {
									target.removeGaintag('lol_jiangfa_zui', zui);
									target.addGaintag(zui, 'lol_jiangfa_shu');
								};
								if (result.index == 1) {
									target.removeGaintag('lol_jiangfa_shu', shu);
									target.addGaintag(shu, 'lol_jiangfa_zui');
								};
								player.logSkill(event.name, target);
							};
						},
					},
					zhicheng: {
						audio: 'ext:' + _status.extension + ':3',
						get group() {
							if (!lib.skill.lol_dengshen_zhicheng_asView) {
								lib.skill.lol_dengshen_zhicheng_asView = {
									enable: 'chooseToUse',
									position: 'he',
									filter: function (event, player) {
										var filter = event.filterCard;
										return (filter({
											name: 'sha',
											nature: 'fire'
										}, player, event) && player.hasCard(function (card) {
											return card.hasGaintag('lol_jiangfa_zui');
										}, 'he')) || (filter({
											name: 'tao'
										}, player, event) && player.hasCard(function (card) {
											return card.hasGaintag('lol_jiangfa_shu');
										}, 'he'));
									},
									filterCard: function (card, player, event) {
										event = event || _status.event;
										var filter = event._backup.filterCard;
										return get.itemtype(card) == 'card' && ((card.hasGaintag('lol_jiangfa_zui') && filter({
											name: 'sha',
											nature: 'fire',
											cards: [card]
										}, player, event)) ||
											(card.hasGaintag('lol_jiangfa_shu') && filter({
												name: 'tao',
												cards: [card]
											}, player, event)));
									},
									viewAs: function (cards, player) {
										var card = cards[0];
										if (get.itemtype(card) == 'card') {
											if (card.hasGaintag('lol_jiangfa_zui')) return {
												name: 'sha',
												nature: 'fire'
											};
											if (card.hasGaintag('lol_jiangfa_shu')) return {
												name: 'tao'
											};
										};
										return null;
									},
									ai: {
										respondSha: true,
										save: true,
										skillTagFilter: function (player, tag) {
											switch (tag) {
												case 'save':
													return player.hasCard(function (card) {
														return card.hasGaintag('lol_jiangfa_shu');
													}, 'he');
												case 'respondSha':
													return player.hasCard(function (card) {
														return card.hasGaintag('lol_jiangfa_zui');
													}, 'he');
											};
										},
									},
								};
								lib.translate.lol_dengshen_zhicheng_asView = '炙诚';
								lib.translate.lol_dengshen_zhicheng_asView_info = '将“赎”/“罪”牌当作【桃】/【火杀】使用。';
							};
							return 'lol_dengshen_zhicheng_asView';
						},
						trigger: {
							player: 'phaseBegin'
						},
						filter: function (event, player) {
							var names = [],
								i;
							for (i of get.players(false)) {
								names = names.concat(i.getCards('he', function (card) {
									return card.hasGaintag('lol_jiangfa_zui');
								}).map(key => key.name));
							};
							return player.hasCard(function (card) {
								return names.contains(card.name);
							}, 'he');
						},
						forced: true,
						content: function () {
							var names = [],
								i;
							for (i of get.players(false)) {
								names = names.concat(i.getCards('he', function (card) {
									return card.hasGaintag('lol_jiangfa_zui');
								}).map(key => key.name));
							};
							let cardxs = player.getCards('he', function (card) {
								return names.contains(card.name);
							});
							player.removeGaintag('lol_jiangfa_zui', cardxs);
							player.addGaintag(cardxs, 'lol_jiangfa_shu');
						},
					},
					chilie: {
						audio: 'ext:' + _status.extension + ':3',
						trigger: {
							source: 'damageBegin',
							player: 'useCard'
						},
						forced: true,
						direct: true,
						filter: function (event, player) {
							if (event.name == 'damage') return event.nature != 'fire' || !event.source;
							return event.name == 'useCard' && !['equip', 'delay'].contains(get.type(event.card)) && game.hasPlayer(function (current) {
								return !event.targets.contains(current) && player.canUse(event.card, current) && current.hasCard(function (card) {
									return card.hasGaintag('lol_jiangfa_zui');
								}, 'he');
							});
						},
						content: function () {
							'step 0'
							if (trigger.name == 'damage') {
								trigger.nature = 'fire';
								delete trigger.source;
								player.logSkill(event.name);
								return;
							};
							var prompt = function (target) {
								var zui = target.hasCard(function (card) {
									return card.hasGaintag('lol_jiangfa_zui');
								}, 'he'),
									shu = target.hasCard(function (card) {
										return card.hasGaintag('lol_jiangfa_shu');
									}, 'he'),
									str1 = get.translation('lol_jiangfa_zui');
								let str2 = get.translation('lol_jiangfa_shu');
								if (zui && shu) return str1 + '|' + str2;
								if (zui) return str1;
								if (shu) return str2;
							};
							for (var i of game.players) {
								if (!i.node.prompt && typeof prompt(i) == 'string') i.prompt(prompt(i));
							};
							player.chooseTarget('###' + get.prompt(event.name) + '###令任意名“罪”角色成为' + get.translation(trigger.card) + '额外目标', [1, Infinity], function (card, player, target) {
								return target.hasCard(function (card) {
									return card.hasGaintag('lol_jiangfa_zui');
								}, 'he') && !_status.event.sourcex.contains(target) && player.canUse(_status.event.card, target);
							}, function (target) {
								return get.effect(target, _status.event.card, get.player(), get.player());
							}).set('card', trigger.card).set('sourcex', trigger.targets);
							'step 1'
							if (result.targets) {
								player.logSkill(event.name, result.targets);
								trigger.targets.addArray(result.targets);
							};
						},
					},
					jiangzui: {
						audio: 'ext:' + _status.extension + ':3',
						enable: 'phaseUse',
						unique: true,
						limited: true,
						skillAnimation: true,
						animationColor: 'orange',
						chooseButton: {
							dialog: function () {
								return ui.create.dialog(get.prompt2('lol_dengshen_jiangzui'));
							},
							chooseControl: function (event, player) {
								return ['ok', 'cancel2'];
							},
							backup: function (result, player) {
								return {
									audio: 'lol_dengshen_jiangzui',
									content: function () {
										'step 0'
										player.draw(7, 'nodelay');
										player.awakenSkill('lol_dengshen_jiangzui');
										'step 1'
										player.chooseCardTarget({
											filterCard: function (card) {
												return !ui.selected.cards.some(function (key) {
													return key.name == card.name;
												});
											},
											selectCard: [1, Infinity],
											selectTarget: function () {
												return ui.selected.cards.length
											},
											filterTarget: lib.filter.notMe,
											complexCard: true,
											complexSelect: true,
											position: 'hes',
										});
										'step 2'
										if (Array.isArray(result.targets) && Array.isArray(result.cards)) {
											event.nodes = [];
											player.$givemod = function (card, player) {
												var node;
												if (get.itemtype(card) == 'card') {
													node = card.copy('card', false);
												} else if (get.itemtype(card) == 'cards') {
													node = card[0].copy('card', false);
												} else {
													node = ui.create.div('.card.thrown');
												};
												node.fixed = true;
												this.$throwordered(node);
												node.listenTransition(function () {
													var dx = player.getLeft() + player.offsetWidth / 2 - 52 - node.offsetLeft;
													var dy = player.getTop() + player.offsetHeight / 2 - 52 - node.offsetTop;
													if (node.style.transform && node.style.transform != 'none' && node.style.transform.indexOf('translate') == -1) {
														node.style.transform += ' translate(' + dx + 'px,' + dy + 'px)';
													} else {
														node.style.transform = 'translate(' + dx + 'px,' + dy + 'px)';
													};
												});
												event.nodes.add(node);
											};
											for (var i = 0; i < result.cards.length; i++) {
												if (result.targets[i]) {
													result.targets[i].gain(result.cards[i]);
													player.$give(result.cards[i], result.targets[i]);
												};
											};
											player.logSkill('lol_jiangfa', result.targets.slice(0, result.cards.length));
											game.delay(3);
											delete player.$givemod;
										} else event.finish();
										'step 3'
										game.delay(2);
										for (var i = 0; i < result.cards.length; i++) {
											if (result.targets[i]) {
												result.targets[i].addGaintag(result.targets[i].getCards('he', result.cards[i].name), 'lol_jiangfa_zui');
											};
										};
										'setp 4'
										for (var i of event.nodes) i.delete();
									},
								};
							},
						},
					},
					chaoran: {
						audio: 'ext:' + _status.extension + ':3',
						mod: {
							maxHandcardFinal: function () {
								return 7;
							},
							cardUsable: function () {
								return Infinity;
							},
							globalFrom: function () {
								return -7;
							},
							globalTo: function (_from, _to, num) {
								return num + 2;
							},
						},
						trigger: {
							global: 'useCard'
						},
						filter: function (event, player) {
							return event.cards.length == 1 && event.cards[0].hasGaintag('lol_jiangfa_zui') && event.targets.contains(player);
						},
						forced: true,
						logTarget: 'player',
						content: function () {
							trigger.excluded.add(player);
						},
					},
				},
			},
			lol_xingqiong: {
				audio: 'ext:' + _status.extension + ':3',
				enable: 'phaseUse',
				group: ['lol_xingqiong_replace', 'lol_xingqiong_discard'],
				filterCard: true,
				selectCard: [1, Infinity],
				lose: false,
				prepare: function (cards, player) {
					player.addToExpansion(cards, player, 'give').gaintag.add('lol_xingqiong');
				},
				content: function () { },
				marktext: '星',
				intro: {
					name: '流星',
					mark: function (dialog, _, player) {
						dialog.add(player.getExpansions('lol_xingqiong'));
						for (i of dialog.buttons) {
							if (i.node && i.node.gaintag && player.getExpansions('lol_xingqiong').contains(i.link)) {
								i.node.gaintag.innerHTML = '<span style="color:#ffe14c;text-shadow:none;">可用' + get.cnNumber(3 - ((player.storage.lol_xingxian && player.storage.lol_xingxian[i.link[2] || i.link.name]) || 0)) + '次</span>';
								i.node.gaintag.style.textAlign = 'right';
								i.node.gaintag.style.right = 0;
							};
						};
					},
					content: 'expansion',
					onunmark: 'expansion',
				},
				onremove: function (player, skill) {
					var cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
				subSkill: {
					discard: {
						audio: 'ext:' + _status.extension + ':3',
						trigger: { player: 'phaseJieshuBegin' },
						priority: 10,
						silent: true,
						filter: function (_, player) {
							return player.getExpansions('lol_xingqiong').length > player.maxHp;
						},
						content: function () {
							'step 0'
							var num = player.getExpansions('lol_xingqiong').length - player.maxHp;
							player.chooseButton(['弃置多余的“流星”（' + get.cnNumber(num) + '张）', player.getExpansions('lol_xingqiong')], num, true);
							'step 1'
							if (result.links) {
								player.loseToDiscardpile(result.links);
								player.logSkill(event.name);
							};
						},
					},
					replace: {
						trigger: { player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'] },
						filter: function (_, player) {
							return player.getExpansions('lol_xingqiong').length;
						},
						direct: true,
						content: function () {
							'step 0'
							var expansion = player.getExpansions('lol_xingqiong'), cards = get.cards(expansion.length), next = player.chooseToMove('星穹：是否用“流星”替换牌堆顶的牌？');
							next.set('list', [
								['牌堆顶的牌', cards],
								['流星', expansion]
							]);
							next.set('filterMove', function (from, to, list) {
								if (from.parentNode == to.parentNode || typeof to == 'number') return;
								var buttons = [Array.from(_status.event.buttonss[0].childNodes), Array.from(_status.event.buttonss[1].childNodes)];
								if (_status.event._cards.contains(to.link)) {
									if (_status.event._cards.contains(from.link)) return;
									if (buttons[1].contains(to)) return buttons[0].find(from) == _status.event._cards.find(to.link);
									return;
								};
								return true;
							});
							next.set('_cards', cards);
							event.cards = cards;
							'step 1'
							if (result.bool) {
								player.logSkill('lol_xingqiong_' + (trigger.name == 'phaseJieshu' ? 'jieshu' : 'zhunbei'));
								var list = result.moved, top = list[0].filter(function (card) {
									return player.getExpansions('lol_xingqiong').contains(card)
								});
								event.list = list;
								while (list[0].length) {
									ui.cardPile.insertBefore(list[0].pop(), ui.cardPile.firstChild);
								};
								if (top.length) {
									var obj = {
										step: 0,
										finished: false,
										next: [],
										after: [],
										custom: {
											add: {},
											replace: {}
										},
										_aiexclude: [],
										_notrigger: [],
										_result: {},
										_set: []
									};
									game.createTrigger('loseAfter', 'lol_xingluo', player, Object.assign({ lol_xingluo_loseXing: true, name: 'lose', player: player, cards: [] }, obj));
									game.createTrigger('loseAfter', 'lol_xingxian_reset', player, Object.assign({ lol_xingxian_resetCards: top, cards: [], name: 'lose', player: player }, obj));
								};
							} else event.finish();
							'step 2'
							if (event.list) {
								var list = event.list, add = list[1].filter(function (card) {
									return event.cards.contains(card) && !player.getExpansions('lol_xingqiong').contains(card);
								});
								if (add.length) {
									player.addToExpansion(add, player, 'give').gaintag.add('lol_xingqiong');
								};
							};
						},
					},
					jieshu: {
						audio: 'ext:' + _status.extension + ':3',
					},
					zhunbei: {
						audio: 'ext:' + _status.extension + ':3',
					},
				},
			},
			lol_xingxian: {
				audio: 'ext:' + _status.extension + ':3',
				group: 'lol_xingxian_reset',
				mod: {
					maxHandcard: function (player, num) {
						return num + player.getExpansions('lol_xingqiong').length;
					},
					globalFrom: function (player, _, num) {
						return num - player.getExpansions('lol_xingqiong').length;
					},
				},
				init: function (player, skill) {
					player.storage[skill] = {};
				},
				enable: ['chooseToUse', 'chooseToRespond'],
				filter: function (event, player) {
					return _status.currentPhase != player && player.getExpansions('lol_xingqiong').some(function (card) {
						return !(player.storage.lol_xingxian && player.storage.lol_xingxian[card.name] > 2) && event.filterCard({ name: card.name, isCard: true }, player, event);
					});
				},
				hiddenCard: function (player, name) {
					return _status.currentPhase != player && player.getExpansions('lol_xingqiong').some(function (card) {
						return card.name == name && !(player.storage.lol_xingxian && player.storage.lol_xingxian[name] > 2);
					});
				},
				chooseButton: {
					dialog: function (event, player) {
						var cards = player.getExpansions('lol_xingqiong').filter(function (card) {
							return !(player.storage.lol_xingxian && player.storage.lol_xingxian[card.name] > 2) && event.filterCard({ name: card.name, isCard: true }, player, event);
						}), i, names = [];
						for (i of cards) names.add(i.name);
						if (names.length == 1) {
							event.lol_xingxian_names = names;
							return ui.create.dialog('###是否发动【星弦】视为' + (event.name == 'chooseToUse' ? '使用' : '打出') + '一张【' + get.translation(cards[0].name) + '】？（还可使用或打出' + get.cnNumber(3 - ((player.storage.lol_xingxian && player.storage.lol_xingxian[cards[0].name]) || 0)) + '次）###');
						} else if (names.length > 1) {
							var list = [];
							for (i of names) list.add([get.type(i), '', i]);
							var dialog = ui.create.dialog('###星弦###视为' + (event.name == 'chooseToUse' ? '使用' : '打出') + '以下任意卡牌', [list, 'vcard']);
							for (i of dialog.buttons) {
								if (i.node && i.node.gaintag) {
									i.node.gaintag.innerHTML = '<span style="color:#ffe14c;text-shadow:none;">可用' + get.cnNumber(3 - ((player.storage.lol_xingxian && player.storage.lol_xingxian[i.link[2] || i.link]) || 0)) + '次</span>';
									i.node.gaintag.style.textAlign = 'right';
									i.node.gaintag.style.right = 0;
								};
							};
							return dialog;
						};
					},
					get chooseControl() {
						var event = _status.event, player = get.player(),
							cards = player.getExpansions('lol_xingqiong').filter(function (card) {
								return !(player.storage.lol_xingxian && player.storage.lol_xingxian[card.name] > 2) && event.filterCard({ name: card.name, isCard: true }, player, event);
							}), names = [];
						for (i of cards) names.add(i.name);
						if (names.length == 1) return function () { return ['ok', 'cancel2'] };
					},
					filter: function (button) {
						var event = _status.event.parent, player = get.player();
						return !(player.storage.lol_xingxian && player.storage.lol_xingxian[button.link[2]] > 2) && event.filterCard({ name: button.link[2], isCard: true }, player, event);
					},
					backup: function (link, player) {
						_status.event.lol_xingxian_link = link;
						return {
							viewAs: {
								name: (link.bool ? _status.event.lol_xingxian_names[0] : link[0][2]),
								isCard: true
							},
							filterCard: function () { return false },
							selectCard: -1,
							popname: true,
							direct: true,
							precontent: function () {
								player.logSkill('lol_xingxian');
								player.storage.lol_xingxian = Object.assign(player.storage.lol_xingxian || {}, {
									[event.result.card.name]: ((player.storage.lol_xingxian && player.storage.lol_xingxian[event.result.card.name]) || 0) + 1
								});
							},
						};
					},
					prompt: function (link) {
						link = _status.event.lol_xingxian_link || link;
						return '请选择【' + get.translation(link.bool ? _status.event.lol_xingxian_names[0] : link[0][2]) + '】的目标';
					},
				},
				ai: {
					respondSha: true,
					respondShan: true,
					save: true,
					skillTagFilter: function (player, tag) {
						switch (tag) {
							case 'respondSha': return player.getExpansions('lol_xingqiong').some(function (card) {
								return card.name == 'sha' && !(player.storage.lol_xingxian && player.storage.lol_xingxian[card.name] > 2);
							});
							case 'respondShan': return player.getExpansions('lol_xingqiong').some(function (card) {
								return card.name == 'shan' && !(player.storage.lol_xingxian && player.storage.lol_xingxian[card.name] > 2);
							});
							case 'save': return player.getExpansions('lol_xingqiong').some(function (card) {
								return lib.filter.cardSavable({ name: card.name, isCard: true }, player, player) && !(player.storage.lol_xingxian && player.storage.lol_xingxian[card.name] > 2);
							});
						};
					},
				},
				subSkill: {
					reset: {
						trigger: { player: ['addToExpansionAfter', 'loseBegin', 'loseAfter'] },
						silent: true,
						filter: function (event, player, name) {
							if (!player.storage.lol_xingxian) return;
							if (event.name == 'lose') {
								if (name == 'loseBegin') {
									var cards = event.cards.filter(function (card) {
										return card.parentNode && card.parentNode.classList.contains('expansions') && card.hasGaintag('lol_xingqiong');
									});
									if (cards.length) event.lol_xingxian_resetCards = cards;
									return;
								};
								if (name == 'loseAfter') return event.lol_xingxian_resetCards;
								return;
							};
							return Array.isArray(event.gaintag) && event.gaintag.contains('lol_xingqiong');
						},
						content: function () {
							var cards = trigger.lol_xingxian_resetCards || trigger.cards;
							if (Array.isArray(cards)) {
								for (var i of cards) player.storage.lol_xingxian[i.name] = 0;
							};
						},
					},
				},
			},
			lol_xingluo: {
				audio: 'ext:' + _status.extension + ':3',
				trigger: { player: ['loseBegin', 'loseAfter'], global: 'judgeBegin' },
				filter: function (event, player, name) {
					if (name == 'loseBegin') {
						var cards = event.cards.filter(function (card) {
							return card.parentNode && card.parentNode.classList.contains('expansions') && card.hasGaintag('lol_xingqiong');
						});
						if (cards.length) event.lol_xingluo_loseXing = true;
						return;
					};
					if (name == 'loseAfter') return event.lol_xingluo_loseXing === true;
					if (event.name == 'judge') return player.getExpansions('lol_xingqiong').length;
				},
				direct: true,
				content: function () {
					'step 0'
					if (trigger.name == 'lose') {
						for (var i of game.players) {
							if (!i.node.prompt) {
								var text = '距离' + (i == player ? player.getGlobalFrom() : get.distance(i, player));
								if (i == player || player.getGlobalFrom() == get.distance(i, player)) i.prompt(text, 'water');
								else i.prompt(text);
							};
						};
						player.chooseTarget('###' + get.prompt(event.name) + '###对一名与你距离等于你的攻击距离的角色造成一点伤害（你的攻击距离为' + player.getGlobalFrom() + '）', function (_, player, target) {
							return player.getGlobalFrom() == get.distance(target, player);
						}, function (target) {
							return get.damageEffect(target, get.player(), get.player());
						});
					} else game.createTrigger('phaseJieshuBegin', 'lol_xingqiong_replace', player, event);
					'step 1'
					if (result.targets) {
						player.logSkill(event.name, result.targets);
						result.targets[0].damage();
					};
				},
			},

			// Ahri 阿狸
			// monsflame: 妖焰
			"tel_lol_monsflame": {
				audio: "ext:英雄联盟扩展/res/audio/skill:4",
				locked: true,
				derivation: "tel_lol_charmure",
				init(player, skill) {
					if (!player.storage[skill]) player.storage[skill] = new Array;
				},
				group: [
					"tel_lol_monsflame_refresh",
					"tel_lol_monsflame_addMark",
					"tel_lol_monsflame_removeMark",
					"tel_lol_monsflame_charmure"
				]
			},
			"tel_lol_monsflame_refresh": {
				audio: false,
				trigger: {
					global: ["phaseBeginStart", "turnOverEnd"],
				},
				charlotte: true,
				silent: true,
				sourceSkill: "tel_lol_monsflame",
				content(event, player) {
					player.storage[lib.skill[event.name].sourceSkill].length = 0;
				}
			},
			"tel_lol_monsflame_addMark": {
				audio: "tel_lol_monsflame",
				trigger: {
					player: "useCard"
				},
				locked: true,
				forced: true,
				sourceSkill: "tel_lol_monsflame",
				filter: (event, player) => (name => player.countMark("tel_lol_foxfire") < 3 && !player.storage[lib.skill[name].sourceSkill].includes(get.type2(event.card)))("tel_lol_monsflame_addMark"),
				content(event, trigger, player) {
					player.storage[lib.skill[event.name].sourceSkill].push(get.type2(trigger.card));
					player.addMark("tel_lol_foxfire");
				}
			},
			"tel_lol_monsflame_removeMark": {
				audio: "tel_lol_monsflame",
				trigger: {
					player: "removeMarkTrigger"
				},
				locked: true,
				forced: true,
				sourceSkill: "tel_lol_monsflame",
				filter: (event, player) => event.markname == "tel_lol_foxfire" && event.num > 0,
				content(event, trigger, player) {
					"step 0"
					event.num = trigger.num;
					"step 1"
					player.draw();
					"step 2"
					if (--event.num > 0) {
						player.logSkill(event.name);
						event.goto(1);
					}
				}
			},
			"tel_lol_monsflame_charmure": {
				audio: "ext:英雄联盟扩展/res/audio/skill:4",
				trigger: {
					target: "useCardToTargeted"
				},
				locked: true,
				forced: true,
				derivation: "tel_lol_charmure",
				sourceSkill: "tel_lol_monsflame",
				filter: (event, player) => event.player != player && event.player.countMark("tel_lol_foxfire") > 0,
				content(trigger, player) {
					"step 0"
					trigger.player.removeMark("tel_lol_foxfire");
					"step 1"
					player.doAction("tel_lol_charmure", {
						target: trigger.player
					});
				}
			},

			// gotSoul: 夺魄
			"tel_lol_gotSoul": {
				audio: "ext:英雄联盟扩展/res/audio/skill:4",
				trigger: {
					global: "phaseEnd"
				},
				direct: true,
				init(player, skill) {
					player.storage[skill] = new Array;
				},
				filter: (_event, player) => game.players.map(current => current.getHistory("useCard", evt => evt.targets.includes(player))).flat(1).length == 0,
				content() {
					"step 0"
					let cards =
						lib.inpile
							.filter(name => get.type(name) == "trick")
							.filter(name => !player.storage[event.name].includes(name))
							.filter(name => game.players.some(current => player.canUse(name, current)));
					if (!cards.length) {
						if (!player.countMark("tel_lol_foxfire")) return event.finish()
						player.chooseTarget([1, player.countMark("tel_lol_foxfire")])
							.set("prompt", `是否发动【夺魂】对至多${get.cnNumber(player.countMark("tel_lol_foxfire"))}名角色造成一点火焰伤害？`)
							.set("prompt2", "每个回合结束时，若本回合你未成为过牌的目标，你可以弃置所有的【狐火】，然后对至多等量名角色造成一点火焰伤害。");
						return event.goto(6)
					}
					event.cardxs = cards;
					if (!player.countMark("tel_lol_foxfire")) event.goto(3);
					else event.choose = true;
					"step 1"
					player.chooseControl([
						"视为使用一张普通锦囊牌",
						"弃置所有的【狐火】",
						"cancel2"
					])
						.set("prompt", get.prompt(event.name))
						.set("prompt2", [
							get.translation(`${event.name}_info`),
							`当前拥有的【狐火】数：${player.countMark("tel_lol_foxfire")}`,
							`目前可使用的锦囊牌：${event.cardxs.map(card => get.translation(card)).join("、")}`
						].join("</br>"))
					"step 2"
					if (result.control == "cancel2") return event.finish()
					switch (result.index) {
						case 0:
							return event.goto(3)
						case 1:
							return event.goto(5)
					}
					"step 3"
					let evt = player.chooseButton([event.choose ? "夺魂：请选择要使用的锦囊牌" : get.prompt(event.name), [event.cardxs.map(card => ["锦囊", "", card]), "vcard"]]);
					if (!event.choose) evt.set("prompt2", "每个回合结束时，若本回合你未成为过牌的目标，你可以：视为使用一张未以此法使用过的普通锦囊牌，并令目标角色依次获得一枚【狐火】，然后你依次失去一枚【狐火】")
					"step 4"
					if (result.bool) {
						let card = { name: result.links[0][2] };
						player.storage[event.name].push(result.links[0][2]);
						player.markSkill(event.name);
						player.chooseUseTarget(card, true).set("logSkill", [event.name]);
						player.addTempSkill("tel_lol_gotSoul2", "useCardEnd");
					}
					else if (event.choose) return event.goto(1)
					event.finish();
					"step 5"
					player.chooseTarget([1, player.countMark("tel_lol_foxfire")])
						.set("prompt", `夺魂：对至多${get.cnNumber(player.countMark("tel_lol_foxfire"))}名角色造成一点火焰伤害`);
					"step 6"
					if (result.bool) {
						player.logSkill(event.name, result.targets);
						player.line(result.targets, "fire");
						player.removeMark("tel_lol_foxfire", player.countMark("tel_lol_foxfire"));
						result.targets.forEach(target => {
							target.damage(1, "fire", player);
						})
					}
					else if (event.choose) return event.goto(1)
				},
				mark: true,
				marktext: "魂",
				intro: {
					content: storage => storage.length ? `当前已使用：${storage.map(name => get.translation(name)).join("、")}` : "当前未视为使用过锦囊牌"
				}
			},
			"tel_lol_gotSoul2": {
				audio: "tel_lol_gotSoul",
				trigger: {
					player: "useCardToTargeted"
				},
				locked: true,
				silent: true,
				logTarget: "target",
				filter: (event, player) => event.target.isAlive() && !event.target.countMark("tel_lol_foxfire") && player.countMark("tel_lol_foxfire") > 0,
				content() {
					player.logSkill("tel_lol_gotSoul", trigger.target);
					trigger.target.addMark("tel_lol_foxfire");
					player.removeMark("tel_lol_foxfire");
				}
			},
			// New Test
			// Fiora
			"tel@lol.skill_Riposte": {
				audio: window.lolfun.expandExtAudio("英雄联盟扩展", "riposte", 3, "res/audio", "skill"),
				usable: 1,
				trigger: {
					player: "damageBegin2"
				},
				logTarget: "source",
				init(player) {
					game.broadcastAll((player, skill) => {
						let list = [skill]; game.expandSkills(list);
						for (let i of list) {
							const info = lib.skill[i];
							if (!info) continue;
							if (!info.audioname2) info.audioname2 = {};
							info.audioname2[player.name1] = "tel@lol.skill_Riposte_grand";
						}
					}, player, "wushuang");
				},
				filter: (event, player) => event.num > 0 && player.countCards("he") > 0,
				check: (event, player) => (event.num > 2 || event.num > player.hp) && player.countCards("he") < 3,
				content(event, trigger, player) {
					"step 0"
					trigger.cancel();
					event.cards = player.getCards("he");
					player.discard(event.cards);
					if (!trigger.source || !trigger.source.isAlive()) event.finish();
					"step 1"
					player.addTempSkill("tel@lol.skill_Riposte3");
					game.delay(0.5);
					player.storage["tel@lol.skill_Riposte3"] = player.useCard({ name: "juedou", isCard: true }, "nowuxie", trigger.source, "noai").set("animate", false).set("baseDamage", trigger.num);
					"step 2"
					if (!player.hasSkill("tel@lol.skill_Riposte3")) {
						player.logSkill("tel@lol.skill_Riposte");
						player.gain(event.cards, "gain2");
						player.addTempSkill("tel@lol.skill_Riposte2");
						player.addTempSkill("wushuang");
					}
					else player.removeSkill("tel@lol.skill_Riposte3");
				}
			},
			"tel@lol.skill_Riposte2": {
				audio: false,
				charlotte: true,
				sourceSkill: "tel@lol.skill_Riposte",
				mod: {
					cardUsable: (card, _player, _target, num) => get.name(card) === "sha" ? Infinity : num
				},
				mark: true,
				marktext: "影",
				intro: {
					name: "影剑",
					content: "使用【杀】无次数限制"
				}
			},
			"tel@lol.skill_Riposte3": {
				audio: false,
				trigger: {
					source: "damage"
				},
				charlotte: true,
				silent: true,
				sourceSkill: "tel@lol.skill_Riposte",
				onremove: true,
				filter: (event, player) => event.card.name === "juedou" && event.getParent("useCard") == player.storage["tel@lol.skill_Riposte3"],
				content(player) {
					player.removeSkill("tel@lol.skill_Riposte3");
				}
			},
			"tel@lol.skill_Riposte_grand": {
				audio: window.lolfun.expandExtAudio("英雄联盟扩展", "grand", 3, "res/audio", "skill/extra"),
				sourceSkill: "tel@lol.skill_Riposte"
			},

			"tel@lol.skill_Challenge": {
				audio: window.lolfun.expandExtAudio("英雄联盟扩展", "challenge", 2, "res/audio", "skill"),
				trigger: {
					player: "useCardToTargeted"
				},
				logTarget: "target",
				filter: event => event.card.name === "sha" && event.target.isAlive(),
				content(trigger, player) {
					"step 0"
					let cardxs = trigger.cards.filter(cardx => get.position(cardx, true) === "o" && !get.owner(cardx));
					if (cardxs.length) trigger.target.gain(cardxs, "gain2");
					trigger.excluded.add(trigger.target);
					"step 1"
					player.useCard({ name: "juedou", isCard: true }, "nowuxie", trigger.target, "noai").set("animate", false);
					game.delay(0.5);
				}
			},

			"tel@lol.skill_Lunge": {
				// 音频文件，个人定义了展开的函数，方便实现语音名的自定义，可前往extension.js查看
				audio: window.lolfun.expandExtAudio("英雄联盟扩展", "lunge", 3, "res/audio", "skill"),
				locked: true,
				init(player) {
					const style = {
						fontFamily: "xingkai",
						fontSize: "20px",
						color: "#FFFFFF",
						lineHeight: "20px",
						textShadow: "0 0 5px #000000",
						textAlign: "center",
						zIndex: "100",
						width: "100%",
						height: "20%",
						left: "0",
						top: "calc(50% - 10px)",
						border: "1px solid #B49664",
						borderRadius: "6px",
						backgroundSize: "cover",
						backgroundImage: "-webkit-linear-gradient(left, rgba(180, 150, 100, 0.6) 0%, rgba(180, 150, 100, 0.6) 100%)",

						opacity: 0
					};

					const players = game.players.concat(game.dead).filter(current => current != player);
					player.storage["tel@lol.skill_Lunge"] = {};
					players.forEach(current => {
						player.storage["tel@lol.skill_Lunge"][current.playerid] = [];
					});

					const divs = players.map(current => {
						if (!Reflect.has(current, "ansoryCustom")) Reflect.set(current, "ansoryCustom", new Object());
						if (!Reflect.has(current.ansoryCustom, "Lunge.show"))
							Reflect.set(current.ansoryCustom, "Lunge.show", ui.create.div(".", style, current));
						current.ansoryCustom["Lunge.show"].isFinish = false;
						current.ansoryCustom["Lunge.show"].doFinish = () => {
							current.popup("找出破绽");
							current.ansoryCustom["Lunge.show"].isFinish = true;
						}
						return current.ansoryCustom["Lunge.show"];
					});

					const __isUseShaOrJuedou__ = (player, event, ui) =>
						event.name == "chooseToUse" ? (
							(event.skill && lib.skill[event.skill] && lib.skill[event.skill].viewAs) ?
								["sha", "juedou"].includes(lib.skill[event.skill].viewAs.name) :
								ui.selected.cards.length == 1 && ["sha", "juedou"].includes(get.name(ui.selected.cards[0], player))) :
							event.name == "chooseTarget" && (evt =>
								evt && evt.name == "chooseUseTarget" && ["sha", "juedou"].includes(evt.card.name))(event.getParent());

					const callback = (..._args) => {
						const isUseShaOrJuedou = __isUseShaOrJuedou__(player, _status.event, ui);
						game.players.forEach(current => {
							if (current == player) return;
							const div = current.ansoryCustom["Lunge.show"];
							if (isUseShaOrJuedou && !div.isFinish) {
								const record = player.storage["tel@lol.skill_Lunge"][current.playerid];
								const suits = lib.suit.filter(suit => !record.includes(suit));
								suits.reverse();
								// console.log(suits);
								if (suits.length) {
									div.textContent = suits.map(suit => get.translation(suit)).join("");
									div.style.opacity = 1;
								}
								else {
									div.isFinish = true;
									div.style.opacity = 0;
								}
							}
							else if (div.style.opacity == 1) div.style.opacity = 0;
						});
					}

					const server = new MutationObserver(callback);
					server.observe(player, { attributes: true });

					if (!Reflect.has(player, "ansoryCustom")) Reflect.set(player, "ansoryCustom", new Object());
					player.ansoryCustom["Lunge.server"] = server;
				},
				// 实现功能的技能
				// 这么写主要由于个人喜好，无任何必要因素
				group: [
					"tel@lol.skill_Lunge_init",
					"tel@lol.skill_Lunge_secondSuit",
					"tel@lol.skill_Lunge_forthSuit"
				],
				mark: true,
				marktext: "破",
				intro: {
					name: "破空",
					// content我不太会用，mark会顶替掉content，故使用mark
					// 参数分别是 信息框（点开标记后呈现的元素） 对应技能的storage 玩家
					// 无需返回值
					mark(dialog, storage, player) {
						if (player.isUnderControl(true)) {
							dialog.addText("对其他角色使用【杀】或【角色】的花色记录")
							const players = game.players.filter(current => current != player);
							players.forEach(current => {
								const suits = lib.suit.filter(suit => storage[current.playerid].includes(suit));
								suits.reverse();
								if (suits.length) dialog.addText(`${get.translation(current.name)}: ${storage[current.playerid].map(suit => get.translation(suit)).join("")}`);
								else dialog.addText(`${get.translation(current.name)}: 暂无记录`);
							});
						}
						else dialog.addText(get.translation("tel@lol.skill_Lunge_info"));
					},
					markcount: (storage, player) => player.isUnderControl(true) ? game.players.filter(current => current != player).filter(current =>
						storage[current.playerid].length == lib.suit.length).length : 0
				}
			},
			// 更新标记显示，从而使得标记显示正常
			"tel@lol.skill_Lunge_init": {
				audio: false,
				trigger: {
					// player: "useCard",
					global: ["phaseBeginStart", "dieAfter"]
				},
				charlotte: true,
				silent: true,
				sourceSkill: "tel@lol.skill_Lunge",
				content(player) {
					player.markSkill("tel@lol.skill_Lunge");
				}
			},
			// 对一名角色累计使用两种花色
			"tel@lol.skill_Lunge_secondSuit": {
				audio: "tel@lol.skill_Lunge",
				trigger: {
					player: "useCardToTargeted"
				},
				locked: true,
				forced: true,
				logTarget: "target",
				sourceSkill: "tel@lol.skill_Lunge",
				priority: 10,
				filter: (event, player) => {
					if (event.target == player) return false;
					if (!event.card || !["sha", "juedou"].includes(event.card.name)) return false;

					const record = player.storage["tel@lol.skill_Lunge"][event.target.playerid];
					const history = player.getHistory("useCard", evt =>
						evt.card && ["sha", "juedou"].includes(evt.card.name));
					const usedSuits = history.map(evt => get.suit(event.card));
					const suits = lib.suit.filter(suit => usedSuits.includes(suit));

					if (suits.length) {
						record.addArray(suits);
						if (record.length >= lib.suit.length && !event.target.ansoryCustom["Lunge.show"].isFinish) event.target.ansoryCustom["Lunge.show"].doFinish();
					}

					return record.length >= 2;
				},
				content(trigger, player) {
					player.draw();
				}
			},
			// 累计使用四种花色
			"tel@lol.skill_Lunge_forthSuit": {
				audio: "tel@lol.skill_Lunge",
				trigger: {
					player: "useCardToTargeted"
				},
				locked: true,
				forced: true,
				logTarget: "target",
				sourceSkill: "tel@lol.skill_Lunge",
				priority: 5,
				filter: (event, player) => {
					if (event.target == player) return false;
					if (!event.card || !["sha", "juedou"].includes(event.card.name)) return false;

					const record = player.storage["tel@lol.skill_Lunge"][event.target.playerid];
					const history = player.getHistory("useCard", evt =>
						evt.card && ["sha", "juedou"].includes(evt.card.name));
					const usedSuits = history.map(evt => get.suit(event.card));
					const suits = lib.suit.filter(suit => usedSuits.includes(suit));

					if (suits.length) {
						record.addArray(suits);
						if (record.length >= lib.suit.length && !event.target.ansoryCustom["Lunge.show"].isFinish) event.target.ansoryCustom["Lunge.show"].doFinish();
					}

					return record.length >= 4;
				},
				content(trigger, player) {
					trigger.target.loseHp(trigger.target.hp);
				}
			},

			// Graves
			"tel@lol.skill_addBullet": {
				audio: window.lolfun.expandExtAudio("英雄联盟扩展", "addBullet", 2, "res/audio", "skill"),
				usable: 1,
				enable: "phaseUse",
				content(player) {
					if (!player.hasSkill("tel@lol.skill_addBullet_buff")) player.addTempSkill("tel@lol.skill_addBullet_buff");
					++player.storage["tel@lol.skill_addBullet_buff"];
					player.addMark("tel@lol.mark_bullet");
				}
			},
			"tel@lol.skill_addBullet_buff": {
				audio: false,
				charlotte: true,
				onremove: true,
				sourceSkill: "tel@lol.skill_addBullet",
				init(player, skill) {
					player.storage[skill] = 0
				},
				mod: {
					globalFrom: (from, _to, distance) => distance - from.storage["tel@lol.skill_addBullet_buff"]
				}
			},

			"tel@lol.skill_tel@lol.skill_gravesFate": {
				charlotte: true,
				group: "tel@lol.skill_tel@lol.skill_gravesFate_true"
			},
			"tel@lol.skill_tel@lol.skill_gravesFate_true": {
				audio: false,
				trigger: {
					player: ["enterGame", "loseAfter"],
					global: ["gameDrawAfter", "equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
				},
				charlotte: true,
				forced: true,
				sourceSkill: "tel@lol.skill_tel@lol.skill_gravesFate",
				filter: (event, player) => (event.name == "enterGame" || event.name == "gameDraw") ? true : (
					evt => evt && evt.player == player && evt.es && evt.es.length > 0 && !player.countCards("e", "tel@lol.card_newFate"))(event.getl(player)),
				content(player) {
					let card = game.createCard("tel@lol.card_newFate");
					if (card) player.equip(card, player);
				}
			},

			// Karma
			"tel@lol.skill_Balance": {
				audio: window.lolfun.expandExtAudio("英雄联盟扩展", "balance", 3, "res/audio", "skill"),
				unique: true,
				zhuanhuanji: true,
				init(player) {
					player.storage["tel@lol.skill_Balance"] = true;
					lib.translate["tel@lol.skill_Balance_do_info"] = "出牌阶段限一次，你可以弃置一张红色手牌，然后从牌堆中获得一张黑色基本牌；当你于本回合使用以此法获得的牌时，你可以视为使用一张锦囊牌。";
				},
				group: "tel@lol.skill_Balance_do",
				mark: true,
				marktext: "☯",
				intro: {
					content: (storage) => storage ?
						"出牌阶段限一次，你可以弃置一张红色手牌，然后从牌堆中获得一张黑色基本牌；当你于本回合使用以此法获得的牌时，你可以视为使用一张锦囊牌。"
						: "出牌阶段限一次，你可以弃置一张黑色手牌，然后从牌堆中获得一张红色锦囊牌；当你于本回合使用以此法获得的牌时，你可以视为使用一张基本牌。"
				}
			},
			"tel@lol.skill_Balance_do": {
				audio: "tel@lol.skill_Balance",
				usable: 1,
				enable: "phaseUse",
				sourceSkill: "tel@lol.skill_Balance",
				filter: (_event, player) => player.countCards("h", card => get.color(card) == (player.storage["tel@lol.skill_Balance"] ? "red" : "black")) > 0,
				filterCard: (card, player) => get.color(card) == (player.storage["tel@lol.skill_Balance"] ? "red" : "black"),
				selectCard: 1,
				check: card => 9 - get.value(card),
				content(event, player) {
					const cardx = get.cardPile(cardxx => get.color(cardxx) == (player.storage["tel@lol.skill_Balance"] ?
						"black" : "red") && get.type(cardxx, "trick") == (player.storage["tel@lol.skill_Balance"] ?
							"basic" : "trick"));
					if (cardx) {
						player.gain(cardx, "gain2").gaintag.add("tel@lol.skill_Balance");
						player.addTempSkill("tel@lol.skill_Balance_use");
						player.storage["tel@lol.skill_Balance_use"] = [player.storage["tel@lol.skill_Balance"], cardx];
					}
					player.changeZhuanhuanji("tel@lol.skill_Balance");
					lib.translate["tel@lol.skill_Balance_do_info"] = player.storage["tel@lol.skill_Balance"] ?
						"出牌阶段限一次，你可以弃置一张红色手牌，然后从牌堆中获得一张黑色基本牌；当你于本回合使用以此法获得的牌时，你可以视为使用一张锦囊牌。"
						: "出牌阶段限一次，你可以弃置一张黑色手牌，然后从牌堆中获得一张红色锦囊牌；当你于本回合使用以此法获得的牌时，你可以视为使用一张基本牌。"
				},
				ai: {
					order: 10,
					result: {
						player: 1
					},
				},
			},
			"tel@lol.skill_Balance_use": {
				audio: "tel@lol.skill_Balance",
				trigger: {
					player: "useCardAfter"
				},
				charlotte: true,
				silent: true,
				onremove: true,
				filter: (event, player) => event.cards.includes(player.storage["tel@lol.skill_Balance_use"][1]),
				content() {
					"step 0"
					const type = player.storage["tel@lol.skill_Balance_use"][0] ? "trick" : "basic";
					const vcards = lib.inpile.reduce((result, name) => {
						if (get.type(name, "trick") == type) {
							result.push([type, "", name]);
							if (name == "sha") {
								lib.inpile_nature.forEach(nature => {
									result.push([type, "", name, nature])
								})
							}
						}
						return result;
					}, new Array);
					player.chooseButton([`###${get.prompt("tel@lol.skill_Balance")}###视为使用一张${get.translation(type)}牌`, [vcards, 'vcard']],
						(button) => get.player().getUseValue({ name: button.link[2], nature: button.link[3], isCard: true }, null, true),
						(button) => get.player().hasUseTarget({ name: button.link[2], nature: button.link[3], isCard: true }, null, true));
					"step 1"
					if (result.links) {
						const link = result.links[0];
						player.chooseUseTarget({ name: link[2], nature: link[3], isCard: true }, true).set("logSkill", "tel@lol.skill_Balance");
					};
					"step 2"
					player.removeSkill("tel@lol.skill_Balance_use");
				},
				mod: {
					aiOrder: (player, card, num) => num + 5.5 * Number(player.storage["tel@lol.skill_Balance_use"] && player.storage["tel@lol.skill_Balance_use"][1] == card)
				},
				mark: true,
				marktext: "衡",
				intro: {
					name: "均衡",
					mark(dialog, storage) {
						dialog.addAuto(storage[1].copy(false));
						dialog.addText(`当你使用此牌结算时，你可以视为使用一张${get.translation(storage[0] ? "trick" : "basic")}牌`);
					},
					markcount: (..._args) => 0
				}
			},

			"tel@lol.skill_Enlighten": {
				audio: window.lolfun.expandExtAudio("英雄联盟扩展", "enlighten", 3, "res/audio", "skill"),
				trigger: {
					player: "phaseUseEnd"
				},
				filter: (_event, player) => {
					let colors = new Object;
					player.getCards("h", card => {
						const color = get.color(card);
						if (!colors[color]) colors[color] = 0;
						++colors[color];
					});
					return colors.black == colors.red;
				},
				content(player) {
					"step 0"
					player.showHandcards();
					"step 1"
					player.skip("phaseDiscard");
					game.log(player, "跳过了本回合的弃牌阶段");
					player.addJudge(game.createCard("lolkz_hudun"));
				},
			},

			"tel@lol.skill_PassTorch": {
				audio: window.lolfun.expandExtAudio("英雄联盟扩展", "pass_torch", 3, "res/audio", "skill"),
				trigger: {
					global: "tel@lol.skill_EnlightenAfter"
				},
				direct: true,
				zhuSkill: true,
				filter: (event, player) => player.hasZhuSkill("tel@lol.skill_PassTorch") && event.player && event.player.group == "tel_lol_ai",
				content(trigger, player) {
					"step 0"
					trigger.player.chooseTarget(get.prompt2(event.name), (_card, _player, target) =>
						!target.hasSkill("tel@lol.skill_Enlighten"), target =>
						get.attitude(get.player(), target) + (target.countCards("h") / 2));
					"step 1"
					if (result.targets) {
						player.logSkill("tel@lol.skill_PassTorch");
						trigger.player.line(result.targets, "green");
						result.targets[0].addTempSkill("tel@lol.skill_Enlighten", { player: 'phaseAfter' });
						game.log(result.targets[0], "获得了技能", "#g【" + get.translation("tel@lol.skill_Enlighten") + "】");
					};
				},
			},

			// Sylas
			"tel@lol.skill_Hijack": {
				audio: lolfun.expandExtAudio("英雄联盟扩展", "hijack", 3, "res/audio", "skill"),
				trigger: {
					global: ["useSkillAfter", "triggerSkillAfter", "useCardAfter", "respondAfter"],
					player: "tel@lol.skill_RobberyAfter"
				},
				direct: true,
				init(player, skill) {
					player.storage[skill] = null;
					for (const current of game.players) {
						current.addSkill("tel@lol.skill_Hijack.hooks");
					}
				},
				onremove(player, skill) {
					if (player.storage[skill]) {
						const [_current, name] = player.storage[skill];
						if (player.hasSkill(name)) player.removeSkill(name);
					}
					delete player.storage[skill];
					for (const current of game.players) {
						if (current.hasSkill("tel@lol.skill_Hijack.hooks")) current.removeSkill("tel@lol.skill_Hijack.hooks");
					}
				},
				filter(event, player, name) {
					switch (name) {
						case "tel@lol.skill_RobberyAfter":
							return event.bool && event.resultSkill;
							break;
						default:
							if (event.player === player || event.skill === "tel@lol.skill_Hijack" || event.skill === "tel@lol.skill_Robbery") return false;
							const info = get.info(event.skill);
							if (!info) return false;
							const skill = info.sourceSkill || (info.sub ? event.skill.slice(0, event.skill.lastIndexOf("_")) : event.skill);
							return skill && (["useCardAfter", "respondAfter"].includes(name) || event.player.hasHistory("useSkill", evt => evt.skill === event.skill)) && event.player.getSkills(null, false, false).contains(skill);
							break;
					}
				},
				content(event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) {
					const isRubbery = event.triggername === "tel@lol.skill_RobberyAfter";
					"step 0"
					event.target = trigger[isRubbery ? "target" : "player"];
					event.reason = isRubbery ? trigger.resultSkill : trigger.skill;
					const info = get.info(event.reason);
						event.skillName = (info.sub || (info.sourceSkill && /_backup$/.test(event.reason))) ? event.reason.slice(0, event.reason.lastIndexOf("_")) : event.reason;
					if (isRubbery) event._result = { bool: true };
					else {
						player.chooseBool()
							.set("prompt", `${get.prompt("tel@lol.skill_Hijack", event.target)}（技能名：【${get.skillTranslation(event.skillName, player)}】）`)
							.set("prompt2", get.skillInfoTranslation("tel@lol.skill_Hijack", player));
					}
					"step 1"
					if (result.bool) {
						player.logSkill("tel@lol.skill_Hijack", event.target);
						event.trigger("tel@lol.skill_Hijack");

						let evt = game.createEvent("tel@lol.skill_Hijack.addSkill", false);
						evt.set("player", player);
						evt.set("skillName", event.skillName);
						evt.setContent(() => {
							player.addTempSkill(event.skillName, { player: ["useSkillAfter", "triggerSkillAfter", "tel@lol.skill_Hijack"] });
							game.log(player, "获得了技能", `#g【${get.translation(event.skillName)}】`);
							game.broadcastAll((player, skill) => {
								var info = lib.skill[skill];
								if (info) {
									if (!info.audioname2) info.audioname2 = {};
									info.audioname2[player.name] = "tel@lol.skill_Hijack.use"
								};
							}, player, event.skillName);
						});
						event.next.remove(evt);
						if (isRubbery) {
							trigger.parent.after.push(evt);
						}
						else {
							trigger.after.push(evt);
						}

						const banSkillName = `${player.playerid}.${event.target.playerid}@${event.skillName}_disable`;
						lib.skill[banSkillName] = (name => ({
							charlotte: true,
							init(player, skill) {
								player.addSkillBlocker(skill);
							},
							onremove(player, skill) {
								player.removeSkillBlocker(skill);
							},
							skillBlocker: skill => skill === name,
							mark: true,
							marktext: "掠",
							intro: {
								name: "潜掠",
								content(storage, player, skill) {
									const list = player.getSkills(null, false, false).filter(skill => skill == name);
									return list.length ? `失效技能：${get.translation(list)}` : "无失效技能";
								}
							}
						}))(event.skillName);
						lib.translate[banSkillName] = "掠";
						event.target.addSkill(banSkillName);

						player.storage["tel@lol.skill_Hijack"] = [event.target, event.skillName];

						const info = get.info(event.skillName);
						if (info) {
							const func = (player, skill) => {
								if (player.hasSkill("tel@lol.skill_Hijack") && player.storage["tel@lol.skill_Hijack"]) {
									const [current, name] = player.storage["tel@lol.skill_Hijack"];
									current.removeSkill(`${player.playerid}.${current.playerid}@${skill}_disable`);
									delete lib.skill[`${player.playerid}.${current.playerid}@${skill}_disable`];
									delete lib.translate[`${player.playerid}.${current.playerid}@${skill}_disable`];
									player.storage["tel@lol.skill_Hijack"] = null;
								}
							}
							if (info.onremove) {
								if (typeof info.onremove === "function") {
									info[`hijack_${player.playerid}_backup`] = info.onremove;
									lib.skill[event.skillName].onremove = (player, skill) => {
										const info = get.info(skill);
										if (info[`hijack_${player.playerid}_backup`]) {
											lib.skill[skill].onremove = info[`hijack_${player.playerid}_backup`];
											info[`hijack_${player.playerid}_backup`](player, skill);
											delete info[`hijack_${player.playerid}_backup`];
										}
										func(player, skill);
									}
								}
							}
							else lib.skill[event.skillName].onremove = (player, skill) => {
								func(player, skill);
								delete lib.skill[skill].onremove;
							}
						}
					}
				}
			},
			"tel@lol.skill_Hijack.hooks": {
				trigger: {
					player: "triggerAfter"
				},
				charlotte: true,
				silent: true,
				onremove(player, skill) {	
					if (_status.event.name === "chooseCharacter") {
						let evt = game.createEvent("tel@lol.skill_Hijack.hooks.regain", false);
						evt.set("player", player);
						evt.set("skill", skill);
						evt.setContent(() => {
							player.addSkill(event.skill);
						});
					}
				},
				filter(event, player) {
					const info = get.info(event.skill);
					if (!info) return false;
					const skill = info.sourceSkill || (info.sub ? event.skill.slice(0, event.skill.lastIndexOf("_")) : event.skill);
					return skill && event.player.hasHistory("useSkill", evt => evt.event.getParent("trigger") === event) && event.player.getSkills(null, false, false).contains(skill);
				},
				content(event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) {
					trigger.trigger("triggerSkillAfter");
				},
				hookTrigger: {
					after: (event, _player, _trigger) => event.name === "trigger" && event.skill != undefined
				}
			},
			"tel@lol.skill_Hijack.use": {
				audio: lolfun.expandExtAudio("英雄联盟扩展", "hijack", 3, "res/audio", "skill/extra")
			},

			"tel@lol.skill_Robbery": {
				audio: lolfun.expandExtAudio("英雄联盟扩展", "robbery", 3, "res/audio", "skill"),
				enable: "phaseUse",
				filter: (event, player) => game.players.some(current => player.canCompare(current)),
				filterTarget: (_card, player, target) => player.canCompare(target),
				content(event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result){
					"step 0"
					player.chooseToCompare(target);
					"step 1"
					if (result.bool)
						player.chooseControl(target.getSkills(null, false, false).filter(item => get.translation(item) !== item))
							.set("prompt", `选择一个技能，视为对${get.translation(target.name)}发动〖${get.skillTranslation("tel@lol.skill_Hijack", player)}〗`);
					else 
						if (!player.isHealthy()) player.recover();
					"step 2"
					if (result.control) {
						event.bool = true;
						event.resultSkill = result.control;
					};
				},
				ai:{
					order:function (){
						var skills=get.player().storage.lol_qianlve;
						if(skills&&Array.isArray(skills)&&skills.some(function (skill){
							return lib.skill[skill].enable;
						}))return 1;
						return 10;
					},
					result:{target:-1},
				},
			},

			// Swain
			"tel@lol.skill_swain": {
				audio: false,
				trigger: {
					global: "phaseBefore",
					player: "enterGame"
				},
				charlotte: true,
				silent: true,
				filter: event => !event.name == "phase" || game.phaseNumber == 0,
				content() {
					game.playAudio("../extension", "英雄联盟扩展", "res/audio", "character", "swain");
				}
			},

			"tel@lol.skill_crowGroup": {
				audio: window.lolfun.expandExtAudio("英雄联盟扩展", "crowGroup", 5, "res/audio", "skill"),
				locked: true,
				group: ["tel@lol.skill_crowGroup.init", "tel@lol.skill_crowGroup.check"],
				ai: {
					viewHandcard: true,
					skillTagFilter: (player, arg, target) => target != player && target.countMark("tel@lol.mark.soulpiece") > 0
				}
			},
			"tel@lol.skill_crowGroup.init": {
				audio: "tel@lol.skill_crowGroup",
				trigger: {
					global: "phaseBefore",
					player: "enterGame"
				},
				locked: true,
				forced: true,
				sourceSkill: "tel@lol.skill_crowGroup",
				filter: event => !event.name == "phase" || game.phaseNumber == 0,
				content(player) {
					let players = game.players.filter(current => current != player)
					player.line(players);
					players.forEach(current => {
						current.markSkill("tel@lol.skill_crowGroup.mark")
					});
				}
			},
			"tel@lol.skill_crowGroup.check": {
				audio: "tel@lol.skill_crowGroup",
				trigger: {
					global: "useCard"
				},
				locked: true,
				forced: true,
				sourceSkill: "tel@lol.skill_crowGroup",
				filter: (event, player) => event.player != player && event.player.getCards("h").some(card => card.name == event.card.name),
				logTarget: "player",
				content(trigger) {
					trigger.player.addMark("tel@lol.mark.soulpiece")
				}
			},
			"tel@lol.skill_crowGroup.mark": {
				mark: true,
				intro: {
					name: "鸦群",
					mark(dialog, _storage, player) {
						let cards = player.getCards("h");
						// if (cards.length) dialog.addAuto(player.countMark("tel@lol.mark.soulpiece") ? cards
						// : `当前拥有牌：${cards.reduce((result, card) =>
						// 	result.includes(card.name) ? result :
						// 		result.concat([get.translation(card.name)]),
						// 	new Array).join("、")}`);
						// else dialog.addText("无手牌");
						if (cards.length) {
							if (game.me.hasSkill("tel@lol.skill_crowGroup")) {
								if (player.countMark("tel@lol.mark.soulpiece")) {
									dialog.addAuto(cards);
								}
								else {
									dialog.addText(`当前拥有牌：${cards.reduce((result, card) =>
										result.includes(get.translation(card.name)) ? result :
											result.concat([get.translation(card.name)]), new Array)}`);
								}
							}
							else {
								dialog.addText(`拥有${get.cnNumber(cards.length)}张牌`);
							}
						}
						else dialog.addText("无手牌");
					}
				}
			},

			"tel@lol.skill_exploitSoul": {
				audio: ["../../extension/英雄联盟扩展/res/audio/skill/exploitSoul", 3],
				locked: true,
				shimingji: true,
				derivation: ["tel@lol.skill_greedeat"],
				init(player, skill) {
					player.storage[skill] = 0;
				},
				group: ["tel@lol.skill_exploitSoul.main", "tel@lol.skill_exploitSoul.achieve", "tel@lol.skill_exploitSoul.fail"]
			},
			"tel@lol.skill_exploitSoul.main": {
				audio: "tel@lol.skill_exploitSoul",
				trigger: {
					global: "damageEnd"
				},
				locked: true,
				forced: true,
				filter: (event, player) => event.player != player && event.player.countMark("tel@lol.mark.soulpiece") > 0,
				logTarget: "player",
				content(trigger, player) {
					"step 0"
					trigger.player.removeMark("tel@lol.mark.soulpiece");
					player.addMark("tel@lol.mark.soulpiece");
					if (!trigger.player.countCards("he")) event.goto(4);
					"step 1"
					player.choosePlayerCard(trigger.player, true, "he", "visible");
					"step 2"
					event.cards = result.cards;
					player.chooseTarget("剥魂：请选择获得牌的角色", true, (_card, _player, target) => target != trigger.player);
					"step 3"
					result.targets[0].gain(event.cards, trigger.player, "give");
					trigger.player.give(event.cards, result.targets[0]);
					"step 4"
					player.recover();
					"step 5"
					event.trigger(event.name);
				}
			},
			"tel@lol.skill_exploitSoul.achieve": {
				audio: window.lolfun.expandExtAudio("英雄联盟扩展", "greedeat", 5, "res/audio", "skill"),
				trigger: {
					player: "tel@lol.skill_exploitSoul.main"
				},
				locked: true,
				forced: true,
				skillAnimation: true,
				animationStr: "剥魂·使命成功",
				animationColor: "thunder",
				filter: (_event, player) => player.storage["tel@lol.skill_exploitSoul"] == 0 && player.countMark("tel@lol.mark.soulpiece") >= 6,
				content(player) {
					player.storage["tel@lol.skill_exploitSoul"] = 1;
					game.log(player, "成功完成使命");
					player.gainMaxHp();
					player.addSkillLog("tel@lol.skill_greedeat");
				}
			},
			"tel@lol.skill_exploitSoul.fail": {
				audio: window.lolfun.expandExtAudio("英雄联盟扩展", "exploitSoul.fail", 5, "res/audio", "skill/extra"),
				trigger: {
					player: "chooseToUseBefore"
				},
				locked: true,
				forced: true,
				skillAnimation: true,
				animationStr: "剥魂·使命失败",
				animationColor: "water",
				filter: (event, player) => player.storage["tel@lol.skill_exploitSoul"] == 0 && event.type == "dying" && player.isDying() && event.dying == player,
				content(player) {
					"step 0"
					player.storage["tel@lol.skill_exploitSoul"] = -1;
					game.log(player, "使命失败");
					player.loseMaxHp();
					"step 1"
					player.recover(player.maxHp - player.hp);
					"step 2"
					let players = game.players.filter(current => current != player);
					player.line(players);
					game.showIdentity();
					"step 3"
					player.addSkillLog("tel@lol.skill_horivision")
				}
			},

			"tel@lol.skill_greedeat": {
				audio: window.lolfun.expandExtAudio("英雄联盟扩展", "greedeat", 5, "res/audio", "skill"),
				trigger: {
					player: "phaseEnd"
				},
				locked: true,
				forced: true,
				content(player) {
					let players = game.players.filter(current => current != player);
					let damagedPlayers = players.filter(current => current.getDamagedHp() > 0);
					if (damagedPlayers.length) {
						player.line(damagedPlayers);
						damagedPlayers.forEach(current => {
							current.damage(1, player);
						});
					}
					else {
						player.line(players);
						players.sortBySeat();
						player.forEach(current => {
							player.gainPlayerCard(current, 1, "he", true)
						});
					}
				}
			},

			"tel@lol.skill_horivision": {
				audio: window.lolfun.expandExtAudio("英雄联盟扩展", "horivision", 5, "res/audio", "skill"),
				group: ["tel@lol.skill_horivision.replace", "tel@lol.skill_horivision.draw"]
			},
			"tel@lol.skill_horivision.replace": {
				audio: "tel@lol.skill_horivision",
				trigger: {
					global: "drawEnd"
				},
				logSkill: "player",
				filter: (event, player) => event.player != player && player.countMark("tel@lol.mark.soulpiece") > 0 && event.player.countMark("tel@lol.mark.soulpiece") > 0 && event.result && event.result.length > 0,
				content(player) {
					"step 0"
					let cards1 = get.cards(player.countMark("tel@lol.mark.soulpiece"));
					let cards2 = get.bottomCards(player.countMark("tel@lol.mark.soulpiece"));
					for (let i = cards1.length - 1; i >= 0; --i) {
						ui.cardPile.insertBefore(cards1[i], ui.cardPile.firstChild);
					}
					for (let i = 0; i < cards2.length; ++i) {
						ui.cardPile.appendChild(cards[i]);
					}
					game.updateRoundNumber();
					event.cards = [cards1, cards2];
					"step 1"
					player.chooseCardButton("选择要替换的牌", true, event.cards, [1, event.cards.length]).set('ai', function (button) {
						if (ui.selected.buttons.length == 0) return 1;
						return 0;
					});
					'step 2'
					if (result.bool) {
						for (var i = 0; i < result.cards.length; i++) {
							event.cards.remove(result.links[i]);
						}
						event.togive = result.links.slice(0);
						player.chooseTarget(true).set('ai', function (target) {
							var att = get.attitude(_status.event.player, target);
							if (_status.event.enemy) {
								return -att;
							}
							else if (att > 0) {
								return att / (1 + target.countCards('h'));
							}
							else {
								return att / 100;
							}
						}).set('enemy', get.value(event.togive[0], player, 'raw') < 0);
					}
				}
			},
			"tel@lol.skill_horivision.draw": {
				audio: "tel@lol.skill_horivision",
				trigger: {
					player: "phaseDraw"
				},
				locked: true,
				forced: true,
				filter: (_event, player) => player.countMark("tel@lol.mark.soulpiece") > 0 && player.getExpansions("tel@lol.skill_horivision").length > 0,
				content(player) {
					"step 0"
					let num = player.countMark("tel@lol.mark.soulpiece");
					player.removeMark("tel@lol.mark.soulpiece", num);
					let cards = player.getExpansions("tel@lol.skill_horivision");
					if (cards.length <= num) {
						player.gain(cards, "gain");
						event.finish();
					}
					else {
						player.chooseCardButton("请选择获得的牌", num, cards, true);
					}
					"step 1"
					player.gain(result.links, "gain");
				}
			},

			"tel@lol.skill_decentralization": {
				audio: window.lolfun.expandExtAudio("英雄联盟扩展", "decentralization", 5, "res/audio", "skill"),
				trigger: {
					global: "phaseBefore",
					player: "enterGame"
				},
				locked: true,
				forced: true,
				zhuSkill: true,
				forbid: ["boss", "guozhan", "doudizhu"],
				firstDo: true,
				filter: (event, player) => player.hasZhuSkill("tel@lol.skill_decentralization") && (!event.name == "phase" || game.phaseNumber == 0),
				content(player) {
					let players = game.players.filter(current => current != player)
					player.line(players);
					players.forEach(current => {
						if (current.identity == "zhong") {
							// current.setIdentity("zhu");
							current.identity = "zhu";
							current.addSkill("tel@lol.skill_decentralization2");
						}
					});
				}
			},
			"tel@lol.skill_decentralization2": {
				group: "tel@lol.skill_decentralization.show"
			},
			"tel@lol.skill_decentralization.show": {
				audio: "tel@lol.skill_decentralization",
				enable: "phaseUse",
				skillAnimation: true,
				animationColor: "thunder",
				content(player) {
					player.showIdentity();
					let mode = get.mode();
					if (mode == "identity" || (mode == "versus" && _status.mode == "four")) {
						if (player.name && lib.character[player.name]) {
							let skills = lib.character[player.name][3];
							player.storage.zhuSkill_decentralization = new Array;
							for (let i = 0; i < skills.length; i++) {
								let info = lib.skill[skills[i]];
								if (info.zhuSkill) {
									player.storage.zhuSkill_decentralization.push(skills[i]);
									if (info.init) {
										info.init(player);
									}
									if (info.init2) {
										info.init2(player);
									}
								}
							}
						}
					}
					player.changeGroup("tel_lol_nuo");
					player.removeSkill("tel@lol.skill_decentralization2");
					game.zhu = player;
				},
				ai: {
					order: 9,
					result: {
						player: (..._args) => 1
					}
				}
			},

			// Yasuo 亚索
			// - yasuotheUnforgiven 斩钢
			"tel@lol.skill_yasuotheUnforgiven": {
				audio: window.lolfun.expandExtAudio("英雄联盟扩展", "yasuotheUnforgiven", 5, "res/audio", "skill"),
				locked: false,
				group: [
					"tel@lol.skill_yasuotheUnforgiven_mod",
					"tel@lol.skill_yasuotheUnforgiven_viewAs",
					"tel@lol.skill_yasuotheUnforgiven_useJiu"
				],
			},
			"tel@lol.skill_yasuotheUnforgiven_mod": {
				charlotte: true,
				sourceSkill: "tel@lol.skill_yasuotheUnforgiven",
				mod: {
					cardUsable: (card, _player, num) => num ? num + 10000 * Number(get.name(card) == "sha") : num,
					targetInRange: (card, player, target, result) => (get.name(card) != "sha" || (num => num - 10000 * Number(get.suit(card) != "club") > 0)(player.getCardUsable(card))) && result,
					// cardUsable: (card, player, num) => (get.name(card) == "sha" && get.suit(card) == "club") ? Infinity : num
				},
			},
			"tel@lol.skill_yasuotheUnforgiven_viewAs": {
				audio: "tel@lol.skill_yasuotheUnforgiven",
				enable: ["chooseToUse", "chooseToRespond"],
				viewAs: {
					name: "sha",
				},
				viewAsFilter: player => player.countCards("hes", { color: "black" }) > 0,
				filterCard: card => get.color(card) == "black",
				position: "hes",
				prompt: "将一张黑色牌当【杀】使用或打出",
				check: card => (value => _status.event.name == "chooseToRespond" ?
					1 / Math.max(0.1, value) : 5 - value)(get.value(card)),
				ai: window.lolTemplate.aiSha,
			},
			"tel@lol.skill_yasuotheUnforgiven_useJiu": {
				audio: "tel@lol.skill_yasuotheUnforgiven",
				trigger: {
					player: "useCard"
				},
				locked: true,
				forced: true,
				sourceSkill: "tel@lol.skill_yasuotheUnforgiven",
				filter: event => get.name(event.card) == "jiu",
				content() {
					if (!player.hasSkill("tel@lol.skill_yasuotheUnforgiven_useJiu2"))
						player.addTempSkill("tel@lol.skill_yasuotheUnforgiven_useJiu2", { player: "noTimeEnd" });
					++player.storage["tel@lol.skill_yasuotheUnforgiven_useJiu2"];
					player.markSkill("tel@lol.skill_yasuotheUnforgiven_useJiu2");
				}
			},
			"tel@lol.skill_yasuotheUnforgiven_useJiu2": {
				audio: "tel@lol.skill_yasuotheUnforgiven",
				trigger: {
					source: "damageSource"
				},
				locked: true,
				forced: true,
				sourceSkill: "tel@lol.skill_yasuotheUnforgiven",
				onremove: true,
				logTarget: "player",
				init(player, skill) {
					player.storage[skill] = 0;
				},
				filter: event => event.card != undefined && event.card.name == "sha" && event.player && event.player.isAlive(),
				content(trigger, player) {
					trigger.player.addTempSkill("tel_lol_xuanyun");
					player.removeMark("tel@lol.skill_yasuotheUnforgiven_useJiu2", 1);
					if (!player.hasMark("tel@lol.skill_yasuotheUnforgiven_useJiu2")) {
						player.removeSkill("tel@lol.skill_yasuotheUnforgiven_useJiu2");
						player.unmarkSkill("tel@lol.skill_yasuotheUnforgiven_useJiu2");
					}
				},
				mark: true,
				marktext: "斩",
				intro: {
					name: "斩钢",
					content: storage => [
						`你的下${get.cnNumber(storage)}张【杀】造成伤害时对目标施加【眩晕】`,
						"【眩晕】锁定技，你的非锁定技失效且无法响应其他角色使用的牌"
					].join("</br>"),
					markcount: "mark"
				}
			},

			// - sweepingBlade 踏风
			"tel@lol.skill_sweepingBlade": {
				audio: window.lolfun.expandExtAudio("英雄联盟扩展", "sweepingBlade", 2, "res/audio", "skill"),
				locked: true,
				group: [
					"tel@lol.skill_sweepingBlade_mod",
					"tel@lol.skill_sweepingBlade_connect",
					"tel@lol.skill_sweepingBlade_damage"
				]
			},
			"tel@lol.skill_sweepingBlade_mod": {
				charlotte: true,
				sourceSkill: "tel@lol.skill_sweepingBlade",
				mod: {
					globalFrom: (from, _to, distance) => distance - from.getHistory("useCard", evt => evt.finished && evt.card.name == "sha").length * Number(_status.currentPhase == from)
				}
			},
			"tel@lol.skill_sweepingBlade_connect": {
				audio: "tel@lol.skill_sweepingBlade",
				trigger: {
					player: "useCardEnd"
				},
				locked: true,
				forced: true,
				sourceSkill: "tel@lol.skill_sweepingBlade",
				filter: (event, player) => player.isPhaseUsing() && event.card.name == "sha",
				content(event, trigger, player) {
					if (player.hasSkill("tel@lol.skill_sweepingBlade_connect2")) return;
					if (!game.hasPlayer(current => get.distance(player, current) > 1)) {
						player.addTempSkill("tel@lol.skill_sweepingBlade_connect2");
						player.addMark("tel@lol.mark_windKill", 1);
						let next = game.createEvent("tel@lol.skill_sweepingBlade_connect", false);
						next.set("player", player)
						event.next.remove(next);
						next.setContent(() => {
							player.useCard({ name: "jiu", isCard: true }, player);
							// player.chooseUseTarget({ name: "jiu", isCard: "true" }, true, "nothrow", "nopopup");
						});
						if (trigger.parent) trigger.parent.next.push(next);
						// player.useCard({name: "jiu", isCard: true}, player);
					}
				}
			},
			"tel@lol.skill_sweepingBlade_connect2": {},
			"tel@lol.skill_sweepingBlade_damage": {
				audio: "tel@lol.skill_sweepingBlade",
				trigger: {
					player: "damageBegin4"
				},
				locked: true,
				forced: true,
				sourceSkill: "tel@lol.skill_sweepingBlade",
				filter: (_event, player) => player.hasMark("tel@lol.mark_windKill"),
				content(player) {
					player.removeMark("tel@lol.mark_windKill");
					if (!player.hasMark("tel@lol.mark_windKill")) player.unmarkSkill("tel@lol.mark_windKill");
					// player.changeHujia(1);
					const card = game.createCard("lolkz_hudun");
					player.addJudge(card);
				}
			},

			"tel@lol.skill_lastBreath": {
				audio: window.lolfun.expandExtAudio("英雄联盟扩展", "lastBreath", 4, "res/audio", "skill"),
				trigger: {
					player: "phaseUseEnd"
				},
				direct: true,
				filter: (_event, player) => player.hasMark("tel@lol.mark_windKill") && game.players.some(current => current.hasSkill("tel_lol_xuanyun")),
				content(event, result, player) {
					"step 0"
					player.chooseTarget(get.prompt2("tel@lol.skill_lastBreath"), (_card, _player, target) => target.hasSkill("tel_lol_xuanyun"));
					"step 1"
					if (result.bool) {
						player.logSkill("tel@lol.skill_lastBreath", result.targets);
						player.removeMark("tel@lol.mark_windKill");
						result.targets[0].damage(1, player);
						let next = player.phaseUse();
						event.next.remove(next);
						let phase = event.getParent("phase");
						if (phase) phase.next.push(next);
						let addBuffEvt = game.createEvent("tel@lol.skill_lastBreath_addBuff", false);
						event.next.remove(addBuffEvt);
						next.next.push(addBuffEvt);
						addBuffEvt.set("player", player);
						addBuffEvt.setContent(() => {
							player.addTempSkill("tel@lol.skill_lastBreath_buff", "phaseUseEnd");
						})
					}
				}
			},
			"tel@lol.skill_lastBreath_buff": {
				audio: "tel@lol.skill_lastBreath",
				trigger: {
					player: "useCardToPlayered"
				},
				locked: true,
				forced: true,
				sourceSkill: "tel@lol.skill_lastBreath",
				logTarget: "target",
				filter: event => event.target != undefined && event.card != undefined && event.card.name == "sha" && get.color(event.card) == "black",
				content(trigger) {
					trigger.target.addTempSkill("qinggang2");
					trigger.target.storage.qinggang2.add(trigger.card);
					trigger.target.markSkill("qinggang2");
					game.log(trigger.target, "当前防具技能已失效");
				},
				mark: true,
				marktext: "狂",
				intro: {
					name: "狂风绝息斩",
					content: "使用杀无视目标角色防具"
				}
			},

			// Yone 永恩
			// - mortalSteel 错玉
			"tel@lol.skill_mortalSteel": {
				audio: window.lolfun.expandExtAudio("英雄联盟扩展", "mortalSteel", 5, "res/audio", "skill"),
				locked: true,
				derivation: ["tel_lol_xuanyun"],
				group: [
					"tel@lol.skill_mortalSteel_mod",
					"tel@lol.skill_mortalSteel_effect",
					"tel@lol.skill_mortalSteel_useJiu",
					"tel@lol.skill_mortalSteel_afterLink"
				]
			},
			"tel@lol.skill_mortalSteel_mod": {
				charlotte: true,
				sourceSkill: "tel@lol.skill_mortalSteel",
				mod: {
					cardnature(card, player, nature) {
						if (get.name(card) == "sha") {
							switch (get.color(card)) {
								case "red":
									return "fire";

								case "black":
									return "thunder";
							}
						}
						return nature;
					},
					cardUsable(card, player, num) {
						if (get.name(card) == "sha" && player.isPhaseUsing()) {
							const evts = player.getHistory("useCard", evt => evt.isPhaseUsing() && evt.card.name == "sha");
							if (evts.length > 0) {
								const color = get.color(evts[evts.length - 1].card);
								if (get.color(card) != color) return num + 1;
							}
						}
						return num;
					},
					targetInRange: (card, _player, _target, result) => (get.name(card) == "sha" && get.color(card) == "red") ? true : result
				}
			},
			"tel@lol.skill_mortalSteel_effect": {
				audio: "tel@lol.skill_mortalSteel",
				trigger: {
					player: "useCardToPlayered"
				},
				locked: true,
				forced: true,
				sourceSkill: "tel@lol.skill_mortalSteel",
				logTarget: "target",
				filter: event => event.target != undefined && event.card != undefined && event.card.name == "sha" && get.color(event.card) == "black",
				content(trigger) {
					trigger.target.addTempSkill("qinggang2");
					trigger.target.storage.qinggang2.add(trigger.card);
					trigger.target.markSkill("qinggang2");
					game.log(trigger.target, "当前防具技能已失效");
				}
			},
			"tel@lol.skill_mortalSteel_useJiu": {
				audio: "tel@lol.skill_mortalSteel",
				trigger: {
					player: "useCard"
				},
				locked: true,
				forced: true,
				sourceSkill: "tel@lol.skill_mortalSteel",
				filter: event => get.name(event.card) == "jiu",
				content() {
					if (!player.hasSkill("tel@lol.skill_mortalSteel_useJiu2"))
						player.addTempSkill("tel@lol.skill_mortalSteel_useJiu2", { player: "noTimeEnd" });
					++player.storage["tel@lol.skill_mortalSteel_useJiu2"];
					player.markSkill("tel@lol.skill_mortalSteel_useJiu2");
				}
			},
			"tel@lol.skill_mortalSteel_useJiu2": {
				audio: "tel@lol.skill_mortalSteel",
				trigger: {
					source: "damageSource"
				},
				locked: true,
				forced: true,
				sourceSkill: "tel@lol.skill_mortalSteel",
				onremove: true,
				logTarget: "player",
				init(player, skill) {
					player.storage[skill] = 0;
				},
				filter: event => event.card != undefined && event.card.name == "sha" && event.player && event.player.isAlive(),
				content(trigger, player) {
					trigger.player.addTempSkill("tel_lol_xuanyun");
					player.removeMark("tel@lol.skill_mortalSteel_useJiu2");
					if (!player.hasMark("tel@lol.skill_mortalSteel_useJiu2")) {
						player.removeSkill("tel@lol.skill_mortalSteel_useJiu2");
						player.unmarkSkill("tel@lol.skill_mortalSteel_useJiu2");
					}
				},
				mark: true,
				marktext: "斩",
				intro: {
					name: "错玉",
					content: storage => [
						`你的下${get.cnNumber(storage)}张【杀】造成伤害时对目标施加【眩晕】`,
						"【眩晕】锁定技，你的非锁定技失效且无法响应其他角色使用的牌"
					].join("</br>"),
					markcount: "mark"
				}
			},
			"tel@lol.skill_mortalSteel_afterLink": {
				audio: "tel@lol.skill_mortalSteel",
				trigger: {
					player: "linkAfter"
				},
				locked: true,
				forced: true,
				sourceSkill: "tel@lol.skill_mortalSteel",
				filter: (_event, player) => !((player.getStat("tel@lol.skill_mortalSteel_afterLink") || new Array).includes(player.isLinked())),
				content(player) {
					let stat = player.getStat();
					if (!stat["tel@lol.skill_mortalSteel_afterLink"]) stat["tel@lol.skill_mortalSteel_afterLink"] = new Array;
					stat["tel@lol.skill_mortalSteel_afterLink"].push(player.isLinked());
					// const cardx = get.cardPile(card => card.name == "sha", player.isLinked() ? "cardPile" : "discardPile");
					const cardx = get.cardPile(card => card.name == "sha", "cardPile");
					if (cardx) player.gain(cardx, "gain2");
				}
			},

			// - spiritCleave 凛神
			"tel@lol.skill_spiritCleave": {
				audio: window.lolfun.expandExtAudio("英雄联盟扩展", "spiritCleave", 3, "res/audio", "skill"),
				trigger: {
					player: "phaseUseBegin"
				},
				content(player) {
					"step 0"
					player.link(true);
					"step 1"
					player.addTempSkill("tel@lol.skill_spiritCleave2", "phaseUseEnd");
				}
			},
			"tel@lol.skill_spiritCleave2": {
				audio: "tel@lol.skill_spiritCleave",
				charlotte: true,
				sourceSkill: "tel@lol.skill_spiritCleave",
				group: [
					"tel@lol.skill_spiritCleave2_damage",
					"tel@lol.skill_spiritCleave2_linkAfter"
				],
				mark: true,
				marktext: "凛",
				intro: {
					name: "凛神",
					content: [
						"·当你对一名其他角色造成伤害时，你与其横置。",
						"·当你横置或重置后，你回复一点体力。"
					].join("</br>")
				}
			},
			"tel@lol.skill_spiritCleave2_damage": {
				audio: "tel@lol.skill_spiritCleave",
				trigger: {
					source: "damageBegin2",
				},
				locked: true,
				forced: true,
				logTarget: (event, player) => event.player.isAlive() ? event.player : false,
				filter: (event, player) => event.player.isAlive() || player.isAlive(),
				content(trigger, player) {
					if (player.isAlive()) player.link(true);
					if (trigger.player.isAlive()) trigger.player.link(true);
				},
			},
			"tel@lol.skill_spiritCleave2_linkAfter": {
				audio: "tel@lol.skill_spiritCleave",
				trigger: {
					player: "linkAfter"
				},
				locked: true,
				forced: true,
				filter: (_event, player) => !player.isHealthy(),
				content(player) {
					player.recover();
				}
			},

			// - fateSealed 封尘
			"tel@lol.skill_fateSealed": {
				audio: window.lolfun.expandExtAudio("英雄联盟扩展", "fateSealed", 1, "res/audio", "skill"),
				trigger: {
					player: "phaseUseAfter"
				},
				locked: true,
				forced: true,
				filter: (_event, player) => player.getStat("damage"),
				content(player) {
					"step 0"
					const evts = player.getHistory("sourceDamage", evt => evt.player != undefined && evt.player.isAlive());
					if (evts.length) {
						let players = new Array;
						for (const evt of evts) {
							const playerx = evt.player;
							if (playerx != undefined && !players.includes(playerx))
								players.push(playerx);
						}
						if (players.length) {
							player.line(players);
							players.sortBySeat();
							players.forEach(current => {
								current.link(true);
							});
						}
					}
					"step 1"
					player.chooseToUse((card, player, event) => get.name(card) != "sha" ? false :
						lib.filter.filterCard.call(_status.event, card, player, event),
						"封尘：是否对自己使用一张【杀】")
						.set("complexSelect", true)
						.set("sourcex", player)
						.set("oncard", card => {
							card["tel@lol.skill_fateSealed"] = true;
						}).set("filterTarget", (card, player, target) =>
							!(target != _status.event.sourcex && !ui.selected.targets.contains(_status.event.sourcex)))
					"step 2"
					if (result.bool && player.getHistory("sourceDamage", evt => evt.card["tel@lol.skill_fateSealed"]).length > 0) {
						let num = 0, list = new Array;
						for (const current of game.players.concat(game.dead)) {
							current.getHistory("damage", evt => {
								if (evt.card && evt.card["tel@lol.skill_fateSealed"]) {
									num += evt.num;
									if (!list.includes(current)) list.push(current);
								}
							})
						}
						list.forEach(current => {
							current.addTempSkill("tel_lol_xuanyun");
						});
						// player.changeHujia(num);
						for (let i = 0; i < num; ++i) {
							const card = game.createCard("lolkz_hudun");
							player.addJudge(card);
						}
					}
				}
			},

			// Zed
			"tel@lol.skill.zed": {
				audio: false,
				trigger: {
					global: "phaseBefore",
					player: "enterGame"
				},
				charlotte: true,
				silent: true,
				filter: event => !event.name == "phase" || game.phaseNumber == 0,
				content() {
					player.addSkill("tel@lol.status.zed_backcharacter")
				}
			},

			"tel@lol.status.zed_backcharacter": {
				audio: window.lolfun.expandExtAudio("英雄联盟扩展", "sechell", 3, "res/audio", "skill"),
				charlotte: true,
				forceDie: true,
				init(player) {
					if (player.storage["tel@lol.status.zed_backcharacter"]) return;
					player.storage["tel@lol.status.zed_backcharacter"] = {
						origin: null,
						originHp: null,
						originMaxHp: null,
						originGroup: null,
						backHp: 2,
						backMaxHp: 2
					}
				},
				group: ["tel@lol.status.zed_backcharacter_turnOver", "tel@lol.status.zed_backcharacter_die"]
			},
			"tel@lol.status.zed_backcharacter_turnOver": {
				audio: "tel@lol.status.zed_backcharacter",
				trigger: {
					player: "turnOverEnd"
				},
				charlotte: true,
				silent: true,
				sourceSkill: "tel@lol.status.zed_backcharacter",
				filter: (_event, player) => player.storage["tel@lol.status.zed_backcharacter"].backHp > 0 && player.storage["tel@lol.status.zed_backcharacter"].backMaxHp >= player.storage["tel@lol.status.zed_backcharacter"].backHp,
				content(player) {
					if (player.isTurnedOver()) {
						player.storage["tel@lol.status.zed_backcharacter"].originHp = player.hp;
						player.storage["tel@lol.status.zed_backcharacter"].originMaxHp = player.maxHp;
						let evt = game.createEvent("tel@lol.status.zed_backcharacter_turnOver_contentX", false);
						evt.set("player", player);
						evt.setContent(lib.skill["tel@lol.status.zed_backcharacter_turnOver"].contentx);
					}
					else {
						player.storage["tel@lol.status.zed_backcharacter"].backHp = player.hp;
						player.storage["tel@lol.status.zed_backcharacter"].backMaxHp = player.maxHp;
						player.reinit("tel@lol.character_Zed_shadow", player.storage["tel@lol.status.zed_backcharacter"].origin);
						player.changeGroup(player.storage["tel@lol.status.zed_backcharacter"].originGroup)
						player.maxHp = player.storage["tel@lol.status.zed_backcharacter"].originMaxHp;
						player.hp = player.storage["tel@lol.status.zed_backcharacter"].originHp;
						player.update();
					}
				},
				contentx(event, player) {
					"step 0"
					if (player.name2 != undefined) {
						player.chooseControl(player.name1, player.name2).set("prompt", "请选择要更换的武将牌");
					}
					else {
						event._result = { control: player.name };
					}
					"step 1"
					player.reinit(result.control, "tel@lol.character_Zed_shadow");
					player.hp = player.storage["tel@lol.status.zed_backcharacter"].backHp;
					player.maxHp = player.storage["tel@lol.status.zed_backcharacter"].backMaxHp;
					player.storage["tel@lol.status.zed_backcharacter"].originGroup = player.group;
					player.changeGroup("tel_lol_ai");
					player.storage["tel@lol.status.zed_backcharacter"].origin = result.control;
					player.update();
				}
			},
			"tel@lol.status.zed_backcharacter_die": {
				audio: "tel@lol.status.zed_backcharacter",
				trigger: {
					player: "dieBegin"
				},
				charlotte: true,
				silent: true,
				priority: 3,
				forceDie: true,
				sourceSkill: "tel@lol.status.zed_backcharacter",
				filter: (_event, player) => [player.name1, player.name2, player.name].includes("tel@lol.character_Zed_shadow"),
				content() {
					player.storage["tel@lol.status.zed_backcharacter"].backHp = 0;
					player.storage["tel@lol.status.zed_backcharacter"].backMaxHp = 0;
					player.reinit("tel@lol.character_Zed_shadow", player.storage["tel@lol.status.zed_backcharacter"].origin);
					player.maxHp = player.storage["tel@lol.status.zed_backcharacter"].originMaxHp;
					player.hp = player.storage["tel@lol.status.zed_backcharacter"].originHp;
					player.update();
					trigger.cancel();
				}
			},

			"tel@lol.skill_sechell": {
				audio: window.lolfun.expandExtAudio("英雄联盟扩展", "sechell", 3, "res/audio", "skill"),
				trigger: {
					target: "useCardToTargeted"
				},
				direct: true,
				filter: (event, player) => event.player != player && game.countPlayer(current => ![player, event.player].includes(current)) > 0,
				content(trigger, player) {
					"step 0"
					player.chooseTarget(get.prompt2("tel@lol.skill_sechell"), 1, (_card, player, target) =>
						![player, _status.event.source].includes(target))
						.set("source", trigger.player);
					"step 1"
					if (result.bool) {
						player.logSkill("tel@lol.skill_sechell", result.targets);
						game.swapSeat(player, result.targets[0]);
						let evt = game.createEvent("tel@lol.skill_sechellContentX");
						evt.set("player", player);
						evt.set("target", result.targets[0]);
						evt.set("evt", trigger);
						evt.setContent(lib.skill["tel@lol.skill_sechell"].contentx);
					}
				},
				contentx(event, player, target) {
					"step 0"
					game.delay();
					"step 1"
					target.addMark("tel@lol.mark_soulkill");
					if (!target.hasSkill("tel@lol.status.zed_backcharacter")) target.addSkill("tel@lol.status.zed_backcharacter");
					"step 2"
					// player.turnOver();
					target.turnOver();
					"step 3"
					let useCard_evt = event.evt.getParent();
					let bool = false;
					for (let i = 0; i < useCard_evt.targets.length; ++i) {
						if (useCard_evt.targets[i] == player) {
							useCard_evt.targets[i] = target;
							bool = true;
						}
					}
					if (bool) {
						game.log(player, "将", event.evt.card, "的目标改为", target);
						event.evt.player.line(target);
						game.delay();
					}
				}
			},

			"tel@lol.skill_ghokians": {
				audio: window.lolfun.expandExtAudio("英雄联盟扩展", "ghokians", 3, "res/audio", "skill"),
				locked: true,
				group: ["tel@lol.skill_ghokians_damage", "tel@lol.skill_ghokians_damage2"]
			},
			"tel@lol.skill_ghokians_damage": {
				trigger: {
					source: "damageSource"
				},
				locked: true,
				forced: true,
				filter: (event, player) => event.player != player,
				content(trigger) {
					trigger.player.addMark("tel@lol.mark_soulkill");
				}
			},
			"tel@lol.skill_ghokians_damage2": {
				trigger: {
					global: "damageSource"
				},
				locked: true,
				forced: true,
				filter: (event, player) => event.player.hasMark("tel@lol.mark_soulkill") && event.source && [event.source.name1, event.source.name2, event.source.name].includes("tel@lol.character_Zed_shadow"),
				content(trigger, player) {
					trigger.player.removeMark("tel@lol.mark_soulkill");
					trigger.player.damage(1, player);
				}
			},

			"tel@lol.skill_shadowkill": {
				audio: window.lolfun.expandExtAudio("英雄联盟扩展", "shadowkill", 3, "res/audio", "skill"),
				trigger: {
					global: "useCardToTarget",
				},
				locked: true,
				forced: true,
				filter: event => ["basic", "trick"].includes(get.type(event.card)) && (event.player.hasSkill("tel@lol.skill_sechell") || (event.player.hasSkill("tel@lol.status.zed_backcharacter") && event.player.storage["tel@lol.status.zed_backcharacter"].origin == "tel@lol.character_Zed")),
				content(trigger, player) {
					player.useCard({ name: trigger.card.name, isCard: true }, [trigger.target]);
				}
			},

			"tel@lol.skill_soulkill": {},

			"tel@lol.skill_hideshadow": {
				audio: window.lolfun.expandExtAudio("英雄联盟扩展", "hideshadow", 3, "res/audio", "skill"),
				trigger: {
					player: "damageEnd"
				},
				locked: true,
				forced: true,
				content(player) {
					player.turnOver();
				}
			}
		},
		translate: {
			// Character

			"lol_aoen": "奥恩",
			"lol_yi": "易",
			"lolkz_ateruisi": "阿忒瑞斯",
			"lolkz_panshen": "潘森",
			"lolkz_gulajiasi": "古拉加斯",
			"lolkz_jiakesi": "贾克斯",
			"lolkz_luxian": "卢锡安",
			"lolkz_seti": "瑟提",
			"lolkz_airuilike": "艾瑞莉娅",
			"lolkz_kasading": "卡萨丁",
			"lolkz_cuisite": "崔斯特",
			"lolkz_yasuo": "亚索",
			"lolkz_gailun": "盖伦",
			"lolkz_bulong": "布隆",
			"lolkz_glfs": "格雷福斯",
			"lol_foyege": "佛耶戈",
			"lol_boss_foyege": "佛耶戈",
			"lol_yuanling_male": "怨灵",
			"lol_yuanling_female": "怨灵",
			"lol_youmi": "悠米",
			"lol_taidamier": "泰达米尔",
			"lol_yatuokesi": "亚托克斯",
			"lol_woliber": "沃利贝尔",
			"lol_class_暗影岛": "暗影岛",
			"lol_class_衍生": "衍生（仅点将可选）",
			"lolkz_yone": "永恩",
			"lolkz_zhake": "扎克",
			"lolkz_beierweisi": "卑尔维斯",
			"lol_feiaona": "菲奥娜",
			"lol_sake": "萨科",
			"lol_delaiwen": "德莱文",
			"lol_modekaisa": "莫德凯撒",
			"lol_boss_modekaisa": "莫德凯撒",
			"lol_paike": "派克",
			"lol_ruiwen": "锐雯",
			"lol_jinkesi": "金克丝",
			"lol_jin": "烬",
			"lol_cuishi": "锤石",
			"lol_boss_cuishi": "锤石",
			"lol_yingmo": "影魔",
			"lol_yanmo": "炎魔",
			"lol_kaier": "凯尔",
			"lol_kaier_ab": "正义天使",
			"lol_suoer": "奥利瑞安·索尔",
			"lol_suoer_ab": "铸星龙王",
			"lol_zuoyi": "佐伊",
			tel_nlol_Nautilus: "诺提勒斯",
			"tel_tlol_TahmKench": "塔姆·肯奇",
			// Mark
			"tel_lol_foxfire": "狐火",

			"tel@lol.mark_bullet": "弹药",
			"tel@lol.mark_soulkill": "灭魂",
			"tel@lol.mark.soulpiece": "魂屑",
			"tel@lol.mark_windKill": "踏风",

			// Effects
			"tel_lol_nishui": "溺水",
			"tel_lol_nishui_info": "锁定技，你无法使用或打出牌。",
			"tel_lol_xuanyun": "眩晕",
			"tel_lol_xuanyun_info": "锁定技，你的非锁定技失效且无法响应其他角色使用的牌。",

			// Actions
			"tel_lol_charmure": "魅惑",
			"tel_lol_charmure_info": "目标角色交给你一张牌，然后本回合其无法对你牌且其无法响应你使用的牌。",

			// '
			"lol_bossSkill_cuishi": "挑战",
			"lol_bossSkill_cuishi_info": "摸牌阶段，你可以多摸两张牌；结束阶段，你可以摸两张牌；当你击杀一名其他角色时，你增加一点体力上限并回复一点体力。",
			"lol_yingsha": "影煞",
			"lol_yingsha_info": "待定",
			"lol_heiying": "黑影",
			"lol_heiying_info": "待定",
			"lol_anjie": "暗界",
			"lol_anjie_info": "待定",
			"lol_juxi": "惧袭",
			"lol_juxi_info": "待定",
			"lol_zhishen": "炙身",
			"lol_zhishen_info": "待定",
			"lol_yanzai": "炎灾",
			"lol_yanzai_info": "待定",
			"lol_zhuoshao": "灼烧",
			"lol_zhuoshao_info": "待定",

			// Nasus
			"tel_nlol_Nasus": "内瑟斯",

			"tel_lol_fetchSoul": "汲魂",
			"tel_lol_fetchSoul_die": "汲魂",
			"tel_lol_fetchSoul_addDamage": "汲魂",
			"tel_lol_fetchSoul_info": "锁定技，每当一名角色阵亡时，你增加一点体力上限，【杀】的伤害永久+1；当“枯萎”角色存活时，你视为拥有技能“轮回”。",

			"lol_shigu": "蚀骨",
			"lol_shigu_info": "限定技，出牌阶段，你可以弃置所有手牌令一名角色获得“枯萎”。",

			"lol_lunhui": "轮回",
			"lol_lunhui_info": "觉醒技，当你阵亡时，清除场上角色的“枯萎”，你复原武将牌和技能，将体力值回复至上限并摸四张牌，然后重新加入游戏。",

			"lol_kuwei": "枯萎",
			"lol_kuwei_info": "锁定技，你对内瑟斯造成伤害时取消之；当你成为内瑟斯的目标时，你不能响应，然后移除此技能。",
			"lol_yanxi": "炎息",
			"lol_yanxi_info": "锁定技·你免疫火焰伤害；当你的牌指定目标时，其获得“易损”；你对“易损”角色造成的伤害改为火焰伤害，移除“易损”摸一张牌，若其没有手牌则伤害+1，",
			"lol_yisun": "易损",
			"lol_jiangshen": "匠神",
			"lol_jiangshen_info": "出牌阶段限一次，你弃置一张牌并指定一名角色，选择一项：①你令其获得一张游戏内任意装备的同名虚拟牌（弃置时移出游戏）②你弃置其一张牌，若为装备牌则视为你使用一张不能被抵消的【铁索连环】，然后对其造成1点伤害",
			"lol_mingyun": "命运",
			"lol_mingyun_info": "锁定技，当你的武器栏没有或不是【新命运】时，你装备之。",
			"lol_manli": "蛮力",
			"lol_manli_info": "锁定技·你的牌点数+{你的已损失体力值x2}；当你使用【杀】时，若此【杀】点数大于其手牌数的两倍，则此【杀】伤害+1；若此【杀】点数大于其响应的【闪】点数，则此【杀】仍然生效",
			"lol_buqu": "不屈",
			"lol_buqu_info": "锁定技·当你濒死时，你亮起牌堆顶的一张牌并置于武将牌上，若此牌与武将牌上的牌花色均不相同，则取消濒死结算；不屈状态下，每回复一点体力移去一张不屈牌",
			"lol_pobai": "破败",
			"lol_pobai_info": "锁定技，被你指定为唯一目标的角色获得一枚“破败”；当你对一名拥有“破败”的角色造成伤害后，你移去其一枚“破败”并回复一点体力。",
			"lol_guanhun": "贯魂",
			"lol_boss_guanhun": "贯魂",
			"lol_guanhun_info": "锁定技，当一名“破败”角色阵亡时，你将武将牌替换为其武将，与其交换位置，然后恢复你被废除的装备栏，获得其{非『限定』『主公』技的所有技能}直到下一名角色阵亡或发动技能『决命』时，然后你回复一点体力并开始额外一回合。",
			"lol_boss_guanhun_info": "锁定技，当一名“破败”角色阵亡时，你将武将牌替换为其武将，与其交换位置，然后恢复你被废除的装备栏，获得其{非『限定』『主公』技的所有技能}直到下一名角色阵亡或发动技能『决命』时，然后你回复一点体力并开始额外一回合。",
			"lol_jueming": "决命",
			"lol_jueming_info": "出牌阶段限一次，你可以废除你的部分装备栏并失去等量体力，选择一名角色令其获得一枚“破败”并对其造成{已废除装备栏数量}点伤害。",
			"lol_youzhou": "幽咒",
			"lol_boss_youzhou": "幽咒",
			"lol_youzhou_info": "主公技，锁定技，『幽』势力角色阵亡时，将角色替换为【怨灵】继续进行游戏。",
			"lol_boss_youzhou_info": "主公技，锁定技，『幽』势力角色阵亡时，将角色替换为【怨灵】继续进行游戏。",
			"lol_zhouyuan": "咒怨",
			"lol_zhouyuan_info": "锁定技，当你造成或受到伤害时，【佛耶戈】回复一点体力；你无法使用【桃】或【酒】，此技能无法被其他角色获得。",
			"lolkz_xingyun": "星陨",
			"lolkz_xingyun_info": "锁定技，每当你造成或受到伤害，你获得等量的“战意”；你造成伤害时可以移除3枚“战意”令此伤害+1；你的拼点数+“战意”数量。",
			"lolkz_shizhi": "矢志",
			"lolkz_shizhi_info": "出牌阶段，你可以与一名其他角色拼点，若你赢，视为你对其使用一张无限制的【杀】，若你没赢，视为其对你使用一张不能被【无懈可击】抵消的【决斗】；你于出牌阶段需要打出【杀】响应其他角色时，可与其进行拼点，若你赢，则视为打出了此【杀】。",
			"lolkz_guanxing": "贯星",
			"lolkz_guanxing_info": "出牌阶段限一次，你可以失去一点体力，令一名角色装备区内所有牌技能失效至本回合结束，然后本回合内，你下三次指定该角色为拼点或牌的目标时，你摸一张牌。",
			"lolkz_shenyou": "神佑",
			"lolkz_shenyou_info": "锁定技，你濒死时，你翻面。",
			"lolkz_bumie": "不灭",
			"lolkz_bumie_info": "锁定技，你翻至此面时，你获得3枚“战意”；每当你造成或受到伤害，你获得等量的“战意”；你发动武将牌上的技能（除此技能）时需消耗一枚“战意”；当你失去所有“战意”时，你翻面；你造成的伤害+你已损失的体力值。你的手牌上限+x（x为场上已受伤角色数）。",
			"lolkz_wushuang": "无双",
			"lolkz_wushuang_info": "锁定技，你的【杀】需要两张【闪】抵消；你的【决斗】需要两张【杀】抵消。",
			"lolkz_zhanjue": "战决",
			"lolkz_zhanjue_info": "锁定技，当你濒死或你令其他角色濒死时，你摸三张牌。",
			"lolkz_shennu": "神怒",
			"lolkz_shennu_info": "回合结束时，你可对所有其他角色造成一点伤害，然后你受到一点伤害并弃置所有“战意”。",
			shuangmianwujiang: "子技",
			"lolkz_fensheng_xibao": "细胞",
			"shuangmianwujiang_info": "",
			"lolkz_mingding": "酩酊",
			"lolkz_mingding_info": "出牌阶段，你可以与一名非【酒】状态下的角色进行拼点，若你胜，则其视为使用一张【酒】，否则视为你使用一张【酒】。",
			"lolkz_jiecheng": "解酲",
			"lolkz_jiecheng_info": "锁定技，当你进入【酒】状态/脱离【酒】状态时，你摸一张牌/你回复一点体力值。",
			"lolkz_jiaoxie": "缴械",
			"lolkz_jiaoxie_info": "锁定技，若回合内首次以你为目标的【杀】未造成伤害，则此【杀】使用者本回合内无法再使用【杀】。",
			"lolkz_zongshi": "宗师",
			"lolkz_zongshi_info": "锁定技，当你失去装备区内的牌时，你摸一张牌，若失去的牌为：①武器牌，你视为使用一张无距离限制且可触发此武器技能的【杀】；②防具牌，你对一名角色造成一点伤害；③坐骑牌，你摸一张牌；④宝物牌，你回复一点体力。",
			"lolkz_baibin": "百兵",
			"lolkz_baibin_info": "出牌阶段限一次，你可以移动场上一张武器牌；若你因此技能获得武器牌，你可以弃置之。",
			"lolkz_shuangqiang": "双枪",
			"lolkz_shuangqiang_info": "你使用的【杀】时，可以弃置一张牌，并选择一项：①可为此【杀】额外指定一个目标。②将此【杀】置于牌堆顶。",
			"lolkz_zhuiming": "追命",
			"lolkz_zhuiming_info": "当你失去最后的手牌时，你可以观看牌堆顶一张牌，然后使用那张牌并重复此流程，否则你获得那张牌，并结束你的回合。",
			"lolkz_qiangshou": "强手",
			"lolkz_qiangshou_info": "转换技，阴：你的牌不能被响应；阳：你的牌伤害+1。",
			"lolkz_hongquan": "轰拳",
			"lolkz_hongquan_info": "当你受到伤害后，你获得等量的【护盾】，然后你可以弃置所有【护盾】令伤害来源失去等量体力值。",
			"lolkz_hudun1": "护盾",
			"lolkz_hudun1_info": "你受的伤害时，可以弃置X张护盾，不足则全弃，然后取消此次受到的伤害。（X为你受到的伤害值）",
			"lolkz_renwu": "刃舞",
			"lolkz_renwu_info": "出牌阶段，你可以将一张牌置于武将牌上，视为使用一张【杀】，若此【杀】造成了伤害，则你本回合使用【杀】的次数上限+1；当你使用【杀】被闪避后，你可以获得武将牌上的一张牌。",
			"lolkz_poju": "破矩",
			"lolkz_poju_info": "回合结束时，你可以弃置武将牌上所有的牌，然后对等量角色施加“失衡”直到你的下回合结束；你对“失衡”角色使用的牌无距离限制且其不能响应 。",
			"lolkz_gongwu": "共舞",
			"lolkz_gongwu_info": "主公技，锁定技，当你于一回合内使用牌指定了4次目标后。场上所有“艾”势力的角色各摸一张牌。",
			"lolkz_qiefa": "窃法",
			"lolkz_qiefa_info": "锁定·你对你【杀】的目标施加“沉默”，弃置其一张手牌并获得一枚“护盾”；你对体力上限低于自己的角色造成的伤害改为失去体力。",
			"lolkz_lueren": "掠刃",
			"lolkz_lueren_info": "你对一名角色造成伤害时，其获得x枚【护盾】（x为其当前体力值）并将体力上限调整至1，回合结束时其将体力和体力上限恢复至【护盾】数；若其直到回合结束前进入过濒死，则其再减一点体力上限。",
			"lolkz_chenmo": "沉默",
			"lolkz_xingyun0": "幸运",
			"lolkz_xingyun0_info": "当你不因此技能而判定时，你可再进行一次判定，直到出现颜色不同的牌，否则你以此判定牌为最终判定结果。",
			"lolkz_zashu": "诈术",
			"lolkz_zashu_info": "锁定技，你获得你的判定牌。",
			"lolkz_haodu": "豪赌",
			"lolkz_haodu_info": "出牌阶段限一次，你可令任意名其他角色，然后你和这些角色依次将一张牌置于牌堆顶，然后选择你或其中一名角色进行{选择角色数+1}次判定，然后以判定结果执行以下操作：红桃：回复{黑色出现次数}点体力；方块：摸{黑色出现次数}张牌；梅花：弃置{红色出现次数}张牌；黑桃：失去{红色出现次数}点体力。",
			"lolkz_haodu_link": "豪赌",
			"lolkz_haodu_link_info": "",
			"lolkz_haodu_target": "豪赌",
			"lolkz_haodu_target_info": "",
			"lolkz_caijue": "裁决",
			"lolkz_caijue_info": "锁定技，当你使用【杀】时，你移除所有的负面效果和标记、武将牌和判定区的牌；你对你指定【杀】的目标施加沉默，且其需弃置一张与此【杀】同花色的手牌，否则不可响应此杀。",
			"lolkz_jianren": "坚韧",
			"lolkz_jianren_info": "出牌阶段结束时你可弃置所有的锦囊牌和坐骑牌，然后直到你下个回合开始：你受到的伤害-1；若你于一名角色回合未受伤，回合结束阶段你可以回复一点体力。",
			"lolkz_jianren_token": "坚韧",
			"lolkz_jianren_token_info": "",
			"lolkz_jianren_token1": "坚韧",
			"lolkz_jianren_token1_info": "",
			"lol_jiandun": "坚盾",
			"lol_jiandun_info": "锁定技·回合结束时，你亮起牌堆顶一张牌并将其置于武将牌上，直到你的下回合开始，任何点数小于此牌的牌指定你为目标时对你无效,然后你摸一张牌。",
			"lol_tingshen": "挺身",
			"lol_tingshen_info": "每回合限一次，当与你距离为1的角色成为目标时，你可以弃置一张牌将目标换为你。",
			"lol_mieshi_skill": "灭世者的死亡之帽",
			"lol_mieshi_skill_info": "手牌数翻倍",
			"lol_yifu": "依附",
			"lol_yifu_info": "锁定技·游戏开始时，你选择一名角色，其增加一点体力上限，你将势力改为其势力，在该角色阵亡前： <li>你不能成为其他角色的目标； <li>其于摸牌阶段摸牌时，你观看并获得其中一张牌； <li>你回复体力时，其回复一点体力； <li>你造成的伤害和使用的牌，除【装备】【桃】【酒】之外，来源均视为该角色",
			"lol_feidan": "飞弹",
			"lol_feidan_info": "出牌阶段限一次，你可以失去一点体力视为使用一张无视距离的【杀】，其生效时，你可以取消结算并回复一点体力",
			"lol_modian": "魔典",
			"lol_modian_info": "锁定技·你不能装备【坐骑】，你始终视为装备【灭世者的死亡之帽】，“依附”角色视为装备你的【宝物】",
			"lol_mizhang": "秘章",
			"lol_mizhang_info": "限定技·“依附”角色或你的回合开始时，你可以获得其他角色各一张牌，然后弃置任意牌： <li>若弃置数大于获得牌数，则你可以对至多{弃置数-获得数}名角色各造成1点伤害； <li>若弃置数小于获得牌数，则你将{获得数-弃置数}张牌交给“依附”角色",
			"lol_shanxian": "闪现",
			"lol_shanxian_info": "当你被指定为目标时，你可以使用此牌并取消之，然后你与其距离+1",
			"lol_shanxian2": "闪现",
			"lol_shanxian2_info": "",
			"lol_qingxishu": "清晰术",
			"lol_qingxishu_info": "使用此牌将手牌数补至上限",
			"lol_jinglei": "惊雷",
			"lol_jinglei_info": "锁定技·当一名角色的判定生效时，你获得“狂雷”（最多为1）；当你使用牌时，你弃置“狂雷”令此牌不能被响应； 当你的判定区内有牌时，你使用的牌无次数限制； 你对判定区内有牌的角色距离视为1",
			"lol_tiansheng": "天声",
			"lol_tiansheng_info": "锁定技·当一名其他角色使用或即将判定【闪电】/【浮雷】时，你可以对其使用一张无视距离的【杀】，若此【杀】生效，则你令此【闪电】/【浮雷】立即生效，然后你将其移入你的判定区",
			"lol_pili": "霹雳",
			"lol_pili_info": "锁定技·当你使用【杀】时，你攻击距离内的其他角色选择一项： 1.\t成为此【杀】的目标； 2.\t弃置一张【武器】或【防具】； 3.\t弃置一张手牌并横置自己",
			"lol_cedian": "掣电",
			"lol_cedian_info": "锁定技，当你受到雷电伤害后，你回复一点体力并获得等量护盾；当你受到火焰伤害后，你将一张【浮雷】置入伤害来源判定区内并从牌堆中获得一张【杀】。",
			"lol_dame_info": "限定技·回合开始时，你可以摸x{X为你已损失体力值}张牌；若如此做，你此回合内使用的牌无距离限制且不能被响应，你每使用一张牌失去一点体力，你对其他角色造成伤害时回复一点体力",
			"lol_cisi_info": "锁定技·当你使用【杀】或【决斗】时，你失去一点体力，令此回合内【杀】或【决斗】的伤害+1；当你使用【杀】对其他角色造成伤害时，该角色此回合内不能使用【桃】；你始终视为装备【鲜血魔井】；当你导致其他角色濒死时，你重置技能【大灭】并获得额外一回合",
			"lol_damedane_info": "你此回合内使用的牌无距离限制且不能被响应，你每使用一张牌失去一点体力，你对其他角色造成伤害时回复一点体力",
			"lol_cisi_useCard_info": "锁定技·当你使用【杀】或【决斗】时，你失去一点体力，令此回合内【杀】或【决斗】的伤害+1；当你使用【杀】对其他角色造成伤害时，该角色此回合内不能使用【桃】；你始终视为装备【鲜血魔井】；当你导致其他角色濒死时，你重置技能【大灭】并获得额外一回合",
			"lol_cisi_die_info": "锁定技·当你使用【杀】或【决斗】时，你失去一点体力，令此回合内【杀】或【决斗】的伤害+1；当你使用【杀】对其他角色造成伤害时，该角色此回合内不能使用【桃】；你始终视为装备【鲜血魔井】；当你导致其他角色濒死时，你重置技能【大灭】并获得额外一回合",
			"lol_xianxuemojin_skill": "鲜血魔井",
			"lol_xianxuemojin_skill_info": "锁定·当你的【杀】造成伤害时，你弃置一张牌并获得x枚“血”{X为你造成的伤害}；当你濒死时，你将体力上限调整为“血”的数量并弃置所有“血”，然后你回复一点体力直到体力值等于体力上限，此过程中你每回复一点体力摸一张牌",
			"lol_xianxuemojin_skillx": "鲜血魔井",
			"lol_xianxuemojin_skillx_info": "锁定·当你的【杀】造成伤害时，你弃置一张牌并获得x枚“血”{X为你造成的伤害}；当你濒死时，你将体力上限调整为“血”的数量并弃置所有“血”，然后你回复一点体力直到体力值等于体力上限，此过程中你每回复一点体力摸一张牌",
			"lol_damie": "大灭",
			"lol_damie_info": "锁定技·每当你的【杀】造成伤害时，你获得等量“血”标记；当你濒死时，你重置武将牌，将体力上限调整为当前体力值（至少为1），然后弃置所有“血”并回复等量体力值与体力上限，你每依此法回复一点体力摸一张牌,然后在本回合出牌阶段结束时你获得一个额外的出牌阶段。",
			"lol_dc_cisi": "赐死",
			"lol_unrecover": "重伤",
			"lol_dc_cisi_info": "锁定技·每回合内，你的【杀】目标获得【重伤】；当你击败一名角色后，你视为发动【大灭】效果②；当你的【杀】没有被任意【闪】抵消，你获得此【杀】，然后你的下一张【杀】使用距离、使用次数、指定目标数分别+1。",
			"fenlu1": "封塵",
			"fenlu1_info": "",
			"fenlu2": "封塵",
			"fenlu2_info": "",
			"fenlu3": "封麀",
			"fenlu3_info": "",
			"fenlu4": "封塵",
			"fenlu4_info": "",
			"lol_qishi": "骑士之誓",
			"lol_qishi2": "骑士之誓",
			"lol_qishi3": "骑士之誓",
			"lol_jifen": "季分点",
			"lol_zhongya_skill": "中亚沙漏",
			"lol_shoujizhe_skill": "收集者",
			"lol_shuiyin": "水银之靴",
			"lol_kuangbao_skill": "狂暴之刃",
			"lol_jinji": "荆棘背心",
			"lol_rejinji": "荆棘之甲",
			"lol_ludeng": "卢登的回响",
			"lol_reludeng": "卢登的激荡",
			"lol_jiushu_skill": "救赎",
			"lol_lvdun": "律顿",
			"lol_lvdun2": "律顿",
			"lol_lvdun3": "律顿",
			"lol_rezhongya_skill": "中亚悖论",
			"lol_kuangtu": "狂徒铠甲",
			"lol_lindong": "凛冬之临",
			"lolkz_fenlu": "封塵",
			"lolkz_fenlu_info": "你的回合内，当其他角色因受到你的属性伤害而取消横置时，其获得- -枚“斩”:出牌阶段结束时，你可以弃置一张牌，视为对“斩”角色使用一张[雷杀] 或[火杀]，拥有斩的角色回合结束时移去斩。",
			"dz_yxlm_lifu": "利斧",
			"dz_yxlm_lifu_info": "出牌阶段限一次，你可以令你此回合内获得以下效果；①使用的【杀】伤害基数+1并且可以多使用一张【杀】；②使用【杀】结算完毕后若造成了伤害则你摸一张牌然后视为你本回合未使用过此技能，否则你结束出牌阶段",
			"dz_yxlm_kaidao": "开道",
			"dz_yxlm_kaidao_info": "锁定技，当你使用【杀】时，你获得一枚“崇拜”标记；当你的【杀】被【闪】抵消时，你失去一半（向上取整）“崇拜”标记；当你击杀一名角色时，你移去所有的“崇拜”标记并摸等量牌，并于此回合结束后开始你的额外回合。",
			"dz_yxlm_yeyun": "夜陨",
			"dz_yxlm_yeyun_info": "锁定技，你使用牌指定唯一目标造成伤害时若你的手牌数大于其则此伤害+1",
			"dz_yxlm_mingqi": "冥起",
			"dz_yxlm_mingqi_info": "锁定技，当你受到伤害后将造成伤害的牌的所有对应实体牌置于武将牌上，当你受到伤害时，你弃置武将牌上的牌并获得等量【护盾】；回合开始时，你获得武将牌上的牌；每名角色的回合结束时，若你的判定区有牌你弃置判定区内的牌并回复一点体力",
			"dz_yxlm_boss_lunhui": "轮回",
			"dz_yxlm_boss_lunhui_info": "出牌阶段限一次，你可以选择一名其他角色，并在此结算流程中将其他角色移出游戏，其扣减一点体力上限，废除所有装备栏，然后你增加一点体力上限并在此之后你与其轮流进行特殊回合：亮起牌堆顶一张牌并使用之(若不能使用则置入弃牌堆并轮到对方展示)，直到你与其一名角色濒死；若不为其濒死，则你失去一点体力上限，其恢复装备栏和体力上限",
			"dz_yxlm_lunhui": "轮回",
			"dz_yxlm_lunhui_info": "限定技，出牌阶段限一次，你可以选择一名其他角色，并在此结算流程中将其他角色移出游戏，其扣减一点体力上限，废除所有装备栏，然后你增加一点体力上限并在此之后你与其轮流进行特殊回合：亮起牌堆顶一张牌并使用之(若不能使用则置入弃牌堆并轮到对方展示)，直到你与其一名角色濒死；若不为其濒死，则你失去一点体力上限，其恢复装备栏和体力上限",
			"dz_yxlm_zhuixiong": "追凶",
			"dz_yxlm_zhuixiong_info": "锁定技，①当一名其他角色对你造成伤害时你记录其为“凶手”；②你获得此技能时或一名角色死亡后若场内没有“凶手”则你记录当前回合角色为“凶手”(若当前回合角色为你则改为记录你的下家)；③当你对“凶手”造成伤害时，其翻面",
			"dz_yxlm_langhui": "浪洄",
			"dz_yxlm_langhui_info": "锁定技，隐匿技，你登场后令所有你与其计算距离最短的“凶手”翻面；你与翻面的其他角色计算距离时视为1；你对翻面的角色造成伤害时伤害翻倍。",
			"dz_yxlm_moou": "魔偶",
			"dz_yxlm_moou_info": "锁定技·你的体力上限始终为1若场上没有你的“魔偶”，你指定一名武将不为[恶魔小丑·萨科]的角色成为“魔偶”（仅你可见）；当你濒死时，其选择一项：其与你交换身份牌，其阵亡，然后你将体力调整至1；其将武将替换为[恶魔小丑·萨科]",
			"dz_yxlm_enchou": "恩仇",
			"dz_yxlm_enchou_info": "限定技，出牌阶段你可以对一名其他角色造成一点伤害然后若其因此而进入了濒死状态则你摸X张牌(X为其手牌数)并令其在此之后死亡然后你可以任意分配以此法获得的牌然后重置此技能并暗置你拥有该技能的武将牌(仅会暗置一张且优先主将)",
			"dz_yxlm_jingsong": "惊悚",
			"dz_yxlm_jingsong_info": "隐匿技，当你明置此武将时，你对攻击范围内的角色施加“恐惧”；当你即将受到伤害时，你可以弃置所有手牌(至少一张)取消之，然后暗置自己",
			"dz_yxlm_beici": "背刺",
			"dz_yxlm_beici_info": "锁定技，你对体力上限小于你一半(向上取整)或受到你“恐惧”效果的角色造成的伤害+1",
			"lol_wuxing": "无形",
			"lol_wuxing_info": "出牌阶段限一次，你可以失去1点体力，令场上所有其他角色的技能失效且不可使用或打出或弃置手牌直到出牌阶段结束，然后令你之后使用的牌不可被响应，但你造成的伤害于弃牌阶段开始前才开始依次结算且以此法结算的伤害均为无属性伤害。",
			"lol_wuji": "无极",
			"lol_wuji_info": "锁定技·当你装备武器牌时，你的【杀】无视防具；当你未装备武器牌时，你可以把闪当杀",
			"lol_wudi": "无敌",
			"lol_wudi_info": " 锁定技·当你击败一名武将时，你回复一点体力并摸x张牌，执行额外一个出牌阶段，然后你于摸牌阶段结束后获得额外一个出牌阶段且杀使用次数+1（x为击败数)。",
			"lol_yongjin": "勇进",
			"lol_yongjin_info": "锁定技·当你使用杀时，你此回合内与其他角色距离-1，然后你选择一名与你距离为1的目标拼点：若你胜：你对目标造成1点伤害;若你没胜：你受到1点伤害，然后此回合内你【杀】的使用次数+1",
			"lol_zhuren": "铸刃",
			"lol_zhuren_info": "使命技·每当你拼点胜时，你获得一枚“断刃”；成功：当你拥有4枚“断刃”时，你失去此技能并获得技能【折翼】失败：若你完成使命技前进入濒死状态，则你将势力改为【艾】，失去一点体力上限，对至多X名角色各造成1点伤害，失去技能【勇进】，获得技能【断剑】（X为“断刃”数），然后移除此效果",
			"lol_zhuren2": "铸刃",
			"lol_zhuren2_info": "使命技·每当你拼点胜时，你获得一枚“断刃”；成功：当你拥有4枚“断刃”时，你失去此技能并获得技能【折翼】和【勇进】",
			"lol_zheyi": "折翼",
			"lol_zheyi_info": "锁定技·当你受到伤害时：若你有手牌，则改为失去体力；若你没有手牌，则将手牌补至上限；锁定技·你的【杀】指定的目标数+X（X为你的已损失体力值）",
			"lol_duanjian": "断剑",
			"lol_duanjian_info": "出牌阶段限一次，你可以弃置一枚“断刃”视为你发动【勇进】；当你拼点失败时，你摸一张牌。",
			"lolkz_fensheng": "分生",
			"lolkz_fensheng_info": "当你受到伤害后，你可以失去一点体力上限并令伤害来源获得一个“细胞”；当你造成伤害时，你可以失去一点体力上限令其上下位角色各获得一个“细胞”；当你受到伤害时，你可以减少任意体力上限并防止等量伤害。",
			"lolkz_zaigou": "再构",
			"lolkz_zaigou_info": "锁定技，当你指定或成为“细胞”角色的目标时，你横置并移除其“细胞”并回复等量的体力和体力上限;当你濒死时，你将体力上限和体力值都调整为场上“细胞”数相等，然后移除所有“细胞”；当你的体力上限变化时，你摸等量牌；你对“细胞”角色使用牌无限制。",
			"lolkz_rongzhu": "溶烛",
			"lolkz_rongzhu_info": "锁定技你将你以任何形式弃置的牌置于武将牌旁称为“鱼”库，你可以将“鱼”库中的牌作为手牌使用或打出①你计算体力上限时，你计算体力上限时你的体力上限为[3+场上武将牌上“鱼”的数量]； ②其他角色计算体力值时，其实际体力值为[x-其武将牌上“鱼”的数量]③当一名角色武将牌上的“鱼”数量等于其体力上限时，其将武将控制权交给你（x为此武将当前体力值）",
			"lolkz_suomian": "搠面",
			"lolkz_suomian_info": "当一名攻击范围内的其他角色失去体力时，你可以将一张“鱼”置于其武将牌上；当你受到伤害时，你可以将此伤害转移至其他角色，其选择一项：①摸y张牌②取消此伤害然后移去其武将牌上y张“鱼”（y为此次伤害值）",
			"lolkz_jinhuang": "觐皇",
			"lolkz_jinhuang_info": "主公技当【虚】势力角色体力上限变化时，其可以亮起牌堆顶z张牌，并选择每种花色各一张，置于你的“鱼”库中（z为其当前体力上限与游戏开始时体力上限差值的绝对值）",
			"lolkz_suomian_kk": "溶烛",
			"lolkz_rongzhu2": "溶烛",
			"lolkz_rongzhu3": "观测",
			"lolkz_rongzhu3_info": "rwkk",
			"lol_jiaoxiang": "交响",
			"lol_jiaoxiang_info": "轮换技，出牌阶段限一次，你可以切换形态。<br>「<font color=\"#FFFF00\">砰砰</font>」<br><font color=\"#00FFFF\">锁定</font>：<br>你的【杀】无距离、距离限制，当你使用【杀】指定一个目标时，你摸一张牌然后直至出牌阶段结束时你的攻击距离+1。<br>「<font color=\"#FFFF00\">轰轰</font>」<br><font color=\"#00FFFF\">锁定</font>：<br>你的【<font color=#ff0033>火杀</font>】伤害+其已损体力值；<br><font color=\"#00FFFF\">主动</font>：<br>当你切换至此形态时，你可以弃置所有手牌，然后指定至多X名角色，弃置其X张牌并视为对这些角色使用一张【<font color=#ff0033>火杀</font>】（X为你以此法弃置牌数）。<br>「<font color=\"#FFFF00\">滋滋</font>」<br><font color=\"#00FFFF\">锁定</font>：<br>你的【<font color=#0000CD>雷杀</font>】不能被响应或抵消；<br><font color=\"#00FFFF\">主动</font>：<br>当你切换至此形态时，你可以视为对一名角色使用一张无视距离的【<font color=#0000CD>雷杀</font>】，然后：<br>①若其在你的攻击范围内，你摸Y张牌；<br>②若其不在你的攻击范围内，你弃置Y张牌（不足则全弃）；<br>（Y为你至目标距离与你攻击范围的差值）。<br>注释：黄色为对应效果，同一时间只能存在一个效果。",
			"lol_pengpeng": "砰砰",
			"lol_pengpeng_info": "锁定：<br>你的【杀】无距离、距离限制，当你使用【杀】指定一个目标时，你摸一张牌然后直至出牌阶段结束时你的攻击距离+1。<br>主动：<br>你可以将此效果切换至其他效果。",
			"lol_honghong": "轰轰",
			"lol_honghong_info": "锁定：<br>你的【<font color=#ff0033>火杀</font>】伤害+其已损体力值；<br>主动：<br>当你切换至此形态时，你可以弃置所有手牌，然后指定至多X名角色，依次弃置其各一张牌并视为对这些角色使用一张【<font color=#ff0033>火杀</font>】（X为你以此法弃置牌数）然后将此效果切换至其他效果。",
			"lol_zizi": "滋滋",
			"lol_zizi_info": "滋滋：<br>你的【<font color=#0000CD>雷杀</font>】不能被响应或抵消；<br>主动：<br>当你切换至此形态时，你可以视为对一名角色使用一张无视距离的【<font color=#0000CD>雷杀</font>】，然后：<br>①若其在你的攻击范围内，你摸Y张牌；<br>②若其不在你的攻击范围内，你弃置Y张牌（不足则全弃）；<br>（Y为你至目标距离与你攻击范围的差值）然后你将此效果切换至其他效果。",
			"lol_diyu": "低语",
			"lol_diyu_info": "锁定技.你出牌阶段改为展示所有手牌，然后使用其中可以使用的牌，然后重复此流程直到没有可以使用的牌:你依此法使用的牌无限制，第四张牌不能被响应，于结算后结束出牌阶段",
			"lol_xiemu": "谢幕",
			"lol_xiemu_info": "锁定技.你的摸牌阶段改为摸4张牌;若你使用的牌与本回合已出现的花色均不同，则伤害+1;当你于一回合内使用4种花色的牌时，你摸4张牌",
			"lol_qianhun": "牵魂",
			"lol_qianhun_info": "出牌阶段限一次，你可以将一张牌扣置于 桌面，然后指定至多三名其他角色，其依次:声明一张游戏内未以此法声明过的牌视为你对其使用之:若没有未以此法使用的牌，则其弃置一张牌:然后，你亮出扣置的牌，若此牌可被声明，则视为此牌未以此法声明过",
			"lol_guibian": "诡辩",
			"lol_guibian_info": "当你成为一张不因此技能使用的实体卡的目标时，你可以将一张手牌替换之， 然后视为其对你使用替换后的牌，若无法使用则取消之，此技能出现的牌名若可被［牵魂］声明，也视为未被[牵魂]声明",
			"lol_zhaixing": "摘星",
			"lol_zhaixing_cardx": "流星",
			"lol_zhaixing_info": "锁定技·当一名没有“流星”的角色使用的锦囊牌生效后，将其置于武将牌上，称为“流星”，然后你可以将一张牌视为【星神恩典】置于其判定区内；当一名角色进行判定时，其将“流星”做为判定牌",
			"lol_feixing": "飞星",
			"lol_feixing_info": "出牌阶段，你可以移动场上一枚“流星”至一名角色的手牌中；若目标不是你，则其受到x点伤害（x为两者间隔座位数一半，取较大值）；若目标判定区内有【星神恩典】，则X翻倍并，弃置此牌并视为发动其效果",

			// Darius
			"tel@lol.character_Darius": "德莱厄斯",

			"tel@lol.skill_killKing": "除王",
			"tel@lol.skill_killKing.damage": "除王",
			"tel@lol.skill_killKing.ban": "除王",
			"tel@lol.skill_killKing.die": "除王",
			"tel@lol.skill_killKing.mod": "除王",
			"tel@lol.skill_killKing_info": "锁定技，当你使用【杀】指定一名其他角色为目标时：①若其有主公技，则其主公技失效；②若其有装备牌，其获得其装备牌且其不能响应此牌；③若其体力值小于你，你摸一张牌或回复一点体力；每满足一项，此【杀】伤害+1；若此【杀】导致其进入濒死状态，则：其直接阵亡，你获得此【杀】，本回合使用【杀】的次数+1且造成的伤害+1。",
			"tel@lol.skill_killKing.damage_info": "锁定技，当你使用【杀】指定一名其他角色为目标时：①若其有主公技，则其主公技失效；②若其有装备牌，其获得其装备牌且其不能响应此牌；③若其体力值小于你，你摸一张牌或回复一点体力；每满足一项，此【杀】伤害+1。",
			"tel@lol.skill_killKing.die_info": "锁定技，当你使用【除王】增加过伤害的【杀】使一名其他角色进入濒死状态，则：其直接阵亡，你获得此【杀】，本回合使用【杀】的次数+1且造成的伤害+1。",

			"tel_lol_qunlang": "群狼",
			"tel_lol_qunlang_draw": "群狼",
			"tel_lol_qunlang_info": "主公技，当一名角色死亡时，若死亡来源为【诺】势力角色，你令场上的【诺】势力角色各摸X张牌（X为已阵亡的势力数）",
			// Nautilus
			"tel_lol_fuchen": "浮沉",
			"tel_lol_fuchen_init": "浮沉",
			"tel_lol_fuchen_count": "浮沉",
			"tel_lol_fuchen_damage": "浮沉",
			"tel_lol_fuchen_info": "锁定技，游戏开始前，你记录牌堆中牌的数量；当牌堆中牌的数量大于等于你记录数量的一半时，你视为拥有【乱流】，反之你视为拥有【探底】；当你受到伤害后，你将牌堆顶X张牌置入弃牌堆（X为你的体力值）",
			"tel_lol_fuchen_luanliu": "乱流",
			"tel_lol_fuchen_luanliu_discard": "乱流",
			"tel_lol_fuchen_luanliu_damage": "乱流",
			"tel_lol_fuchen_luanliu_info": "锁定技，当你失去一张牌时，你将牌堆顶一张牌置入弃牌堆；当你对一名其他角色造成伤害后，其获得技能【溺水】直至回合结束。",
			"tel_lol_fuchen_tandi": "探底",
			"tel_lol_fuchen_tandi_useCard": "探底",
			"tel_lol_fuchen_tandi_damage": "探底",
			"tel_lol_fuchen_tandi_info": "锁定技，你使用牌无法被响应且位于你攻击范围内且为成为此牌目标的角色成为此牌目标；当你对一名其他角色造成伤害后，其获得技能【眩晕】直至回合结束。",
			// Tahm Kench
			"tel_lol_tunna": "吞纳",
			"tel_lol_tunna_unable": "吞纳",
			"tel_lol_tunna_gain": "吞纳",
			"tel_lol_tunna_draw": "吞纳",
			"tel_lol_tunna_die": "吞纳",
			"tel_lol_tunna_info": "锁定技，你不能对其他角色使用目标数不为全体的牌；当一名角色弃置牌时，你获得之；回合开始与回合结束时，你从牌堆顶和牌堆底各获得一张牌，然后令获得牌数*2；当牌堆与弃牌堆均没牌时，你死亡。",

			"tel_lol_tanyu": "贪欲",
			"tel_lol_tanyu_toqiyue": "贪欲",
			"tel_lol_tanyu_info": "每名其他角色的出牌阶段，若其没有技能【契约】，其可记录一名有【贪欲】的其他角色，然后获得技能【契约】",
			"tel_lol_tanyu_toqiyue_info": "出牌阶段，若你没有技能【契约】，你可记录一名有【贪欲】的其他角色，然后获得技能【契约】",

			// 等待重构
			lol_jiangfa: '降罚',
			lol_jiangfa_info: '每当其他角色造成伤害时，你可以将一张牌交给他，其手牌中与其同名的牌均视为“罪”牌。',
			lol_jiangfa_zui: '<span style="text-shadow:rgb(139,71,137) 0 0 2px,rgb(139,71,137) 0 0 2px,rgb(139,71,137) 0 0 2px,rgb(139,71,137) 0 0 2px,black 0 0 1px !important;">罪</span>',
			lol_jiangfa_zui_info: '当你使用此牌时，需弃置一张牌；当你弃置此牌时，你失去一点体力。',
			lol_jiangfa_shu: '<span style="text-shadow:rgb(255,120,0) 0 0 2px,rgb(255,120,0) 0 0 2px,rgb(255,120,0) 0 0 2px,rgb(255,120,0) 0 0 2px,black 0 0 1px !important;">赎</span>',
			lol_jiangfa_shu_info: '当你使用此牌时，你摸一张牌；当你弃置此牌时，你回复一点体力。',
			lol_qingsuan: '清算',
			lol_qingsuan_info: '一名其他角色的回合结束时，若其此回合内造成过伤害，则你可以令其弃置所有的“罪”牌并摸等量牌，然后其不能再成为此技能的目标。',
			lol_dengshen: '登神',
			lol_dengshen_info: '每当其他角色失去最后一张“罪”牌时，你失去一点体力上限，然后获得技能库中一个技能；当你依此法将体力上限调整为1时，你失去此技能并获得『超然』。',
			lol_xingqiong: '星穹',
			lol_xingqiong_info: '出牌阶段，你可以将任意手牌置于武将牌上，称为“流星”；准备阶段或结束阶段开始时，你可以观看牌堆顶X张牌并将其中任意牌与“流星”牌替换；回合结束时，你需将”流星”弃置至不大于你的体力上限。（X为你的“流星”数）',
			lol_xingxian: '星弦',
			lol_xingxian_info: '你每拥有一枚”流星”你的手牌上限与攻击距离便+1；你的回合外，当你需要使用或打出”流星”牌中同名的牌以响应其他角色时，视为你以使用或打出，每种牌名限3次，当此牌名进入或离开”流星”库时重置此牌名次数',
			lol_xingluo: '星落',
			lol_xingluo_info: '当一名角色即将进行判定时，你可以视为发动一次【星穹】②效果；每当”流星”牌离开你的武将牌时，你对与你距离等于你的攻击距离的一名角色造成1点伤害',

			"tel_alol_Ahri": "阿狸",

			"tel_lol_monsflame": "妖焰",
			"tel_lol_monsflame_addMark": "妖焰",
			"tel_lol_monsflame_removeMark": "妖焰",
			"tel_lol_monsflame_charmure": "妖焰",
			"tel_lol_monsflame_info": "锁定技，当你使用一张类型为本回合未使用过的类型的牌时，你获得一枚【狐火】（上限为3）；当你失去一枚【狐火】时，你摸一张牌；当一名其他角色对你使用牌时，若其拥有【狐火】，你令其失去一枚【狐火】，然后对其附加【魅惑】效果。",

			"tel_lol_gotSoul": "夺魂",
			"telB_lol_gotSoul2": "夺魂",
			"tel_lol_gotSoul_info": "每个回合结束时，若本回合你未成为过牌的目标，你可以：视为使用一张未以此法使用过的普通锦囊牌，并令目标角色依次获得一枚【狐火】，然后你依次失去一枚【狐火】；或你可以弃置所有的【狐火】，然后对至多等量名角色造成一点火焰伤害。",

			// New Test
			// Fiora
			"tel@lol.character_Fiora": "菲奥娜",

			"tel@lol.skill_Riposte": "影剑",
			"tel@lol.skill_Riposte_info": "每回合限一次，当你即将受到伤害时，你可以弃置所有牌取消之，然后视为对伤害来源使用一张无法被抵消的【决斗】（伤害值同原伤害值）；若此【决斗】对其造成了伤害，你：获得本次以此法弃置的牌，本回合使用【杀】无次数限制，视为拥有技能【无双】直至回合结束。",

			"tel@lol.skill_Challenge": "挑战",
			"tel@lol.skill_Challenge_info": "当你使用【杀】指定目标时，你可以改为令目标角色获得此【杀】，然后视为对其使用【决斗】。",

			"tel@lol.skill_Lunge": "破空",
			"tel@lol.skill_Lunge_secondSuit": "破空",
			"tel@lol.skill_Lunge_forthSuit": "破空",
			"tel@lol.skill_Lunge_info": "锁定技，当你使用【杀】或【决斗】指定目标角色时，若你对其使用过【杀】或【决斗】的花色累计至：两种以上，你摸一张牌；四种以上，其失去X点体力（X为其体力值）",
			"tel@lol.skill_Lunge_secondSuit_info": "锁定技，当你使用【杀】或【决斗】指定目标角色时，若你对其使用过【杀】或【决斗】的花色累计至两种以上，你摸一张牌。",
			"tel@lol.skill_Lunge_forthSuit_info": "当你使用【杀】或【决斗】对一名角色造成伤害时，若本回合你使用【杀】或【决斗】的花色累计至四种以上，其失去X点体力（X为其体力值）",

			// Graves
			"tel@lol.character_Graves": "格雷福斯",

			"tel@lol.skill_addBullet": "袭弹",
			"tel@lol.skill_addBullet_info": "出牌阶段限一次，你可以：令本回合与其他角色的距离计算-1，获得一枚【弹药】",

			"tel@lol.skill_tel@lol.skill_gravesFate_true": "命运",
			"tel@lol.skill_tel@lol.skill_gravesFate_true_info": "锁定技，当你的装备区没有【新命运】时，你装备【新命运】",

			// Karma
			"tel@lol.character_Karma": "卡尔玛",

			"tel@lol.skill_Balance": "均衡",
			"tel@lol.skill_Balance_do": "均衡",
			"tel@lol.skill_Balance_info": "转换技，出牌阶段限一次，你可以弃置：阳：一张红色手牌，然后从牌堆中获得一张黑色基本牌；阴：一张黑色手牌，并从牌堆中获得一张红色锦囊牌；当你于本回合使用以此法获得的牌时，你可以视为使用一张：阳：锦囊牌；阴：基本牌。",
			"tel@lol.skill_Balance_do_info": "转换技，出牌阶段限一次，你可以弃置：阳：一张红色手牌，然后从牌堆中获得一张黑色基本牌；阴：一张黑色手牌，并从牌堆中获得一张红色锦囊牌；当你于本回合使用以此法获得的牌时，你可以视为使用一张：阳：锦囊牌；阴：基本牌。",

			"tel@lol.skill_Enlighten": "开悟",
			"tel@lol.skill_Enlighten_info": "出牌阶段结束时，若你手牌中的红色牌与黑色牌的数量相等，你可以展示所有手牌，然后跳过弃牌阶段，并获得一枚【护盾】",

			"tel@lol.skill_PassTorch": "薪火",
			"tel@lol.skill_PassTorch_info": "主公技，当一名【艾】势力角色发动【开悟】后，其可以令一名未拥有【开悟】的角色获得【开悟】直至其下回合结束。",

			// Sylas
			"tel@lol.character_Sylas": "塞拉斯",

			"tel@lol.skill_Hijack": "潜掠",
			"tel@lol.skill_Hijack_info": "当一名其他角色发动技能结算时，你可以令其此技能失效且你获得此技能，直到你下次发动任意技能结算时或因此技能重新获得技能时。",

			"tel@lol.skill_Robbery": "强掳",
			"tel@lol.skill_Robbery_info": "出牌阶段，你可以与一名其他角色拼点：若你赢，你选择其一个技能并视为对其发动【潜掠】；若你没赢，你回复一点体力。",

			// Swain
			"tel@lol.character_Swain": "斯维因",

			"tel@lol.skill_crowGroup": "鸦群",
			"tel@lol.skill_crowGroup.init": "鸦群",
			"tel@lol.skill_crowGroup.check": "鸦群",
			"tel@lol.skill_crowGroup.mark": "鸦群",
			"tel@lol.skill_crowGroup_info": "锁定技，你可以知道一名其他角色手中牌的牌名；当一名其他角色使用牌时；若其拥有同名牌，其获得一枚【魂屑】；你可以观看拥有【魂屑】角色的手牌。",

			"tel@lol.skill_exploitSoul": "剥魂",
			"tel@lol.skill_exploitSoul.main": "剥魂",
			"tel@lol.skill_exploitSoul.achieve": "剥魂",
			"tel@lol.skill_exploitSoul.fail": "剥魂",
			"tel@lol.skill_exploitSoul_info": [
				"使命技，当一名其他角色受到伤害后，若其拥有【魂屑】，你令其失去一枚【魂屑】，然后你：获得一枚【魂屑】，观看其手牌并将其一张牌交给一名角色，回复一点体力。",
				"·<span class='greentext'>成功：当你拥有6枚以上的【魂屑】时，你增加一点体力上限，然后获得【狂食】</span>",
				"·<span class='firetext'>失败：当你濒死时，你失去一点体力上限，将体力值回复至体力上限，查看所有人的身份牌，然后获得【视界】</span>"
			].join("</br>"),

			"tel@lol.skill_greedeat": "狂食",
			"tel@lol.skill_greedeat_info": "锁定技，回合结束时，你对所有其他已受伤的角色造成一点伤害；若场上无其他角色受伤，你获得所有其他角色各一张牌。",

			"tel@lol.skill_horivision": "视界",
			"tel@lol.skill_horivision.replace": "视界",
			"tel@lol.skill_horivision.draw": "视界",
			"tel@lol.skill_horivision_info": "当一名拥有【魂屑】的角色摸牌后，你可以观看其所摸的牌，然后你：观看牌堆顶与牌堆底各X张牌，从牌堆顶与牌堆底各一张牌替换之，将替换的牌置于你的武将牌上，令其失去一枚【魂屑】，获得一枚【魂屑】；摸牌阶段，你弃置所有的【魂屑】并获得牌堆顶等量的牌（X为你的【魂屑】数）",

			"tel@lol.skill_decentralization": "分权",
			"tel@lol.skill_decentralization.show": "分权",
			"tel@lol.skill_decentralization_info": "主公技，锁定技，游戏开始时，你将场上的【忠臣】替换为【主公】；【忠臣】可以于出牌阶段将身份牌量出，获得武将牌上的主公技并将势力改为【诺】",

			// Yasuo
			"tel@lol.character_Yasuo": "亚索",

			"tel@lol.skill_yasuotheUnforgiven": "斩钢",
			"tel@lol.skill_yasuotheUnforgiven_mod": "斩钢",
			"tel@lol.skill_yasuotheUnforgiven_viewAs": "斩钢",
			"tel@lol.skill_yasuotheUnforgiven_useJiu": "斩钢",
			"tel@lol.skill_yasuotheUnforgiven_useJiu2": "斩钢",
			"tel@lol.skill_yasuotheUnforgiven_info": "你的黑色牌可当作【杀】使用或打出；你使用梅花【杀】无次数限制；当你使用【酒】后，你的下一张【杀】对目标施加“眩晕”。",

			"tel@lol.skill_sweepingBlade": "踏风",
			"tel@lol.skill_sweepingBlade_mod": "踏风",
			"tel@lol.skill_sweepingBlade_connect": "踏风",
			"tel@lol.skill_sweepingBlade_damage": "踏风",
			"tel@lol.skill_sweepingBlade_info": "锁定技，当你使用的【杀】结算后，你此回合与其他角色距离-1；若此时你与所有其他角色的距离均达到1时，你获得一枚【风】，然后视为使用一张【酒】；当你受到伤害时，你弃置一枚【风】并获得一枚【护盾】。",

			"tel@lol.skill_lastBreath": "绝息",
			"tel@lol.skill_lastBreath_buff": "绝息",
			"tel@lol.skill_lastBreath_info": "出牌阶段结束时，你可以弃置一枚【风】并对一名【眩晕】角色造成1点伤害；若如此做，你获得一个出牌阶段：此阶段内你的【杀】无视防具。",

			// Yone
			"tel@lol.character_Yone": "永恩",

			"tel@lol.skill_mortalSteel": "错玉",
			"tel@lol.skill_mortalSteel_mod": "错玉",
			"tel@lol.skill_mortalSteel_effect": "错玉",
			"tel@lol.skill_mortalSteel_useJiu": "错玉",
			"tel@lol.skill_mortalSteel_useJiu2": "错玉",
			"tel@lol.skill_mortalSteel_afterLink": "错玉",
			"tel@lol.skill_mortalSteel_info": "锁定技，你的红色【杀】视为【火杀】且使用无距离限制；你的黑色【杀】视为【雷杀】且使用无视防具；出牌阶段，你可以额外使用一张与上一张颜色不同的【杀】；当你使用【酒】后，你的下一张【杀】造成伤害时对目标施加【眩晕】；当你于一回合内首次进入/脱离横置状态时，你从牌堆/弃牌堆中获得1张【杀】。",

			"tel@lol.skill_spiritCleave": "凛神",
			"tel@lol.skill_spiritCleave2": "凛神",
			"tel@lol.skill_spiritCleave2_damage": "凛神",
			"tel@lol.skill_spiritCleave2_linkAfter": "凛神",
			"tel@lol.skill_spiritCleave_info": "出牌阶段开始时，你可以横置s；若如此做，本阶段：当你对一名其他角色造成伤害时，你与其横置；当你横置或重置后，你回复一点体力。",

			"tel@lol.skill_fateSealed": "封尘",
			"tel@lol.skill_fateSealed_info": "锁定技，出牌阶段结束时，你横置此回合内受到过你伤害的角色，然后你可以对自己使用一张【杀】，并对受到此【杀】伤害的角色施加“眩晕”，然后获得X枚【护盾】（X为此次造成的伤害数）",

			// Zed
			"tel@lol.character_Zed": "劫",
			"tel@lol.character_Zed_shadow": "影分身",

			"tel@lol.skill_sechell": "瞬狱",
			"tel@lol.skill_sechell_info": "当你成为其他角色牌的目标时，你可以与一名除其以外的其他角色交换位置，令该名角色获得一枚【灭魂】；若如此做，其将武将牌翻面且你将目标改为其。",

			"tel@lol.skill_ghokians": "鬼斩",
			"tel@lol.skill_ghokians_info": "锁定技，当你对一名其他角色造成伤害后，你令其获得一枚【灭魂】；当一名其他角色受到伤害时，若伤害来源为【影分身】，你对其造成一点伤害并令其失去一枚【灭魂】",

			"tel@lol.skill_shadowkill": "影杀",
			"tel@lol.skill_shadowkill_info": "锁定技，当【劫】对一名其他角色使用一张基本牌或普通锦囊牌时，你视为对同一目标使用同一虚拟牌。",

			"tel@lol.skill_soulkill": "灭魂",
			"tel@lol.skill_soulkill_info": "锁定技，此武将独立血量，当此武将阵亡时，移除背面将，然后移除【灭魂】",

			"tel@lol.skill_hideshadow": "潜影",
			"tel@lol.skill_hideshadow_info": "锁定技，当你受到伤害后，你翻面。",

		},
	};
	if (lib.device || lib.node) {
		for (const i in TEL_LOL.character) {
			if (!TEL_LOL.character[i][4].some(j => j.indexOf("ext:") != -1)) TEL_LOL.character[i][4].push(`ext:英雄联盟扩展/res/image/character/${i}.png`);
		}
	}
	else {
		for (const i in TEL_LOL.character) {
			if (!TEL_LOL.character[i][4].some(j => j.indexOf("ext:") != -1)) TEL_LOL.character[i][4].push(`db:extension-英雄联盟扩展:res/image/character/${i}.png`);
		}
	}
	return TEL_LOL;
});
