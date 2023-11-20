/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import { useState, useEffect } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'


function Books() {
    const [books, setBooks] = useState([]);
    let API = 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/';

    useEffect(() => {
        fetchBooks();
    }, []);

    async function fetchBooks() {
    
        try {
            const response = await Axios.get(`${API}/books`);
    
            // console.log('Response:', response);
    
            if (response.data && Array.isArray(response.data)) {
                // Assuming books data is an array in the response
                // console.log('Books:', response.data);

                setBooks(response.data);

            } else if (response.data && Array.isArray(response.data.books)) {

                // console.log('Books:', response.data.books);

                setBooks(response.data.books);

            } else {
                console.error('Invalid data format received from the server.');
            }

        } catch (err) {
            console.error('Error fetching books:', err.message);
        }
    }

    return (
        <ul className="books-container">
            {Array.isArray(books) && books.length ? (
                books.map((book) => (
                    <li key={book.id}>
                        <Link to={`${API}/books/${book.id}`}>
                            <h2>{book.title}</h2>
                        </Link>
                        <h3>#{book.id}</h3>
                        <h3>{book.author}</h3>
                        <h4>{book.description}</h4>
                    </li>
                ))
            ) : (
                <h2>Loading ...</h2>
            )}
        </ul>
    );
}

export default Books;