/* TODO - add your code to create a functional React component that renders a login form */
import { useState } from 'react';
import Axios from 'axios';

function Login({ setToken }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await Axios.post('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login', {
        email,
        password,
      });

      setToken(response.data.token);
    } catch (error) {
      console.error('Login failed:', error.message);
      
      console.log(error.response);


    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;