var capture = require('..');
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
