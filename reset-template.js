var fs = require('fs');
var paths = [
    'cleanup.js', 
    'initChart.js', 
    'package.json',
    'test-page/index.html', 
    'src/index.js',
    'src'
];
paths.forEach(function(path){
    fs.unlinkSync(path);
})
