'use strict';

const languageParam=new URLSearchParams(location.search).get('lang');
const currentLanguage=languageParam==='en'?'en':'ja';

const englishText={
  'スマートフォン操作バー':'Mobile controls',
  'MIDI未接続':'MIDI disconnected',
  'MIDI接続':'CONNECT MIDI',
  '閉じる':'CLOSE',
  '一覧・資料':'LISTS / HELP',
  '本Webサイトは非公式であり、Rolandの公式情報をもとに有志が制作したサイトです。Roland株式会社とは関係ありません。':'This is an unofficial community website based on information published by Roland. It is not affiliated with Roland Corporation.',
  'MIDI設定':'MIDI SETTINGS',
  '未接続':'Disconnected',
  'Web MIDIは無効です':'Web MIDI is disabled',
  '認識がうまくされない場合はJ-6の電源を再投入してください。':'If the J-6 is not detected correctly, power-cycle the unit.',
  'コードセット一覧':'CHORD SETS',
  '公式マニュアル':'OFFICIAL MANUAL',
  'パターン':'PATTERNS',
  'MIDIログ':'MIDI LOG',
  'ガイド':'GUIDE',
  'コード一覧':'CHORD LIST',
  'フレーズ一覧':'PHRASE LIST',
  'J-6公式':'OFFICIAL J-6',
  'J-6鍵盤割り当て':'J-6 KEY ASSIGNMENT',
  '未判定':'Not detected',
  '自動判定コードセット':'AUTO-DETECTED CHORD SET',
  '手動設定':'MANUAL SET',
  'コードセット番号（2桁）':'Two-digit chord set number',
  '確定':'CONFIRM',
  '再判定':'DETECT AGAIN',
  'Cを押したまま判定 → 離して次のキー':'Hold C to detect → release, then play the next key',
  '構成音':'CHORD TONES',
  'コード':'CHORD',
  'ルート':'ROOT',
  'ベース':'BASS',
  'ベロシティ':'VELOCITY',
  '受信したMIDI構成音':'RECEIVED MIDI NOTES',
  'コード進行':'CHORD PROGRESSION',
  '選択中コードの構成音':'NOTES IN SELECTED CHORD',
  '補助設定':'MORE SETTINGS',
  'J-6 MIDI出力':'J-6 MIDI OUTPUT',
  '直前のコード':'RECENT CHORDS',
  'J-6 USB：本体内蔵音源':'J-6 USB: INTERNAL SOUND ENGINE',
  'ANALOG：MIX OUT → AUDIO I/F':'ANALOG: MIX OUT → AUDIO I/F',
  '入力機器を確認':'Refresh input devices',
  'INPUT：—':'INPUT: —',
  'FORMAT：—':'FORMAT: —',
  'OUTPUT：OS DEFAULT':'OUTPUT: OS DEFAULT',
  'OSによってJ-6が「USB Audio」「Digital Input」または別名で表示されます。\n            USB候補を選択してCONNECTしてください。':'Depending on your OS, the J-6 may appear as “USB Audio,” “Digital Input,” or another name. Select the likely USB device, then choose CONNECT.',
  '使用中のコードセットを特定':'IDENTIFY THE ACTIVE CHORD SET',
  'J-6でCから半音ずつコードを鳴らします':'Play each J-6 chord chromatically from C',
  '判定を開始':'START DETECTION',
  '現在のコードを登録':'CAPTURE CURRENT CHORD',
  'リセット':'RESET',
  '開始後、J-6のCキーから順番にコードを鳴らしてください。入力が安定すると自動登録します。':'After starting, play the J-6 keys in order from C. Stable input is captured automatically.',
  '候補':'CANDIDATES',
  'まだ判定データがありません。':'No detection data yet.',
  'J-6鍵盤へのコード割り当て':'CHORD ASSIGNMENTS ON J-6 KEYS',
  'MIDI入力構成音を表示':'Shows notes received over MIDI',
  '収録セット一覧':'INCLUDED CHORD SETS',
  '選択すると上に表示':'Select a row to show it above',
  '公式マニュアル情報':'OFFICIAL MANUAL INFORMATION',
  'PDFを開く':'OPEN PDF',
  '音色選択':'TONE SELECTION',
  'バンク選択':'BANK SELECTION',
  'SOUND':'SOUND',
  '1～8':'1–8',
  'を押して音色選択モードに入り、ステップ':' to enter tone-selection mode, then use steps ',
  'で音色を選択します。TEMPO/VALUEでも変更できます。':' to select a tone. You can also change it with TEMPO/VALUE.',
  'SOUNDを押しながらステップ1～8':'Hold SOUND and press steps 1–8',
  'を押します。8バンク×8音色で、プリセット・パッチは64音色です。':'. There are eight banks with eight tones each, for 64 preset patches.',
  'エフェクト':'EFFECTS',
  'MIDI受信':'MIDI RECEIVE',
  'ユーザー・パターンは64個です。MIDI Program Change 0～63でPattern 1～64を扱います。':'There are 64 user patterns. MIDI Program Change 0–63 selects Pattern 1–64.',
  '内蔵エフェクトは':'The built-in effects are',
  'と':'and',
  'です。':'.',
  'USB Type-C端子は':'The USB Type-C port supports',
  'に対応します。':'.',
  'Note On/Off、CC64 Hold、Program Change、Clock、Start、Stopを扱います。公開MIDI仕様では音色つまみ位置の読み出しには対応しません。':'Supports Note On/Off, CC64 Hold, Program Change, Clock, Start, and Stop. The published MIDI specification does not support reading tone-knob positions.',
  'パターン Program Change':'PATTERN PROGRAM CHANGE',
  '送信':'SEND',
  'PROGRAM CHANGE送信':'SEND PROGRAM CHANGE',
  '外部Clock未送信':'External clock not sent',
  'J-6本体のRX Program ChangeをONにし、Pc.Chとこの画面の「パターンPCチャンネル」を一致させてください。':'Turn on RX Program Change on the J-6, and match its Pc.Ch setting to PATTERN CH on this page.',
  'J-6 USB MIDI セットアップ':'J-6 USB MIDI SETUP',
  '1. USB接続':'1. USB CONNECTION',
  '4. ブラウザ':'4. BROWSER',
  'USBハブを避け、データ通信対応ケーブルでJ-6とPCを直接接続します。':'Avoid USB hubs. Connect the J-6 directly to your computer with a data-capable cable.',
  '通常のPC接続ではA.LnKをOFFに設定し、設定後にJ-6を再起動します。':'For a standard computer connection, set A.LnK to OFF, then restart the J-6.',
  '受信チャンネルはAuto DetectでJ-6のNote Onから自動検出します。送信チャンネルはJ-6のSynth Channelに合わせます。':'Auto Detect finds the receive channel from J-6 Note On messages. Set the output channel to the J-6 Synth Channel.',
  'Chrome系ブラウザでMIDIを有効化し、入力・出力の両方にJ-6を選択します。':'Enable MIDI in a Chromium-based browser and select the J-6 for both input and output.',
  '仕様メモ':'SPECIFICATION NOTES',
  '演奏MIDI':'PERFORMANCE MIDI',
  '公式資料':'OFFICIAL DOCUMENTATION',
  'Note On/Offは0–127。Velocity対応。AftertouchとPitch Bendは非対応です。':'Note On/Off uses values 0–127 and supports velocity. Aftertouch and Pitch Bend are not supported.',
  'J-6は受信側でCC64 Holdに対応します。':'The J-6 supports CC64 Hold on MIDI input.',
  'Program Change 0–63を送受信し、専用チャンネル初期値は16です。':'Sends and receives Program Change 0–63. The dedicated channel defaults to 16.',
  'MIDI Clock、Start、Stopを送受信します。Continueは非対応です。':'Sends and receives MIDI Clock, Start, and Stop. Continue is not supported.',
  'SOUNDを押し、ステップ1–8で音色、SOUNDを押しながらステップ1–8でバンクを選択します。':'Press SOUND and use steps 1–8 to select a tone; hold SOUND and use steps 1–8 to select a bank.',
  'J-6 取扱説明書 Version 1.02':'J-6 Reference Manual Version 1.02'
};

const dynamicEnglish={
  '再接続':'RECONNECT',
  '鍵盤へ':'BACK TO KEYS',
  'MIDI出力を開けません':'Could not open MIDI output',
  'MIDI出力ポートが開かれていません':'MIDI output port is not open',
  '出力ポートが切断されています':'The output port is disconnected',
  'MIDI送信エラー':'MIDI send error',
  'なし':'None',
  '入力ポートなし':'No input ports',
  '再接続待ち':'Waiting to reconnect',
  '未判定':'Not detected',
  '判定停止':'Detection stopped',
  '公式100セット待機中':'Waiting for the 100 official sets',
  '自動確定':'Auto-confirmed',
  '手動確定':'Manually confirmed',
  '原音':'Original',
  'Web Audio非対応':'Web Audio is not supported',
  '入力機器なし':'No input devices',
  'MediaDevices非対応':'MediaDevices is not supported',
  'USB候補を選択':'Select a likely USB device',
  'OUTPUT：OS設定を使用':'OUTPUT: Using OS settings',
  '入力機器を選択してください':'Select an input device',
  '音声入力非対応':'Audio input is not supported',
  '入力許可または機器取得に失敗しました':'Could not get input permission or access the device',
  '利用できる音声入力がありません':'No audio input is available',
  '名称なしの音声入力':'Unnamed audio input',
  'CONNECTED（名称未確認）':'CONNECTED (name unconfirmed)',
  '停止':'Stopped',
  '先に入力をCONNECTしてください':'Connect an input first',
  '選択入力を確認':'Check the selected input',
  'FFT API非対応':'FFT API is not supported',
  '公式100セット・HTML内蔵':'100 official sets embedded in HTML',
  '内蔵データ検証エラー':'Embedded-data validation error',
  'Web MIDI非対応':'Web MIDI is not supported',
  'MIDI入力構成音表示':'Received MIDI chord tones',
  'J-6のコードモードでCから順に弾いてください。2音以上の構成音と音程配置で判定します。':'In J-6 chord mode, play from C upward. Detection uses voicings of two or more notes and their intervals.',
  '01〜99の2桁で入力してください':'Enter two digits from 01 to 99',
  '手動設定で固定中':'Locked to manual setting',
  '手動設定を使用中です。「再判定」で自動判定へ戻せます。':'Using a manual setting. Choose DETECT AGAIN to return to automatic detection.',
  '12鍵 完了':'All 12 keys complete',
  'コードセットを確定しました。以降のMIDI入力では更新しません。「再判定」で解除できます。':'The chord set is confirmed and will no longer update from MIDI input. Choose DETECT AGAIN to unlock it.',
  'J-6の C キーを鳴らしてください。コードが安定したら自動で登録します。':'Play the C key on the J-6. The chord is captured automatically once stable.',
  '12キーの登録が完了しました。候補の一致率を確認してください。':'All 12 keys are captured. Check the candidate match scores.',
  '公式100セットを読み込むまで判定しません。':'Detection will begin after the 100 official sets have loaded.',
  'Roland J-6 Version 1.02のコード・セット1～100をHTML内へ保存済みです。起動時の通信はありません。':'Roland J-6 Version 1.02 chord sets 1–100 are embedded in the HTML; no network request is made at startup.',
  '内蔵コードセットが100件揃っていないため判定を停止しています。':'Detection is stopped because the embedded data does not contain all 100 chord sets.',
  'J-6はOSによりUSB Audio、Digital Input、名称なしの入力として表示される場合があります。選択中の入力へ接続します。':'Depending on your OS, the J-6 may appear as USB Audio, Digital Input, or an unnamed input. This connects to the selected input.',
  'J-6 MIX OUT/PHONESをオーディオインターフェースの入力へ接続してください。':'Connect the J-6 MIX OUT/PHONES jack to an audio-interface input.'
};

function translateDynamicString(value){
  if(currentLanguage!=='en'||typeof value!=='string')return value;
  if(dynamicEnglish[value])return dynamicEnglish[value];
  if(englishText[value])return englishText[value];
  return value
    .replace(' [USB候補]',' [LIKELY USB]')
    .replace(' [内蔵]',' [BUILT-IN]')
    .replace(/^(.*) を監視中$/, 'Monitoring $1')
    .replace(/^MIDI出力を開けません: /,'Could not open MIDI output: ')
    .replace(/^MIDI送信エラー: /,'MIDI send error: ')
    .replace(/^(\d+)コードの反復を検出$/,'Detected a repeating $1-chord loop')
    .replace(/^J-6 Set (\d+) 割り当て鍵: /,'J-6 Set $1 assigned keys: ')
    .replace(/^検出中 (.+)$/,'Detecting $1')
    .replace(/^トリガー (.+)$/,'Trigger $1')
    .replace(/^Set (.+) — 手動設定$/,'Set $1 — Manual')
    .replace(/^(.+)：構成音の到着待ち$/,'$1: Waiting for chord tones')
    .replace(/^(.+) OK → 鍵盤を離して (.+)$/,'$1 OK → release the key, then play $2')
    .replace(/^一致度 (\d+)% \/ 音程配置 (.+)$/,'Match $1% / exact voicings $2')
    .replace(/^Set (.+) — 確定$/,'Set $1 — Confirmed')
    .replace(/^自動確定 /,'Auto-confirmed ')
    .replace(/^手動確定 /,'Manually confirmed ')
    .replace(/^(.+) \/ 100セット中 \/ 一致度 (\d+)%$/,'$1 / 100 sets / match $2%')
    .replace(/^登録: (.+)。次は (.+) キーを鳴らしてください。$/,'Captured: $1. Next, play the $2 key.')
    .replaceAll('：',': ');
}

function localizeTree(root){
  if(currentLanguage!=='en'||!root)return;
  const elements=root.nodeType===Node.ELEMENT_NODE?[root,...root.querySelectorAll('*')]:[];
  if(root.nodeType===Node.TEXT_NODE){
    const translated=translateDynamicString(root.nodeValue);
    if(translated!==root.nodeValue)root.nodeValue=translated;
  }
  for(const element of elements){
    for(const node of element.childNodes){
      if(node.nodeType!==Node.TEXT_NODE)continue;
      const raw=node.nodeValue;
      const trimmed=raw.trim();
      const translated=translateDynamicString(trimmed);
      if(translated!==trimmed)node.nodeValue=raw.replace(trimmed,translated);
    }
    for(const attr of ['aria-label','title','placeholder']){
      const value=element.getAttribute(attr);
      const translated=translateDynamicString(value);
      if(value&&translated!==value)element.setAttribute(attr,translated);
    }
  }
}

function translateStaticPage(){
  document.documentElement.lang=currentLanguage;
  document.documentElement.dataset.language=currentLanguage;
  if(currentLanguage==='en'){
    document.querySelectorAll('body *:not(script):not(style)').forEach(element=>{
      for(const node of element.childNodes){
        if(node.nodeType!==Node.TEXT_NODE)continue;
        const raw=node.nodeValue;
        const trimmed=raw.trim();
        if(trimmed&&englishText[trimmed])node.nodeValue=raw.replace(trimmed,englishText[trimmed]);
      }
      for(const attr of ['aria-label','title','placeholder']){
        const value=element.getAttribute(attr);
        if(value&&englishText[value])element.setAttribute(attr,englishText[value]);
      }
    });
  }

  const isEnglish=currentLanguage==='en';
  document.title=isEnglish
    ? 'Roland J-6 MIDI Chord Detector & Composer | J-6 Composer Lab'
    : 'Roland J-6 MIDIコード判定・作曲ツール | J-6 Composer Lab';
  const description=isEnglish
    ? 'A free, unofficial browser tool for exploring all 100 Roland J-6 chord sets, MIDI notes, chord progressions, and USB Audio. No installation required.'
    : 'Roland J-6のMIDIコード判定、全100コードセットの鍵盤割り当て、構成音、コード進行、USB Audioをブラウザで確認できる無料の非公式作曲・学習ツール。インストール不要。';
  document.querySelector('meta[name="description"]')?.setAttribute('content',description);
  document.querySelector('meta[property="og:locale"]')?.setAttribute('content',isEnglish?'en_US':'ja_JP');
  document.querySelector('meta[property="og:title"]')?.setAttribute('content',document.title.replace(' | J-6 Composer Lab',''));
  document.querySelector('meta[property="og:description"]')?.setAttribute('content',description);
  document.querySelector('meta[name="twitter:title"]')?.setAttribute('content',document.title.replace(' | J-6 Composer Lab',''));
  document.querySelector('meta[name="twitter:description"]')?.setAttribute('content',description);
  const localizedUrl=`https://kotaro2077.github.io/j6-midi-composer/j6_composer_lab_v26.html?lang=${currentLanguage}`;
  document.querySelector('link[rel="canonical"]')?.setAttribute('href',localizedUrl);
  document.querySelector('meta[property="og:url"]')?.setAttribute('content',localizedUrl);
  const structuredData=document.querySelector('script[type="application/ld+json"]');
  if(structuredData){
    try{
      const data=JSON.parse(structuredData.textContent);
      data.url=localizedUrl;
      data.description=description;
      data.inLanguage=currentLanguage;
      data.browserRequirements=isEnglish
        ? 'Google Chrome or Microsoft Edge with Web MIDI support'
        : 'Web MIDI対応のGoogle ChromeまたはMicrosoft Edge';
      structuredData.textContent=JSON.stringify(data);
    }catch{}
  }
  document.querySelectorAll(`.language-switch a[lang="${currentLanguage}"]`).forEach(link=>link.setAttribute('aria-current','page'));
  try{localStorage.setItem('j6-language',currentLanguage)}catch{}

  if(isEnglish){
    document.querySelectorAll('a[href*="/jpn/"]').forEach(link=>{
      link.href=link.href
        .replace('/jpn/28318652.html','/eng/28645807.html')
        .replace('/jpn/28318656.html','/eng/28645808.html')
        .replace('/jpn/','/eng/');
    });
    document.querySelectorAll('a[href*="J-6_jpn02_W.pdf"]').forEach(link=>link.href=link.href.replace('J-6_jpn02_W.pdf','J-6_eng02_W.pdf'));
    document.querySelectorAll('a[href*="roland.com/jp/"]').forEach(link=>link.href=link.href.replace('roland.com/jp/','roland.com/global/'));
  }
}

translateStaticPage();

if(currentLanguage==='en'&&'MutationObserver' in window){
  new MutationObserver(mutations=>{
    for(const mutation of mutations){
      if(mutation.type==='characterData')localizeTree(mutation.target);
      for(const node of mutation.addedNodes)localizeTree(node);
    }
  }).observe(document.body,{subtree:true,childList:true,characterData:true});
}
