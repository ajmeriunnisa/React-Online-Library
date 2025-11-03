import React, { useEffect, useState } from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'
import BooksData from '../utils/BooksData'
import { useSelector } from 'react-redux';


function BrowseBooks() {

  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const books=useSelector((state)=>state.books.books);
  const [message, setMessage] = useState("");


  useEffect(()=>{
    setFilteredBooks(books);
  },[books]);

  // Handle search
  function handleSearch(e) {
    e.preventDefault();

    if (searchTerm.trim() === "") {
      setMessage("Please enter something to search.");
      return;
    }

    const filtered = books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(filtered);


   if (filtered.length === 0) {
      setMessage("No books found for your search.");
    } else {
      setMessage("");
    }
  }

  function handleClearSearch() {
    setSearchTerm("");
    setFilteredBooks(books); // reset to all books
    setMessage("")
  }

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto">
      {/* Search Section */}
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={handleSearch}
        onClear={handleClearSearch}
      />

      {message && (
        <p className="text-center text-red-600 mt-4 font-medium">{message}</p>
      )}

      {/*  Category Buttons */}
      <div className="flex justify-center flex-wrap gap-4 mt-10">
        <Link to="/books/Fiction">
          <button className="border border-cyan-700 text-cyan-700 hover:bg-cyan-700 hover:text-white px-5 py-2 rounded-full text-sm font-medium transition">
            Fiction
          </button>
        </Link>
        <Link to="/books/Non-Fiction">
          <button className="border border-cyan-700 text-cyan-700 hover:bg-cyan-700 hover:text-white px-5 py-2 rounded-full text-sm font-medium transition">
            Non-Fiction
          </button>
        </Link>
        <Link to="/books/Sci-Fi">
          <button className="border border-cyan-700 text-cyan-700 hover:bg-cyan-700 hover:text-white px-5 py-2 rounded-full text-sm font-medium transition">
            Sci-Fi
          </button>
        </Link>
      </div>

      {/* Books grid */}
      <div className="mt-10 flex flex-wrap justify-center gap-6">
       {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div
              key={book.id}
              className="w-72 bg-white rounded-2xl shadow-md p-5 hover:shadow-lg hover:scale-102 transition-transform duration-200 "
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-52 object-cover rounded-xl mb-3"
              />
              <h3 className="font-bold text-lg text-gray-800">{book.title}</h3>
              <p className="text-sm text-gray-500 mb-2">Category: {book.category}</p>
              <p className="text-[12px] text-gray-700">By {book.author}</p>
              <Link
                to={`/BrowseBookDetails/${book.id}`} 
                className="text-blue-600 text-sm hover:underline mt-2 inline-block"
              >
                View More Details →
              </Link>
            </div>
          ))
         ) : (
          !message && (
            <p className="text-gray-500 text-center mt-10">No books found.</p>
          )
        )}
      </div>
    </div>
  )
}

export default BrowseBooks        