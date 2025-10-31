 import React, { useState } from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'
import BooksData from '../utils/BooksData'


function BrowseBooks() {

  const [filteredBooks, setFilteredBooks] = useState(BooksData)

  function handleSearch(searchText) {
    const filtered = BooksData.filter(book =>
      book.title.toLowerCase().includes(searchText.toLowerCase())
    )
    setFilteredBooks(filtered)
  }

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto">
      {/* Search bar */}
      <Search onSearch={handleSearch} />

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
                to={`/BrowseBookDetails/${book.id}`} 
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