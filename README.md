# docbase-js
DocBase API client for browser and node

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
docBase.teams.getTeams()
  .then(function(response) {
    console.log(response.data);
  })
  .catch(function(response) {
    console.log(reponse);
  });

docBase.teams.getGroups()
  .then(function(response) {
    console.log(response.data);
  })
  .catch(function(response) {
    console.log(reponse);
  });

docBase.teams.getTags()
  .then(function(response) {
    console.log(response.data);
  })
  .catch(function(response) {
    console.log(reponse);
  });

docBase.teams.postMemo('title', 'body', {
  draft: false,
  notice: true,
  tags: [],
  scope: 'everyone',
  groups: []
}).then(function(response) {
  console.log(response.data);
})
.catch(function(response) {
  console.log(reponse);
});
```

## License
MIT
