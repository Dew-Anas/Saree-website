
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import checkoutRoutes from "./routes/checkoutRoutes.js";

dotenv.config();
connectDB();


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/",(req, res)=>{
    res.send("Saree WEb API is Running")
});

app.use("/api/auth", authRoutes);

app.use("/api/contact", contactRoutes);

app.use("/api/checkout", checkoutRoutes);

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});