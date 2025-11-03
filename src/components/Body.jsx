import React from 'react';
import PopularBooksCard from './PopularBooksCard';

function Body() {
    return (
        <div className="px-6 py-10 max-w-7xl mx-auto">

            {/* ===== Welcome Section ===== */}
            {/* Displays a welcome heading at the top of the homepage */}
            <h1 className="font-extrabold text-4xl text-center text-cyan-800 mb-4">
                Welcome to Online Library
            </h1>

            {/* ===== Book Categories Section ===== */}
            <h2 className="font-semibold text-2xl text-cyan-800 text-center mb-4">
                Book Categories
            </h2>

            {/* Category Buttons */}
            <div className="flex justify-center flex-wrap gap-4 mb-10">
                {/* Fiction Category Button */}
                <button
                    type="button"
                    className="border border-cyan-700 text-cyan-700 px-5 py-2 rounded-full text-sm font-medium"
                >
                    Fiction
                </button>

                {/* Non-Fiction Category Button */}
                <button
                    type="button"
                    className="border border-cyan-700 text-cyan-700 px-5 py-2 rounded-full text-sm font-medium"
                >
                    Non-Fiction
                </button>

                {/* Sci-Fi Category Button */}
                <button
                    type="button"
                    className="border border-cyan-700 text-cyan-700 px-5 py-2 rounded-full text-sm font-medium"
                >
                    Sci-Fi
                </button>
            </div>

            {/* ===== Popular Books Section ===== */}
            <h2 className="font-bold text-3xl  text-cyan-800 text-center ">
                Popular Books
            </h2>
            <PopularBooksCard />
        </div>
    );
}

export default Body;
