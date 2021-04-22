import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
import BookList from '../components/BookList'
import axios from 'axios'




function Search() {
    // Setting our component's initial state
    const [books, setBooks] = useState([])
    const [formObject, setFormObject] = useState({})


    // Handles updating component state when the user types into the input field
    const handleInputChange = (event) => {
        setFormObject(event.target.value)
    };

    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (formObject) {
            const query = formObject
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
                .then(res => {
                    console.log(res.data.items)
                    setBooks(res.data.items)
                }).then(() => setFormObject(''))
                .catch(err => console.log(err));
        }
    };
  

    return (
      <>
      <Jumbotron />
        <div className='searchForm'>
            <form className='form'>
                <div className='form-group'>
                    <input
                     type='text'
                     className='form-control'
                     placeholder='Search...'
                     onChange={handleInputChange}
                    />
                </div>
                <button
                 type='submit'
                 className='btn btn-primary'
                 onClick={handleFormSubmit}
                >
                SUBMIT
                </button>
            </form>
        </div>

        <div className='row'>
            <div className='col-md-12'>
            
                <div className='resultCards'>
                 <p> Search Results: </p>
                 <ul>
                    {books.map(book => (
                       <BookList
                         key={book.id}
                         id={book.id}
                         title={book.volumeInfo.title}
                         authors={book.volumeInfo.authors}
                         image={book.volumeInfo.imageLinks.thumbnail}
                         description={book.volumeInfo.description}
                         link={book.volumeInfo.infoLink}
                        />
                      )
                     )}
                 </ul>
                </div> 

            </div>     
        </div>
     </>
    );
  }


export default Search;