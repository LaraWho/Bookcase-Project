import React from 'react';

export default function ImageBook(props) {
    return (
            <div>
                <img className="image" src={ props.image } />
            </div>
        )
    }
