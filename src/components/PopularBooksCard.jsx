import React from 'react'
import BooksData from '../utils/BooksData'
import { Link } from 'react-router-dom';


function PopularBooksCard() {

    // ===== Selecting Popular Books =====
    const popularBooks = [
        ...BooksData.filter(book => book.category === "Fiction").slice(0, 2),
        ...BooksData.filter(book => book.category === "Non-Fiction").slice(0, 2),
        ...BooksData.filter(book => book.category === "Sci-Fi").slice(0, 2),
    ];

    return (
        // ===== Container for All Popular Book Cards =====
        <div className='flex flex-wrap justify-center gap-6 p-4'>
            {popularBooks.map((item, index) =>
            (
                <div key={index}
                    className='w-80 h-95  bg-white shadow-md rounded-2xl p-8 hover:scale-102 transition-transform duration-200 overflow-hidden'>

                    {/* ===== Book Cover Image ===== */}
                    <img className="w-full h-55 object-cover rounded-xl"
                        src={item.image} alt={item.title} />

                    {/* ===== Book Title ===== */}
                    <h1 className="font-bold text-lg mt-2 wrap-break-word">
                        {item.title}
                    </h1>

                    {/* ===== Book Category ===== */}
                    <p className="text-gray-500 text-sm">Category: {item.category}</p>

                    {/* ===== View Details Link ===== */}
                    <Link to={`/BookDetails/${item.id}`}>
                        <span className='hover:text-blue-700 hover:underline text-sm cursor-pointer'>View More Details</span>
                    </Link>
                </div>
            ))}

        </div>
    )
}

export default PopularBooksCard