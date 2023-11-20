import { useState } from 'react'
import bookLogo from './assets/books.png'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Books from './components/Books.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import Navigation from './components/Navigations.jsx'
// import Logout from './components/Logout.jsx'
// import SingleBook from './components/SingleBook.jsx'

function App() {
  const [token, setToken] = useState(null)

  return (
    <>
      <Router>
      <Navigation isAuthenticated={token !== null} />

      <Routes>
        <Route path="/books" element={<Books />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/books/:id" element={<SingleBook />} /> */}
        {/* <Route path="/logout" element={<Logout />} /> */}
        <Route index element={<Books />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
