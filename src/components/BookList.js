import React, { Component } from 'react';
import './bookList.css';

class BookList extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            author: '',
            img: '',
            notes: ''
        }
    }

    handleTitleChange = val => {
        this.setState({
            title: val
        })
    }

    handleAuthorChange = val => {
        this.setState({
            author: val
        })
    }

    handleImageChange = val => {
        this.setState({
            img: val
        })
    }

    handleNoteChange = val => {
        this.setState({
            notes: val
        })
    }

    addBook = () => {
        this.props.handleAddBook(
            {
            title: this.state.title,
            author: this.state.author,
            img: this.state.img,
            notes: this.state.notes
            }
        )
    }

    render() {

        return(
            <div>
                <input className="addBook" type="text"
                placeholder="Title"
                onChange={ e => this.handleTitleChange(e.target.value)}
                />
                 <input className="addBook" type="text"
                placeholder="Author"
                onChange={ e => this.handleAuthorChange(e.target.value)}
                />
                 <input className="addBook" type="text"
                placeholder="Image"
                onChange={ e => this.handleImageChange(e.target.value)}
                />
                 <input className="addBook" type="text"
                placeholder="Notes"
                onChange={ e => this.handleNoteChange(e.target.value)}
                />
                <button className="addBook" 
                onClick={this.addBook}>Put on Shelf</button>
            </div>

        )
    }

}

export default BookList;
