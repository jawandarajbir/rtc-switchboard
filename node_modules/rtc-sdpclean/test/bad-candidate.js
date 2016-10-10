var test = require('tape');
var fs = require('fs');
var clean = require('..');

test('a bad candidate is removed from the sdp', function(t) {
  var input = fs.readFileSync(__dirname + '/data/bad-candidate.txt', 'utf8');
  var expected = fs.readFileSync(__dirname + '/data/bad-candidate-clean.txt', 'utf8');

  t.plan(1);
  t.equal(clean(input), expected, 'matched expected output');
});

test('a bad candidate is removed from the sdp (singleline)', function(t) {
  var input = fs.readFileSync(__dirname + '/data/bad-candidate-singleline.txt', 'utf8');
  var expected = fs.readFileSync(__dirname + '/data/bad-candidate-singleline-clean.txt', 'utf8');

  t.plan(1);
  t.equal(clean(input), expected, 'matched expected output');
});
