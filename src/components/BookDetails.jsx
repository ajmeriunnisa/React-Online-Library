import React from 'react'
import { Link, useParams } from 'react-router-dom'
import BooksData from '../utils/BooksData';
import { FaStar } from "react-icons/fa";

function BookDetails() {
    // ===== Extract Book ID from URL =====
    const { id } = useParams();

    // ===== Find the Book by ID =====
    const book = BooksData.find(b => b.id === parseInt(id))

    // ===== Handle Invalid Book ID =====
    if (!book) {
        return (
            <div className="text-center mt-20">
                <h2 className="text-2xl font-semibold text-red-600">Book not found</h2>

                {/* Link back to Home page */}
                <Link to='/'>
                    <span className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                        Back to Home
                    </span>
                </Link>
            </div>
        );
    }

    // ===== Render Book Details =====
    return (
        <div className="max-w-3xl mx-auto p-6">

            {/* ===== Book Cover Image ===== */}
            <img
                src={book.image}
                alt={book.title}
                className="w-90 h-96 object-cover mx-auto rounded-xl shadow-lg mb-8"
            />

            {/* ===== Book Title ===== */}
            <h1 className="text-3xl font-bold text-center text-blue-700 mb-2">
                {book.title}
            </h1>

            {/* ===== Author Name ===== */}
            <p className="text-center text-gray-700 mb-1">By {book.author}</p>

            {/* ===== Category and Rating ===== */}
            <div className="flex justify-center items-center gap-4 mb-4 mt-5">
                <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
                    {book.category}
                </span>


                <FaStar className='text-yellow-500' />
                <span className="text-yellow-500 font-medium">{book.rating}</span>
            </div>

            {/* ===== Book Description ===== */}
            <p className="text-gray-700 text-lg leading-relaxed text-center mb-6">
                {book.description}
            </p>

            {/* ===== Library, Price, and Availability Details ===== */}
            <div className="text-center text-gray-600 mb-5">
                <p><strong>Library:</strong> {book.library}</p>
                <p><strong>Price:</strong> ${book.price}</p>
                <p><strong>Status:</strong> {book.available ? "Available" : "Out of Stock"}</p>
            </div>

            {/* ===== Back Button ===== */}
            <div className="flex justify-center mb-4">
                <Link to='/'>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                        ← Back
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default BookDetails
