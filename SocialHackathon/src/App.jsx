import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NewPost from "./Pages/NewPost";
import "./styles/Navbar.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Provider store={store}>
      <Router>
        <div className="app-container">
          <nav className="navbar">
            <div className="navbar-logo">
              <Link to="/" className="logo-link">
                Social
              </Link>
            </div>
            <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
              <Link to="/new-post" onClick={() => setMenuOpen(false)}>New Post</Link>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/new-post" element={<NewPost />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
