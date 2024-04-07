import express from "express";
import dotenv from "dotenv";
import connectDB from "./Database/db.js";
import Defaultdata from "./default.js";

dotenv.config({ 
    path:'./env' 
});

connectDB();

const app = express();

app.get('/', (req, res) => {
    res.send('Hello from the world!');
});

const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

Defaultdata(); 


