import React, {useState} from 'react'
import API from '../api/axios'
import { useNavigate } from 'react-router-dom'


export default function AddBook(){
const [form, setForm] = useState({title:'',author:'',description:'',price:'', coverUrl: ''})
const navigate = useNavigate()


const handleChange = (e) => setForm({...form,[e.target.name]: e.target.value})
const submit = async (e) => {
e.preventDefault()
try{
await API.post('/books', {...form, price: Number(form.price)})
navigate('/')
}catch(err){ console.error(err) }
}


return (
<form onSubmit={submit} className="max-w-xl mx-auto space-y-3">
<input name="title" placeholder="Title" value={form.title} onChange={handleChange} className="w-full p-2 border rounded" />
<input name="author" placeholder="Author" value={form.author} onChange={handleChange} className="w-full p-2 border rounded" />
<input name="price" placeholder="Price" value={form.price} onChange={handleChange} className="w-full p-2 border rounded" />
<input name="coverUrl" placeholder="Cover URL (optional)" value={form.coverUrl} onChange={handleChange} className="w-full p-2 border rounded" />
<textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} className="w-full p-2 border rounded" />
<button className="px-4 py-2 bg-blue-600 text-white rounded">Add Book</button>
</form>
)
}