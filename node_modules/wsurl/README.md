# wsurl

Given a url (including protocol relative urls - i.e. `//`), generate an appropriate
url for a WebSocket endpoint (`ws` or `wss`).


[![NPM](https://nodei.co/npm/wsurl.png)](https://nodei.co/npm/wsurl/)

[![stable](https://img.shields.io/badge/stability-stable-green.svg)](https://github.com/dominictarr/stability#stable) [![Build Status](https://img.shields.io/travis/DamonOehlman/wsurl.svg?branch=master)](https://travis-ci.org/DamonOehlman/wsurl) 

## Example Usage

```js
var wsurl = require('wsurl');

console.log(wsurl('//test.com'));

// When run in a browser from http://
// -> ws://test.com

// When run in a browser from https://
// -> wss://test.com

// When run from node (no location.href available)
// -> wss://test.com (assume secure)

// when run in a browser from file://
// -> wss://test.com (assume secure)

```

## License(s)

### ISC

Copyright (c) 2014, Damon Oehlman <damon.oehlman@gmail.com>

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
