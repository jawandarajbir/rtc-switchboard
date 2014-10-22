var server = require('./helpers/server');
var connect = require('./helpers/connect');
var cleanup = require('./helpers/cleanup');
var uuid = require('uuid');

var start = module.exports = function(test, board) {
  var clients = [];
  var roomId = uuid.v4();

  test('connect 0', connect(board, clients, 0));
  test('connect 1', connect(board, clients, 1));
  test('connect 2', connect(board, clients, 2));

  test('client:0 announce (no room)', function(t) {
    t.plan(2);

    clients[0].announce();
    board.once('announce', function(data) {
      t.equal(data.id, clients[0].id);
      t.equal(data.room, undefined, 'no room specified - correct');
    });
  });

  test('client:1 announce (room - room1)', function(t) {
    t.plan(2);

    clients[1].announce({ room: 'room1' });
    board.once('announce', function(data) {
      t.equal(data.id, clients[1].id);
      t.equal(data.room, 'room1', 'room === room1');
    });
  });

  test('client:2 announce (no room)', function(t) {
    t.plan(4);

    clients[2].announce();
    board.once('announce', function(data) {
      t.equal(data.id, clients[2].id);
      t.equal(data.room, undefined, 'no room specified - correct');
    });

    clients[0].once('peer:announce', function(data) {
      t.equal(data.id, clients[2].id, 'client:0 got peer:announce for client:2');
    });

    clients[1].once('peer:announce', function(data) {
      t.fail('client:1 received peer announce but should not have');
    });

    setTimeout(function() {
      t.pass('client:1 did not receive peer:announce');
      clients[1].removeAllListeners();
    }, 500);
  });

  test('client:2 send hello, client:0 receives, client:1 does not', function(t) {
    t.plan(2);
    clients[2].send('/hello');

    clients[0].once('hello', function() {
      t.pass('client:0 got message');
    });

    clients[1].once('hello', function() {
      t.fail('client:1 got message');
    });

    setTimeout(function() {
      t.pass('client:1 did not receive message');
      clients[1].removeAllListeners();
    }, 500);
  });

  test('client:2 reannounce (room - room1)', function(t) {
    t.plan(3);

    clients[2].announce({ room: 'room1' });
    board.once('announce', function(data) {
      t.equal(data.id, clients[2].id);
      t.equal(data.room, 'room1', 'room === room1');
    });

    clients[1].on('peer:announce', function(data) {
      t.equal(data.id, clients[2].id, 'client:1 got announce for client:2');
    });
  });

  test('client:2 send hello, client:1 receives, client:0 does not', function(t) {
    t.plan(2);
    clients[2].send('/hello');

    clients[0].once('hello', function() {
      t.fail('client:0 got message');
    });

    clients[1].once('hello', function() {
      t.pass('client:1 got message');
    });

    setTimeout(function() {
      t.pass('client:0 did not receive message');
      clients[0].removeAllListeners();
    }, 500);
  });

  test('client:0 reannounce (room - room2)', function(t) {
    t.plan(3);

    clients[0].announce({ room: 'room2' });
    board.once('announce', function(data) {
      t.equal(data.id, clients[0].id);
      t.equal(data.room, 'room2', 'room === room2');
    });

    clients[0].once('roominfo', function(data) {
      t.equal(data.memberCount, 1, 'room has one member');
    });
  });

  test('client:2 reannounce (room - room2)', function(t) {
    t.plan(4);

    clients[2].announce({ room: 'room2' });
    clients[2].once('roominfo', function(data) {
      t.equal(data.memberCount, 2, 'room has two members');
    });

    board.once('announce', function(data) {
      t.equal(data.id, clients[2].id);
      t.equal(data.room, 'room2', 'room === room2');
    });

    clients[0].once('peer:update', function(data) {
      t.equal(data.id, clients[2].id, 'client:0 got update for client:2');
    });
  });

  test('client:2 send hello, client:0 receives, client:1 does not', function(t) {
    t.plan(2);
    clients[2].send('/hello');

    clients[0].once('hello', function() {
      t.pass('client:0 got message');
    });

    clients[1].once('hello', function() {
      t.fail('client:1 got message');
    });

    setTimeout(function() {
      t.pass('client:1 did not receive message');
      clients[0].removeAllListeners();
    }, 500);
  });

  test('close connections', cleanup(board, clients));
};

if (! module.parent) {
  server.start(start);
}
