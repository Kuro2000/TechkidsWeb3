'use strict'
var fileUtils = require('./fileUtils');
var fs = require('fs');

fileUtils(process.argv[2], function(err, res){

  fs.writeFile(process.argv[3], JSON.stringify(res), function(){
    console.log('Data was saved!');
  });
});
