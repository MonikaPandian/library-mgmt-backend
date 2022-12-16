import express from "express";
import { MongoClient } from "mongodb";
import cors from "cors";
import dotenv from "dotenv";
import { ebooksRouter } from './routes/ebooks.js';
import { popularBooksRouter } from './routes/popularBooks.js';
import { popularAuthorsRouter } from './routes/popularAuthors.js';
import { membersRouter } from './routes/members.js';

dotenv.config()
const app = express();
app.use(cors())
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

async function createConnection(){
    const client = new MongoClient(MONGO_URL)
    await client.connect();
    console.log("Mongo is connected");
    return client;
}

export const client = await createConnection();

app.use(express.json())

//API endpoints

app.get("/",(request,response)=>{
    response.send("Hello Everyone. Welcome to the backend of Library Management application" )
})

//Routes
app.use('/ebooks',ebooksRouter)
app.use('/popular-books',popularBooksRouter)
app.use('/popular-authors',popularAuthorsRouter)

app.use('/members',membersRouter)

app.listen(PORT,() => console.log("Server started on port",PORT));