import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 w-full bg-gray-200 mt-12 py-6 text-center border-t border-gray-200">

            <p className="text-gray-600 text-sm">
                © {new Date().getFullYear()} <span className="font-semibold">LibraSphere Library</span>. All rights reserved.
            </p>

            <div className="flex justify-center items-center gap-6 mt-3">
                <a
                    href="https://www.linkedin.com/in/ajmeri-unnisa/"
                    target="_blank"
                    className="text-gray-600 hover:text-blue-600 transition"
                >
                    <FaLinkedin size={22} />
                </a>

                <a
                    href="https://github.com/ajmeriunnisa"
                    target="_blank"

                    className="text-gray-600 hover:text-black transition"
                >
                    <FaGithub size={22} />
                </a>
            </div>

            <p className="text-gray-500 text-xs mt-3">
                Created by <span className="font-medium">Ajmeri Unnisa</span> for React Assignment 2.
            </p>
        </footer>
    );
}

export default Footer;
