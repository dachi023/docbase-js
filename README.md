# [docbase-js](https://dachi.work/docbase-js)

[![npm](https://img.shields.io/npm/v/docbase-js?style=flat-square)](https://www.npmjs.com/package/docbase-js)
[![npm bundle size](https://img.shields.io/bundlephobia/min/docbase-js?style=flat-square)](https://www.npmjs.com/package/docbase-js)
[![build](https://img.shields.io/circleci/build/github/dachi023/docbase-js?logo=circleci&style=flat-square)](https://circleci.com/gh/dachi023/docbase-js)
[![coverage](https://img.shields.io/codecov/c/github/dachi023/docbase-js?logo=codecov&style=flat-square)](https://codecov.io/gh/dachi023/docbase-js)
[![license](https://img.shields.io/npm/l/docbase-js?style=flat-square)](https://github.com/dachi023/docbase-js/blob/master/LICENSE)

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
