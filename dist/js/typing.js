/**
 * タイピング結果をモーダル表示・非表示
 * @param {string} modalID 表示するid要素
 */
function toggleModalFunc(modalID) {
  document.getElementById(modalID).classList.toggle("hidden");
}

/**
 * タイピングをスタート
 */
function startTypingFunc() {
  // スタートボタンを非表示
  document.getElementById('p-typingscreen__start').classList.toggle("hidden");
  // カウントを表示
  document.getElementById('p-typingscreen__count').classList.toggle("hidden");
  // カウントを開始
  const countSeconds = 3; // (3秒)
  for (let i = 0; i <= countSeconds; i++) {
    setTimeout(() => {
      document.getElementById('p-typingscreen__count').textContent = (countSeconds - i);
    }, i * 1000);
  }
  setTimeout(() => {
    // カウントを非表示
    document.getElementById('p-typingscreen__count').classList.toggle("hidden");
    // タイピングスタート画面を非表示
    document.getElementById('p-typingscreen__startscreen').classList.toggle("hidden");
    // タイピング画面を表示
    document.getElementById('p-typingscreen').classList.toggle("hidden");
    // タイピングの処理を開始
    initTypingFunc();
  }, countSeconds * 1000);
}

/**
 * タイピングの処理
 */
function initTypingFunc() {
  // 初期化
  keydownAllCnt = 0;
  successType = 0;
  missType = 0;
  successtypeField.textContent = '入力: ' + successType;
  misstypeField.textContent = 'ミス: ' + missType;
  // キーワードの並び替え
  keywordOrder = [];
  for (let i = 0; i < keywords.length; i++) { keywordOrder.push(i); }
  for (let i = keywordOrder.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [keywordOrder[i], keywordOrder[j]] = [keywordOrder[j], keywordOrder[i]];
  }
  // 最初の単語を出題
  nextKeywordFunc();
  // タイピングの制御フラグをtrueにする(キーボード入力の受付を開始する)
  typingFlag = true
}

/**
 * 次のアルファベットのキーの色を変更
 */
function nextKeyFunc() {
  // todo: 全てのキーの色を標準に戻す
  document.getElementById('keyboard__key--zh').classList.toggle("p-keyboard__active");
}

/**
 * 次のキーワードをランダムに取得
 * @return {number} keywords キーワードの配列番号
 */
function nextKeywordFunc() {
  // 初期化
  typedField.textContent = '';
  untypedField.textContent = '';
  untypedCnt = 0;

  console.log(keywordOrder.length);
  keyword = keywords[keywordOrder[0]].kana;
  kanaField.textContent = keywords[keywordOrder[0]].kana;
  manaField.textContent = keywords[keywordOrder[0]].mana;
  // ローマ字がない場合、仮名からローマ字に変換して表示
  if(keywords[keywordOrder[0]].romaji === '') {
    // 仮名を1文字ずつの配列に変換
    keywordArr = [...keywords[keywordOrder[0]].kana];
    // 小書き文字がある場合その前の文字と結合
    for (let i = 0; i < keywordArr.length; i++) {
      if (['っ'].indexOf(keywordArr[i]) > -1) {
        // 小書き文字を取得
        let lower = keywordArr.slice(i, i + 1);
        // 小書き文字の一つ前の大文字を取得
        let upper = keywordArr.slice(i + 1, i + 2);
        // 小書き文字を削除
        keywordArr.splice(i, 1);
        // 大文字に小書き文字を結合
        keywordArr.splice(i, 1, lower + upper);
      }
      if (['ぁ', 'ぃ', 'ぅ', 'ぇ', 'ぉ', 'ゃ', 'ゅ', 'ょ', 'ゎ'].indexOf(keywordArr[i]) > -1) {
        // 小書き文字を取得
        let lower = keywordArr.slice(i, i + 1);
        // 小書き文字の一つ前の大文字を取得
        let upper = keywordArr.slice(i - 1, i);
        // 小書き文字を削除
        keywordArr.splice(i, 1);
        // 大文字に小書き文字を結合
        keywordArr.splice(i - 1, 1, upper + lower);

        i -= 1;
      }
    }
    let roman = [];
    // タイプされてないキーワード文字の2次元配列の作成
    untypedTwoArr = [];
    keywordArr.forEach((val) => {
      // 変数初期化
      roman = [];
      if (val.length === 3) {
        if (romanMap[val] != undefined) {
          roman = [...romanMap[val]];
        }

        const idx1 = val.slice(0, 1);
        const idx2 = val.slice(1, 2);
        const idx3 = val.slice(2, 3);

        const roman1 = [...romanMap[idx1]];
        const roman2 = [...romanMap[idx2]];
        const roman3 = [...romanMap[idx3]];

        const idx23 = val.slice(1, 3);
        const roman23 = [...romanMap[idx23]];

        // 「っ」+「2文字」
        for (val1 of roman1) {
          for (val2 of roman23) {
            roman.push(val1 + val2);
          }
        }

        // 「っ」+「1文字」+「1文字」
        for (val1 of roman1) {
          for (val2 of roman2) {
            for (val3 of roman3) {
              roman.push(val1 + val2 + val3);
            }
          }
        }
        untypedTwoArr.push(roman);
      }  else if (val.length === 2) {
        if (romanMap[val] != undefined) {
          roman = [...romanMap[val]];
        }
  
        const idx1 = val.slice(0, 1);
        const idx2 = val.slice(1, 2);
  
        const roman1 = [...romanMap[idx1]];
        const roman2 = [...romanMap[idx2]];
        for (val1 of roman1) {
          for (val2 of roman2) {
            roman.push(val1 + val2);
          }
        }
        untypedTwoArr.push(roman);
      } else {
        if (romanMap[val] != undefined) {
          roman = [...romanMap[val]];
        }
        untypedTwoArr.push(roman);
      }
    });
    // タイプされたキーワード文字の2次元配列の作成
    typedTwoArr = JSON.parse(JSON.stringify(untypedTwoArr));
    typedTwoArr.forEach((val1, idx1) => {
      typedTwoArr[idx1].forEach((val2, idx2) => {
        typedTwoArr[idx1][idx2] = '';
      });
    });

    // ローマ字を出力する
    for (val of typedTwoArr) {
      typedField.textContent += val[0];
    }
    for (val of untypedTwoArr) {
      untypedField.textContent += val[0];
    }
    // キーボードと指の色変更
    if (oneKeyword !== '') {
      document.getElementById(keyboardMap[oneKeyword]).classList.remove('p-keyboard__active');
      document.getElementById(fingerMap[oneKeyword]).classList.remove('p-finger__active');
    }
    oneKeyword = untypedTwoArr[0][0].substring(0, 1);
    document.getElementById(keyboardMap[oneKeyword]).classList.add('p-keyboard__active');
    document.getElementById(fingerMap[oneKeyword]).classList.add('p-finger__active');
    // 指色変更
  } else {
    untypedField.textContent = keywords[idx].romaji;
  }
  // 配列を1つ進める
  keywordOrder.shift();
}

/*
 * キーボード入力による処理
 */
window.addEventListener('keydown', (e) => {
  if (typingFlag) {
    // 入力した数(結果を表示する時に使用)
    keydownAllCnt += 1;
    // 入力したキーが配列の1文字目に一致する配列のみに書き換える
    let arrSub = untypedTwoArr[untypedCnt].filter(element => element.substring(0, 1).toLowerCase() == e.key.toLowerCase());
    if (arrSub.length > 0) {
      untypedTwoArr[untypedCnt] = arrSub;
    }
    // 入力したキーが配列の1文字目に一致する配列の番号を保持
    let passIndex = untypedTwoArr[untypedCnt].findIndex(element => element.substring(0, 1).toLowerCase() == e.key.toLowerCase());
    // 入力したキーが配列の1文字目に一致する場合、削除する
    untypedTwoArr[untypedCnt].forEach((val, index) => {
      if (e.key.toLowerCase() === untypedTwoArr[untypedCnt][index].substring(0, 1).toLowerCase()) {
        typedTwoArr[untypedCnt][index] += untypedTwoArr[untypedCnt][index].substring(0, 1);
        untypedTwoArr[untypedCnt][index] = untypedTwoArr[untypedCnt][index].slice(1);
      }
    });
    // 入力したキーが配列の1文字目に一致する場合、画面を更新する
    if (passIndex > -1) {
      // 初期化
      typedField.textContent = '';
      untypedField.textContent = '';
      for (val of typedTwoArr) {
        typedField.textContent += val[passIndex];
      }
      for (val of untypedTwoArr) {
        untypedField.textContent += val[passIndex];
      }
      if (untypedTwoArr[untypedCnt][passIndex].length == 0) {
        untypedCnt += 1;
      }
      // キーボードと指の色変更
      if (untypedField.textContent !== '') { 
        document.getElementById(keyboardMap[oneKeyword]).classList.remove('p-keyboard__active'); // 前のキーボード色削除
        document.getElementById(fingerMap[oneKeyword]).classList.remove('p-finger__active');  // 前の指色削除
        oneKeyword = untypedField.textContent.substring(0, 1);
        document.getElementById(keyboardMap[oneKeyword]).classList.add('p-keyboard__active'); // キーボード色追加
        document.getElementById(fingerMap[oneKeyword]).classList.add('p-finger__active'); // 指色追加
      }
      // 成功タイプ
      successType += 1;
      successtypeField.textContent = '入力: ' + successType;
    } else {
      // ミスタイプ
      missType += 1;
      misstypeField.textContent = 'ミス: ' + missType;
    }

    // キーワードの入力が全て完了したら、次のキーワードへ(次のキーワードがある場合)
    if (untypedField.textContent === '') {
      if (keywordOrder.length !== 0) {
        nextKeywordFunc();
      } else {
        typingFlag = false
        document.getElementById('p-typingresult--all').textContent = keydownAllCnt;
        document.getElementById('p-typingresult--miss').textContent = missType;
        toggleModalFunc('p-typingresult');
        console.log("Finish!");
      }
    }
  }
});