import React, { useState, useEffect } from "react";
import "./App.css";

import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([
    {
      Title: 'Harry Potter and the Order of the Phoenix',
      Authors: 'J.K Rowling',
      Description: 'Dark times have come to Hogwarts. After the Dementors attack on his cousin Dudley, Harry Potter knows that Voldemort will stop at nothing to find him. There are many who deny the Dark Lords return, but Harry is not alone',
      Image: 'http://books.google.com/books/content?id=zpvysRGsBlwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
      Link: 'http://books.google.com/books?id=zpvysRGsBlwC&printsec=frontcover&dq=harry+potter&hl=&cd=3&source=gbs_api',
    },
    {
      Title: 'Harry Potter and the Chamber of Secrets',
      Authors: 'J.K Rowling',
      Description: 'There is a plot, Harry Potter. A plot to make most terrible things happen at Hogwarts School of Witchcraft and Wizardry this year',
      Image: 'http://books.google.com/books/content?id=5iTebBW-w7QC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
      Link: 'http://books.google.com/books?id=5iTebBW-w7QC&printsec=frontcover&dq=harry+potter&hl=&cd=7&source=gbs_api',
    },
    {
      Title: 'Harry Potter and International Relations',
      Authors: 'Daniel H. Nexon',
      Description: 'Drawing on a range of historical and sociological sources, this work shows how aspects of Harrys world contain aspects of our own. It also includes chapters on the political economy of the franchise, and on the problems of studying popular culture.',
      Image: "http://books.google.com/books/content?id=DKcWE3WXoj8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      Link: "http://books.google.com/books?id=DKcWE3WXoj8C&printsec=frontcover&dq=harry+potter&hl=&cd=6&source=gbs_api",
    },

  ])

  const getBookRequest = () => {
    // const url= 'https://www.googleapis.com/books/v1/volumes?q=harry potter'
    fetch('https://www.googleapis.com/books/v1/volumes?q=harry potter')
    .then(response => response.json())
    .then(result => {
      console.log(result.items)
    // setBooks({ books: result.items})
   })};

  useEffect(() => {
    getBookRequest()
  }, [])

  return (
    <div className='container-fluid'>
      <div className='row'>
        <BookList books={books} />
      </div>
    </div>
  );
}


export default App;
