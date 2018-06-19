const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3005;
app.use(bodyParser.json());
let bookCntrl = require('./controllers/BooksController')

app.post('/api/books', bookCntrl.create);
app.put('/api/books/:id', bookCntrl.update);
app.get('/api/books', bookCntrl.read);
app.delete('/api/books/:id', bookCntrl.delete)
app.get('/api/getBooks', bookCntrl.getBooks)


app.listen(port, () => {
    console.log('Listening on port' + port);
})

