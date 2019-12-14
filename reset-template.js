var fs = require('fs');
var paths = [
    'package.json',
    'test-page/index.html',
    'src/'
];

paths.forEach(function(path){
    fs.unlinkSync(path);
})
