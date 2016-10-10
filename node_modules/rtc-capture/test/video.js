var test = require('tape');
var capture = require('./helpers/capture');

test('can capture a simple video stream', function(t) {
  t.plan(4);
  capture({ video: true, audio: false }, function(err, stream) {
    t.ifError(err);
    t.ok(stream && typeof stream.getVideoTracks == 'function');
    t.equal(stream.getVideoTracks().length, 1, 'have 1 video track(s)');
    t.equal(stream.getAudioTracks().length, 0, 'have 0 audio track(s)');
  });
});
