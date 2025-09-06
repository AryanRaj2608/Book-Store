import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const register = async (req, res) => {
try {
const { name, email, password } = req.body;
let user = await User.findOne({ email });
if (user) return res.status(400).json({ success: false, message: 'User exists' });


const salt = await bcrypt.genSalt(10);
const hashed = await bcrypt.hash(password, salt);
user = new User({ name, email, password: hashed });
await user.save();


const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
res.json({ success: true, token });
} catch (err) {
res.status(500).json({ success: false, message: 'Server Error' });
}
};


export const login = async (req, res) => {
try {
const { email, password } = req.body;
const user = await User.findOne({ email });
if (!user) return res.status(400).json({ success: false, message: 'Invalid creds' });


const isMatch = await bcrypt.compare(password, user.password);
if (!isMatch) return res.status(400).json({ success: false, message: 'Invalid creds' });


const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
res.json({ success: true, token });
} catch (err) {
res.status(500).json({ success: false, message: 'Server Error' });
}
};