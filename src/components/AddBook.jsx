import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BooksData from "../utils/BooksData";
import { useDispatch } from "react-redux";
import { addBook } from "../utils/BooksSlice";

function AddBook() {

    const dispatch=useDispatch();

    const navigate = useNavigate();

    const [form, setForm] = useState({
        title: "",
        author: "",
        category: "",
        description: "",
        price: "",
        image: "",
    });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    };



    function handleSubmit(e) {
        e.preventDefault();


        //  Validate inputs
        if (!form.title || !form.author || !form.category || !form.price) {
            alert("Please fill in all required fields");
            return;
        }

        //  Create new book object
        const newBook = {
            id: Date.now(),
            ...form,
            rating: 0,
            library: "LibraSphere",
            status: "Available",
        };

        dispatch(addBook(newBook))
        navigate("/books");
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
            <h2 className="text-2xl font-bold text-cyan-800 text-center mb-4">
                Add New Book
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    name="title"
                    placeholder="Book Title"
                    value={form.title}
                    onChange={handleChange}
                    className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-cyan-700"
                />
                <input
                    type="text"
                    name="author"
                    placeholder="Author Name"
                    value={form.author}
                    onChange={handleChange}
                    className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-cyan-700"
                />
                <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-cyan-700"
                >
                    <option value="">Select Category</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Non-Fiction">Non-Fiction</option>
                    <option value="Sci-Fi">Sci-Fi</option>
                </select>
                <textarea
                    name="description"
                    placeholder="Description (optional)"
                    value={form.description}
                    onChange={handleChange}
                    className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-cyan-700">
                </textarea>
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={form.price}
                    onChange={handleChange}
                    className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-cyan-700"
                />
                <input
                    type="text"
                    name="image"
                    placeholder="Image URL (optional)"
                    value={form.image}
                    onChange={handleChange}
                    className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-cyan-700"
                />

                <button
                    type="submit"
                    className="bg-cyan-700 text-white py-2 rounded-lg hover:bg-cyan-800 transition"
                >
                    Add Book
                </button>
            </form>
        </div>
    );
}

export default AddBook;
