const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    console.log(req.url);

    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

    let extname = path.extname(filePath);

    let contentType = 'text/html';
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    if (contentType == "text/html" && extname == "") filePath += ".html";

    console.log(filePath);

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code == 'ENOENT') {
                fs.readFile(path.join(__dirname, 'public', '404.html'),
                    (err, content) => {
                        res.writeHead(200, { 'Content-Type': 'text/html' });
                        res.end(content, 'utf8');
                    })
            } else {
                res.writeHead(500);
                res.end('Server error: ' + err.code);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8');
        }
    })

    // if (req.url === '/' || req.url === '/index' || req.url === '/index.html') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.end(content, 'utf8');
    //     });

    // } else if (req.url === '/gallery' || req.url === '/Gallery.html') {
    //     fs.readFile(path.join(__dirname, 'public', 'Gallery.html'), (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.end(content, 'utf8');
    //     });

    // } else if (req.url === '/contact' || req.url === '/Contact.html') {
    //     fs.readFile(path.join(__dirname, 'public', 'Contact.html'), (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.end(content, 'utf8');
    //     });

    // } else {
    //     fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(404, { 'Content-Type': 'text/html' });
    //         res.end(content, 'utf8');
    //     });

    // }

});

const PORT = process.env.PORT || 5500;
server.listen(PORT, () => {
    console.log('Server is running on port:' + PORT);
});