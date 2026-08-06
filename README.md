# J-6 MIDI Composer

Roland J-6のUSB MIDI／USB Audioをブラウザで確認できる非公式Webツールです。

## Features

- MIDI入力とコード構成音の表示
- J-6コードセットと鍵盤割り当ての判定
- コード進行と繰り返しの表示
- USB Audioの波形／FFT表示
- 音声バイパス

## Usage

```bash
python3 -m http.server 8000
```

ChromeまたはEdgeで以下を開きます。

```text
http://localhost:8000/j6_composer_lab_v26.html
```

画面上部の `MIDI ON` と、Audio Input欄の `DEVICE REFRESH` を最初に押してください。

## Disclaimer

本ツールはRolandの公式情報をもとに有志が制作した非公式サイトです。Roland株式会社とは関係ありません。

RolandおよびJ-6はRoland Corporationの商標または登録商標です。
