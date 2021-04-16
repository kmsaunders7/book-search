import React from 'react'

const BookList = (props) => {
    return (
        <div className='row'>
            <h3> Results: </h3>
            {props.books.map((book) => (
            <div className="card-body mx-auto">
                <img src={book.imageLinks.thumbnail} alt="book cover"></img>
            </div>
            ))}
        </div>
    )
}

export default BookList 
