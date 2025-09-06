import React, {useState} from 'react'
import API from '../api/axios'
import { useNavigate } from 'react-router-dom'


export default function Login(){
  const [form, setForm] = useState({email:'',password:''})
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      if (res.data.success) {
        alert("Login successful ✅");
        localStorage.setItem("token", res.data.token);
      } else {
        setError(res.data.message || "Login failed ❌");
      }
    } catch (err) {
      setError("Error logging in. Check server.");
      console.error(err);
    }
  };


return (
  <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
)
}