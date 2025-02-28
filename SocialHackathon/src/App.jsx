import React from "react"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./Redux/store"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import NewPost from "./Pages/NewPost"



function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="p-4">
          <nav className="flex gap-4 mb-4 border-b pb-2">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/new-post">New Post</Link>
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
  )
}
export default App;