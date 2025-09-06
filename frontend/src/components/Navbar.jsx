import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar(){
return (
  <nav className="bg-white shadow">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
    <Link to="/" className="font-bold text-xl">Bookstore</Link>
      <div className="space-x-3">
      <Link to="/add" className="px-3 py-1 border rounded">Add Book</Link>
      <Link to="/login" className="px-3 py-1">Login</Link>
      <Link to="/register" className="px-3 py-1 border rounded bg-blue-600 text-white">Register</Link>
      </div>
    </div>
  </nav>
)
}