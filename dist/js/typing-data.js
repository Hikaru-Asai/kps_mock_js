/**
 * @constant
 * @type {array} keywords キーワード
 */
const keywords = [
  // {id: 1, mana: 'ちゃ', kana: 'ちゃ', romaji: ''},
  {id: 0, mana: 'とっきゅう', kana: 'とっきゅう', romaji: ''},
  {id: 1, mana: 'ぷっちょ', kana: 'ぷっちょ', romaji: ''},
  // {id: 2, mana: '魔術師手術中', kana: 'まじゅつししゅじゅつちゅう', romaji: ''},
  // {id: 1, mana: '平和の象徴', kana: 'へいわのしょうちょう', romaji: ''},
  // {id: 2, mana: 'チョコレート', kana: 'ちょこれーと', romaji: ''},
  // {id: 2, mana: '目玉焼き', kana: 'めだまやき', romaji: ''},
  // {id: 4, mana: 'This', kana: '', romaji: 'this'},
  // {id: 3, mana: 'にわか雨', kana: 'にわかあめ', romaji: 'niwakaame'},
  // {id: 4, mana: 'ルールブック', kana: 'るーるぶっく', romaji: ''},
];

/**
 * @type {boolean} typingFlag タイピングの制御フラグ(開始と終了)
 */
let typingFlag = false;

/**
 * @constant
 * @type {string} typeField タイプされた要素
 */
const typedField = document.getElementById('p-typed');

/**
 * @constant
 * @type {string} untypedField タイプされてない要素
 */
const untypedField = document.getElementById('p-untyped');

/**
 * @constant
 * @type {string} kanaField ふりがなの要素
 */
const kanaField = document.getElementById('p-kana');

/**
 * @constant
 * @type {string} manaField 真名の要素
 */
const manaField = document.getElementById('p-mana');

/**
 * @constant
 * @type {string} misstypeField 成功タイプの要素
 */
const successtypeField = document.getElementById('p-successtype');

/**
 * @constant
 * @type {string} misstypeField ミスタイプの要素
 */
const misstypeField = document.getElementById('p-misstype');

/**
 * @type {array} keywordOrder キーワードの順番
 */
let keywordOrder = [];

/**
 * @type {string} keyword タイピングしなければならない文字
 */
let keyword = '';

/**
 * @type {array} keywordArr タイピングしなければならない文字の配列
 */
let keywordArr = [];

/**
 * @type {array} untypedTwoArr タイプされてないキーワード文字の2次元配列
 */
let untypedTwoArr = [];

/**
 * @type {array} typedTwoArr タイプされたキーワード文字の2次元配列
 */
let typedTwoArr = [];

/**
 * @type {int} untypedCnt タイプされてないキーワード文字の2次元配列の番号
 */
let untypedCnt = 0;

/**
 * @type {int} keydownAllCnt 入力タイプ数(全て)
 */
let keydownAllCnt = 0;

/**
 * @type {int} successType 成功タイプ数
 */
let successType = 0;

/**
 * @type {int} missType ミスタイプ数
 */
let missType = 0;

/**
 * @type {string} oneKeyword キーボードの色変更用
 * @example oneKeyword = 'a';
 */
let oneKeyword = '';