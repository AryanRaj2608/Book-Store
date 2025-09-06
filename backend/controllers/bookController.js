import Book from '../models/Book.js';


export const getBooks = async (req, res) => {
try {
const books = await Book.find().sort({ createdAt: -1 });
res.json({ success: true, data: books });
} catch (err) {
res.status(500).json({ success: false, message: 'Server Error' });
}
};


export const getBook = async (req, res) => {
try {
const book = await Book.findById(req.params.id);
if (!book) return res.status(404).json({ success: false, message: 'Not found' });
res.json({ success: true, data: book });
} catch (err) {
res.status(500).json({ success: false, message: 'Server Error' });
}
};


export const createBook = async (req, res) => {
try {
const book = new Book(req.body);
await book.save();
res.status(201).json({ success: true, data: book });
} catch (err) {
res.status(400).json({ success: false, message: err.message });
}
};


export const updateBook = async (req, res) => {
try {
const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
res.json({ success: true, data: book });
} catch (err) {
res.status(400).json({ success: false, message: err.message });
}
};


export const deleteBook = async (req, res) => {
try {
await Book.findByIdAndDelete(req.params.id);
res.json({ success: true, message: 'Deleted' });
} catch (err) {
res.status(500).json({ success: false, message: 'Server Error' });
}
};