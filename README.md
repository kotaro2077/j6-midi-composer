# J-6 MIDI Composer

Roland J-6のUSB MIDI／USB Audioをブラウザで確認できる非公式Webツールです。

## 🎹 Webアプリ

### [▶ J-6 Composer Labをブラウザで開く](https://kotaro2077.github.io/j6-midi-composer/)

> インストール不要です。ChromeまたはEdgeで開き、画面上部の `MIDI ON` を押してください。

## Features

- MIDI入力とコード構成音の表示
- J-6コードセットと鍵盤割り当ての判定
- コード進行と繰り返しの表示
- USB Audioの波形／FFT表示
- 音声バイパス
- スマートフォン横画面向けの演奏ビュー（コードセット自動認識／J-6鍵盤／構成音）

## Usage
### Use in Browser
Access here
```
https://kotaro2077.github.io/j6-midi-composer/index.html
```

### Use in Local
```bash
python3 -m http.server 8000
```

ChromeまたはEdgeで以下を開きます。

```text
http://localhost:8000/j6_composer_lab_v26.html
```

画面上部の `MIDI ON` と、Audio Input欄の `DEVICE REFRESH` を最初に押してください。

スマートフォンでは横画面にして `MIDI接続` をタップしてください。演奏画面は横スクロールなしの最小構成になり、`一覧・資料` からコードセット一覧などを開けます。

## Disclaimer

本ツールはRolandの公式情報をもとに有志が制作した非公式サイトです。Roland株式会社とは関係ありません。

RolandおよびJ-6はRoland Corporationの商標または登録商標です。
