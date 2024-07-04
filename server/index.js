import express from "express";
import dotenv from "dotenv";
import connectDB from "./Database/db.js";
import Defaultdata from "./default.js";
import router from "./Routes/routes.js";
import cors from 'cors'
import bodyParser from "body-parser";

const app = express()

dotenv.config({ 
    path:'./env' 
});
 
app.use(cors());
app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({ extended : true}));
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use('/', router);

app.get('/', (req, res) => {
    res.send('Hello from the world!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    
});

Defaultdata();

connectDB();
