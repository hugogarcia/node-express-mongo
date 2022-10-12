import books from "../models/Book.js";

class BookController{
    static getBooks = (req, res) => {
        books.find()
            .populate('author')
            .exec((err, books) => {
            res.status(200).json(books);
        });
    }

    static getBooksById = (req, res) => {
        const id = req.params.id;

        books.findById(id)
            .populate('author', 'name')
            .exec((err, books) => {
            if(err) res.status(400).send({message: `${err.message} - Book ID not found!`});
            else res.status(200).json(books);
        });
    }

    static createBook = (req, res) => {
        let book = new books(req.body);
        book.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - Error on creating book!`})
            }else{
                res.status(201).send(book.toJSON());
            }
        })
    }

    static updateBook = (req, res) => {
        const id = req.params.id;

        books.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: 'Book updated!'});
            }else{
                res.status(500).send({message: err.message});
            }
        });
    }

    static deleteBook = (req, res) => {
        const id = req.params.id;

        books.findByIdAndDelete(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: 'Book deleted!'});
            }else{
                res.status(500).send({message: err.message});
            }
        });
    }

    static getBooksByEditor = (req, res) => {
        const editor = req.query.editor;

        books.find({'editor': editor}, {}, (err, books) => {
            res.status(200).send(books);
        })
    }
}

export default BookController;