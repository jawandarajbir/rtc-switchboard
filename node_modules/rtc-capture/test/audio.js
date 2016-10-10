var test = require('tape');
var capture = require('./helpers/capture');

test('can capture a simple audio stream', function(t) {
  t.plan(4);
  capture({ video: false, audio: true }, function(err, stream) {
    t.ifError(err);
    t.ok(stream && typeof stream.getVideoTracks == 'function');
    t.equal(stream.getVideoTracks().length, 0, 'have 0 video track(s)');
    t.equal(stream.getAudioTracks().length, 1, 'have 1 audio track(s)');
  });
});
