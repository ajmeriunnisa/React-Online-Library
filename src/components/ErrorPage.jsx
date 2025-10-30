import React from "react";
import { Link, useLocation } from "react-router-dom";

function ErrorPage() {
    const location = useLocation();
    //   console.log(location);

    return (
        //Error Page
        <>
            <div className="flex flex-col justify-center items-center min-h-screen bg-linear-to-b from-blue-50 to-blue-100 text-center">

                <h1 className="text-8xl font-bold text-blue-700 mb-4">404</h1>
                <h2 className="text-3xl font-semibold text-gray-800 mb-2">
                    Oops! Page Not Found
                </h2>
                <p className="text-gray-600 mb-4">
                    Sorry, the page you are looking for doesn't exist or was moved.
                </p>

                {/* Display invalid route URL */}
                <p className=" text-cyan-800 text-2xl mb-4 font-bold">
                    Invalid URL: <span className="font-bold text-red-500">{location.pathname}</span>
                </p>

                {/* Navigation button to return to Home */}

                <Link
                    to="/"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition-all"
                >
                    ← Back to Home
                </Link>
            </div>

        </>
    );
}

export default ErrorPage;
