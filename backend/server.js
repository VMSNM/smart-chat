import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import path from 'path';
import authRoutes from './routes/authRoutes.js'
import messageRoutes from './routes/messageRoutes.js'
import userRoutes from './routes/userRoutes.js'
import connectToMongoDB from './db/connectToMongoDB.js';
import { app, server } from './socket/socket.js'

dotenv.config();

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true })); // To parse Form data in the req.body

/* app.use(cors({
    origin: 'https://smart-chatapp.onrender.com',
    credentials: true,
    methods: 'GET, PUT, POST, OPTIONS, DELETE'
})); */

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

app.use(express.static(path.join(__dirname, '/frontend/dist')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'))
})

server.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server running on port ${PORT}`)
});