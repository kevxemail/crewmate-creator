import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./Home.jsx";
import Create from "./Create.jsx";
import Gallery from "./Gallery.jsx";
import About from "./About.jsx";
import Update from "./Update.jsx";
import "./App.css"; // Import the CSS file

function App() {
    return (
        <div className="wrapper">
            <BrowserRouter>
                <div className="sidebar">
                    <Link to="/">Home</Link>
                    <Link to="create">Create a crewmate</Link>
                    <Link to="gallery">Crewmate Gallery</Link>
                    <img
                        src="https://i.kym-cdn.com/photos/images/original/002/164/432/df2.jpg"
                        alt="logo"
                        width="300"
                        height="900"
                    />
                </div>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/create" element={<Create />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/update" element={<Update />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
