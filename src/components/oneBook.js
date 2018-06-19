import React, { Component } from 'react';
import DeleteBook from './DeleteBtn';
import EditBook from './EditBtn';
import './book.css';

class OneBook extends Component {

    constructor(){
        super()

        this.state = {
            title: '',
            author: '',
            img: '',
            notes: '',
            canEdit: false
        }
    }

    canEdit = () => {
        let { book } = this.props;
        this.props.handleEdit
        (book.id, this.state.title, this.state.author, this.state.img, this.state.notes)
        this.setState({ canEdit: false})
    }


    render(){
        let { book, i, imageObj } = this.props;
        return(
        <div className="box">
            <div className="bookList" key={ i + book }>
                { this.state.canEdit ? <div>
                    <input className="editInput" type="text"
                    placeholder="Title" onChange={e => this.setState({
                        title: e.target.value
                    })} />
                    <input className="editInput" type="text"
                    placeholder="Author" onChange={e => this.setState({
                        author: e.target.value
                    })} />
                    <input className="editInput" type="text"
                    placeholder="Image" onChange={e => this.setState({
                        img: e.target.value
                    })} />
                    <input className="editInput" type="text"
                    placeholder="Notes" onChange={e => this.setState({
                        notes: e.target.value
                    })} />
                    <button className="editInput" onClick={() => this.canEdit()}
                    >Update</button>

                </div> :
                <div>
                <p>{ book.title }</p>
                <p>{ book.author }</p>
                <img src={ imageObj[book.img] || book.img} />
                <p>{ book.notes }</p>
                <DeleteBook propsDeleteName={() => this.props.handleDelete(book.id)}/>
                <EditBook propsEditBook={() => this.setState({
                canEdit: true})}/>
                </div>
                }
            </div>
        </div>
        )
    }
}

export default OneBook;