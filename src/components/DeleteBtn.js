import React from 'react';
import './book.css';

function DeleteBook(props) {
  return (
    
      <button className="deleteBtn" onClick={() => { props.propsDeleteName() }} >Remove Book
      </button>
    
  );
}

export default DeleteBook;