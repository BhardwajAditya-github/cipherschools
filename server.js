import express from 'express';
import authRoutes from './routes/authRoutes.js';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import cors from 'cors'

// CONFIGURE ENV
dotenv.config();

connectDB();

const app = express();

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use('/api/v1/auth', authRoutes);

app.get('/', (req, res) => {
    res.send({
        message: "hello adi boii"
    });
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
})