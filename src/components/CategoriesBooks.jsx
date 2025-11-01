import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import BooksData from "../utils/BooksData";

function CategoriesBooks() {
    // Get category from the URL (e.g. /books/Fiction)
    const { category } = useParams();
    const [books, setBooks] = useState([]);

  // Load all books (including newly added ones)
  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("books"));
    if (storedBooks && storedBooks.length > 0) {
      setBooks(storedBooks);
    } else {
      localStorage.setItem("books", JSON.stringify(BooksData));
      setBooks(BooksData);
    }
  }, []);

    // Filter books based on the category from BooksData
    const filteredBooks = books.filter(
        (book) => book.category.toLowerCase() === category.toLowerCase()
    );

    return (
        <div className="px-6 py-10 max-w-7xl mx-auto">
            {/* Page Title */}
            <h2 className="text-3xl font-bold text-cyan-800 text-center mb-8">
                {category} Books
            </h2>

            {/* Display filtered books */}
            <div className="flex flex-wrap justify-center gap-6">
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
                            <p className="text-sm text-gray-500">{book.author}</p>

                            {/* View Details link */}
                            <Link
                                to={`/BrowseBookDetails/${book.id}`}
                                className="text-blue-600 text-sm hover:underline mt-2 inline-block"
                            >
                                View More Details →
                            </Link>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 text-center mt-10">
                        No books found in this category.
                    </p>
                )}
            </div>

            {/* Back Button */}
            <div className="text-center mt-10">
                <Link
                    to='/books'
                    className="bg-cyan-700 text-white px-6 py-2 rounded-full hover:bg-cyan-800 transition"
                >
                    ← Back to Browse
                </Link>
            </div>
        </div>
    );
}

export default CategoriesBooks;
