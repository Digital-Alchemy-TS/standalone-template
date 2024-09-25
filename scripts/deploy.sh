#!/bin/sh
npx tsc -p tsconfig.deploy.json
cp package.json ./deploy
cd deploy || exit 1
touch yarn.lock
yarn install
cp ../.env .
yarn workspaces focus --production
