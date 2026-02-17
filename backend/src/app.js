import express from 'express'
import path from 'path';
import url from 'url';
import cors from 'cors';
import { connectDB } from '../db/connect.js';
import authRouter from '../routes/authRouter.js';

const __filename=url.fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename);
 
const app=express();
app.use(express.static(path.join(__dirname, '../../dist')));
app.use(express.json());
app.use(cors({
    origin:true,
    credentials:true,
}))

connectDB();

app.use('/api/auth',authRouter);

app.use(express.static(path.join(__dirname, '../../dist')));
app.use(express.json())


const PORT=3000;

app.listen(PORT, () => {
    console.log("Server is running on port" + PORT)
});