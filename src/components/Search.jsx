import React, { useState } from 'react'


function Search({ onSearch }) {
  const [searchText, setSearchText] = useState("")

  function handleSearch() {
    onSearch(searchText)
  }

  return (
   <div className="flex flex-col items-center">
      <h2 className="text-2xl font-semibold text-cyan-800 mb-4">Search Books</h2>

      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Enter book name to search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border border-cyan-700 rounded-full px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <button
          onClick={handleSearch}
          className="bg-cyan-700 text-white px-5 py-2 rounded-full hover:bg-cyan-800 transition"
        >
          Search
        </button>
      </div>
    </div>
  )
}

export default Search