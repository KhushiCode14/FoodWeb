// formidable with http
// clear

// formidble with express 
const express = require('express');
const  formidable = require('formidable');

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