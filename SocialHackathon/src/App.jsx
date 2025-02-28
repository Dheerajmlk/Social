import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NewPost from "./Pages/NewPost";
import "./styles/Navbar.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app-container">
          <nav className="navbar">
            <Link to="/" className="navbar-link">Home</Link>
            <Link to="/about" className="navbar-link">About</Link>
            <Link to="/contact" className="navbar-link">Contact</Link>
            <Link to="/new-post" className="navbar-link">New Post</Link>
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
