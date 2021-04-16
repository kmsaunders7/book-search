import React, { useState } from 'react'
import API from '../utils/API'
import BookList from './BookList'

const SearchBar = () => {

    const [books, setBooks] = useState([])
    const [searchVal, setSearchVal] = useState('')

    const getBookRequest = (event) => {
        event.preventDefault()
        console.log(searchVal)
        API.searchBooks(searchVal).then((res) => {
            console.log(res.items.volumeInfo)
            const results = res.items.volumeInfo
            if(results) {
            setBooks({ books: results })
         }
        })
    }
    // useEffect(() => {
    //    getBookRequest(searchVal)
    // }, [searchVal])

    return (
        <div className="col-sm-4">
            <input 
            className="form-control" 
            placeholder="Type to Search Book"
            value={searchVal}
            onChange={(event) => setSearchVal(event.target.value)}
            ></input>
            <button
                type="button"
                onClick={getBookRequest}
                className="btn btn-lg btn-success"
            >
                Search Google Books
            </button>
            <BookList books={books} />
        </div>
    )
}

export default SearchBar
