# Sentry base setup
1. set SENTRY_DSN variable into .env file

### Add sourcemap for release on Sentry
full doc: https://docs.sentry.io/platforms/javascript/guides/react/sourcemaps/uploading/cli/

short doc:
1. install sentry-cli "npm install -g @sentry/cli"
2. set SENTRY_AUTH_TOKEN, SENTRY_ORG, SENTRY_PROJECT variables into .env file 
3. create release "sentry-cli releases new <release_version>"
4. upload sourcemaps for release "sentry-cli releases files <release_version> upload-sourcemaps ./dist"
5. close release "sentry-cli releases finalize 0.1.0"

# Styleguide
[Grouping CSS Properties by SMACSS](./_docs/css_order.md)

# TODO:
-[ ] plopjs
-[ ] vite-imagetools
