'use strict'
var fs = require('fs');

module.exports = function(file, callback){
  fs.readFile(file, function(err, logData){
    if (err){
      callback(err);
      return;
    }

    var text = logData.toString();
    var results = {};
    var lines = text.split('\n');

    lines.forEach(function(line){
      var parts = line.split(' ');
      var letter = parts[1];
      var count = parseInt(parts[2]);
      if (!results[letter]){results[letter] = 0;}
      results[letter] += parseInt(count);
    });

    callback(null, results);

  });

}
