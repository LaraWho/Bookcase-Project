import React, { Component } from 'react';
import ImageBook from './ImageBook';
import bookcase from './images/bookcase.jpeg';
import './book.css';

class Book extends Component {
    constructor() {
        super()

    }

    render() {
        return(
            <div>
                <ImageBook className="bookcaseImg" image={ bookcase }/>
            </div>
        )
    }
}

export default Book;