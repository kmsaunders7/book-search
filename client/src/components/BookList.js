import React from 'react'

const BookList = (props) => {
    return (
        <div className='row'>
            {props.books.map((book, index) => (
            <div className="card-body mx-auto">
                <img src={book.Image} alt="book cover"></img>
            </div>
            ))}
        </div>
    )
}

export default BookList 
