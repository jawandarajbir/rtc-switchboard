var test = require('tape');
var wsurl = require('./index.js');

test('http:// => ws://', function(t) {
  t.plan(1);
  t.equal(wsurl('http://test.com/'), 'ws://test.com/');
});

test('https:// => wss://', function(t) {
  t.plan(1);
  t.equal(wsurl('https://test.com/'), 'wss://test.com/');
});

test('// => wss://', function(t) {
  t.plan(1);
  t.equal(wsurl('//test.com/'), 'wss://test.com/');
});

test('// => wss://', function(t) {
  t.plan(1);
  t.equal(wsurl('//test.com/'), 'wss://test.com/');
});

test('// => wss:// (request insecure)', function(t) {
  t.plan(1);
  t.equal(wsurl('//test.com/', { insecure: true }), 'ws://test.com/');
});

test('// => wss:// (current https://)', function(t) {
  t.plan(1);
  t.equal(wsurl('//test.com/', { current: 'https://foo.com' }), 'wss://test.com/');
});

test('// => ws:// (current http://)', function(t) {
  t.plan(1);
  t.equal(wsurl('//test.com/', { current: 'http://foo.com' }), 'ws://test.com/');
});
