# docbase-js
DocBase API client for browser and node

## Installation

```
$ npm install --save docbase-js
```

## Call API
Using [mzabriskie/axios](https://github.com/mzabriskie/axios)

### Teams
```js
var teams = new docbase.Teams(':your-token');

teams.getTeams()
  .then(function(response) {
    console.log(response.data);
  })
  .catch(function(response) {
    console.log(reponse);
  });

teams.getGroups(':your-domain')
  .then(function(response) {
    console.log(response.data);
  })
  .catch(function(response) {
    console.log(reponse);
  });

teams.getTags(':your-domain')
  .then(function(response) {
    console.log(response.data);
  })
  .catch(function(response) {
    console.log(reponse);
  });
```

## License
MIT
