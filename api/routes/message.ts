import express from "express";
import { createMessage, deleteMessage, getMessage, updateMessage } from "../controllers/message";

const route = express.Router();

route.get("/", getMessage);
route.post("/", createMessage);
route.patch("/", updateMessage);
route.delete("/:id", deleteMessage);

export default route;