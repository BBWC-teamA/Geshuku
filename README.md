# Geshuku

大学生とサークルのマッチングシステム

## 開発環境 (Docker)
### 要件
- Docker
	- https://docs.docker.com/get-docker/

## 環境構築

Geshuku直下の位置（docker-compose.ymlがある場所）で以下のdockerを起動
```sh
docker-compose run --rm app /bin/bash
```

コンテナを起動したら，npmをインストール
```sh
npm install
```

### データベースの初期化
まず，sequelizeのインストール
```sh
docker-compose run --rm app npm i mysql2 sequelize sequelize-cli
```

既にデータベースを生成していた場合，以下のコマンドで初期化する．
```sh
docker-compose run --rm app npx sequelize-cli db:migrate:undo:all
```

Geshuku直下の位置で，DBマイグレーションを実行
```sh
docker-compose run --rm app npx sequelize-cli db:migrate
```

次に，データベースに初期データを挿入
```sh
docker-compose run --rm app npx sequelize-cli db:seed:all
```

データベースの中身を確認したい場合は
```sh
docker-compose up -d
```
でコンテナを起動し，以下のコマンドを入力すると，mysqlを起動できる．
```sh
docker-compose exec mysql mysql -uroot -p
```