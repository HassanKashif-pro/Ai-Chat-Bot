import express from "express";
import { config } from "dotenv";
config();
const app = express();
// Middle Wares
app.use(express.json());
export default app;
//# sourceMappingURL=app.js.map