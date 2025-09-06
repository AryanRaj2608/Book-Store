import mongoose from 'mongoose';


const BookSchema = new mongoose.Schema({
title: { type: String, required: true },
author: { type: String, required: true },
description: { type: String },
price: { type: Number, required: true },
coverUrl: { type: String },
createdAt: { type: Date, default: Date.now }
});


export default mongoose.model('Book', BookSchema);