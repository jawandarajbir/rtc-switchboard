var fs = require('fs');
var test = require('tape');
var reLineBreak = require('../newline');

test('can split on newlines (*nix file)', function(t) {
  t.plan(2);
  fs.readFile(__dirname + '/samples/newline-test.txt', 'utf8', function(err, data) {
    t.ifError(err, 'read file ok');
    t.ok(data && data.split(reLineBreak).length === 10, 'got expected number of items');
  });
});

test('can split on newlines (windows file)', function(t) {
  t.plan(2);
  fs.readFile(__dirname + '/samples/newline-test-win.txt', 'utf8', function(err, data) {
    t.ifError(err, 'read file ok');
    t.ok(data && data.split(reLineBreak).length === 10, 'got expected number of items');
  });
});