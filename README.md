# docbase-js
DocBase API client for browser and node

## Installation

```
$ npm install --save docbase-js
```

## Example
Using [mzabriskie/axios](https://github.com/mzabriskie/axios)

### Teams
```js
var DocBase = require('docbase-js');
var docBase = new DocBase(':your-token');

docBase.teams.getTeams()
  .then(function(response) {
    console.log(response.data);
  })
  .catch(function(response) {
    console.log(reponse);
  });

docBase.teams.getGroups(':your-domain')
  .then(function(response) {
    console.log(response.data);
  })
  .catch(function(response) {
    console.log(reponse);
  });

docBase.teams.getTags(':your-domain')
  .then(function(response) {
    console.log(response.data);
  })
  .catch(function(response) {
    console.log(reponse);
  });

docBase.teams.postMemo(
  ':your-domain',
  ':title',
  ':body',
  {
    draft: false,
    notice: true,
    tags: [],
    scope: 'everyone',
    groups: []
  }
).then(function(response) {
  console.log(response.data);
})
.catch(function(response) {
  console.log(reponse);
});
```

## License
MIT
