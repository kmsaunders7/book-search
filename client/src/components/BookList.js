import React from 'react'

const BookList = (props) => {
    return (
        <div className='row'>
            <div className='col-8'>
                <h4 className='card-title'> {props.title} </h4>
                <h5 className='card-subtitle'> Author/s: {props.authors} </h5>
            </div>
            <div className='img'>
                <img src={props.image} alt='book cover'></img>
                <p>Description: {props.description}</p>
            </div>
            <div className='col-4'>
                <a href={props.link} target='_blank' rel="noopener noreferrer">Link to Book</a>
            </div>
        </div>
    )
}

export default BookList
