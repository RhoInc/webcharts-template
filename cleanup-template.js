var fs = require('fs');
var paths = [
    'cleanup-template.js', 
    'init-template.js', 
    'package-template.json', 
    'reset-template.js',
    'test-page/index-template.html', 
    'src/index-template.js',
    'instructions.md',
    'src-templates'
];
paths.forEach(function(path){
    fs.unlinkSync(path);
})
