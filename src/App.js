import React, { Component } from 'react';
import './components/home.css';
import BookList from './components/BookList';
import Book from './components/Book';
import axios from 'axios';
import Map from './components/map';
import './components/book.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      displayBooks: [],
      filteredBooks: []
    }
  }

  componentDidMount() {
    axios.get('/api/getBooks').then( res => {
      this.setState({
        displayBooks: res.data
      })
    } )
  }
  
  handleAddBook = (book) => {
    let { displayBooks } = this.state;
    axios.post('/api/books', book)
    .then( res => {
      let newDisplayBooks = displayBooks.map( book => book )
      newDisplayBooks.unshift(res.data)
      this.setState({
        displayBooks: newDisplayBooks
      })
    }).catch(err => alert("Don't give up!"))
  }

  handleDelete = (id) => {
    let { displayBooks } = this.state;
    axios.delete(`/api/books/${id}`).then( res => {
      this.setState({
        displayBooks: res.data
      })
    } )
  }

  handleChange = (input) => {
    let { displayBooks } = this.state;
    let filteredBooks = displayBooks.filter(id => {
      return id.title.startsWith(input)
  })
  this.setState({
    filteredBooks
  })
}

handleEdit = (id, title, author, img, notes) => {
  let { displayBooks } = this.state;
  axios.put(`./api/books/${id}`, { title, author, img, notes }).then( res => {
    let newDisplayBooks = [...displayBooks]
    for(var i = 0; i <newDisplayBooks.length; i++) {
      if(newDisplayBooks[i].id === id) {
        newDisplayBooks[i] = res.data
      }
    }
    this.setState({ displayBooks: newDisplayBooks })
  })
}

  render() {
    return (
      <div className="App">
         <div>
            <header>
                <h1>Bookcase</h1>
            </header>
            <div>
                <input className="inputBook" type="text" 
                value={this.state.input}
                placeholder="Search for Book"
                onChange={e => {
                    this.handleChange(e.target.value);
                }}/>
            </div>
            
            <div className="oneBook">
                <Book />
            </div>

            <div className="allBooks">
                <BookList 
                handleAddBook={ this.handleAddBook }/>
           
          </div>
          <div>
              <Map displayBooks={this.state.displayBooks} 
              handleDelete={ this.handleDelete }
              handleEdit={ this.handleEdit }/>
            </div>
         </div>
       
       

      </div>
    );
  }
}

export default App;
