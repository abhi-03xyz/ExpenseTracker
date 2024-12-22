import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./database/db.js";
import userRoute from "./routes/userRouts.js";
dotenv.config({});

const app=express();
//middlewares
app.use(express.json());
app.use(urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions={
    origin:"http://localhost:5173",//our frontend port is passed to avoid corse-policy error (5173 for react port)
    credentials:true,
}
app.use(cors(corsOptions));
//apis
app.use("/api/v1/user",userRoute);




const port=8000;
app.listen(port,()=>{
    connectDB();
    console.log(`server is listing on port ${port}`);
})
