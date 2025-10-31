import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
        <nav className="flex justify-between items-center bg-cyan-700 text-white px-6 py-4 shadow-sm">
            {/* Logo / Title */}
            {/* Clicking the title redirects to the Home page */}
            <Link to='/'><h1 className="p-2 font-extrabold text-3xl tracking-tight cursor-pointer">
                LibraSphere
            </h1></Link>

            {/* Navigation menu items */}
            <ul className="flex items-center space-x-6 text-lg font-medium">

                {/* Home navigation link */}
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "border-b-2 border-white pb-1"
                            : "hover:text-gray-200"
                    }
                >
                    Home
                </NavLink>

                {/* Browse Books navigation link */}
                <NavLink
                    to="/book"
                    className={({ isActive }) =>
                        isActive
                            ? "border-b-2 border-white pb-1"
                            : "hover:text-gray-200"
                    }
                >
                    Browse Books
                </NavLink>

                {/* Add Book navigation link */}
                <NavLink
                    to="/AddBook"
                    className={({ isActive }) =>
                        isActive
                            ? "border-b-2 border-white pb-1"
                            : "hover:text-gray-200"
                    }
                >
                    Add Book
                </NavLink>
            </ul>
        </nav>
    );
}

export default Header;
