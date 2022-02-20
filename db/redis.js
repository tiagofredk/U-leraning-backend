const redis = require('redis');
// 1 configure our redis
const client = redis.createClient({
    // port: 6379,
    // host: 'localhost'
    host: 'gusc1-bursting-wallaby-31541.upstash.io',
    port: '31541',
    password: '853aaa5b1c9446c29ac6428710706604'
});

client.on("error", function (err) {
    throw err;
});

client.set('foo', 'bar');

module.exports = client;