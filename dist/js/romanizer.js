// module.exports = class Romanizer {
// }

/**
 * @constract
 * @type {Object} romanMap ローマ字変換マップ
 */
const romanMap = {
// ===== 清音 (45音+2音)
  // あ行
  'あ': ['a'],
  'い': ['i'],
  'う': ['u', 'wu'],
  'え': ['e'],
  'お': ['o'],
  // か行
  'か': ['ka'],
  'き': ['ki'],
  'く': ['ku'],
  'け': ['ke'],
  'こ': ['ko'],
  // さ行
  'さ': ['sa'],
  'し': ['si', 'shi'],
  'す': ['su'],
  'せ': ['se'],
  'そ': ['so'],
  // た行
  'た': ['ta'],
  'ち': ['ti', 'chi'],
  'つ': ['tu', 'tsu'],
  'て': ['te'],
  'と': ['to'],
  // な行
  'な': ['na'],
  'に': ['ni'],
  'ぬ': ['nu'],
  'ね': ['ne'],
  'の': ['no'],
  // は行
  'は': ['ha'],
  'ひ': ['hi'],
  'ふ': ['hu', 'fu'],
  'へ': ['he'],
  'ほ': ['ho'],
  // ま行
  'ま': ['ma'],
  'み': ['mi'],
  'む': ['mu'],
  'め': ['me'],
  'も': ['mo'],
  // や行
  'や': ['ya'],
  'ゆ': ['yu'],
  'よ': ['yo'],
  // ら行
  'ら': ['ra'],
  'り': ['ri'],
  'る': ['ru'],
  'れ': ['re'],
  'ろ': ['ro'],
  // わ行
  'わ': ['wa'],
  'を': ['wo'],
  // 
  'ゐ': ['wyi'],
  'ゑ': ['wye'],

// ===== 撥音 (1音)
  // ん
  'ん': ['nn'],

// ===== 濁音 (20音)
  // が行
  'が': ['ga'],
  'ぎ': ['gi'],
  'ぐ': ['gu'],
  'げ': ['ge'],
  'ご': ['go'],
  // ざ行
  'ざ': ['za'],
  'じ': ['zi', 'ji'],
  'ず': ['zu'],
  'ぜ': ['ze'],
  'ぞ': ['zo'],
  // だ行
  'だ': ['da'],
  'ぢ': ['di'],
  'づ': ['du'],
  'で': ['de'],
  'ど': ['do'],
  // ば行
  'ば': ['ba'],
  'び': ['bi'],
  'ぶ': ['bu'],
  'べ': ['be'],
  'ぼ': ['bo'],

// ===== 半濁音 (5音)
  // ぱ行
  'ぱ': ['pa'],
  'ぴ': ['pi'],
  'ぷ': ['pu'],
  'ぺ': ['pe'],
  'ぽ': ['po'],

// ===== 拗音 (117音)
  // きゃ行
  'きゃ': ['kya'],
  'きぃ': ['kyi'],
  'きゅ': ['kyu'],
  'きぇ': ['kye'],
  'きょ': ['kyo'],
  // しゃ行
  'しゃ': ['sya', 'sha'],
  'しぃ': ['syi'],
  'しゅ': ['syu', 'shu'],
  'しぇ': ['sye'],
  'しょ': ['syo', 'sho'],
  // ちゃ行
  'ちゃ': ['tya', 'cya', 'cha'],
  'ちぃ': ['tyi', 'cyi'],
  'ちゅ': ['tyu', 'cyu', 'chu'],
  'ちぇ': ['tye', 'cye'],
  'ちょ': ['tyo', 'cyo', 'cho'],
  // にゃ行
  'にゃ': ['nya'],
  'にぃ': ['nyi'],
  'にゅ': ['nyu'],
  'にぇ': ['nye'],
  'にょ': ['nyo'],
  // ひゃ行
  'ひゃ': ['hya'],
  'ひぃ': ['hyi'],
  'ひゅ': ['hyu'],
  'ひぇ': ['hye'],
  'ひょ': ['hyo'],
  // みゃ行
  'みゃ': ['mya'],
  'みぃ': ['myi'],
  'みゅ': ['myu'],
  'みぇ': ['mye'],
  'みょ': ['myo'],
  // りゃ行
  'りゃ': ['rya'],
  'りぃ': ['ryi'],
  'りゅ': ['ryu'],
  'りぇ': ['rye'],
  'りょ': ['ryo'],

  // ぎゃ行
  'ぎゃ': ['gya'],
  'ぎぃ': ['gyi'],
  'ぎゅ': ['gyu'],
  'ぎぇ': ['gye'],
  'ぎょ': ['gyo'],
  // じゃ行
  'じゃ': ['zya', 'jya', 'ja'],
  'じぃ': ['zyi', 'jyi'],
  'じゅ': ['zyu', 'jyu', 'ju'],
  'じぇ': ['zye', 'jye', 'je'],
  'じょ': ['zyo', 'jyo', 'jo'],
  // ぢゃ行
  'ぢゃ': ['dya'],
  'ぢぃ': ['dyi'],
  'ぢゅ': ['dyu'],
  'ぢぇ': ['dye'],
  'ぢょ': ['dyo'],
  // びゃ行
  'びゃ': ['bya'],
  'びぃ': ['byi'],
  'びゅ': ['byu'],
  'びぇ': ['bye'],
  'びょ': ['byo'],

  // ぴゃ行
  'ぴゃ': ['pya'],
  'ぴぃ': ['pyi'],
  'ぴゅ': ['pyu'],
  'ぴぇ': ['pye'],
  'ぴょ': ['pyo'],

  // いぇ
  'いぇ': ['ye'],
  // うぁ行
  'うぁ': ['wha'],
  'うぃ': ['whi', 'wi'],
  'うぇ': ['whe', 'we'],
  'うぉ': ['who'],
  // くぁ行
  'くぁ': ['kwa', 'qa'],
  'くぃ': ['kwi', 'qi', 'qyi'],
  'くぅ': ['kwu', 'qu'],
  'くぇ': ['kwe', 'qe', 'qye'],
  'くぉ': ['kwo', 'qo'],
  // くゃ行
  'くゃ': ['qya'],
  'くゅ': ['qyu'],
  'くょ': ['qyo'],
  // つぁ行
  'つぁ': ['tsa'],
  'つぃ': ['tsi'],
  'つぇ': ['tse'],
  'つぉ': ['tso'],
  // てゃ行
  'てゃ': ['tha'],
  'てぃ': ['thi'],
  'てゅ': ['thu'],
  'てぇ': ['the'],
  'てょ': ['tho'],
  // とぁ行
  'とぁ': ['twa'],
  'とぃ': ['twi'],
  'とぅ': ['twu'],
  'とぇ': ['twe'],
  'とぉ': ['two'],
  // ふぁ行
  'ふぁ': ['fa', 'hwa'],
  'ふぃ': ['fi', 'hwi'],
  'ふぇ': ['fe', 'hwe'],
  'ふぉ': ['fo', 'hwo'],
  // ふゃ行
  'ふゃ': ['fya'],
  'ふゅ': ['fyu'],
  'ふょ': ['fyo'],
  // ゔぁ行
  'ゔぁ': ['va'],
  'ゔぃ': ['vi'],
  'ゔ': ['vu'],
  'ゔぇ': ['ve'],
  'ゔぉ': ['vo'],
  // ゔゃ
  'ゔゃ': ['vya'],
  'ゔゅ': ['vyu'],
  'ゔょ': ['vyo'],
  // ぐぁ行
  'ぐぁ': ['gwa'],
  'ぐぃ': ['gwi'],
  'ぐぅ': ['gwu'],
  'ぐぇ': ['gwe'],
  'ぐぉ': ['gwo'],
  // でゃ行
  'でゃ': ['dha'],
  'でぃ': ['dhi'],
  'でゅ': ['dhu'],
  'でぇ': ['dhe'],
  'でょ': ['dho'],
  // どぁ
  'どぁ': ['dwa'],
  'どぃ': ['dwi'],
  'どぅ': ['dwu'],
  'どぇ': ['dwe'],
  'どぉ': ['dwo'],

// ===== 小書き文字 (10文字)
  // ぁ行
  'ぁ': ['xa', 'la'],
  'ぃ': ['xi', 'li'],
  'ぅ': ['xu', 'lu'],
  'ぇ': ['xe', 'le'],
  'ぉ': ['xo', 'lo'],
  // っ
  'っ': ['xtu', 'xtsu', 'ltu', 'ltsu'],
  // ゃ行
  'ゃ': ['xya', 'lya'],
  'ゅ': ['xyu', 'lyu'],
  'ょ': ['xyo', 'lyo'],
  // ゎ
  'ゎ': ['xwa', 'lwa'],

// ===== その他 ()
  // 長音
  'ー': ['-'],
  // 句読点
  '、': [','],
  '。': ['.'],
  // 感嘆符
  '！': ['!'],
  // 疑問符
  '？': ['?'],

// ===== 「っ」ありver
  // あ行
  'っあ': [],
  'っい': [],
  'っう': [],
  'っえ': [],
  'っお': [],
  // か行
  'っか': ['kka'],
  'っき': ['kki'],
  'っく': ['kku'],
  'っけ': ['kke'],
  'っこ': ['kko'],
  // さ行
  'っさ': ['ssa'],
  'っし': ['ssi', 'sshi'],
  'っす': ['ssu'],
  'っせ': ['sse'],
  'っそ': ['sso'],
  // た行
  'った': ['tta'],
  'っち': ['tti', 'cchi'],
  'っつ': ['ttu', 'ttsu'],
  'って': ['tte'],
  'っと': ['tto'],
  // な行
  'っな': [],
  'っに': [],
  'っぬ': [],
  'っね': [],
  'っの': [],
  // は行
  'っは': ['hha'],
  'っひ': ['hhi'],
  'っふ': ['hhu', 'ffu'],
  'っへ': ['hhe'],
  'っほ': ['hho'],
  // ま行
  'っま': ['mma'],
  'っみ': ['mmi'],
  'っむ': ['mmu'],
  'っめ': ['mme'],
  'っも': ['mmo'],
  // や行
  'っや': ['yya'],
  'っゆ': ['yyu'],
  'っよ': ['yyo'],
  // ら行
  'っら': ['rra'],
  'っり': ['rri'],
  'っる': ['rru'],
  'っれ': ['rre'],
  'っろ': ['rro'],
  // わ行
  'っわ': ['wwa'],
  'っを': ['wwo'],
  // 
  'っゐ': ['wwyi'],
  'っゑ': ['wwye'],
  // ん
  'っん': [],
  // が行
  'っが': ['gga'],
  'っぎ': ['ggi'],
  'っぐ': ['ggu'],
  'っげ': ['gge'],
  'っご': ['ggo'],
  // ざ行
  'っざ': ['zza'],
  'っじ': ['zzi', 'jji'],
  'っず': ['zzu'],
  'っぜ': ['zze'],
  'っぞ': ['zzo'],
  // だ行
  'っだ': ['dda'],
  'っぢ': ['ddi'],
  'っづ': ['ddu'],
  'っで': ['dde'],
  'っど': ['ddo'],
  // ば行
  'っば': ['bba'],
  'っび': ['bbi'],
  'っぶ': ['bbu'],
  'っべ': ['bbe'],
  'っぼ': ['bbo'],
  // ぱ行
  'っぱ': ['ppa'],
  'っぴ': ['ppi'],
  'っぷ': ['ppu'],
  'っぺ': ['ppe'],
  'っぽ': ['ppo'],
  // きゃ行
  'っきゃ': ['kkya'],
  'っきぃ': ['kkyi'],
  'っきゅ': ['kkyu'],
  'っきぇ': ['kkye'],
  'っきょ': ['kkyo'],
  // しゃ行
  'っしゃ': ['ssya', 'ssha'],
  'っしぃ': ['ssyi'],
  'っしゅ': ['ssyu', 'sshu'],
  'っしぇ': ['ssye'],
  'っしょ': ['ssyo', 'ssho'],
  // ちゃ行
  'っちゃ': ['ttya', 'ccya', 'ccha'],
  'っちぃ': ['ttyi', 'ccyi'],
  'っちゅ': ['ttyu', 'ccyu', 'cchu'],
  'っちぇ': ['ttye', 'ccye'],
  'っちょ': ['ttyo', 'ccyo', 'ccho'],
  // にゃ行
  'っにゃ': [],
  'っにぃ': [],
  'っにゅ': [],
  'っにぇ': [],
  'っにょ': [],
  // ひゃ行
  'っひゃ': ['hhya'],
  'っひぃ': ['hhyi'],
  'っひゅ': ['hhyu'],
  'っひぇ': ['hhye'],
  'っひょ': ['hhyo'],
  // みゃ行
  'っみゃ': ['mmya'],
  'っみぃ': ['mmyi'],
  'っみゅ': ['mmyu'],
  'っみぇ': ['mmye'],
  'っみょ': ['mmyo'],
  // りゃ行
  'っりゃ': ['rrya'],
  'っりぃ': ['rryi'],
  'っりゅ': ['rryu'],
  'っりぇ': ['rrye'],
  'っりょ': ['rryo'],
  // ぎゃ行
  'っぎゃ': ['ggya'],
  'っぎぃ': ['ggyi'],
  'っぎゅ': ['ggyu'],
  'っぎぇ': ['ggye'],
  'っぎょ': ['ggyo'],
  // じゃ行っ
  'っじゃ': ['zzya', 'jjya', 'jja'],
  'っじぃ': ['zzyi', 'jjyi'],
  'っじゅ': ['zzyu', 'jjyu', 'jju'],
  'っじぇ': ['zzye', 'jjye', 'jje'],
  'っじょ': ['zzyo', 'jjyo', 'jjo'],
  // ぢゃ行
  'っぢゃ': ['ddya'],
  'っぢぃ': ['ddyi'],
  'っぢゅ': ['ddyu'],
  'っぢぇ': ['ddye'],
  'っぢょ': ['ddyo'],
  // びゃ行
  'っびゃ': ['bbya'],
  'っびぃ': ['bbyi'],
  'っびゅ': ['bbyu'],
  'っびぇ': ['bbye'],
  'っびょ': ['bbyo'],
  // ぴゃ行
  'っぴゃ': ['ppya'],
  'っぴぃ': ['ppyi'],
  'っぴゅ': ['ppyu'],
  'っぴぇ': ['ppye'],
  'っぴょ': ['ppyo'],
  // いぇ
  'っいぇ': ['yye'],
  // うぁ行
  'っうぁ': ['wwha'],
  'っうぃ': ['wwhi', 'wwi'],
  'っうぇ': ['wwhe', 'wwe'],
  'っうぉ': ['wwho'],
  // くぁ行
  'っくぁ': ['kkwa', 'qqa'],
  'っくぃ': ['kkwi', 'qqi', 'qqyi'],
  'っくぅ': ['kkwu', 'qqu'],
  'っくぇ': ['kkwe', 'qqe', 'qqye'],
  'っくぉ': ['kkwo', 'qqo'],
  // くゃ行
  'っくゃ': ['qqya'],
  'っくゅ': ['qqyu'],
  'っくょ': ['qqyo'],
  // つぁ行
  'っつぁ': ['ttsa'],
  'っつぃ': ['ttsi'],
  'っつぇ': ['ttse'],
  'っつぉ': ['ttso'],
  // てゃ行
  'ってゃ': ['ttha'],
  'ってぃ': ['tthi'],
  'ってゅ': ['tthu'],
  'ってぇ': ['tthe'],
  'ってょ': ['ttho'],
  // とぁ行
  'っとぁ': ['ttwa'],
  'っとぃ': ['ttwi'],
  'っとぅ': ['ttwu'],
  'っとぇ': ['ttwe'],
  'っとぉ': ['ttwo'],
  // ふぁ行
  'っふぁ': ['ffa', 'hhwa'],
  'っふぃ': ['ffi', 'hhwi'],
  'っふぇ': ['ffe', 'hhwe'],
  'っふぉ': ['ffo', 'hhwo'],
  // ふゃ行
  'っふゃ': ['ffya'],
  'っふゅ': ['ffyu'],
  'っふょ': ['ffyo'],
  // ゔぁ行
  'っゔぁ': ['vva'],
  'っゔぃ': ['vvi'],
  'っゔ': ['vvu'],
  'っゔぇ': ['vve'],
  'っゔぉ': ['vvo'],
  // ゔゃ
  'っゔゃ': ['vvya'],
  'っゔゅ': ['vvyu'],
  'っゔょ': ['vvyo'],
  // ぐぁ行
  'っぐぁ': ['ggwa'],
  'っぐぃ': ['ggwi'],
  'っぐぅ': ['ggwu'],
  'っぐぇ': ['ggwe'],
  'っぐぉ': ['ggwo'],
  // でゃ行
  'っでゃ': ['ddha'],
  'っでぃ': ['ddhi'],
  'っでゅ': ['ddhu'],
  'っでぇ': ['ddhe'],
  'っでょ': ['ddho'],
  // どぁ
  'っどぁ': ['ddwa'],
  'っどぃ': ['ddwi'],
  'っどぅ': ['ddwu'],
  'っどぇ': ['ddwe'],
  'っどぉ': ['ddwo'],
}