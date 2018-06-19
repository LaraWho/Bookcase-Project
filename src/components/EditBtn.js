import React from 'react';

function EditBook(props) {
  return (
    
      <button className="editBtn" onClick={() => { props.propsEditBook() }}>Edit
      </button>
    
  );
}

export default EditBook;