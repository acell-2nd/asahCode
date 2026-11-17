import React from "react";
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import AboutPage from "./AboutPage";
import FaqPage from "./FaqPage";
import HomePage from "./HomePage";
function App() {
    return (
       <>
       <header>
         <Link to="/">Home</Link>
         <Link to="/about">About</Link>
         <Link to="/faq">FAQ</Link>
       </header>
        <main>
            <Routes>
                <Route path="/" element = {<HomePage/>}/>
                <Route path="about" element = {<AboutPage/>}/>
                <Route path="faq" element = {<FaqPage/>}/>
            </Routes>
        </main>
       </>
    );
}
export default App;