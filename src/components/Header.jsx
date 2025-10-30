import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className="flex justify-between items-center bg-cyan-700 text-white px-6 py-4 shadow-sm">
            {/* Logo / Title */}
            <Link to='/'><h1 className="p-2 font-extrabold text-3xl tracking-tight cursor-pointer">
                LibraSphere
            </h1></Link>
            <ul className="flex items-center space-x-6 text-lg font-medium">
                <Link to='/'><li className="ml-2 px-3 py-1 rounded-md hover:bg-cyan-600 cursor-pointer">
                    Home
                </li></Link>
                <Link to='/book'><li className="ml-2 px-3 py-1 rounded-md hover:bg-cyan-600 cursor-pointer">
                    Browse Books
                </li></Link>
                <li className="ml-2 px-3 py-1 rounded-md hover:bg-cyan-600 cursor-pointer">
                    Add Book
                </li>
            </ul>
        </nav>
    );
}

export default Header;
