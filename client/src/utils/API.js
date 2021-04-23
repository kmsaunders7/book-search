import axios from "axios";

export default {
  // search ALL books
  searchBooks: function(query) {
    return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + query);
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
};
