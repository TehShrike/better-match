# better-match

So that I never have to use `regex.exec(string)` or `string.match(regex)` again

```sh
npm i better-match
```

<!--js
const betterMatch = require('./')
-->

```js
betterMatch(/(\d):(\d)/g, '1:4 5:6 2:3') // => [ [1, 4], [5, 6], [2, 3] ]
betterMatch(/(?:^|\s)([^\s]{2})/g, 'lol butts') // => [ ['lo'], ['bu'] ]
```

# License

[WTFPL](http://wtfpl2.com)
