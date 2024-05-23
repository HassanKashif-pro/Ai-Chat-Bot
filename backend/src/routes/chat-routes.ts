import { Router } from "express";
import { verifyToken } from "../utils/token-manager.js";
import { chatCompleteValidator, validate } from "../utils/validators.js";
import { generateChatCompletion } from "../controllers/chat-controllers.js";

//PRotecter API
const chatRoutes = Router();
chatRoutes.post(
  "/new",
  validate(chatCompleteValidator),
  verifyToken,
  generateChatCompletion
);
chatRoutes.get(
  "/all-chats",
  validate(chatCompleteValidator),
  verifyToken,
  generateChatCompletion
);

export default chatRoutes;
