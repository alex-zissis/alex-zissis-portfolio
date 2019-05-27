eval "$(ssh-agent -s)" # Start ssh-agent cache
openssl base64 -d <<< $ssh_key > .travis/id_rsa
chmod 600 .travis/id_rsa # Allow read access to the private key
ssh-add .travis/id_rsa # Add the private key to SSH

# Skip this command if you don't need to execute any additional commands after deploying.
ssh centos@$HOST -p $PORT <<EOF
  cd $DEPLOY_DIR
  git fetch --all
  git checkout $TRAVIS_BRANCH
  git pull

  npm install

  pm2 restart keystone.js
EOF