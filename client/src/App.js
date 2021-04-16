import React from "react";
import "./App.css";
import BookList from "./components/BookList";
import Heading from "./components/Heading";
import SearchBar from "./components/SearchBar";

function App() {
  
  return (
    <div className='container-fluid'>
      <div className='row d-flex align-items-center mt-4 mb-4 '>
        <Heading heading="Books"/>
        <SearchBar />
      </div>
      <div className='row'>
        <BookList />
      </div>
    </div>
  );
}


export default App;
