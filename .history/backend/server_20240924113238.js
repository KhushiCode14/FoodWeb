// formidable with http
var http = require('http');
var formidable = require('formidable');

var errors = formidable.formidableErrors;

const server = http.createServer(async (req, res) => {
   if (req.url === '/api/upload' && req.method.toLowerCase() === 'post') {
      // parse a file upload
      const form = new formidable.IncomingForm();
      let fields;
      let files;
      try {
         [fields, files] = await form.parse(req);
      } catch (err) {

         res.writeHead(err.httpCode || 400, { 'Content-Type': 'text/plain' });
         res.end(String(err));
         return;
      }
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ fields, files }, null, 2));
      return;
   }

   // show a file upload form
   res.writeHead(200, { 'Content-Type': 'text/html' });
   res.end(`
      <h2>With Node.js <code>"http"</code> module</h2>
      <form action="/api/upload" enctype="multipart/form-data" method="post">
      <div>Text field title: <input type="text" name="title" /></div>
      <div>File: <input type="file" name="multipleFiles" multiple="multiple" /></div>
      <input type="submit" value="Upload" />
      </form>
   `);
});
server.listen(5000, () => {
   console.log('Server listening on http://localhost:5000/ ...');
});

// formidble with express 
import express from 'express';
import formidable from 'formidable';

const app = express();

app.get('/', (req, res) => {
   res.send(`
      <h2>With <code>"express"</code> npm package</h2>
      <form action="/api/upload" enctype="multipart/form-data" method="post">
      <div>Text field title: <input type="text" name="title" /></div>
      <div>File: <input type="file" name="someExpressFiles" multiple="multiple" /></div>
      <input type="submit" value="Upload" />
      </form>
   `);
});
app.post('/api/upload', (req, res, next) => {
   const form = formidable({});

   form.parse(req, (err, fields, files) => {
      if (err) {
         next(err);
         return;
      }
      res.json({ fields, files });
   });
});

app.listen(5000, () => {
   console.log('Server listening on http://localhost:5000 ...');
});