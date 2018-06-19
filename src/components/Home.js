import React, { Component } from 'react';
import './home.css';
import BookList from './BookList';
import Book from './Book';

class Home extends Component {
    constructor() {
        super()

        this.state = {
            input: ''
        }
    }


    render() {
        return(
            <div>
            <header>
                <h1>Bookcase</h1>
            </header>
                <input className="inputBook" type="text" 
                value={this.state.input}
                placeholder=" Type Book Title Here"
                onChange={e => {
                    this.handleChange(e.target.value);
                }}
                />
                <button className="inputBtn" 
                onClick={() => {
                    this.addBook()}}>
                    Search Bookcase</button>
            <div>

                { this.state.books }

            </div>
            <div className="oneBook">
                <Book />
            </div>
            <div className="allBooks">
                <BookList />
            </div>
            </div>
        )
    }
}

export default Home;