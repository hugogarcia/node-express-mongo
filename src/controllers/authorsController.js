import authors from "../models/Author.js";

class AuthorController{
    static getAuthors = (req, res) => {
        authors.find((err, authors) => {
            res.status(200).json(authors);
        });
    }

    static getAuthorsById = (req, res) => {
        const id = req.params.id;

        authors.findById(id, (err, authors) => {
            if(err) res.status(400).send({message: `${err.message} - Author ID not found!`});
            else res.status(200).json(authors);
        });
    }

    static createAuthor = (req, res) => {
        let author = new authors(req.body);
        author.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - Error on creating author!`})
            }else{
                res.status(201).send(author.toJSON());
            }
        })
    }

    static updateAuthor = (req, res) => {
        const id = req.params.id;

        authors.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: 'Author updated!'});
            }else{
                res.status(500).send({message: err.message});
            }
        });
    }

    static deleteAuthor = (req, res) => {
        const id = req.params.id;

        authors.findByIdAndDelete(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: 'Author deleted!'});
            }else{
                res.status(500).send({message: err.message});
            }
        });
    }
}

export default AuthorController;