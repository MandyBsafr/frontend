NODE_ENV="production"
npm install
npm run build
mkdir deploy
cp -R ./public/* ./deploy/
