import express from "express";
import { client } from "../index.js";

const router = express.Router();

//get all companies
router.get("/",async (request,response)=>{
    const result = await client.db("b37wd").collection("popular-authors").find().toArray();
    response.send(result);
})

export const popularAuthorsRouter = router;