import React, { useState } from 'react'


function Search({ onSearch }) {
  const [searchText, setSearchText] = useState("")
  const[error,setError]=useState("");

  function handleSearch() {
    if(searchText.trim()===""){
      setError("Please enter a book name before searching.");
      return;
    }
    setError("");
    onSearch(searchText.trim());
  }

  const handleChange=(e)=>{
    setSearchText(e.target.value)
     if(error){
              setError("");
            }
  }

  return (
   <div className="flex flex-col items-center">
      <h2 className="text-2xl font-semibold text-cyan-800 mb-4">Search Books</h2>

      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Enter book name to search..."
          value={searchText}
          onChange={handleChange}
          className="border border-cyan-700 rounded-full px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="bg-cyan-700 text-white px-5 py-2 rounded-full hover:bg-cyan-800 transition"
        >
          Search
        </button>
      </div>
      {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
    </div>
  )
}

export default Search