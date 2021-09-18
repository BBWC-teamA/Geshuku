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
Geshuku直下の位置で，DBマイグレーションを実行
```sh
docker-compose run --rm app npx sequelize-cli db:migrate
```

次に，データベースに初期データを挿入
```sh
docker-compose run --rm app npx sequelize-cli db:seed:all
```