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
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
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