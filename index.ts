import express from "express";
import bodyParser from "body-parser";
import helmet from 'helmet';
import cors from "cors";
import "dotenv/config";
import messageRoute from "./routes/message";

const app = express();
const PORT = process.env.PORT || 5678;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(helmet());

app.use("/message", messageRoute);

app.get("/", (req, res) => {
    res.send("API server is working!")
})

app.listen(PORT,() => {
    console.log(`server is listening to port ${PORT}`)
});