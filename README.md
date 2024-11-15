# cc-fullstuck-project

## 構築手順

0. はじめに

   ・psql、npm などは利用できる環境にしておいてください

1. 環境作成

   1-1. ディレクトリ作成
   ・ディレクトリの作成
   作成したいディレクトリに移動した後以下のコマンドを入力

```
mkdir try-project
cd try-project
```

1-2. git をクローンしてディレクトリ移動

```
git clone https://github.com/noda024/cc-fullstuck-project.git

cd cc-fullstuck-project
```

1-3 front 側のパッケージインストール

```
cd frontend
npm i
npm install react react-dom react-swipeable
```

1-4 backend 側のパッケージインストール

```
cd ../backend
npm i
```

2. データのインポート・環境変数追加

   ・frontend ディレクトリ以下に`.env.local`を作成し以下を記載

```
VITE_API_BASE_URL=/api
```

・backend ディレクトリ以下に`.env.local`を作成し、自分の所有する DB の値を作成

```
DB_USER = ""
DB_PASSWORD = ""
DB_NAME = ""
PORT=""
```

3. アプリの動かし方

```
// expressサーバが立ち上がります
npm run start

// reactサーバが立ち上がります
cd ../frontend
npm run dev
```

4. 実際に使ってみる

   あとはブラウザを開いて使ってみてください！
   機能に関しては適当に下をの main 画面の機能の部分を見てください

5. 今後の実装

叩き台を作成したので、社内公募アプリ的なものにしたい(例：技術を登録 → フリックしてマッチ的な)
上記のために必要実装

- マッチングするためにいいねの保管
- 保有スキルによる募集人材と必須人材の類似度による並び替え
- 画面をより綺麗に
- 個人データの登録(今は insert で名前のみ登録)

## アプリ概要

### マッチングアプリ叩き台(人でなくても良い)

#### 設計(必須項目)

#### main 画面　

- 画面
  - 上のバー作成(not must)
  - 大きく画像表示
  - 画像の下に項目表示
- 機能
  - 画面を右にフリックするといいね、それ以外だとダメ
  - 画像のボタンを押すと詳細を見れる
  - 画面表示時にバックエンドから情報抽出
  - 男だけ表示(id 番号はランダムになるように seed 値)
- データ
  - image に関しては backend/img に配置(よろしくないが s3 がないため)
  -

#### 詳細画面

- 画面

  - 上にタイトル
  - 小さめの画面表示
  - 詳細情報

- 機能
  - 特になし
  - main 画面から情報を連携し、出力

#### DB 情報

- テーブル(まずは単純で良い)
  - id(unique primary)
  - name
  - sex
  - age
  - born
  - description
  - image_path
  - good(もらった good の id)

#### API 作成

- 情報取得 API
  - 個人情報の取得
  - request はなしで全量取得
  - response は json 形式でテーブルの全て取得

###　タスク

#### タスク一覧

- 利用パッケージインストール(並行しつつでよい)

  - react
  - 左右にフリックするやつ react-tinder-card？
  - express

- 開発環境作成

  - react, express サーバ立ち上げ(疎通確認まで)
  - 画像表示できれば OK

- 基礎機能作成
  - フロント画面作成(画面に情報出す)
  - フロント作成(フリックして、適当な画面表示)
- DB セットアップ
  - DB データ作成
  - データインポート
- API 作成
  - フロントから呼ぶ API
- front 画面描写
  - front の画面を修正・完成
