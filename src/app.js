import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public")); // to store extra dat in public temp
app.use(cookieParser()); // to acess cookies of user in browser


// routes import
import { userRouter } from './routes/user.routes.js';



// routes declaration

app.use("/api/v1/users".userRouter)
// we are building something tlike this http://localhost:8000/api/v1/users/register

export { app };


