import express from "express";
import { client } from "../index.js";

const router = express.Router();

//get all companies
router.get("/",async (request,response)=>{
    const popularBooks = await client.db("b37wd").collection("popularBooks").find().toArray();
    response.send(popularBooks);
})

export const popularBooksRouter = router;