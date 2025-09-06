import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import API from '../api/axios'


export default function BookDetail(){
  const { id } = useParams()
  const [book, setBook] = useState(null)


  useEffect(()=>{
  const fetchBook = async ()=>{
  try{
  const res = await API.get(`/books/${id}`)
  setBook(res.data.data)
  }catch(err){ console.error(err) }
  }
  fetchBook()
  },[id])


  if(!book) return <div>Loading...</div>


  return (
    <div className="max-w-3xl mx-auto">
      <img src={book.coverUrl || 'https://via.placeholder.com/400x250'} className="w-full h-80 object-cover rounded" alt="cover" />
      <h2 className="text-2xl font-bold mt-4">{book.title}</h2>
      <p className="text-gray-600">by {book.author}</p>
      <p className="mt-4">{book.description}</p>
      <p className="mt-4 text-xl">Price: ₹{book.price}</p>
    </div>
  )
}