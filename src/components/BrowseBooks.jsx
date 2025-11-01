import React, { useEffect, useState } from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'
import BooksData from '../utils/BooksData'


function BrowseBooks() {

   const [books, setBooks] = useState([]); // store all books
  const [filteredBooks, setFilteredBooks] = useState([]);

  // Check for a newly added book from localStorage (after Add Book form submission)
   useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("books"));
    if (storedBooks && storedBooks.length > 0) {
      setBooks(storedBooks);
      setFilteredBooks(storedBooks);
    } else {
      localStorage.setItem("books", JSON.stringify(BooksData));
      setBooks(BooksData);
      setFilteredBooks(BooksData);
    }
  }, []);

   // When newBook exists (added from AddBook.jsx)
  useEffect(() => {
    const newBook = JSON.parse(localStorage.getItem("newBook"));
    if (newBook) {
      setBooks((prev) => {
        const updatedBooks = [newBook, ...prev];
        localStorage.setItem("books", JSON.stringify(updatedBooks)); // save permanently
        setFilteredBooks(updatedBooks);
        return updatedBooks;
      });
      localStorage.removeItem("newBook");
    }
  }, []);


  // Handle search
  function handleSearch(searchText) {
    if (!searchText.trim()) {
      setFilteredBooks(books); // reset if empty
      return;
    }

    const filtered = books.filter((book) =>
      book.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredBooks(filtered);
  }

  function handleClearSearch() {
    setFilteredBooks(books); // reset to all books
  }

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto">
      {/* Search bar */}
      <Search onSearch={handleSearch} />

      {/* Show All Books button */}
      <div className="flex justify-center mt-4">
       <button
          onClick={handleClearSearch}
          className="mt-3 bg-gray-200 text-cyan-700 px-5 py-2 rounded-full hover:bg-gray-300 transition"
        >
          Show All Books
        </button></div>

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
              className="w-72 bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-52 object-cover rounded-xl mb-3"
              />
              <h3 className="font-bold text-lg text-gray-800">{book.title}</h3>
              <p className="text-sm text-gray-500">{book.category}</p>
              <Link
                to={`/BrowseBookDetails/${book.id}`} state={{book}}
                className="text-blue-600 text-sm hover:underline mt-2 inline-block"
              >
                View More Details →
              </Link>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center mt-10">No books found.</p>
        )}
      </div>
    </div>
  )
}

export default BrowseBooks        