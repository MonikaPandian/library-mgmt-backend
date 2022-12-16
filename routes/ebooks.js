import express from "express";
import { client } from "../index.js";

const router = express.Router();

//get all e-books
router.get("/",async (request,response)=>{
    const ebooks = await client.db("b37wd").collection("ebooks").find().toArray();
    response.send(ebooks);
})

// to insert an e-book to db
router.post("/",async(request,response)=>{
    const newEbook = request.body;
    const result = await client.db("b37wd").collection("ebooks").insertOne(newEbook)
    response.send(result)
})

export const ebooksRouter = router;