const fs = require('fs');

fs.copyFile(__dirname + '/../src/utils/pages-meta.json', __dirname + '/../build/pages-meta.json', (err) => {
    if (err) throw err;
    console.log('pages-meta.json was copied to build');
});
