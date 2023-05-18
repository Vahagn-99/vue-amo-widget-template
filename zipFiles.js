const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

const distFolder = path.join(__dirname, 'dist');
const widgetFolder = path.join(__dirname, 'Widget');

// Create 'Widget' directory if it doesn't exist
if (!fs.existsSync(widgetFolder)) {
    fs.mkdirSync(widgetFolder);
}

// Copy app.js and app.js.map to 'Widget' directory
['app.js', 'app.js.map'].forEach((file) => {
    const srcPath = path.join(distFolder, file);
    const destPath = path.join(widgetFolder, file);
    if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
    }
});

const output = fs.createWriteStream(path.join(__dirname, 'widget.zip'));
const archive = archiver('zip', {
    zlib: { level: 9 } // Sets the compression level.
});

output.on('close', function () {
    console.log(archive.pointer() + ' total bytes');
    console.log('archiver has been finalized and the output file descriptor has closed.');
});

archive.on('warning', function (err) {
    if (err.code === 'ENOENT') {
        console.log('Archiver warning!');
    } else {
        throw err;
    }
});

archive.on('error', function (err) {
    throw err;
});

archive.pipe(output);

archive.directory(widgetFolder, false);

archive.finalize();
