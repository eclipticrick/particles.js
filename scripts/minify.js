var path = require('path');
var compressor = require('node-minify');

var promise = compressor.minify({
    compressor: 'gcc',
    input: path.join(__dirname, '..', 'particles.js'),
    output: path.join(__dirname, '..', 'particles.min.js')
});

promise.then(function(min) {});
promise.catch(function(err) {});
