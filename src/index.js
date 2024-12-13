import dotenv from "dotenv"
import mongoose from "mongoose";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./env"
})

connectDB()
.then(() => {
    const port = process.env.PORT || 8000
    app.listen(port, () => {
        console.log(`Server is running at port: ${port}`);
    })

    app.on("error", (err) => {
        console.log("ERR: ", err);
        throw err
    })
})
.catch((err) => {
    console.log("MongoDB connection error !!!", err);
    
})
