/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Attack': '攻击',
    'Story': '故事',
    'power =': '伤害 =',
    'Reputation': '声誉',
    'Upgrades': '升级',
    'Reputation Needed': '需要声誉',
    'Power Boosts': '伤害提升',
    'Monster Strength': '怪物力量',
    'John the Farmer\'s Son': '农夫的儿子约翰',
    'Hero': '英雄',
    'Buy your heroes power boosts to help them fight.': '购买英雄的伤害提升，来帮助他们战斗。',
    'You did': '你对怪物造成了',
    'You Missed': '未命中',
    'damage to the monster.': '伤害',
    'damage to the monster and you got': '伤害并且获得了',
    'cost = $': '成本 = $',
    'M': '男',
    'F': '女',
    'Hal the Barbarian': '哈尔蛮族',
    'Anders Hardiron': '安德斯哈迪兰',
    'Analis the Soldier': '士兵阿娜丽丝',
    'Hamand the Riven': '复仇者哈蒙德',
    'Luna Moraith': '露娜·莫拉思',
    'Theresa Hamilton': '特蕾莎·汉密尔顿',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    'Hamand is a desert nomad, his family was killed by bandits when he was a child and he was found by the nomads and raised among them. They taught him to move unseen, hide in the most barren of places, become invisible and live in the harshest of environments. He left them when he was 14 and joined a group of mercenaries fighting the same clan of bandits who once claimed his family. The mercenaries taught him to kill in a hundred different ways. He soon learned that revenge did not take away the feeling of loss and anger he felt, but he was no longer the helpless boy who could do nothing but watch his family murdered. He fights mostly with throwing knives and a machete. He moves like the wind and even his companions are unnerved by how he appears and disappears seemingly from nowhere, even on an empty flat plain.': '哈曼德是一位沙漠游牧民族，他的家人在他还是个孩子的时候就被土匪杀死，并被游牧民族发现并在其中长大。 他们教会他动弹不得，躲在最贫瘠的地方，变得看不见，并生活在最恶劣的环境中。 他14岁那年就离开了他们，并加入了一群雇佣军，他们与曾经声称拥有家人的土匪家族作战。 雇佣军教他用一百种不同的方式杀人。 他很快得知报仇并没有消除他所感到的失落和愤怒的感觉，但他不再是一个无助的男孩，只能看着家人被谋杀而无能为力。 他主要用投掷的刀和砍刀来战斗。 他像风一样移动，甚至他的同伴也对他的出现和消失感到不安，即使在一片空旷的平原上，他似乎也无处不在。',
    'Luna is an archer raised in the wilds, she has grown up fighting monsters from childhood. When she was 6 years old, she and the family dog killed a python. She was trained in wilderness survival and has become an excellent shoot with a bow. She carries a bow that was handed down to her by her aunt. It is named Aerulia, which means "the unseen blow". It is enchanted to hit even when a target is partially hidden or the person firing the bow can\'t stop to aim properly.': '露娜（Luna）是在野外长大的弓箭手，她从小就与怪物战斗。 当她6岁时，她和家犬杀死了一条蟒蛇。 她在野外生存方面受过训练，并且已经成为鞠躬的好拍。 她的弓是姑姑递给她的。 它被命名为Aerulia，意为“看不见的打击”。 即使目标被部分隐藏或发射弓的人不能停下来正确瞄准，它也会很容易命中。',
    'Theresa is a mother whos children were slaughtered by monsters. She has devoted her life to destroying monsters. She has learned to fight with several weapons but her favorite is a pair of twin swords. She has faced a number of monsters and can handle herself better than the average fighter. She vows that as long as she lives she will fight for children and the safety of all good creatures.': '特蕾莎（Theresa）是一位母亲，他的孩子被怪物杀死。 她一生致力于消灭怪物。 她学会了使用几种武器进行战斗，但她最喜欢的是一把双剑。 她面对过许多怪物，而且比一般战士更能应付自如。 她发誓，只要她活着，就将为儿童和所有好生物的安全而战。',
    'Analis fought in a few battles between the city states of her home region before deciding that her life and her sword were ment for something more. Fighting over territoy was stupid compared to fighting the vicious monsters that plagued the people near the wilds. She had heard of zombies, giant snakes, and werewolves that would eat hunters and travelers who dared travel outside of the settled and guarded areas of human civilization. She has seen serious combat and is well trained with sword and sheild as well as with spears. Spear and shield is her prefered combination and she carries several javelins that she can throw when an enemy is not in melee range.': '在决定她的生命和她的剑是为了更多的东西之前，阿娜丽斯在她的家乡城市之间打了几场战争。与与折磨着附近的人的邪恶的怪物作战相比，为领土而战是愚蠢的。她听说过僵尸、巨蟒和狼人，他们会吃掉那些敢于走出人类文明的定居和守卫区域的猎人和旅行者。她经历过激烈的战斗，受过良好的剑鞘和长矛训练。矛和盾是她最喜欢的组合，当敌人不在近战射程内时，她可以投掷数支标枪。',
    'Hal is a mid level street fighter. He makes some money in the underground fight rings. Given some time he might be a top notch brawler but he\'s still pretty young and has a lot to learn. He can fight with a knife or a club if necessary. He is interested in meeting new people, seeing other cultures and learning new skills. While he\'s not a the best fighter he has a lot of charisma that wins people over and makes it easy for him to make friends and gather information.': '哈尔是一个中等水平的街头战士。他在地下斗牛场赚了一些钱。给他一些时间，他可能是一个一流的打架，但他仍然很年轻，有很多要学习。如有必要，他可以用刀或棍棒搏斗。他对结识新朋友、了解其他文化和学习新技能很感兴趣。虽然他不是一个最好的战士，但他很有魅力，能赢得人们的支持，让他很容易交到朋友，收集信息。',
    'Anders was a city guard. He got tired of manning the gates every day and decided it was time to travel and make some better money. He has joined your team to live a more exciting life. He has been taught basic combat with sword and shield. He has simple armor and has spent a couple of years handling the day to day guard duties of a small city - mostly drunks and theives but there were a couple of raids during his time.': '安德斯是一名城市警卫。他厌倦了每天都要守着大门，决定是时候出去旅行，赚更多的钱了。他加入了你们的团队，过着更加精彩的生活。他已经学会了用剑和盾进行基本的战斗。他身穿简单的盔甲，花了几年时间在一个小城市做日常警卫工作——主要是醉汉和他们自己的人，但在他的时间里也有过几次抢劫。',
    'John left his 6 siblings and rural home to seek fame and fortune in the wider world. He has little training but he\'s a willing partner in the fight against the creatures that prowl the wild places. He fights with a simple sword and has the advantage a strong constitution from years of field labor.': '约翰离开了他的6个兄弟姐妹和乡村住所，在更广阔的世界中寻求名利。 他受过很少的训练，但是他是与那些在荒野中徘徊的生物作斗争的自愿伙伴。 他用一把简单的剑战斗，并且由于多年的野外工作而拥有坚强的体质。',

    //原样
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    " ": "",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?[A-Za-z%]{0,2}(\s.C)?\s*$/, //12.34K,23.4 °C
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /^\s*$/, //纯空格
    /^\d+(\.\d+)?[A-Za-z]{0,2}.?\(?([+\-]?(\d+(\.\d+)?[A-Za-z]{0,2})?)?$/, //12.34M (+34.34K
    /^(\d+(\.\d+)?[A-Za-z]{0,2}\/s)?.?\(?([+\-]?\d+(\.\d+)?[A-Za-z]{0,2})?\/s\stot$/, //2.74M/s (112.4K/s tot
    /^\d+(\.\d+)?(e[+\-]?\d+)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?$/, //2.177e+6 (+4.01+4
    /^(\d+(\.\d+)?(e[+\-]?\d+)?\/s)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?\/s\stot$/, //2.177e+6/s (+4.01+4/s tot
];
var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/, //: 12.34K, x1.5
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^(.+) Power to Hero (.+) \$$/, '英雄 $2 伤害提升 $1 需要\$'],
    [/^(.+) Power to Manual Attack \$$/, '手动伤害提升 $1 需要\$'],
    [/^Your team did (.+) power damage!!$/, '您的团队造成了 $1倍 力量伤害！！'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);