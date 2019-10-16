# [docbase-js](https://dachi.work/docbase-js)
[![CircleCI](https://circleci.com/gh/dachi023/docbase-js.svg?style=svg)](https://circleci.com/gh/dachi023/docbase-js)

API client for [DocBase](https://docbase.io) built with TypeScript

## Installation

npm:
```bash
$ npm install --save docbase-js
```

yarn:
```bash
$ yarn add docbase-js
```

## Usage

### Initialize

```js
import docbase from 'docbase-js'

const { comment, group, post, tag, team, user } = docbase({
  /* Required */
  domain: 'your-team-domain',
  token: 'YourAccessToken123',

  /* Optional */
  baseUrl: 'https://api.docbase.io',
  timeout: 3000,
  version: 2
})
```

### Call DocBase API
```js
import docbase from 'docbase-js'

const { team } = docbase({ domain: 'your-team-domain', token: 'YourAccessToken123' })
const { data } = await team.list()
```

## Links
* [DocBase APIドキュメント](https://help.docbase.io/posts/45703)

## License
[MIT](https://github.com/dachi023/docbase-js/blob/master/LICENSE)
