/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation({ isAuthenticated }) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/books">Home</Link>
        </li>
        <li>
          <Link to="/account">Account</Link>
        </li>
        {isAuthenticated ? (
          <>
            <li>
              <Link to="/books/:id">Single Book</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;