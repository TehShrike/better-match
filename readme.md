# better-match

- No need to remember to add `g` every time
- returns an array of captures, making it usable in a functional manner

```sh
npm i better-match
```

<!--js
const betterMatch = require('./')
-->

```js
betterMatch(
	/(\d):(\d)/,
	'1:4 5:6 2:3'
) // => [ [1, 4], [5, 6], [2, 3] ]

betterMatch(
	/(?:^|\s)([^\s]{2})/g,
	'lol butts'
) // => [ ['lo'], ['bu'] ]
```

# License

[WTFPL](http://wtfpl2.com)
