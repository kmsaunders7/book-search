import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import BookList from '../components/BookList'
import UserSearch from '../components/UserSearch'




class Search extends Component {
    // Setting our component's initial state
    state = {
        books: [],
        query: ''
    }


    
    handleInputChange = (event) => {
        this.setState({
            query: event.target.value
        })
    };

  
    handleFormSubmit = () => {
       API.searchBooks(this.state.query)
            .then(res => {
                this.setState({
                    books: res.data.items,
                    query: ""
                })
                console.log(this.state.books)
        }).catch(err => console.log(err));
      }
    
  
  render() {
    return (
      <>
      <Jumbotron>
          <h1>Google Books Search</h1>
        </Jumbotron> 
      <UserSearch 
        query={this.state.query}
        handleFormSubmit={this.handleFormSubmit}
        handleInputChange={this.handleInputChange}
      />
    {this.state.books.length ? (
        this.state.books.map((book) => (
            <BookList
             key={book.id}
             id={book.id}
             title={book.volumeInfo.title}
             authors={book.volumeInfo.authors}
             image={book.volumeInfo.imageLinks.thumbnail}
             description={book.volumeInfo.description}
             link={book.volumeInfo.infoLink}
            />
        ))
         ) : (
         <p> Please search for book</p>
        )}
     </>
    );
  }
}

export default Search;