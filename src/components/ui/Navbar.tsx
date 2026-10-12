import { Menu, X } from "lucide-react";
import React, { useState } from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className='flex gap-3 w-full p-5 items-center justify-between bg-[#120D08] text-white font-serif uppercase'>
        <h1>TravelGo</h1>
        <div className='flex w-full justify-center gap-8 hidden md:flex'>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/service">Service</a>
            <a href="/delivery">Delivery</a>
            <a href="/contact">Contact</a>
        </div>
        {/* Mobile View */}

        <button
        className="md:hidden"
        onClick={()=>setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24}/>:<Menu size={24}/>}
        </button>
        {menuOpen && (
          <div className='absolute top-18 right-5 bg-[#120D08] p-6 rounded-md gap-3 flex flex-col'>
            <a href="/" onClick={()=>{setMenuOpen(false)}}>Home</a>
            <a href="/about" onClick={()=>{setMenuOpen(false)}}>About</a>
            <a href="/service" onClick={()=>{setMenuOpen(false)}}>Service</a>
            <a href="/delivery" onClick={()=>{setMenuOpen(false)}}>Delivery</a>
            <a href="/contact" onClick={()=>{setMenuOpen(false)}}>Contact</a>
        </div>
        )}

    </nav>
  )
}

export default Navbar