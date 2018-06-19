let bookObjects = require('./myAPI');
let books = bookObjects.results;
let id = 6;
module.exports = {

read: (req, res) => {
    res.status(200).send(books);
},

create: (req, res) => {
    let { title, author, img, notes } = req.body;
    let newBookList = {
        title: title,
        author: author,
        img: img,
        notes: notes,
        id: id
    };
    console.log(newBookList)
    books.push(newBookList);
    id += 1;
    res.send(newBookList);
},

update: (req, res) => {
    for(var i = 0; i < books.length; i++) {
        if(books[i].id === Number(req.params.id)) {
            books[i] = req.body
            return res.send(books[i])
        }
    }
    return res.send({error: "Nooope"})
},

delete: ( req, res ) => {
    let index = null;
    books.forEach((book, i) => {
        if(book.id === Number(req.params.id))  index = i;
    })
    books.splice(index, 1)
    res.status(200).send( books )
},

getBooks: ( req, res ) => {
    res.status(200).send(books)
}

}


