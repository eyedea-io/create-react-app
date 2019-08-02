# YOUR_PROJECT_NAME

Welcome to the YOUR_PROJECT_NAME repository 👋

## Useful URLs

- [staging - STAGING_URL](STAGING_URL)
- [production - PRODUCTION_URL](PRODUCTION_URL)

## Slack channels

- [`#SLACK_CHANNEL_NAME`](SLACK_CHANNEL_URL)

## Getting started

**Dependencies**

1. Install project dependencies `yarn`

**Syncano**

1. Attach Syncano instance `npx s attach` - create new instance and name it `PROJECT_INSTANCE_BASENAME-YOUR-NAME`
2. Deploy Syncano sockets with `npx s hot`

**Creating a new socket**

1. In syncano folder run `yarn create syncano-socket syncano/YOUR-SOCKET-NAME`

**Components and Views development**

1. Run `yarn storybook`
2. Go to [http://localhost:9009](http://localhost:9009)

**Developing app**

1. Run `yarn dev app`
2. Go to [http://localhost:8080](http://localhost:8080)

**Testing app**

1. Start app server `yarn dev app`
2. Download [Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress.html#Direct-download)
3. Open project in cypress

**Upgrade Smashing components**

1. Run `yarn upgrade-smashing`
