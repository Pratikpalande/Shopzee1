import React from 'react'
import { useState } from 'react';
import { BrowserRouter, Link,Routes,Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About'
import Blog from './components/Blog';
import Contact from './components/Contact';

export default function Example() {
    return (
        <BrowserRouter >
            <div  className=" text-center text-2xl justify-items-center " style={{  font:"message-box" ,fontFamily:"Bangers", backgroundColor: "#b69778"}} >
                <ul className="container  text-center  text-3xl">
                    <li className='List hover:text-white hover:ease-in duration-300 m-10'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='List  hover:text-white hover:ease-in duration-300'>
                        <Link to="About">Men</Link>
                    </li>
                    <li className='List  hover:text-white hover:ease-in duration-300'>
                        <Link to="Blog">Women</Link>
                    </li>
                   
                    <li className='List  hover:text-white hover:ease-in duration-300'>
                        <Link to="Contact">Contactus</Link>
                    </li>
                   
                </ul>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />

            </Routes>
            
        </BrowserRouter>
    )
}
