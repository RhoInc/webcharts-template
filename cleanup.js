var fs = require('fs');
var paths = [
    'cleanup.js', 
    'initChart.js', 
    'package-template.json', 
    'test-page/index-template.html', 
    'src/index-template.js',
    'instructions.md',
    'src-templates'
];
paths.forEach(function(path){
    fs.unlinkSync(path);
})
