import React, { Component } from 'react';
import goldfinch from './images/goldFinch2.png';
import oneday from './images/oneDay.jpeg';
import glassfeet from './images/glassFeet.jpeg';
import never from './images/neverLetMeGo.jpeg';
import maid from './images/handmaid.jpeg';
import OneBook from './oneBook';


export default class Map extends Component {
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
    render(){
    return( this.props.displayBooks.map((book,i) => {
        let imageObj = { "./images/goldFinch2.png": goldfinch,
                        "./images/oneDay.jpeg": oneday,
                        "./images/glassFeet.jpeg": glassfeet,
                        "./images/neverLetMeGo.jpeg": never,
                        "./images/handmaid.jpeg": maid }

        return (
            <OneBook book={ book }
            handleDelete={ this.props.handleDelete }
            i={ i }
            imageObj={ imageObj }
            handleEdit={ this.props.handleEdit }/>
        )
    })
)
}
}