eval "$(ssh-agent -s)" # Start ssh-agent cache
mkdir .travis
echo $ssh_key | openssl base64 -d > .travis/id_rsa
cat .travis/id_rsa
chmod 600 .travis/id_rsa 
echo $SSH_PASS | ssh-add -p .travis/id_rsa

# Skip this command if you don't need to execute any additional commands after deploying.
ssh -o "StrictHostKeyChecking no" alex@$HOST <<EOF
  cd $DEPLOY_DIR
  git fetch --all
  git checkout $TRAVIS_BRANCH
  git pull

  npm install

  pm2 restart keystone.js
EOF