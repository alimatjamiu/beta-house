'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menu, setMenu] = useState("properties");

  return (
    <nav className=" text-white p-4 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-0">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-[23px] font-bold">
          <h1 className="bg-[#3D9970] p-2 rounded-full">BH</h1>
          <h1>BetaHouse</h1>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-10 items-center hr">
          <Link onClick={ ()=>{setMenu("home")}} href="/">Home{menu=== "home" ? <hr className='w-[100%]  bg-white'/> : <></>}</Link>
          <Link onClick={ ()=>{setMenu("properties")}} href="/properties">Properties{menu=== "properties" ? <hr className='w-[100%]  bg-white'/> : <></>}</Link>
          <Link onClick={ ()=>{setMenu("about")}} href="/about">About Us{menu=== "about" ? <hr className='w-[90%] h-[2px] bg-white'/> : <></>}</Link>
          <Link onClick={ ()=>{setMenu("blog")}} href="/blog">Blog{menu=== "blog" ? <hr className='w-[90%] h-[2px] bg-white'/> : <></>}</Link>
          <Link onClick={ ()=>{setMenu("contact")}} href="/contact">Contact Us{menu=== "contact" ? <hr className='w-[90%] h-[2px] bg-white'/> : <></>}</Link>
        </div>

        {/* Auth Buttons */}
        <div className="hidden lg:flex space-x-6 items-center">
          <Link href="/auth/signup">
            <button className="text-white px-6 py-2 rounded-md border border-white">Sign in</button>
          </Link>
          <Link href="/auth/login">
            <button className="bg-[#3D9970] text-white px-6 py-2 rounded-md">Login</button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 flex flex-col items-center bg-gray-500 mx-8 py-8">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/properties" onClick={() => setMenuOpen(false)}>Properties</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
          <Link href="/auth/signup" onClick={() => setMenuOpen(false)}>
            <button className="w-full text-white px-6 py-2 rounded-md border border-white">Sign in</button>
          </Link>
          <Link href="/auth/login" onClick={() => setMenuOpen(false)}>
            <button className="w-full bg-[#3D9970] text-white px-6 py-2 rounded-md">Login</button>
          </Link>
        </div>
      )}
    </nav>
  );
}
