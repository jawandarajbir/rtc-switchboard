# rtc-capture

Roughly equivalent to the
[`getUserMedia`](https://www.npmjs.org/package/getusermedia) package but with
support for rtc.io plugins.


[![NPM](https://nodei.co/npm/rtc-capture.png)](https://nodei.co/npm/rtc-capture/)

[![Build Status](https://img.shields.io/travis/rtc-io/rtc-capture.svg?branch=master)](https://travis-ci.org/rtc-io/rtc-capture) [![unstable](https://img.shields.io/badge/stability-unstable-yellowgreen.svg)](https://github.com/dominictarr/stability#unstable) 
[![Gitter chat](https://badges.gitter.im/rtc-io/discuss.png)](https://gitter.im/rtc-io/discuss)



## Example Usage

```js
var capture = require('rtc-capture');

capture({ audio: true, video: true }, function(err, stream) {
  if (err) {
    return console.error('could not capture stream: ', err);
  }

  console.log('captured stream: ', stream);
});

```

## Example with using Plugins

```js
var capture = require('rtc-capture');
var opts = {
  plugins: [
    require('rtc-plugin-nicta-ios'),
    require('rtc-plugin-temasys')
  ]
};

capture({ audio: true, video: true }, opts, function(err, stream) {
  if (err) {
    return console.error('could not capture stream: ', err);
  }

  console.log('captured stream: ', stream);
});

```

## Reference

### `capture(constraints, opts?, callback)`

Capture media with the supplied `constraints`.  If an `opts` argument is
supplied look for plugins that may change the behaviour of the capture
operation.

## License(s)

### Apache 2.0

Copyright 2014 National ICT Australia Limited (NICTA)

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
