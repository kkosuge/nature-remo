# Nature Remo

[![npm version](https://badge.fury.io/js/nature-remo.svg)](https://badge.fury.io/js/nature-remo)

```bash
yarn add nature-remo
# or
npm install nature-remo
```

## Basic Usage

```js
const NatureRemo = require('nature-remo')

const client = new NatureRemo.Cloud(process.env.NATURE_REMO_CLOUD_API_TOKEN)

async function turnOffAirConditioner() {
  const airconList = await client.listAircon()
  const aircon = airconList[0]

  await client.updateAirconSettings(aircon.id, {
    button: 'power-off',
  })

  console.log('Aircon: turned off')
}

async function turnOnAirConditioner() {
  const airconList = await client.listAircon()
  const aircon = airconList[0]

  await client.updateAirconSettings(aircon.id, {
    operation_mode: 'cool',
    temperature: 24,
  })

  console.log('Aircon: turned on')
}
```

You might want to obtain Nature Remo Cloud API token from https://home.nature.global.

- **RunKit Notebook**: Check out [RunKit Notebook](https://runkit.com/uetchy/nature-remo-cloud-api-nodejs-example) for Nature Remo Cloud API example.
- **Code Example**: See [examples](https://github.com/uetchy/nature-remo/tree/master/examples) for various code examples.
- **Documents**: See [API Documents](https://uetchy.github.io/nature-remo/) for detailed API documents.

## API

```js
const NatureRemo = require('nature-remo')
```

### Cloud API

See [Cloud API Documents](https://uetchy.github.io/nature-remo/classes/cloud.html).

```js
const client = new NatureRemo.Cloud(NATURE_REMO_CLOUD_API_TOKEN)
```

### Local API

See [Local API Documents](https://uetchy.github.io/nature-remo/classes/local.html).

```js
const client = new NatureRemo.Local(NATURE_REMO_LOCAL_ADDRESS)
```

## Development

```bash
npm install

NATURE_REMO_CLOUD_TOKEN=<nature-remo-cloud-api-token>
NATURE_REMO_AIRCON_ID=<arbitorary aircon id>
npm test
```
