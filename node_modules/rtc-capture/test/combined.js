var test = require('tape');
var capture = require('./helpers/capture');

test('can capture audio and video', function(t) {
  t.plan(4);
  capture({ video: true, audio: true }, function(err, stream) {
    t.ifError(err);
    t.ok(stream && typeof stream.getVideoTracks == 'function');
    t.equal(stream.getVideoTracks().length, 1, 'have 1 video track(s)');
    t.equal(stream.getAudioTracks().length, 1, 'have 1 audio track(s)');
  });
});
