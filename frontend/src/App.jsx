import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BookDetail from './pages/BookDetail'
import AddBook from './pages/AddBook'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar'


export default function App(){
return (
    <BrowserRouter>
      <Navbar />
      <main className="container mx-auto px-4 mt-6">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/book/:id" element={<BookDetail/>} />
          <Route path="/add" element={<AddBook/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </main>
    </BrowserRouter>
)
}