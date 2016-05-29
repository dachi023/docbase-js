# docbase-js
[DocBase](https://docbase.io) API client for browser and node

## Installation

```
$ npm install --save docbase-js
```

## Example
Using [mzabriskie/axios](https://github.com/mzabriskie/axios)

### Initialize
```js
var DocBase = require('docbase-js');
var docBase = new DocBase({token: 'your-docbase-api-token', domain: 'your-team-domain'});
```

### Teams
```js
docBase.teams.getTeams().then(function(response) {
  console.log(response.data);
});

docBase.teams.getGroups().then(function(response) {
  console.log(response.data);
});

docBase.teams.getTags().then(function(response) {
  console.log(response.data);
});

docBase.teams.searchMemo('query', page, perPage).then(function(response) {
  console.log(response.data.posts, response.data.meta);
});

docBase.teams.postMemo('title', 'body', {
  draft: false,
  notice: true,
  tags: [],
  scope: 'everyone',
  groups: []
}).then(function(response) {
  console.log(response.data);
});

docBase.teams.updateMemo(id, {
  title: 'title',
  body: 'body',
  draft: false,
  notice: true,
  tags: [],
  scope: 'everyone',
  groups: []
}).then(function(response) {
  console.log(response.data);
});

docBase.teams.deleteMemo(id);
```

## Note
- [axios/README.md](https://github.com/mzabriskie/axios/blob/master/README.md)
- [DocBase APIドキュメント](https://help.docbase.io/posts/45703)

## License
MIT
