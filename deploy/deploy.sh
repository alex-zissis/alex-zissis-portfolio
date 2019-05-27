eval "$(ssh-agent -s)" # Start ssh-agent cache
mkdir .travis
openssl base64 -d <<< $ssh_key > .travis/id_rsa
cp .travis/id_rsa ~/.ssh/id_rsa
chmod 600 ~/.ssh/id_rsa
ssh-add ~/.ssh/id_rsa
# Skip this command if you don't need to execute any additional commands after deploying.
ssh -o "StrictHostKeyChecking no" centos@$HOST -p $PORT <<EOF
  cd $DEPLOY_DIR
  git fetch --all
  git checkout $TRAVIS_BRANCH
  git pull

  npm install

  pm2 restart keystone.js
EOF