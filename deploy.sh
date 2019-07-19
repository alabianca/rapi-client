sed -e 's/$HEROKU_USERNAME/'"$HEROKU_USERNAME"'/g' -e 's/$HEROKU_TOKEN/'"$HEROKU_TOKEN"'/g' heroku_auth > ~/.netrc
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker login --username=_ --password="$HEROKU_TOKEN" registry.heroku.com
heroku container:push web --app $HEROKU_APP_NAME
heroku container:release web --app $HEROKU_APP_NAME