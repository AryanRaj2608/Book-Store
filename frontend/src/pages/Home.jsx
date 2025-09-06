import React, { useEffect, useState } from 'react'
import API from '../api/axios'
import BookCard from '../components/BookCard'


export default function Home(){
const [books, setBooks] = useState([])
const [loading, setLoading] = useState(true)


useEffect(()=>{
const fetchBooks = async ()=>{
try{
const res = await API.get('/books')
setBooks(res.data.data || [])
}catch(err){ console.error(err) }
setLoading(false)
}
fetchBooks()
},[])


if(loading) return <div>Loading...</div>


return (
  <div>
    <h1 className="text-2xl font-bold mb-4">Books</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {books.map(b => <BookCard key={b._id} book={b} />)}
    </div>
  </div>
)
}