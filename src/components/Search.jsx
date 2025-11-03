import React from "react";

const Search = ({ searchTerm, setSearchTerm, onSearch, onClear }) => {
  return (
    <div className="w-full max-w-2xl mx-auto text-center">
      <h2 className="text-2xl font-semibold text-cyan-800 mb-6">
        Search Books
      </h2>

      <form
        onSubmit={onSearch}
        className="flex flex-col sm:flex-row items-center justify-center gap-3"
      >
        {/* Search bar */}
        <input
          type="text"
          placeholder="Search by title or author..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-cyan-700 rounded-full px-4 py-2 w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />

        {/* Buttons */}
        <div className="flex gap-3 mt-2 sm:mt-0">
          <button
            type="submit"
            className="bg-cyan-700 text-white px-5 py-2 rounded-full hover:bg-cyan-800 transition"
          >
            Search
          </button>
          <button
            type="button"
            onClick={onClear}
            className="bg-gray-200 text-cyan-700 px-5 py-2 rounded-full hover:bg-gray-300 transition"
          >
            Show All
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
