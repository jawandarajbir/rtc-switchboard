var wsurl = require('..');

console.log(wsurl('//test.com'));

// When run in a browser from http://
// -> ws://test.com

// When run in a browser from https://
// -> wss://test.com

// When run from node (no location.href available)
// -> wss://test.com (assume secure)

// when run in a browser from file://
// -> wss://test.com (assume secure)
