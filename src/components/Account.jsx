/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function Account() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = ''; 
        const response = await Axios.get('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        setUser(response.data);
      } catch (error) {
        setError(error.message || 'Error fetching user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      {loading && <p>Loading user data...</p>}
      {error && <p>Error: {error}</p>}
      {user ? (
        <>
          <h2>Account Details</h2>
          <p>ID: {user.id}</p>
          <p>Name: {`${user.firstname} ${user.lastname}`}</p>
          <p>Email: {user.email}</p>
          {user.books && user.books.length > 0 && (
            <div>
              <h3>Checked-out Books</h3>
              <ul>
                {user.books.map((book) => (
                  <li key={book.id}>{book.title}</li>
                ))}
              </ul>
            </div>
          )}
        </>
      ) : (
        <p>Please log in to view account details and to check out books.</p>
      )}
    </div>
  );
}

export default Account;