var capture = require('..');

capture({ audio: true, video: true }, function(err, stream) {
  if (err) {
    return console.error('could not capture stream: ', err);
  }

  console.log('captured stream: ', stream);
});
