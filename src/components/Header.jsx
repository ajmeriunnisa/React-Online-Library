import React from 'react';

function Header() {
    return (
        <nav className="flex justify-between items-center bg-cyan-700 text-white px-6 py-4 shadow-sm">
            {/* Logo / Title */}
            <h1 className="p-2 font-extrabold text-3xl tracking-tight select-none">
                LibraSphere
            </h1>
            <ul className="flex items-center space-x-6 text-lg font-medium">
                <li className="ml-2 px-3 py-1 rounded-md hover:bg-cyan-600 cursor-pointer">
                    Home
                </li>
                <li className="ml-2 px-3 py-1 rounded-md hover:bg-cyan-600 cursor-pointer">
                    Browse Books
                </li>
                <li className="ml-2 px-3 py-1 rounded-md hover:bg-cyan-600 cursor-pointer">
                    Add Book
                </li>
            </ul>
        </nav>
    );
}

export default Header;
