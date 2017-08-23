docbase-js
[DocBase](https://docbase.io) API client for browser and node

## Installing
npm:
```sh
$ npm install --save docbase-js
```

yarn:
```sh
$ yarn add docbase-js
```

## Example
Using [mzabriskie/axios](https://github.com/mzabriskie/axios)

### Initialize
#### `new DocBase(domain, token, [{ baseUrl, timeout, version }])`
```js
import DocBase from 'docbase-js'

const docBase = new DocBase(
  'your_team_domain',
  'your_docbase_api_token',
  {
    baseUrl: 'https://api.docbase.io',
    timeout: 1000,
    version: 1
  }
)
```

### Team
#### [`docBase.team.teams()`](https://help.docbase.io/posts/92977)
```js
const teams = await docBase.team.teams()
console.log(teams.data)
```

#### [`docBase.team.groups()`](https://help.docbase.io/posts/92978)
```js
const groups = await docBase.team.groups()
console.log(groups.data)
```

#### [`docBase.team.tags()`](https://help.docbase.io/posts/92979)
```js
const tags = await docBase.team.tags()
console.log(tags.data)
```

### Memo
#### [`docBase.memo.post({ title, body, [draft, notice, tags, scope, groups] })`](https://help.docbase.io/posts/92980)
```js
const memo = await docBase.memo.post({
  title: 'title',
  body: 'body',
  draft: false,
  notice: true,
  tags: [],
  scope: 'everyone',
  groups: []
})
console.log(memo.data)
```

#### [`docBase.memo.get(id)`](https://help.docbase.io/posts/97204)
```js
const memo = await docBase.memo.get(1)
console.log(memo.data)
```

#### [`docBase.memo.patch(id, { title, body, [draft, notice, tags, scope, groups] })`](https://help.docbase.io/posts/92981)
```js
const memo = await docBase.memo.patch(1, {
  title: 'title',
  body: 'body',
  draft: false,
  notice: true,
  tags: [],
  scope: 'everyone',
  groups: []
})
console.log(memo.data)
```

#### [`docBase.memo.delete(id)`](https://help.docbase.io/posts/92982)
```js
docBase.memo.delete(1)
```

## Note
- [axios/README.md](https://github.com/mzabriskie/axios/blob/master/README.md)
- [DocBase APIドキュメント](https://help.docbase.io/posts/45703)

## License
MIT
