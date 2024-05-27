import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App text-white min-h-screen">
        <header className="p-4 flex justify-between items-center bg-gray-800 bg-opacity-70">
          <div>
            <h1 className="text-4xl font-bold">Valentin Frappart</h1>
            <p className="text-lg mt-2">Epitech Student</p>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="text-white hover:text-yellow-500">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-white hover:text-yellow-500"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white hover:text-yellow-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
