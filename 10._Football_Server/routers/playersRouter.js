import { Router } from "express";
const router = Router();

// const players = [
//     { id: 1, name: "Messi"},
//     { id: 2, name: "Ronaldo"},
//     { id: 3, name: "Ronaldinho"}
// ]
import db from "../database/createConnection.js";

router.get("/api/players", async (req, res) => {
    const players = await db.all("SELECT * FROM players");
    res.send({ data: players });
});

export default router;