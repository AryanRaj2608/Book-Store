import React from 'react'
import { Link } from 'react-router-dom'


export default function BookCard({book}){
return (
  <div className="border rounded p-4">
    <img src={book.coverUrl || 'https://via.placeholder.com/150'} alt="cover" className="w-full h-48 object-cover mb-3" />
    <h3 className="font-semibold text-lg">{book.title}</h3>
    <p className="text-sm text-gray-600">by {book.author}</p>
    <p className="mt-2">₹{book.price}</p>
    <div className="mt-3">
      <Link to={`/book/${book._id}`} className="text-blue-600">View</Link>
    </div>
  </div>
)
}